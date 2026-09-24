export const site = {
  name: "Oxbourn Consulting",
  legalName: "Oxbourn Consulting Limited",
  tagline: "Providing the right solution, right when you need it.",
  description:
    "We specialize in comprehensive management consulting services designed to elevate your business to new heights. We are known for our agile approach.",
  url: "https://oxbournconsulting.com",
  email: "message@oxbournconsulting.com",
  phone: "+234 707 563 9318",
  phoneHref: "tel:+2347075639318",
  address: "5 Admiralty Road, off Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
  meetingUrl: "https://oxbournconsulting.com/get-in-touch/",
} as const;

export const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#about", label: "About" },
  { href: "/#approach", label: "Approach" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;

export const blog = {
  kicker: "Insights",
  title: "Latest from our blog",
  intro:
    "Stay up to date with the latest trends, insights, and inspiration in business technology — and how to drive growth and sales.",
} as const;

export const services = [
  {
    title: "Enterprise Applications",
    body: "Design, implement, and integrate tailored systems that transform and optimize how your business runs.",
  },
  {
    title: "Strategic Advisory",
    body: "Navigate market dynamics, competition, and opportunity with a course set for sustainable growth.",
  },
  {
    title: "Operational Efficiency",
    body: "Identify inefficiencies, streamline operations, and put best practices to work at peak performance.",
  },
  {
    title: "Organizational Transformation",
    body: "Guide strategic shifts so change is managed with confidence, adaptability, and resilience.",
  },
  {
    title: "Technology Integration",
    body: "Integrate AI, data analytics, and other capabilities so innovation becomes a competitive edge.",
  },
  {
    title: "Talent Development",
    body: "Build high-performing teams with the skills and structure to deliver lasting results.",
  },
] as const;

export const expertise = [
  {
    title: "Grow with Oxbourn",
    category: "SMEs & Startups",
    body: "Flexible support for the businesses that form the backbone of the economy.",
  },
  {
    title: "CEO Advisory",
    category: "Leadership",
    body: "Clear counsel for complex decisions at the top of the organization.",
  },
  {
    title: "Process Optimization",
    category: "Operations",
    body: "Operational excellence through redesigned workflows and measurable outcomes.",
  },
  {
    title: "Product Strategy",
    category: "Product",
    body: "Insight and direction to take products from concept to market with focus.",
  },
  {
    title: "PAT Workforce",
    category: "People",
    body: "A high-performing team as the cornerstone of a successful business.",
  },
  {
    title: "Digital Technology",
    category: "Technology",
    body: "Practical digital capability that keeps pace with a fast-moving market.",
  },
] as const;

export const timeline = [
  {
    label: "Strategic Vision",
    title: "Sustainable growth",
    body: "Advisory that looks past immediate challenges and sets a course the business can hold.",
  },
  {
    label: "Operational Edge",
    title: "Peak efficiency",
    body: "Process work that makes excellence a habit, not a slogan, in a demanding market.",
  },
  {
    label: "Transformation",
    title: "Confident change",
    body: "Structured shifts so the organization adapts — and treats change as an opening, not a threat.",
  },
  {
    label: "Technology",
    title: "Future-ready",
    body: "Integration of the tools that keep you ahead of the curve, from AI to analytics.",
  },
] as const;

export const approach = [
  {
    title: "On-demand expertise",
    body: "Access specialists when you need them, without long-term lock-in.",
  },
  {
    title: "Flexible engagement",
    body: "Consulting-as-a-Service shaped around the problem in front of you.",
  },
  {
    title: "Owned outcomes",
    body: "We stay through implementation and take responsibility for the result.",
  },
] as const;
