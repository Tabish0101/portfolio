// All copy lives here. Edit this file and the whole site updates.

export const site = {
  name: "Tabish Jeelani",
  initials: "TJ",
  role: "Full-stack engineer",
  location: "Islamabad, Pakistan",
  email: "tabishjeelani93@gmail.com", 
  portraitAlt: "Portrait in a maroon blazer and paisley tie against a blue gradient",
  headline: 
    // "I Build What Users See—and What They Don't.",
    "Tabish Jeelani",
  intro:
    "Full-stack Engineer with 3+ years of experience, building scalable platforms with React, Next.js, and NestJS.",
    // "I Build What Users See—and What They Don't.",
  nav: [
    { label: "home", href: "/" },
    { label: "work", href: "/work" },
    { label: "experience", href: "/experience" },
    { label: "contact", href: "/contact" },
  ],
};

export const heroCards = [
  {
    tone: "glass",
    label: "Current work",
    title: "FLX",
    text: "A B2B logistics and warehousing marketplace for Saudi Arabia and the Gulf.",
  },
  {
    tone: "solid",
    label: "Stack",
    title: "Next.js, NestJS, PostgreSQL",
    text: "Deployed on AWS: EC2, VPC, load balancers and CloudWatch.",
  },
  {
    tone: "glass",
    label: "Heading toward",
    title: "System architecture",
    text: "System design, distributed systems and scalable backends.",
  },
] as const;

export const work = {
  title: "FLX",
  summary:
    "A marketplace where businesses find warehouse space and arrange transport. Prices are in SAR and data stays inside the Kingdom to meet KSA data-sovereignty rules. I build it as a full-stack engineer and I'm the client's main technical contact.",
  roles: [
    {
      who: "Customers",
      what: "Search warehouse listings, book space and arrange transport.",
    },
    {
      who: "Warehouse partners",
      what: "List capacity and manage incoming bookings.",
    },
    {
      who: "Transporters",
      what: "Register drivers and fleet, and keep compliance documents current.",
    },
    {
      who: "Admin",
      what: "A dark-themed dashboard to review listings, drivers and orders.",
    },
  ],
};

export const experience = [
  {
    when: "Feb 2026 to now",
    where: "Ziel Global",
    what: "Full Stack Engineer. Builds FLX and works directly with the client.",
    current: true,
  },
  {
    when: "Aug 2024 to Jan 2026",
    where: "Bikter Tech (Stanify.ai)",
    what: "Associate Software Developer.",
    current: false,
  },
  {
    when: "2023 to 2024",
    where: "Cyberify",
    what: "Frontend Developer intern working in React.",
    current: false,
  },
  {
    when: "2021 to 2023",
    where: "Fiverr",
    what: "Freelance graphic designer.",
    current: false,
  },
  {
    when: "Graduated 2024",
    where: "NUST (CEME)",
    what: "BE in Computer Engineering.",
    current: false,
  },
];
