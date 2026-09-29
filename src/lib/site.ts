export const site = {
  name: "Oxbourn Consulting",
  legalName: "Oxbourn Consulting Limited",
  tagline: "Providing the right solution, right when you need it.",
  description:
    "Nigeria's first exclusive family office consulting firm, helping families structure their wealth, establish a family office, and transfer it across generations.",
  url: "https://oxbournconsulting.com",
  email: "message@oxbournconsulting.com",
  phone: "+234 707 563 9318",
  phoneHref: "tel:+2347075639318",
  address: "5 Admiralty Road, off Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
  meetingUrl: "https://oxbournconsulting.com/get-in-touch/",
} as const;

export const navItems = [
  { href: "/#what-we-do", label: "What We Do" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#about", label: "About" },
  { href: "/#approach", label: "Approach" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;

export const blog = {
  kicker: "Insights",
  title: "Latest",
  intro:
    "Stay up to date with the latest trends, insights, and inspiration in business technology — and how to drive growth and sales.",
} as const;

export const services = [
  {
    slug: "family-office-setup",
    title: "Family Office Setup",
    summary:
      "Establishing a family office designed around your family’s wealth, governance, objectives and long-term continuity.",
    paragraphs: [
      "A family office should be deliberately established around the family’s circumstances, wealth, objectives and long-term vision.",
      "Oxbourn Consulting helps families like yours to establish and institutionalize their own family offices, from defining the purpose and scope of the office to establishing its governance, operating model, responsibilities and relationships with external advisors.",
      "Our approach considers the family’s businesses, investments, properties, ownership interests, jurisdictions and succession objectives to establish an office capable of coordinating the family’s wealth as a whole across generations.",
    ],
  },
  {
    slug: "wealth-structuring",
    title: "Wealth Structuring",
    summary:
      "Organizing ownership, entities, assets and interests into a coherent structure that supports protection, governance and long-term preservation of your wealth.",
    paragraphs: [] as readonly string[],
  },
  {
    slug: "family-governance",
    title: "Family Governance",
    summary: "",
    paragraphs: [] as readonly string[],
  },
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const about = {
  kicker: "Family office consulting",
  title: "About us",
  paragraphs: [
    "Oxbourn Consulting is Nigeria's first exclusive family office consulting firm, primarily dedicated to helping families and individuals structure their wealth and establish a family office to manage that wealth across all asset classes, preserve it and seamlessly transfer it from one generation to the next.",
    "Setting up and supporting family offices that organize, protect and enable generational wealth is not one of the things we do; it is the only thing we do. Our agile team of professionals has a highly nuanced understanding of family offices, their primary objectives and the complexities of organizing, governing and preserving multigenerational wealth.",
    "We help families organize and consolidate their entire wealth across operating businesses, investments, properties, trusts and other assets, providing the visibility, governance and oversight required to manage their wealth as a whole in a single dashboard.",
    "Our work is guided by proprietary frameworks developed specifically for family office establishment and management, wealth structuring, family governance, wealth reporting, succession and next-generation preparation. We provide the technology that gives families a consolidated 360° view of their entire wealth across all asset classes, entities and jurisdictions.",
    "At the centre of our approach is the belief that a family office is fundamentally a wealth governance institution, and not merely an investment vehicle. It gives the family the oversight, coordination and decision-making framework required to manage its entire wealth in line with its objectives, and we work with each family to establish a family office designed around what matters to them.",
  ],
} as const;

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
