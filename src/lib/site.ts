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
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const blog = {
  kicker: "Family wealth, governance, and continuity",
  title: "Insights",
  intro:
    "Perspectives on family offices, wealth structuring, governance, succession, and preparing the next generation.",
  heroImage: "/hero/insights.jpg",
} as const;

export const hero = {
  heading: "Nigeria’s First Exclusive Family Office Consulting Firm",
  subheading:
    "Helping families structure, govern, preserve and transfer wealth across generations",
  cta: "Learn more",
  ctaHref: "/about",
  image: "/hero/banner.jpg",
} as const;

export const helpsYou = [
  {
    title: "Structure Your Wealth",
    body: "Organize your assets, businesses and ownership interests within an appropriate legal and governance framework. Establish ownership arrangements that protect your wealth, mitigate avoidable risks and support its long-term preservation. Align your wealth structures with your objectives to create a sound foundation for continuity across generations.",
  },
  {
    title: "View Your Entire Wealth",
    body: "Gain a consolidated view of your wealth across assets, businesses, entities and jurisdictions. Understand what you own, how your assets are structured, where they are held and how they relate to one another. Make informed decisions based on a comprehensive understanding of your family's overall wealth.",
  },
  {
    title: "Institutionalize Your Wealth",
    body: "Establish enduring structures that enable your wealth and operating businesses to function beyond your direct involvement. Put appropriate legal, governance and operational arrangements in place to support continuity, effective management and long-term sustainability, ensuring that what you have built does not depend entirely on your continued presence.",
  },
  {
    title: "Govern Your Wealth",
    body: "Establish clear frameworks for ownership, decision-making, responsibility and oversight. Define how wealth is governed, who exercises authority, how decisions are made and how accountability is maintained. Align governance arrangements with your family's objectives to promote responsible stewardship, effective coordination and continuity across generations.",
  },
  {
    title: "Support Your Businesses",
    body: "Strengthen the structure, governance and operations of your family-owned businesses. Establish effective management frameworks, improve operational efficiency and align business activities with your family's broader wealth objectives. Build sustainable enterprises that create lasting value, contribute to wealth preservation and remain viable across generations.",
  },
  {
    title: "Plan Your Succession",
    body: "Prepare for the transfer of wealth, ownership and responsibility to the next generation. Establish succession arrangements that clarify future ownership, address leadership transitions and support continuity. Align succession plans with your intentions and ensure that the structures holding your wealth and businesses remain effective through generational change.",
  },
  {
    title: "Prepare the Next Generation",
    body: "Equip the next generation with the knowledge, skills and sense of responsibility required to steward family wealth. Develop their understanding of wealth ownership, governance, business management and family responsibilities. Prepare future generations to participate meaningfully in decision-making and assume their roles in sustaining the family's wealth and legacy.",
  },
  {
    title: "Coordinate Your Advisors",
    body: "Bring your legal, tax, accounting, banking, investment and other professional advisors into a coordinated framework. Align their expertise with your wealth objectives, improve collaboration and reduce fragmentation in the management of your affairs. Ensure that professional advice and services work together within a coherent structure that supports your family's long-term objectives.",
  },
] as const;

