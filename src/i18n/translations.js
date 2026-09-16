export const translations = {
  en: {
    nav: {
      home:       "Home",
      features:   "Services",
      experience: "Experience",
      industries: "Industries",
      contact:    "Contact",
      impressum:  "Impressum",
    },

    hero: {
      badge:          "Cybersecurity",
      badgeSeparator: " · ",
      badgeGradient:  "Automation & Data Intelligence",
      headline1:      "Secure by",
      headlineGrad:   "Design.",
      headline2:      "Smarter by Data.",
      body:
        "We work across two practices: expert cybersecurity consulting for products, IT infrastructure, and regulatory compliance — and data-driven automation that turns web-scale information into strategic business advantage.",
      pills: {
        security:   ["IT Security", "IoT / OT", "GRC"],
        automation: ["Web Crawling", "Data Analysis", "Automation"],
        secLabel:   "Security",
        autoLabel:  "Automation",
      },
      getInLine1: "Get in",
      getInLine2: "Contact",
    },

    stats: [
      { value: "2024", title: "Founded"          },
      { value: "PhD",  title: "In IoT Security"  },
      { value: "3+",   title: "Industries"        },
      { value: "10+",  title: "Years Experience"  },
    ],

    business: {
      sectionLabel: "What we do",
      heading:      "Two pillars.\nOne partner.",
      description:
        "We operate across two distinct practices — expert cybersecurity consulting and data-driven automation — each delivered with the same depth and rigour. Many engagements draw on both.",
      pillar1Label: "Pillar 1 · Cybersecurity",
      pillar1Title: "Protect.",
      pillar1Desc:
        "Securing products, infrastructure, and organisations against evolving threats and regulatory requirements.",
      pillar2Label: "Pillar 2 · Automation & Data Intelligence",
      pillar2Title: "Accelerate.",
      pillar2Desc:
        "Automating manual processes and harvesting open-web data to give businesses intelligence they didn't know they were missing.",
    },

    features: [
      {
        id: "feature-1", accent: "cyan", category: "security",
        title:   "IT Security & Secure Development",
        content: "Secure SDLC, code reviews, penetration testing, and vulnerability assessments for web, mobile, and cloud applications.",
      },
      {
        id: "feature-2", accent: "blue", category: "security",
        title:   "Product & IoT Cybersecurity",
        content: "End-to-end security for connected products, IoT and OT environments. Compliance with IEC 62443, MDR, and the EU Cyber Resilience Act.",
      },
      {
        id: "feature-3", accent: "green", category: "security",
        title:   "GRC & Regulatory Compliance",
        content: "Gap analyses, risk assessments, and policy frameworks for ISO 27001, NIS2, TISAX, and EU regulatory requirements.",
      },
      {
        id: "feature-4", accent: "amber", category: "automation",
        title:   "Process Automation & Scripting",
        content: "Custom automation scripts and workflows for any business process — from data pipelines and reporting to operational tasks that free your team from manual work.",
      },
      {
        id: "feature-5", accent: "purple", category: "automation",
        title:   "Web Crawling & Data Collection",
        content: "Scalable web crawlers that continuously gather market data, competitor pricing, product availability, and industry signals — turning the open web into structured intelligence.",
      },
      {
        id: "feature-6", accent: "orange", category: "automation",
        title:   "Data Analysis & Business Intelligence",
        content: "We transform raw crawled and collected data into clear, actionable insight. Statistical analysis, trend detection, and strategic reporting that surfaces what internal data alone cannot reveal.",
      },
    ],

    billing: {
      sectionLabel: "Our background",
      heading:      "Experience",
      p1:
        "We bring hands-on expertise from secure software development in enterprise IT, through Governance, Risk & Compliance (GRC) roles at prominent corporations, to a PhD in IoT Security from a leading European research organisation.",
      p2:
        "Alongside security, we build large-scale web crawlers and data analysis pipelines that reveal what internal data alone cannot — turning open-web intelligence into strategic advantage. We've delivered projects across pharmaceutical e-commerce, industrial machinery, and automotive sectors.",
      techItems: [
        { label: "Secure SDLC",          color: "cyan"   },
        { label: "Penetration Testing",  color: "cyan"   },
        { label: "ISO 27001",            color: "blue"   },
        { label: "IEC 62443",            color: "blue"   },
        { label: "NIS2 / EU CRA",        color: "blue"   },
        { label: "TISAX",                color: "purple" },
        { label: "Web Crawling",         color: "amber"  },
        { label: "Data Pipelines",       color: "amber"  },
        { label: "Python Automation",    color: "amber"  },
        { label: "Market Intelligence",  color: "orange" },
        { label: "Sales Analytics",      color: "orange" },
        { label: "Threat Modelling",     color: "red"    },
      ],
    },

    industries: {
      sectionLabel: "Who we serve",
      heading:      "Industries\nwe work in.",
      description:
        "We've delivered both security and automation engagements across highly regulated industries — each project combining technical depth with real business impact.",
      cards: [
        {
          id: "industry-1", emoji: "💊", pillar: "automation",
          title:    "Pharmaceutical & E-Commerce",
          subtitle: "Web Crawling, Sales Intelligence & Market Analysis",
          description:
            "Automated crawling of online pharmacy networks to map product availability, pricing dynamics, and competitor positioning across hundreds of platforms. Our analysis surfaced critical gaps invisible to internal stakeholders — transforming raw web data into clear, actionable sales strategy.",
          tags: ["Web Crawling", "Sales Analytics", "Market Intelligence", "E-Commerce Data"],
        },
        {
          id: "industry-2", emoji: "⚙️", pillar: "security",
          title:    "Machinery & Manufacturing",
          subtitle: "OT/ICS & Industrial Product Security",
          description:
            "OT/ICS security assessments, IEC 62443 compliance, and product cybersecurity advisory for industrial machinery and manufacturing equipment. From design to CE marking.",
          tags: ["IEC 62443", "OT/ICS Security", "CE Marking", "NIS2"],
        },
        {
          id: "industry-3", emoji: "🚗", pillar: "security",
          title:    "Automotive",
          subtitle: "Connected Vehicle & Supply Chain Security",
          description:
            "Automotive cybersecurity per UNECE WP.29 / ISO/SAE 21434, TISAX assessments, and connected vehicle security architecture. Supporting OEMs and Tier-1 suppliers.",
          tags: ["ISO/SAE 21434", "UNECE WP.29", "TISAX", "V2X Security"],
        },
      ],
    },

    cta: {
      heading:  "Let's work together!",
      body:     "Use the buttons to send us an email or call us directly.",
      email:    "Send Email",
      vcard:    "Get Virtual Business Card",
    },

    footer: {
      copyright: "SAFER Technologies UG (haftungsbeschränkt)",
    },

    impressum: {
      heading:         "Legal Notice",
      tmgLabel:        "Information according to § 5 TMG:",
      company:         "SAFER Technologies UG (haftungsbeschränkt)",
      address:         "Hauptstraße 35a\n77839, Lichtenau, Germany",
      representedBy:   "Represented by:",
      contact:         "Contact:",
      mobileLabel:     "Mobile:",
      emailLabel:      "E-Mail:",
      contactCardLabel:"Contact Card:",
      contactCardText: "Click here",
      vatLabel:        "VAT ID:",
      vatNumber:       "DE 365778955",
      registerLabel:   "Trade Register:",
      registerNumber:  "Mannheim, HRB 749608",
    },

    cookie: {
      title:    "We use cookies",
      body:     "We use Google Analytics to understand how visitors use this site. No cookies are set without your consent. You can decline without affecting core functionality.",
      accept:   "Accept",
      decline:  "Decline",
      moreInfo: "Privacy Policy",
    },

    privacy: {
      heading: "Privacy Policy",
      updated: "Last updated: September 2026",
      sections: [
        {
          heading: "Controller",
          body: "The controller responsible for data processing on this website is SAFER Technologies UG (haftungsbeschränkt), Hauptstraße 35a, 77839 Lichtenau, Germany, represented by Dr. Pascal Oser. Contact: pascal@safer.network, +49 (0)151 57800439.",
        },
        {
          heading: "Hosting",
          body: "This website is hosted via GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. St, San Francisco, CA 94107, USA). When you access the site, GitHub automatically processes technical access data (e.g. IP address, date and time of access, file requested, browser used) in server log files to ensure secure and stable operation (Art. 6(1)(f) GDPR). Details: https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement",
        },
        {
          heading: "Cookies & Local Storage",
          body: "This site does not use tracking cookies before you consent. Two technically necessary entries are stored in your browser's local storage: your language preference (saferLang) and your cookie decision (saferCookieConsent). These remain on your device only and are not transmitted to us. Legal basis: Art. 6(1)(f) GDPR (legitimate interest in a functional, user-friendly website).",
        },
        {
          heading: "Google Analytics",
          body: "If you consent via the cookie banner, we use Google Analytics 4 (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland; Property ID: G-FSY9VK13T0) to analyse how the site is used. This processes usage data such as pages viewed, session duration, device type, and an approximate location derived from your IP address. Google Analytics 4 does not store full IP addresses by default. Data may be transferred to the US; Google relies on the EU Standard Contractual Clauses for this. You can withdraw your consent at any time, with effect for the future, by reopening the cookie banner (clear this site's local storage in your browser) or choosing \"Decline\".",
        },
        {
          heading: "Language Detection via IP Address",
          body: "On your first visit — if no stored preference and no German browser language is detected — we use the third-party services ipapi.co and api.country.is to estimate your approximate location from your IP address, so the site can default to German or English automatically. Your IP address is transmitted to these services for this purpose but is not stored by us. Legal basis: our legitimate interest in presenting the site in an appropriate language (Art. 6(1)(f) GDPR). You can override the automatic detection at any time using the DE/EN switch.",
        },
        {
          heading: "Contacting Us",
          body: "If you contact us by email or via the virtual business card, we process the data you provide (e.g. name, email address, message content) solely to handle your enquiry (Art. 6(1)(b) GDPR). This site has no server-side contact form — emails are sent directly from your own email client.",
        },
        {
          heading: "Your Rights",
          body: "You have the right to access, rectify, erase, and restrict the processing of your personal data, as well as a right to data portability and objection (Art. 15–21 GDPR). You also have the right to lodge a complaint with a data protection supervisory authority, e.g. the Landesbeauftragter für den Datenschutz und die Informationsfreiheit Baden-Württemberg.",
        },
        {
          heading: "SSL Encryption",
          body: "For security and to protect the transmission of confidential content, this site uses SSL/TLS encryption, recognisable by \"https://\" in the address bar.",
        },
        {
          heading: "Changes to This Policy",
          body: "We will update this privacy policy whenever the underlying data processing changes.",
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────
  de: {
    nav: {
      home:       "Start",
      features:   "Leistungen",
      experience: "Erfahrung",
      industries: "Branchen",
      contact:    "Kontakt",
      impressum:  "Impressum",
    },

    hero: {
      badge:          "Cybersicherheit",
      badgeSeparator: " · ",
      badgeGradient:  "Automatisierung & Datenanalyse",
      headline1:      "Sicher durch",
      headlineGrad:   "Design.",
      headline2:      "Smarter durch Daten.",
      body:
        "Wir arbeiten in zwei Bereichen: fundierte Cybersicherheitsberatung für Produkte, IT-Infrastruktur und regulatorische Anforderungen – und datengetriebene Automatisierung, die aus Web-Informationen strategische Geschäftsvorteile macht.",
      pills: {
        security:   ["IT-Sicherheit", "IoT / OT", "GRC"],
        automation: ["Web-Crawling", "Datenanalyse", "Automatisierung"],
        secLabel:   "Sicherheit",
        autoLabel:  "Automatisierung",
      },
      getInLine1: "Kontakt",
      getInLine2: "aufnehmen",
    },

    stats: [
      { value: "2024", title: "Gegründet"        },
      { value: "PhD",  title: "In IoT-Sicherheit"},
      { value: "3+",   title: "Branchen"          },
      { value: "10+",  title: "Jahre Erfahrung"   },
    ],

    business: {
      sectionLabel: "Was wir tun",
      heading:      "Zwei Säulen.\nEin Partner.",
      description:
        "Wir arbeiten in zwei eigenständigen Bereichen – erfahrene Cybersicherheitsberatung und datengetriebene Automatisierung – jeweils mit der gleichen Tiefe und Präzision. Viele Projekte verbinden beide.",
      pillar1Label: "Säule 1 · Cybersicherheit",
      pillar1Title: "Schützen.",
      pillar1Desc:
        "Sicherung von Produkten, Infrastruktur und Organisationen gegen aktuelle Bedrohungen und regulatorische Anforderungen.",
      pillar2Label: "Säule 2 · Automatisierung & Daten",
      pillar2Title: "Beschleunigen.",
      pillar2Desc:
        "Automatisierung manueller Prozesse und Erfassung öffentlicher Webdaten, um Unternehmen Einblicke zu verschaffen, die ihnen bisher verborgen blieben.",
    },

    features: [
      {
        id: "feature-1", accent: "cyan", category: "security",
        title:   "IT-Sicherheit & Sichere Entwicklung",
        content: "Secure SDLC, Code-Reviews, Penetrationstests und Schwachstellenanalysen für Web-, Mobile- und Cloud-Anwendungen.",
      },
      {
        id: "feature-2", accent: "blue", category: "security",
        title:   "Produkt- & IoT-Cybersicherheit",
        content: "Ganzheitliche Sicherheit für vernetzte Produkte, IoT- und OT-Umgebungen. Compliance mit IEC 62443, MDR und dem EU Cyber Resilience Act.",
      },
      {
        id: "feature-3", accent: "green", category: "security",
        title:   "GRC & Regulatorische Compliance",
        content: "Gap-Analysen, Risikobeurteilungen und Richtlinienrahmen für ISO 27001, NIS2, TISAX und EU-Regularien.",
      },
      {
        id: "feature-4", accent: "amber", category: "automation",
        title:   "Prozessautomatisierung & Scripting",
        content: "Maßgeschneiderte Automatisierungsskripte und Workflows für jeden Geschäftsprozess – von Datenpipelines und Reporting bis hin zu operativen Aufgaben.",
      },
      {
        id: "feature-5", accent: "purple", category: "automation",
        title:   "Web-Crawling & Datenerhebung",
        content: "Skalierbare Web-Crawler, die kontinuierlich Marktdaten, Konkurrenzpreise, Produktverfügbarkeiten und Branchensignale erfassen – und das offene Web in strukturierte Informationen verwandeln.",
      },
      {
        id: "feature-6", accent: "orange", category: "automation",
        title:   "Datenanalyse & Business Intelligence",
        content: "Wir verwandeln rohe Crawling-Daten in klare, handlungsrelevante Erkenntnisse. Statistische Analysen, Trendanalysen und strategisches Reporting, das aufzeigt, was interne Daten allein nicht zeigen können.",
      },
    ],

    billing: {
      sectionLabel: "Unser Hintergrund",
      heading:      "Erfahrung",
      p1:
        "Wir bringen fundierte Expertise aus der sicheren Softwareentwicklung in der Enterprise-IT, über GRC-Positionen (Governance, Risk & Compliance) bei namhaften Unternehmen, bis hin zur Promotion in IoT-Sicherheit an einer führenden europäischen Forschungseinrichtung.",
      p2:
        "Darüber hinaus entwickeln wir großangelegte Web-Crawler und Datenanalysepipelines, die aufzeigen, was interne Daten allein verbergen – von der Online-Apotheke bis zur industriellen Fertigung.",
      techItems: [
        { label: "Secure SDLC",          color: "cyan"   },
        { label: "Penetrationstest",     color: "cyan"   },
        { label: "ISO 27001",            color: "blue"   },
        { label: "IEC 62443",            color: "blue"   },
        { label: "NIS2 / EU CRA",        color: "blue"   },
        { label: "TISAX",                color: "purple" },
        { label: "Web-Crawling",         color: "amber"  },
        { label: "Datenpipelines",       color: "amber"  },
        { label: "Python-Automatisierung",color: "amber" },
        { label: "Marktdaten",           color: "orange" },
        { label: "Vertriebsanalyse",     color: "orange" },
        { label: "Bedrohungsmodellierung",color: "red"   },
      ],
    },

    industries: {
      sectionLabel: "Wen wir bedienen",
      heading:      "Branchen,\nin denen wir arbeiten.",
      description:
        "Wir haben sowohl Sicherheits- als auch Automatisierungsprojekte in stark regulierten Branchen abgeliefert – jedes Projekt verbindet technische Tiefe mit echtem Geschäftsnutzen.",
      cards: [
        {
          id: "industry-1", emoji: "💊", pillar: "automation",
          title:    "Pharma & E-Commerce",
          subtitle: "Web-Crawling, Vertriebsanalyse & Marktdaten",
          description:
            "Automatisiertes Crawling von Online-Apothekennetzwerken zur Erfassung von Produktverfügbarkeit, Preisdynamiken und Wettbewerberpositionierung auf hunderten Plattformen. Unsere Analyse brachte kritische Lücken ans Licht, die intern nicht sichtbar waren – und verwandelte rohe Webdaten in eine klare, handlungsrelevante Vertriebsstrategie.",
          tags: ["Web-Crawling", "Vertriebsanalyse", "Marktdaten", "E-Commerce"],
        },
        {
          id: "industry-2", emoji: "⚙️", pillar: "security",
          title:    "Maschinenbau & Fertigung",
          subtitle: "OT/ICS & Industrielle Produktsicherheit",
          description:
            "OT/ICS-Sicherheitsbewertungen, IEC 62443-Compliance und Produktcybersicherheitsberatung für Industriemaschinen und Fertigungsanlagen. Von der Entwicklung bis zur CE-Kennzeichnung.",
          tags: ["IEC 62443", "OT/ICS Sicherheit", "CE-Kennzeichnung", "NIS2"],
        },
        {
          id: "industry-3", emoji: "🚗", pillar: "security",
          title:    "Automobilindustrie",
          subtitle: "Vernetztes Fahrzeug & Lieferkettensicherheit",
          description:
            "Automotive-Cybersicherheit gemäß UNECE WP.29 / ISO/SAE 21434, TISAX-Assessments und Sicherheitsarchitektur für vernetzte Fahrzeuge. Unterstützung für OEMs und Tier-1-Zulieferer.",
          tags: ["ISO/SAE 21434", "UNECE WP.29", "TISAX", "V2X-Sicherheit"],
        },
      ],
    },

    cta: {
      heading:  "Lass uns zusammenarbeiten!",
      body:     "Schreib uns eine E-Mail oder ruf uns direkt an.",
      email:    "E-Mail senden",
      vcard:    "Virtuelle Visitenkarte",
    },

    footer: {
      copyright: "SAFER Technologies UG (haftungsbeschränkt)",
    },

    impressum: {
      heading:         "Impressum",
      tmgLabel:        "Angaben gemäß § 5 TMG:",
      company:         "SAFER Technologies UG (haftungsbeschränkt)",
      address:         "Hauptstraße 35a\n77839, Lichtenau, Deutschland",
      representedBy:   "Vertreten durch:",
      contact:         "Kontakt:",
      mobileLabel:     "Mobil:",
      emailLabel:      "E-Mail:",
      contactCardLabel:"Visitenkarte:",
      contactCardText: "Hier drücken",
      vatLabel:        "USt-IdNr.:",
      vatNumber:       "DE 365778955",
      registerLabel:   "Handelsregister:",
      registerNumber:  "Mannheim, HRB 749608",
    },

    cookie: {
      title:    "Wir verwenden Cookies",
      body:     "Wir nutzen Google Analytics, um zu verstehen, wie Besucher diese Website verwenden. Ohne Ihre Zustimmung werden keine Cookies gesetzt. Sie können ablehnen, ohne die Grundfunktionen zu beeinträchtigen.",
      accept:   "Akzeptieren",
      decline:  "Ablehnen",
      moreInfo: "Datenschutz",
    },

    privacy: {
      heading: "Datenschutzerklärung",
      updated: "Stand: September 2026",
      sections: [
        {
          heading: "Verantwortlicher",
          body: "Verantwortlich für die Datenverarbeitung auf dieser Website ist SAFER Technologies UG (haftungsbeschränkt), Hauptstraße 35a, 77839 Lichtenau, Deutschland, vertreten durch Dr. Pascal Oser. Kontakt: pascal@safer.network, +49 (0)151 57800439.",
        },
        {
          heading: "Hosting",
          body: "Diese Website wird über GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. St, San Francisco, CA 94107, USA) gehostet. Beim Aufruf der Seite verarbeitet GitHub automatisch technische Zugriffsdaten (u. a. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Datei, verwendeter Browser) in Server-Logfiles, um den sicheren und stabilen Betrieb der Website zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO). Details: https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement",
        },
        {
          heading: "Cookies & lokaler Speicher",
          body: "Diese Website setzt keine Tracking-Cookies, bevor Sie eingewilligt haben. Zwei technisch notwendige Einträge werden im lokalen Speicher (localStorage) Ihres Browsers abgelegt: Ihre Spracheinstellung (saferLang) und Ihre Cookie-Entscheidung (saferCookieConsent). Diese verbleiben ausschließlich auf Ihrem Gerät und werden nicht an uns übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer funktionsfähigen, nutzerfreundlichen Website).",
        },
        {
          heading: "Google Analytics",
          body: "Sofern Sie über den Cookie-Banner zugestimmt haben, setzen wir Google Analytics 4 (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland; Property-ID: G-FSY9VK13T0) zur Analyse der Websitenutzung ein. Dabei werden Nutzungsdaten wie aufgerufene Seiten, Verweildauer, Gerätetyp und ein ungefährer Standort (abgeleitet aus der IP-Adresse) verarbeitet. Google Analytics 4 speichert dabei standardmäßig keine vollständigen IP-Adressen. Es kann zu einer Datenübermittlung in die USA kommen; Google stützt sich hierfür auf die EU-Standardvertragsklauseln. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie den Cookie-Banner erneut aufrufen (lokalen Speicher dieser Seite in Ihrem Browser löschen) oder \"Ablehnen\" wählen.",
        },
        {
          heading: "Spracherkennung über IP-Adresse",
          body: "Beim erstmaligen Besuch ermitteln wir – sofern keine gespeicherte Präferenz und keine deutsche Browsersprache vorliegen – über die Drittanbieter-Dienste ipapi.co und api.country.is eine grobe Standortschätzung anhand Ihrer IP-Adresse, um die Seite automatisch auf Deutsch oder Englisch anzuzeigen. Ihre IP-Adresse wird hierzu an diese Dienste übermittelt, jedoch nicht von uns gespeichert. Rechtsgrundlage ist unser berechtigtes Interesse an einer sprachlich passenden Darstellung (Art. 6 Abs. 1 lit. f DSGVO). Sie können die automatische Erkennung jederzeit über den DE/EN-Schalter überschreiben.",
        },
        {
          heading: "Kontaktaufnahme",
          body: "Wenn Sie uns per E-Mail oder über die virtuelle Visitenkarte kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Nachrichteninhalt) ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Diese Website enthält kein serverseitiges Kontaktformular – E-Mails werden direkt über Ihr eigenes E-Mail-Programm versendet.",
        },
        {
          heading: "Ihre Rechte",
          body: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie ein Recht auf Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO). Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde zu, z. B. beim Landesbeauftragten für den Datenschutz und die Informationsfreiheit Baden-Württemberg.",
        },
        {
          heading: "SSL-Verschlüsselung",
          body: "Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung, erkennbar am \"https://\" in der Adresszeile.",
        },
        {
          heading: "Änderungen dieser Erklärung",
          body: "Wir passen diese Datenschutzerklärung an, sobald sich die zugrunde liegende Datenverarbeitung ändert.",
        },
      ],
    },
  },
}
