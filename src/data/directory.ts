export type OrgType =
  | "SME"
  | "NGO"
  | "Agency"
  | "Startup"
  | "Church"
  | "Cooperative"
  | "Consultancy"
  | "Education";

export interface Organization {
  slug: string;
  name: string;
  type: OrgType;
  country: string;
  city?: string;
  industry: string;
  summary: string;
  website?: string;
  verified?: boolean;
}

// Seed list — manually curated African organizations. Expand over time.
export const ORGANIZATIONS: Organization[] = [
  {
    slug: "andela",
    name: "Andela",
    type: "Startup",
    country: "Nigeria",
    city: "Lagos",
    industry: "Talent / Technology",
    summary:
      "Global network connecting African engineering talent with companies worldwide.",
    website: "https://andela.com",
    verified: true,
  },
  {
    slug: "flutterwave",
    name: "Flutterwave",
    type: "Startup",
    country: "Nigeria",
    city: "Lagos",
    industry: "Fintech / Payments",
    summary: "Payments infrastructure for African businesses and beyond.",
    website: "https://flutterwave.com",
    verified: true,
  },
  {
    slug: "mpesa-foundation",
    name: "M-PESA Foundation",
    type: "NGO",
    country: "Kenya",
    city: "Nairobi",
    industry: "Philanthropy / Education",
    summary:
      "Invests in health, education and economic empowerment programmes across Kenya.",
    website: "https://www.mpesafoundation.org",
  },
  {
    slug: "twiga-foods",
    name: "Twiga Foods",
    type: "Startup",
    country: "Kenya",
    city: "Nairobi",
    industry: "AgriTech / Logistics",
    summary: "B2B food distribution platform serving informal retailers.",
    website: "https://twiga.com",
  },
  {
    slug: "yoco",
    name: "Yoco",
    type: "Startup",
    country: "South Africa",
    city: "Cape Town",
    industry: "Fintech / SME Tools",
    summary: "Payments and software helping small businesses get paid and grow.",
    website: "https://www.yoco.com",
  },
  {
    slug: "kuda",
    name: "Kuda Bank",
    type: "Startup",
    country: "Nigeria",
    city: "Lagos",
    industry: "Digital Banking",
    summary: "Mobile-first bank built for Africans, everywhere.",
    website: "https://kuda.com",
  },
  {
    slug: "africa-no-filter",
    name: "Africa No Filter",
    type: "NGO",
    country: "South Africa",
    city: "Johannesburg",
    industry: "Media / Storytelling",
    summary:
      "Shifting stereotypical narratives about Africa through research, grants and community.",
    website: "https://africanofilter.org",
  },
  {
    slug: "ihub",
    name: "iHub",
    type: "Agency",
    country: "Kenya",
    city: "Nairobi",
    industry: "Innovation / Research",
    summary: "Pan-African innovation hub supporting startups and researchers.",
    website: "https://ihub.co.ke",
  },
  {
    slug: "wecyclers",
    name: "Wecyclers",
    type: "SME",
    country: "Nigeria",
    city: "Lagos",
    industry: "Recycling / Sustainability",
    summary: "Incentivised recycling for low-income urban communities.",
    website: "https://wecyclers.com",
  },
  {
    slug: "house-on-the-rock",
    name: "House on the Rock",
    type: "Church",
    country: "Nigeria",
    city: "Lagos",
    industry: "Faith / Community",
    summary: "Multi-campus church community across Nigeria.",
    website: "https://houseontherock.org.ng",
  },
  {
    slug: "alx",
    name: "ALX Africa",
    type: "Education",
    country: "Mauritius",
    industry: "Tech Education",
    summary: "Training the next generation of African tech leaders.",
    website: "https://www.alxafrica.com",
    verified: true,
  },
  {
    slug: "co-creation-hub",
    name: "Co-Creation Hub (CcHUB)",
    type: "Agency",
    country: "Nigeria",
    city: "Lagos",
    industry: "Innovation / Design",
    summary:
      "Pan-African innovation centre designing and scaling tech-driven solutions.",
    website: "https://cchubnigeria.com",
  },
  {
    slug: "kasha",
    name: "Kasha",
    type: "Startup",
    country: "Rwanda",
    city: "Kigali",
    industry: "HealthTech / E-commerce",
    summary: "Women's health and personal care delivered across East Africa.",
    website: "https://kasha.co",
  },
  {
    slug: "mpharma",
    name: "mPharma",
    type: "Startup",
    country: "Ghana",
    city: "Accra",
    industry: "HealthTech / Pharmacy",
    summary: "Managing prescription drug inventory for pharmacies and patients.",
    website: "https://mpharma.com",
  },
  {
    slug: "sokowatch",
    name: "Wasoko (Sokowatch)",
    type: "Startup",
    country: "Kenya",
    city: "Nairobi",
    industry: "B2B Commerce",
    summary: "Digitising informal retail across Africa.",
    website: "https://wasoko.com",
  },
  {
    slug: "shecodes-africa",
    name: "SheCodes Africa",
    type: "NGO",
    country: "Nigeria",
    industry: "Women in Tech",
    summary:
      "Empowering African women and girls with the skills to thrive in tech.",
    website: "https://shecodesafrica.org",
  },
  {
    slug: "ushahidi",
    name: "Ushahidi",
    type: "NGO",
    country: "Kenya",
    city: "Nairobi",
    industry: "Civic Tech",
    summary: "Open-source crisis mapping and citizen reporting platform.",
    website: "https://www.ushahidi.com",
  },
  {
    slug: "paystack",
    name: "Paystack",
    type: "Startup",
    country: "Nigeria",
    city: "Lagos",
    industry: "Fintech / Payments",
    summary: "Modern online and offline payments for African businesses.",
    website: "https://paystack.com",
    verified: true,
  },
  {
    slug: "moringa-school",
    name: "Moringa School",
    type: "Education",
    country: "Kenya",
    city: "Nairobi",
    industry: "Coding Bootcamp",
    summary: "Transforming African talent into world-class software engineers.",
    website: "https://moringaschool.com",
  },
  {
    slug: "redeemed-christian-church",
    name: "Redeemed Christian Church of God",
    type: "Church",
    country: "Nigeria",
    industry: "Faith / Community",
    summary: "One of the largest Pentecostal denominations, with global parishes.",
    website: "https://rccg.org",
  },
  {
    slug: "kenya-tea-cooperative",
    name: "Kenya Tea Development Agency",
    type: "Cooperative",
    country: "Kenya",
    city: "Nairobi",
    industry: "Agriculture",
    summary: "Smallholder tea farmers' cooperative serving 650,000+ growers.",
    website: "https://ktdateas.com",
  },
  {
    slug: "dalberg",
    name: "Dalberg Africa",
    type: "Consultancy",
    country: "Senegal",
    city: "Dakar",
    industry: "Strategy / Development",
    summary: "Strategy and policy advisors working across the African continent.",
    website: "https://dalberg.com",
  },
];

export const ORG_TYPES: OrgType[] = [
  "SME",
  "NGO",
  "Agency",
  "Startup",
  "Church",
  "Cooperative",
  "Consultancy",
  "Education",
];
