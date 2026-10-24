"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { protectedRoutes } from "@/app/resources";
import { Flex, Spinner, Input, Button, Heading, Column } from "@/once-ui/components";

interface RouteGuardProps {
  children: React.ReactNode;
}

function isProtectedPath(pathname: string | null) {
  if (!pathname) return false;
  return Boolean(protectedRoutes[pathname as keyof typeof protectedRoutes]);
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const pathname = usePathname();
  const passwordRequired = isProtectedPath(pathname);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [checkingAuth, setCheckingAuth] = useState(passwordRequired);

  useEffect(() => {
    if (!passwordRequired) {
      setCheckingAuth(false);
      setIsAuthenticated(false);
      setError(undefined);
      return;
    }

    let cancelled = false;
    setCheckingAuth(true);

    fetch("/api/check-auth")
      .then((response) => {
        if (cancelled) return;
        setIsAuthenticated(response.ok);
        setCheckingAuth(false);
      })
      .catch(() => {
        if (cancelled) return;
        setIsAuthenticated(false);
        setCheckingAuth(false);
      });

    return () => {
      cancelled = true;
    };
  }, [passwordRequired, pathname]);

  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      setError(undefined);
    } else {
      setError("Incorrect password");
    }
  };

  if (!passwordRequired || isAuthenticated) {
    return <>{children}</>;
  }

  if (checkingAuth) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  return (
    <Column paddingY="128" maxWidth={24} gap="24" center>
      <Heading align="center" wrap="balance">
        This page is password protected
      </Heading>
      <Column fillWidth gap="8" horizontal="center">
        <Input
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={error}
        />
        <Button onClick={handlePasswordSubmit}>Submit</Button>
      </Column>
    </Column>
  );
};

export { RouteGuard };
