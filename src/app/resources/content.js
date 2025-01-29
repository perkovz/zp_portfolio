import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Zvonimir",
  lastName: "Perkovic",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Designer",
  avatar: "/images/avatar.jpg",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Croatian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of design, product and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/perkovz",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/zvonimirperkovic/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/zvonimir031",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:zperkovi@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Zvonimir Perkovic portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-stack Product Designer</>,
  subline: (
    <>
      I'm Zvonimir, a Product designer at{" "}
      <InlineCode>FORTUNE BRANDS INNOVATIONS</InlineCode>, where I craft
      intuitive
      <br /> user experiences for connected products.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Zvonimir is a Cleveland-based product designer with a passion for
        transforming complex challenges into simple, elegant design solutions.
        His work spans digital interfaces, interactive experiences, connected
        products and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Fortune Brands Innovations",
        timeframe: "2022 - Present",
        role: "Product Designer",
        achievements: [
          <>
            Responsible for all stages of the UX design process—from research
            and analysis to user flows and wireframes. Working closely with
            Product Management, Engineering and CMI to validate assumptions and
            determine technical feasibility of recommended features.
          </>,
          <>
            Created 50+ interactive prototypes and ran over 100+ usability
            studies and interviews testing current and new features for Moen
            Smart Water Network and Master Lock Vault Enterprise, resulting in
            incresed usability and contributing to user-based product decisions.
          </>,
          <>
            Created 100+ user flows, and facilitated 3 product design working
            sessions weekly to bring the most value to our customers in a timely
            manner, leading to decrease in development times with 4.7 Appstore
            and 4.2 Google Play rating.
          </>,
          <>
            Created 10+ competitive analysis and 10+ customer ratings studies.
          </>,
          <>
            Developed and maintained comprehensive design systems used across 2
            brand lines.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/Flow_Control_Settings.mp4",
            alt: "Animated video on how to set a water flow on handle free faucet.",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/How_To_Control_Kitchen_Faucet_With_Gestures.mp4",
            alt: "Animated video on how to control handle free faucet with hand gestures.",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/Vault_Home_Onboarding.mp4",
            alt: "Animated video of the most important features of Master Lock Vault Enterprise mobile app.",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/features_demo.mp4",
            alt: "Shower prototype demo.",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "edX",
        timeframe: "2022 - 2024",
        role: "UX/UI Instructor",
        achievements: [
          <>
            Facilitated online workshops and discussions with 10 and 15 students
            per class, resulting in 22 online portfolios.
          </>,
          <>
            Lectured UX syllabus, leading design critiques, providing feedback,
            and creating a culture of trust and inclusion.
          </>,
          <>
            Led the class and providing career guidance influencing over 35% job
            placement during 1.5 year period.
          </>,
        ],
        images: [
          {
            src: "/images/resume/project-reviews.jpeg",
            alt: "Loom gallery with project review videos.",
            width: 16,
            height: 9,
          },
          {
            src: "/images/resume/student-satisfaction-ratings.jpeg",
            alt: "Graph with student satsifaction ratings month to month.",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Cleveland Clinic",
        timeframe: "2019 - 2022",
        role: "Frontend Developer",
        achievements: [
          <>
            Built the UI for the Provider directory search app v1 and v2. This
            involved use of Figma and advanced HTML, SCSS, and JavaScript.
          </>,
          <>
            Wrote frontend code for the Pediatric fracture assessment tool using
            SCSS and JavaScript.
          </>,
          <>
            Created new style libraries, patterns, components, and layouts for
            the Health Library and History/Centennial projects.
          </>,
          <>
            Provided frontend code for the 2020 Presidential Debate website and
            served as a single Frontend point of contact for Google Optimize
            tests.
          </>,
          <>
            Started, organized, and led Figma + Codesandbox design system
            project. Collaborated with stakeholders and improved the design to
            the development process by creating standards, workflows, and style
            libraries. Integrated Figma with other tools and cross-team
            processes and onboarded new stakeholders.
          </>,
          <>
            Created design patterns and built the foundation of the new frontend
            framework. Provided direction and solutions for the Design system
            implementation on both the design and development sides.
          </>,
        ],
        images: [
          {
            src: "/images/resume/cc-design-system.jpg",
            alt: "Figma screenshot of the Cleveland clinic design system prototype.",
            width: 16,
            height: 9,
          },
          {
            src: "/images/resume/appointment-form-cover.jpg",
            alt: "Appointment form mobile images.",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Aztek: A Web Design, Development & Digital Marketing Agency",
        timeframe: "2017 - 2019",
        role: "Web Designer and Frontend Developer",
        achievements: [
          <>
            Owned the complete production process from communication with
            clients, feature reviews and product presentations to frontend
            Umbraco development.
          </>,
          <>
            Created 11 functional prototypes, wireframes, mockups, and other
            assets and communicated technical feasibility expectations to
            clients.
          </>,
          <>
            Developed 7 mobile-first Umbraco websites and 2 web application UIs.
          </>,
          <>
            Designed several style guides and pattern libraries while daily
            resolving issues, fixing bugs, maintaining older websites and
            updating content for clients.
          </>,
        ],
        images: [
          {
            src: "/images/resume/cure.jpg",
            alt: "Cure dashboard.",
            width: 16,
            height: 9,
          },
          {
            src: "/images/resume/dreambook2.jpg",
            alt: "Dreambook dashboard.",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "RPM International",
        timeframe: "2015 - 2017",
        role: "Web and Graphic Designer",
        achievements: [
          <>Designed 8 web user interfaces and style guides.</>,
          <>
            Developed 3 websites for DayGlo color company, DAP and AD Protection
            Systems.
          </>,
          <>
            Wrote the script, created storyboards, illustrated, animated, and
            synchronized sound for 3, two minute long animated videos for DayGlo
            color company.
          </>,
        ],
        images: [
          {
            src: "/images/resume/kop-coat.jpg",
            alt: "Kop coat landing page.",
            width: 16,
            height: 9,
          },
          {
            src: "/images/resume/kwik-seal.jpg",
            alt: "Dap Kwik seal landing page.",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Cuyahoga Community College",
        description: <>Studied visual communications and design.</>,
      },
      {
        name: "University of J.J.Strossmayer",
        description: (
          <>Studied law and graduated with the Law degree in civil law.</>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Crank Storyboard",
        description: (
          <>
            Able to design and prototype in Crank Storyboard and create GUI's.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/StorybookDesign.jpg",
            alt: "Crank Storyboard dashboard with the smart shower GUI.",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Connected Products",
        description: <>Building next gen of connected products.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/nio_set1.jpg",
            alt: "Handle free faucet with components under the sink.",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/rex.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/backyard-work.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/nxp-board.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/moen-office.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/working-monday.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/kbiz-24.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/osijek.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/osijek-2.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/journey-1.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/testing-lock.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/tower-2.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
