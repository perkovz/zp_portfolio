import { Column, Flex, Heading, Icon, SmartLink, Text } from "@/once-ui/components";

type NextProjectProps = {
  href: string;
  title: string;
  summary: string;
};

export function NextProject({ href, title, summary }: NextProjectProps) {
  return (
    <Column
      gap="12"
      paddingY="xl"
      fillWidth
      style={{ borderTop: "1px solid var(--neutral-alpha-medium)" }}
    >
      <SmartLink
        href={href}
        unstyled
        fillWidth
        style={{
          display: "flex",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Column gap="12" fillWidth>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Next project
          </Text>
          <Flex gap="12" vertical="center" fillWidth>
            <Heading as="h2" variant="heading-strong-l" style={{ flex: 1, minWidth: 0 }}>
              {title}
            </Heading>
            <Icon name="arrowRight" size="m" onBackground="neutral-strong" />
          </Flex>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {summary}
          </Text>
        </Column>
      </SmartLink>
    </Column>
  );
}
