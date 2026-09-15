import {
  facebook,
  instagram,
  linkedin,
  twitter,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Services",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "industries",
    title: "Industries",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "impressum",
    title: "Impressum",
  },
];

// category: 'security' | 'automation'
export const features = [
  // ── Cybersecurity ──────────────────────────────────────────────
  {
    id: "feature-1",
    icon: shield,
    title: "IT Security & Secure Development",
    content:
      "Secure SDLC, code reviews, penetration testing, and vulnerability assessments for web, mobile, and cloud applications.",
    accent: "cyan",
    category: "security",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Product & IoT Cybersecurity",
    content:
      "End-to-end security for connected products, IoT and OT environments. Compliance with IEC 62443, MDR, and the EU Cyber Resilience Act.",
    accent: "blue",
    category: "security",
  },
  {
    id: "feature-3",
    icon: star,
    title: "GRC & Regulatory Compliance",
    content:
      "Gap analyses, risk assessments, and policy frameworks for ISO 27001, NIS2, TISAX, and EU regulatory requirements.",
    accent: "green",
    category: "security",
  },
  // ── Automation & Data Intelligence ────────────────────────────
  {
    id: "feature-4",
    icon: send,
    title: "Process Automation & Scripting",
    content:
      "Custom automation scripts and workflows for any business process — from data pipelines and reporting to operational tasks that free your team from manual work.",
    accent: "amber",
    category: "automation",
  },
  {
    id: "feature-5",
    icon: star,
    title: "Web Crawling & Data Collection",
    content:
      "Scalable web crawlers that continuously gather market data, competitor pricing, product availability, and industry signals at scale — turning the open web into structured intelligence.",
    accent: "purple",
    category: "automation",
  },
  {
    id: "feature-6",
    icon: send,
    title: "Data Analysis & Business Intelligence",
    content:
      "We transform raw crawled and collected data into clear, actionable insight. Statistical analysis, trend detection, and strategic reporting that surfaces what internal data alone cannot reveal.",
    accent: "orange",
    category: "automation",
  },
];

export const industries = [
  {
    id: "industry-1",
    emoji: "💊",
    title: "Pharmaceutical & E-Commerce",
    subtitle: "Web Crawling, Sales Intelligence & Market Analysis",
    description:
      "Automated crawling of online pharmacy networks to map product availability, pricing dynamics, and competitor positioning across hundreds of platforms. Our analysis surfaced critical gaps invisible to internal stakeholders — transforming raw web data into clear, actionable sales strategy.",
    tags: ["Web Crawling", "Sales Analytics", "Market Intelligence", "E-Commerce Data"],
    pillar: "automation",
  },
  {
    id: "industry-2",
    emoji: "⚙️",
    title: "Machinery & Manufacturing",
    subtitle: "OT/ICS & Industrial Product Security",
    description:
      "OT/ICS security assessments, IEC 62443 compliance, and product cybersecurity advisory for industrial machinery and manufacturing equipment. From design to CE marking.",
    tags: ["IEC 62443", "OT/ICS Security", "CE Marking", "NIS2"],
    pillar: "security",
  },
  {
    id: "industry-3",
    emoji: "🚗",
    title: "Automotive",
    subtitle: "Connected Vehicle & Supply Chain Security",
    description:
      "Automotive cybersecurity per UNECE WP.29 / ISO/SAE 21434, TISAX assessments, and connected vehicle security architecture. Supporting OEMs and Tier-1 suppliers.",
    tags: ["ISO/SAE 21434", "UNECE WP.29", "TISAX", "V2X Security"],
    pillar: "security",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Founded",
    value: "2024",
  },
  {
    id: "stats-2",
    title: "In IoT Security",
    value: "PhD",
  },
  {
    id: "stats-3",
    title: "Industries",
    value: "3+",
  },
  {
    id: "stats-4",
    title: "Years Experience",
    value: "10+",
  },
];

export const footerLinks = [
  {
    title: "",
    links: [
      {
        name: "",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
