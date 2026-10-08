export const site = {
  name: "Oxbourn Consulting",
  legalName: "Oxbourn Consulting Limited",
  tagline: "Helping families structure, govern and preserve wealth across generations.",
  description:
    "Nigeria's first exclusive family office consulting firm, helping families structure their wealth, establish a family office, and transfer it across generations.",
  url: "https://oxbournconsulting.com",
  email: "message@oxbournconsulting.com",
  phone: "+234 707 563 9318",
  phoneHref: "tel:+2347075639318",
  address: "5 Admiralty Road, off Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
} as const;

export const navItems = [
  { href: "/#what-we-do", label: "What We Do" },
  { href: "/about", label: "About" },
  { href: "/#insights", label: "Insight" },
  { href: "/#contact", label: "Contact" },
] as const;

export const blog = {
  kicker: "Family wealth, governance, and continuity",
  title: "Insight",
  intro:
    "Perspectives on family offices, wealth structuring, governance, succession, and preparing the next generation.",
} as const;

export const hero = {
  subheading: "Oxbourn Consulting Helps You",
  heading: "Structure Your Wealth",
  body: "Organize your assets, businesses and ownership interests into a coherent whole.",
  image: "/agency/hero/1.jpg",
} as const;

export const services = [
  {
    slug: "family-office-setup",
    title: "Family Office Setup",
    image: "/agency/services/family-office.jpg",
    summary:
      "Establishing a family office designed around your family’s wealth, governance, objectives and long-term continuity.",
    paragraphs: [
      "A family office should be deliberately established around the family’s circumstances, wealth, objectives and long-term vision.",
      "Oxbourn Consulting helps families like yours to establish and institutionalize their own family offices, from defining the purpose and scope of the office to establishing its governance, operating model, responsibilities and relationships with external advisors.",
      "Our approach considers the family’s businesses, investments, properties, ownership interests, jurisdictions and succession objectives to establish an office capable of coordinating the family’s wealth as a whole across generations.",
    ],
    cover:
      "Family office strategy, readiness assessment, purpose and mandate, wealth mapping, governance, operating model, roles and responsibilities, advisor integration, implementation and ongoing review.",
  },
  {
    slug: "wealth-structuring",
    title: "Wealth Structuring",
    image: "/agency/services/wealth-structuring.jpg",
    summary:
      "Organizing ownership, entities, assets and interests into a coherent structure that supports protection, governance and long-term preservation of your wealth.",
    paragraphs: [
      "As wealth expands across businesses, investments, properties, entities and jurisdictions, how that wealth is owned and organized becomes increasingly important.",
      "Oxbourn Consulting helps families like your own to review and organize how their businesses, investments, properties, trusts and other assets are owned and structured, working with legal, tax and financial professionals where specialist advice is required.",
      "The objective is to establish ownership structures that support wealth protection, governance, control, continuity and the successful transfer of wealth across generations.",
    ],
    cover:
      "Ownership review, entity structuring, holding structures, family investment companies, trusts, asset protection considerations, cross-border arrangements and alignment of legal structures with family objectives.",
  },
  {
    slug: "family-governance",
    title: "Family Governance",
    image: "/agency/services/family-governance.jpg",
    summary:
      "Establishing the frameworks through which your family's wealth, ownership and decision-making are governed across generations.",
    paragraphs: [
      "Family wealth requires more than legal ownership. It requires clear principles for how decisions are made, who has authority, how responsibilities are assigned and how family members participate.",
      "Oxbourn Consulting helps families like yours to establish governance arrangements that provide clarity around ownership, decision-making, family participation and stewardship of wealth.",
      "The aim is to create a framework that remains effective as the family grows and successive generations become involved.",
    ],
    cover:
      "Family governance frameworks, family constitutions, family councils, decision-making frameworks, roles and responsibilities, family policies and governance review.",
  },
  {
    slug: "succession-wealth-transfer",
    title: "Succession & Wealth Transfer",
    image: "/agency/services/succession.jpg",
    summary:
      "Preparing your family, your wealth and your ownership arrangements for an orderly transition from one generation to the next.",
    paragraphs: [
      "Preserving wealth across generations requires more than transferring assets. The family must also prepare the people, ownership arrangements and governance mechanisms that will carry the wealth forward.",
      "Oxbourn Consulting helps families like yours to plan for the transition of ownership, control, responsibility and wealth from one generation to the next.",
      "We coordinate the relevant legal, tax, financial and family requirements to ensure that succession arrangements reflect the family’s long-term objectives.",
    ],
    cover:
      "Succession planning, ownership transition, leadership transition, wealth transfer planning, family readiness, governance continuity, next-generation involvement and coordination with legal and tax advisors.",
  },
  {
    slug: "family-office-management-advisory",
    title: "Family Office Management & Advisory",
    image: "/agency/services/advisory.jpg",
    summary:
      "Providing ongoing strategic oversight, coordination and advisory support to help your family office remain aligned with your family’s objectives and growing wealth.",
    paragraphs: [
      "Establishing a family office is only the beginning. The office must continue to evolve as the family, its wealth and its objectives change.",
      "Oxbourn Consulting provides ongoing management and strategic advisory support to help families like your own to maintain alignment across their wealth, governance and family office activities.",
      "We help the family office maintain oversight, coordinate professional advisors and ensure that decisions remain connected to the family’s broader objectives.",
    ],
    cover:
      "Family office management, strategic advisory, governance support, advisor coordination, periodic reviews, implementation support, policy development and ongoing family office improvement.",
  },
  {
    slug: "wealth-reporting-technology",
    title: "Wealth Reporting & Technology",
    image: "/agency/services/reporting.jpg",
    summary:
      "Providing a consolidated 360° view of your family’s entire wealth across asset classes, entities and jurisdictions, supported by technology designed for visibility, reporting and oversight.",
    paragraphs: [
      "A family cannot effectively oversee or manage the wealth it cannot see as a whole.",
      "Oxbourn Consulting provides the reporting framework and technology that gives families like yours a consolidated 360° view of their entire wealth across all asset classes, entities and jurisdictions.",
      "Rather than relying on disconnected statements and information from different advisors, the family can have a central view of its holdings, ownership, values, performance, liabilities and other relevant information for effective oversight and decision-making.",
    ],
    cover:
      "Wealth consolidation, wealth mapping, asset and entity reporting, ownership visibility, valuation tracking, document management, reporting dashboards and technology-enabled wealth oversight.",
  },
  {
    slug: "next-gen-training-education",
    title: "Next-Gen Training & Education",
    image: "/agency/services/next-gen.jpg",
    summary:
      "Preparing your children and your children's children to understand, manage and responsibly steward family wealth and values from one generation to the next.",
    paragraphs: [
      "The continuity of family wealth depends not only on what the family owns, but on whether the next generation understands what it means to own, govern and steward it.",
      "Oxbourn Consulting prepares the next generation to understand the family’s wealth, businesses, governance arrangements and responsibilities, while developing the knowledge and capabilities required for meaningful participation in the family’s future.",
      "The focus is not simply financial literacy. It is preparation for responsible ownership and stewardship.",
    ],
    cover:
      "Wealth education, family governance, ownership responsibilities, financial literacy, business understanding, investment awareness, leadership development, family values and preparation for roles within the family office.",
  },
] as const;

export type Service = (typeof services)[number];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export const about = {
  kicker: "Exclusive family office consulting",
  title: "About Us",
  image: "/agency/services/family-office.jpg",
  paragraphs: [
    "Oxbourn Consulting is Nigeria's first exclusive family office consulting firm, primarily dedicated to helping families and individuals structure their wealth and establish a family office to manage that wealth across all asset classes, preserve it and seamlessly transfer it from one generation to the next.",
    "Setting up and supporting family offices that organize, protect and enable generational wealth is not one of the things we do; it is the only thing we do.",
    "At the centre of our approach is the belief that a family office is fundamentally a wealth governance institution, and not merely an investment vehicle. It gives the family the oversight, coordination and decision-making framework required to manage its entire wealth in line with its objectives.",
  ],
} as const;