export const services = [
  {
    slug: "family-office-setup",
    title: "Family Office Setup",
    image: "/agency/services/family-office.jpg",
    summary:
      "Establishing a family office designed around your family’s wealth, governance, objectives and long-term continuity.",
    paragraphs: [
      "A family office should be deliberately designed around the family’s circumstances, wealth, objectives and long-term vision.",
      "Oxbourn Consulting helps families establish and institutionalize their own family offices, from defining the office’s purpose and scope to designing its governance, operating model, roles and responsibilities, and relationships with external advisors.",
      "Our approach considers the family’s businesses, investments, properties, ownership interests, jurisdictions and succession objectives to establish an office equipped to coordinate and oversee the family’s wealth as a whole across generations.",
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
      "As wealth expands across businesses, investments, properties and jurisdictions, the structures through which it is owned and controlled become increasingly important.",
      "Oxbourn Consulting helps families determine how their wealth should be structured, from the ownership of individual assets and operating businesses to the establishment of holding companies, family investment companies and trusts.",
      "We work with legal, tax and financial professionals to develop ownership structures that reflect the family’s objectives, clarify control, facilitate effective governance and support the continuity and transfer of wealth across generations.",
    ],
    cover:
      "Ownership structuring, holding company design, family investment companies, trust structures, asset protection, cross-border wealth structuring and the alignment of ownership with family governance and succession plans.",
  },
  {
    slug: "family-governance",
    title: "Family Governance",
    image: "/agency/services/family-governance.jpg",
    summary:
      "Establishing the frameworks through which your family's wealth, ownership and decision-making are governed across generations.",
    paragraphs: [
      "As family wealth grows and passes across generations, clear rules are needed to guide decision-making, define authority, allocate responsibilities and establish how family members participate in the ownership and stewardship of wealth.",
      "Oxbourn Consulting helps families establish governance frameworks that define the relationship between the family, its wealth and the structures through which that wealth is owned and managed.",
      "The objective is to establish clear principles and processes for governing family wealth, resolving differences, making collective decisions and preparing successive generations to assume their responsibilities.",
    ],
    cover:
      "Family governance frameworks, family constitutions, family councils, decision-making protocols, roles and authority, family policies and periodic governance review.",
  },
  {
    slug: "succession-wealth-transfer",
    title: "Succession & Wealth Transfer",
    image: "/agency/services/succession.jpg",
    summary:
      "Preparing your family, your wealth and your ownership arrangements for an orderly transition from one generation to the next.",
    paragraphs: [
      "Preserving wealth across generations requires more than transferring assets. It requires preparing the people who will inherit the wealth, determining how ownership and control will pass, and establishing the governance structures needed to sustain the family’s wealth across generations.",
      "Oxbourn Consulting helps families plan for the transition of ownership, leadership and responsibility from one generation to the next, ensuring that these transitions are aligned with the family’s long-term objectives.",
      "We work with legal, tax and financial advisors to develop succession and wealth transfer plans that address the family’s ownership structures, business interests, governance and next-generation readiness.",
    ],
    cover:
      "Succession planning, ownership transition, leadership succession, wealth transfer planning, family readiness, governance continuity, next-generation preparation.",
  },
  {
    slug: "family-office-management-advisory",
    title: "Family Office Advisory",
    image: "/agency/services/advisory.jpg",
    summary:
      "Providing ongoing strategic oversight, coordination and advisory support to help your family office remain aligned with your family’s objectives and growing wealth.",
    paragraphs: [
      "Establishing a family office is only the beginning. Its structure, priorities and operations must evolve as the family’s wealth, circumstances and objectives change.",
      "Oxbourn Consulting provides ongoing management and strategic advisory support to help families maintain effective oversight of their wealth, strengthen governance and ensure that each family office continues to serve the family’s evolving needs.",
      "We work with families to assess the effectiveness of their family office, address operational and governance gaps, coordinate professional advisors and align the office’s activities with the family’s long-term objectives.",
    ],
    cover:
      "Family office management, strategic advisory, governance support, advisor coordination, performance reviews, implementation support, policy development and operational improvement.",
  },
  {
    slug: "asset-protection-advisory",
    title: "Asset Protection Advisory",
    image: "/agency/services/asset-protection.jpg",
    summary:
      "Helping families protect wealth by reviewing how assets are owned, structured and safeguarded against legal, business and other risks.",
    paragraphs: [
      "Protecting family wealth requires deliberate decisions about asset ownership, legal structures and the separation of personal wealth from business risks. Without appropriate safeguards, family assets may be exposed to business liabilities, creditor claims, legal disputes and other threats that compromise their long-term preservation.",
      "Oxbourn Consulting helps families assess the vulnerabilities in their wealth structures and develop asset protection strategies in collaboration with legal, tax and financial professionals.",
      "We focus on structuring ownership and separating assets and liabilities in ways that reflect the family’s circumstances, reduce exposure to foreseeable risks and support the preservation of wealth across generations.",
    ],
    cover:
      "Asset protection strategy, ownership risk assessment, liability exposure review, asset segregation, holding company structures, separation of business and personal assets, legal structure review.",
  },
  {
    slug: "operating-business-advisory",
    title: "Operating Business Advisory",
    image: "/agency/services/operating-business.jpg",
    summary:
      "Helping family-owned businesses establish effective management structures, sound operational processes and clear accountability for sustainable growth.",
    paragraphs: [
      "Family-owned businesses require sound management, efficient operations and clear accountability to sustain performance, support growth and contribute to the family’s long-term wealth objectives.",
      "Oxbourn Consulting helps families improve the performance of their businesses by establishing appropriate organizational structures, improving operational processes and introducing management systems that support effective execution and accountability.",
      "Our focus is on building professionally managed enterprises that can operate independently of their owners’ day-to-day involvement, adapt to changing business conditions and sustain performance across generations.",
    ],
    cover:
      "Business process improvement, organizational design, operational efficiency, management systems, performance management, corporate governance, strategy implementation and operational reviews.",
  },
  {
    slug: "wealth-reporting-technology",
    title: "Wealth Reporting & Technology",
    image: "/agency/services/reporting.jpg",
    summary:
      "Providing a consolidated 360° view of your family’s entire wealth across asset classes, entities and jurisdictions, supported by technology designed for visibility, reporting and oversight.",
    paragraphs: [
      "A family cannot effectively oversee or manage its wealth without a consolidated view of what it owns, how its assets are structured and how its wealth is performing.",
      "Oxbourn Consulting helps families like yours establish a consolidated 360° view of their wealth across asset classes, entities and jurisdictions, bringing together the information needed to understand and oversee their entire wealth.",
      "By consolidating information that would otherwise remain scattered across statements, entities and professional advisors, we enable families to gain visibility into their holdings, ownership structures, valuations, performance and liabilities, providing a reliable basis for oversight and informed decision-making.",
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
      "The continuity of family wealth depends not only on what the family owns, but on whether the next generation is prepared to assume the responsibilities of ownership, governance and stewardship.",
      "Oxbourn Consulting helps families prepare the next generation to understand the family’s wealth, businesses and governance structures, while developing the knowledge and capabilities required to participate meaningfully in the family’s affairs and take on future responsibilities.",
      "Our focus extends beyond financial literacy to developing informed, responsible family members who understand the obligations of wealth ownership and are prepared to contribute to its preservation and growth across generations.",
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
  heroImage: "/hero/about.jpg",
  image: "/agency/services/family-office.jpg",
  paragraphs: [
    "Oxbourn Consulting is Nigeria's first exclusive family office consulting firm, primarily dedicated to helping families and individuals structure their wealth and establish a family office to manage that wealth across all asset classes, preserve it and seamlessly transfer it from one generation to the next.",
    "Setting up and supporting family offices that organize, protect and enable generational wealth is not one of the things we do; it is the only thing we do. Our agile team of professionals has a highly nuanced understanding of family offices, their primary objectives and the complexities of organizing, governing and preserving multigenerational wealth.",
    "We help families organize and consolidate their entire wealth across operating businesses, investments, properties, trusts and other assets, providing the visibility, governance and oversight required to manage their wealth as a whole in a single dashboard.",
    "Our work is guided by proprietary frameworks developed specifically for family office establishment and management, wealth structuring, family governance, wealth reporting, succession and next-generation preparation. We provide the technology that gives families a consolidated 360° view of their entire wealth across all asset classes, entities and jurisdictions.",
    "At the centre of our approach is the belief that a family office is fundamentally a wealth governance institution, and not merely an investment vehicle. It gives the family the oversight, coordination and decision-making framework required to manage its entire wealth in line with its objectives, and we work with each family to establish a family office designed around what matters to them.",
  ],
} as const;
