import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  zoho,
  webamigo,
  carrent,
  jobit,
  tripguide,
  cookmate,
  visionstream,
  threejs,
  oxford,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Web Designing",
    icon: mobile,
  },
  {
    title: "3D Modelling",
    icon: backend,
  },
  {
    title: "Data Mining",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Data Consultant",
    company_name: "WebAmigo(Zoho Corporation)",
    icon: webamigo,
    iconBg: "#fff",
    date: "May 2024 - Present",
    points: [
      "Data Source Identification: Identify relevant data sources where lead information can be gathered. This includes databases, social media platforms, public records, and other online sources.",

      "Data Extraction: Develop and implement data extraction processes to gather lead information from identified sources. This  involve web scraping or data feeds from third-party providers.",

      "Data Cleaning and Validation: Cleanse and validate lead data to ensure accuracy, completeness, and consistency. This involves standardizing formats, removing duplicates, and verifying data against trusted sources.",

      "Enrichment and Enhancement: Enhance lead profiles by appending additional data attributes such as job titles, company details, contact information, social media profiles, industry insights, and firmographic data.",
    ],
  },
  {
    title: "Data Augmentor",
    company_name: "Zoho Corporation",
    icon: zoho,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Apr 2024",
    points: [
      "Collaborated with cross-functional teams including  product manager, and other developers to achieve high-quality data.",
      "Specialized in footprint collection,a technique that utilizes web page inspection to identify and analyze the technology stack used by various  websites and applications",
      "Utilized data augmentation techniques to enhance data quality and relevance. Gained expertise in datahandling, including analysis, cleaning, collection, manipulation, and enhancement",
    ],
  },
  {
    title: "Project Trainee",
    company_name: "Zoho Corporation",
    icon: zoho,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jun 2022",
    points: [
      "completed highly valuable internship at zoho corporation by working closely with zoho's R&D team.gained practical experience in a research oriented enviroinment",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VisionStream",
    description:
      "VisionStream a YouTube clone using react. integrated YouTube data API for real-time video and channel data.Implemented hand gesture controls with Handtrack.js for a unique user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "YoutubeAPI",
        color: "green-text-gradient",
      },
    ],
    image: visionstream,
    source_code_link: "https://github.com/suryasv0729/youtubeclone",
    live_link: "https://visionstream.netlify.app/",
  },

  {
    name: "Oxford Site",
    description:
      "A university website with testimonals ,gallery,CTAs etc. built using react and plain css.completely responsive to all screen sizes.used web3 froms to get data from forms to admin mailbox.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "web3forms",
        color: "blue-text-gradient",
      },
    ],
    image: oxford,
    source_code_link: "https://github.com/suryasv0729/universitywebsitereact",
    live_link: "https://oxfordsite.netlify.app/",
  },
  {
    name: "CookMate",
    description:
      "This project is a web application that allows users to search for recipes using either the recipe name or ingredient name. The application utilizes the Forkify API to fetch recipe data.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "MVC",
        color: "blue-text-gradient",
      },
    ],
    image: cookmate,
    source_code_link: "https://github.com/suryasv0729/cookmate",
    live_link: "https://urcookmate.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
