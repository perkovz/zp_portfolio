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
  headline: <>Full-stack Product Designer and Builder</>,
  subline: (
    <>
      I'm Zvonimir, a Product designer at{" "}
      <InlineCode>FORTUNE BRANDS</InlineCode>, where I craft intuitive
      <br /> user experiences for Connected products.
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
    display: true,
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
            manner, leading to decrease in development times with 4.7 appstore
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
            alt: "Smart Kitchen Faucet Project",
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
        images: [],
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
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
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
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
