export const doctor = {
  // ─── IDENTITY ──────────────────────────────────────────────
  name: "Dr. Priya Sharma",
  shortName: "Dr. Priya",
  credentials: "BDS, MDS – Prosthodontics",
  registrationNo: "NMC Reg. No. 2024-DL-48291",
  tagline: "Precise dental care, tailored to you.",
  heroSubtitle:
    "Trusted by 4,800+ patients across Delhi for implants, RCT, cosmetic dentistry, and complete family dental care.",

  // ─── BIO ───────────────────────────────────────────────────
  bio: [
    "Dr. Priya Sharma has been restoring and rebuilding smiles in Delhi for over 12 years. She completed her MDS in Prosthodontics from Maulana Azad Institute of Dental Sciences and has since trained in implantology across Mumbai and abroad.",
    "Her approach is direct — she explains every procedure clearly, works at a pace patients are comfortable with, and doesn't recommend treatments that aren't necessary. Patients come back not just because the work holds, but because they trust her judgment.",
    "She believes dentistry should feel like a conversation, not a transaction. Every treatment plan is built around the patient's comfort, timeline, and budget — not the other way around.",
  ],
  philosophy:
    "Pain-free care isn't a marketing line — it's a standard we hold ourselves to on every visit.",

  // ─── STATS ─────────────────────────────────────────────────
  stats: [
    { value: 12, suffix: "+", label: "Years Experience" },
    { value: 4800, suffix: "+", label: "Patients Treated" },
    { value: 9200, suffix: "+", label: "Procedures Completed" },
    { value: 98, suffix: "%", label: "Patient Satisfaction" },
  ],

  // ─── CLINIC ────────────────────────────────────────────────
  clinicName: "Sharma Dental Studio",
  clinicTagline: "Modern dentistry in a calm, welcoming environment.",
  clinicAddress: "B-14, Greater Kailash Part 1, New Delhi – 110048",
  clinicCity: "New Delhi",
  phone: "+91 98100 00000",
  phoneDisplay: "+91 98100 00000",
  whatsapp: "919810000000", // country code + number, no + or spaces — used in wa.me link
  whatsappMessage: "Hi Dr. Priya, I'd like to inquire about an appointment.",
  email: "contact@sharmadentalstudio.com",
  workingHours: [
    { days: "Monday – Saturday", hours: "10:00 AM – 7:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2!2d77.23!3d28.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMzJzM2LjAiTiA3N8KwMTMnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890",

  // ─── IMAGES ────────────────────────────────────────────────
  images: {
    doctor: {
      hero: "https://picsum.photos/seed/dentist-hero/1600/1000",
      about: "https://picsum.photos/seed/dentist-about/1400/900",
      profile: "https://picsum.photos/seed/dentist-profile/1000/1000",
      team: "https://picsum.photos/seed/dentist-team/1400/900",
    },
    clinic: {
      reception: "https://picsum.photos/seed/clinic-reception/1400/900",
      treatmentRoom: "https://picsum.photos/seed/clinic-treatment-room/1400/900",
      equipment: "https://picsum.photos/seed/clinic-equipment/1400/900",
      exterior: "https://picsum.photos/seed/clinic-exterior/1400/900",
      waitingArea: "https://picsum.photos/seed/clinic-waiting-area/1400/900",
    },
  },

  // ─── SERVICES ──────────────────────────────────────────────
  services: [
    {
      id: "implants",
      name: "Dental Implants",
      icon: "implant",
      shortDesc:
        "Permanent tooth replacement that looks and functions exactly like a natural tooth.",
      fullDesc:
        "Dental implants are titanium posts surgically placed in the jawbone, acting as artificial tooth roots. Once integrated, they support a crown that looks, feels, and functions like a natural tooth. Dr. Priya has placed over 500 implants with a 97% success rate.",
      benefits: [
        "Permanent solution",
        "No damage to adjacent teeth",
        "Natural look and feel",
        "Preserves jawbone",
      ],
      duration: "2–3 visits over 3–6 months",
    },
    {
      id: "rct",
      name: "Root Canal Treatment",
      icon: "tooth",
      shortDesc:
        "Painless, single-sitting RCT to save an infected tooth without extraction.",
      fullDesc:
        "Modern root canal treatment is virtually painless and is completed in a single sitting in most cases. The infected pulp is removed, the canal is cleaned and sealed, and the tooth is restored with a crown. Dr. Priya uses rotary endodontics for faster, more precise treatment.",
      benefits: [
        "Saves the natural tooth",
        "Eliminates pain completely",
        "Single-sitting procedure",
        "Long-lasting results",
      ],
      duration: "1–2 visits",
    },
    {
      id: "crowns",
      name: "Crowns & Bridges",
      icon: "crown",
      shortDesc:
        "Custom ceramic restorations matched precisely to your existing teeth.",
      fullDesc:
        "Dental crowns cap damaged or weakened teeth to restore strength, shape, and appearance. Bridges replace one or more missing teeth using adjacent teeth as support. All restorations are custom-fabricated to match your natural tooth color exactly.",
      benefits: [
        "Restores full tooth function",
        "Natural appearance",
        "Durable and long-lasting",
        "Protects weakened teeth",
      ],
      duration: "2 visits over 1–2 weeks",
    },
    {
      id: "orthodontics",
      name: "Orthodontics",
      icon: "align",
      shortDesc:
        "Braces and clear aligners for children and adults at any stage.",
      fullDesc:
        "Orthodontic treatment corrects misaligned teeth and bite issues using traditional metal braces or modern clear aligners. Treatment is available for children, teens, and adults. Dr. Priya provides a detailed assessment before recommending the best option for your case.",
      benefits: [
        "Improved smile aesthetics",
        "Better bite function",
        "Easier to clean teeth",
        "Boosts confidence",
      ],
      duration: "12–24 months depending on case",
    },
    {
      id: "whitening",
      name: "Teeth Whitening",
      icon: "sparkle",
      shortDesc:
        "In-clinic laser whitening with results visible in a single session.",
      fullDesc:
        "Professional in-clinic whitening uses medical-grade bleaching agents activated by laser light, delivering results 6–8 shades brighter in under an hour. Unlike over-the-counter products, this is safe, controlled, and tailored to your enamel sensitivity.",
      benefits: [
        "Results in one visit",
        "Safe for enamel",
        "6–8 shades brighter",
        "Long-lasting results",
      ],
      duration: "45–60 minutes",
    },
    {
      id: "pediatric",
      name: "Pediatric Dentistry",
      icon: "smile",
      shortDesc:
        "Gentle, child-friendly care with zero-anxiety techniques for kids.",
      fullDesc:
        "Children's dental visits at Sharma Dental Studio are designed to be positive and anxiety-free. Dr. Priya uses child-friendly language, explain-show-do techniques, and a gentle approach that builds lifelong confidence in dental visits. Early prevention sets up healthy habits for life.",
      benefits: [
        "Zero-anxiety approach",
        "Early cavity prevention",
        "Habit counseling",
        "Fluoride and sealant protection",
      ],
      duration: "30–45 minute check-ups",
    },
  ],

  // ─── WHY CHOOSE US ─────────────────────────────────────────
  whyChooseUs: [
    {
      icon: "shield-check",
      title: "NMC Certified",
      desc: "Registered with National Medical Commission. Qualifications verified and current.",
    },
    {
      icon: "heart-pulse",
      title: "Pain-Free Care",
      desc: "Advanced anaesthesia techniques and a calm environment make every visit comfortable.",
    },
    {
      icon: "microscope",
      title: "Latest Equipment",
      desc: "Digital X-rays, rotary endodontics, and laser whitening — all under one roof.",
    },
    {
      icon: "clock",
      title: "Flexible Timing",
      desc: "Monday to Saturday, 10 AM to 7 PM. Evening slots available for working professionals.",
    },
  ],

  // ─── PROCESS STEPS ─────────────────────────────────────────
  process: [
    {
      step: 1,
      title: "Call or WhatsApp Us",
      desc: "Reach out at a time that suits you. No forms, no waiting — direct contact with our team.",
    },
    {
      step: 2,
      title: "Consultation Visit",
      desc: "Meet Dr. Priya. She will examine your teeth, understand your concerns, and explain your options clearly.",
    },
    {
      step: 3,
      title: "Personalized Plan",
      desc: "You receive a detailed treatment plan with timeline and cost breakdown before any procedure begins.",
    },
    {
      step: 4,
      title: "Treatment & Follow-up",
      desc: "All procedures are performed at our clinic. Post-treatment support is always available.",
    },
  ],

  // ─── TESTIMONIALS ──────────────────────────────────────────
  testimonials: [
    {
      name: "Rajan Mehta",
      location: "Greater Kailash",
      rating: 5,
      service: "Dental Implants",
      quote:
        "I was nervous about implants for years. Dr. Priya explained everything so clearly that I finally got it done. Three months in and it feels completely natural. Best decision I made.",
    },
    {
      name: "Sunita Kapoor",
      location: "South Delhi",
      rating: 5,
      service: "Root Canal",
      quote:
        "I had been dreading a root canal for months. The procedure was completely painless and finished in one sitting. I couldn't believe it. The clinic is also spotlessly clean and calm.",
    },
    {
      name: "Neha Arora",
      location: "Lajpat Nagar",
      rating: 5,
      service: "Teeth Whitening",
      quote:
        "I had staining from years of coffee and was very conscious while speaking. Dr. Priya explained what result I could realistically expect and delivered exactly that. My smile looks brighter but still natural.",
    },
    {
      name: "Kunal Malhotra",
      location: "Saket",
      rating: 5,
      service: "Crowns & Bridges",
      quote:
        "I needed two crowns after a fracture and wanted them to match perfectly. The fit and shade were spot on, and chewing feels completely normal now. The whole process was smooth and on schedule.",
    },
    {
      name: "Aditi Verma",
      location: "Defence Colony",
      rating: 5,
      service: "Orthodontics",
      quote:
        "I started aligner treatment after years of postponing it. Dr. Priya made a clear month-by-month plan and tracked every change carefully. I can already see a huge difference in my smile confidence.",
    },
    {
      name: "Harpreet Kaur",
      location: "Kalkaji",
      rating: 5,
      service: "Pediatric Dentistry",
      quote:
        "My daughter used to get anxious before dental visits, but this clinic changed that experience completely. The team was patient, gentle, and explained everything in kid-friendly language. She now goes in calmly for check-ups.",
    },
  ],

  // ─── BEFORE & AFTER ────────────────────────────────────────
  beforeAfter: [
    {
      id: 1,
      treatment: "Dental Implants",
      beforeAlt: "Before dental implant treatment",
      afterAlt: "After dental implant treatment",
      beforeSrc: "https://picsum.photos/seed/before-implant/1200/900",
      afterSrc: "https://picsum.photos/seed/after-implant/1200/900",
    },
    {
      id: 2,
      treatment: "Teeth Whitening",
      beforeAlt: "Before whitening treatment",
      afterAlt: "After whitening treatment",
      beforeSrc: "https://picsum.photos/seed/before-whitening/1200/900",
      afterSrc: "https://picsum.photos/seed/after-whitening/1200/900",
    },
    {
      id: 3,
      treatment: "Orthodontics",
      beforeAlt: "Before orthodontic treatment",
      afterAlt: "After orthodontic treatment",
      beforeSrc: "https://picsum.photos/seed/before-ortho/1200/900",
      afterSrc: "https://picsum.photos/seed/after-ortho/1200/900",
    },
  ],

  // ─── EDUCATION ─────────────────────────────────────────────
  education: [
    {
      year: "2008",
      degree: "BDS",
      institution: "Manipal College of Dental Sciences",
      detail: "Graduated with distinction. Gold medalist in Oral Surgery.",
    },
    {
      year: "2012",
      degree: "MDS – Prosthodontics",
      institution: "MAIDS, New Delhi",
      detail:
        "Specialized in complex prosthetic reconstructions and implantology.",
    },
    {
      year: "2015",
      degree: "Implantology Fellowship",
      institution: "ITI India Chapter",
      detail: "Advanced implant placement and full-arch restoration training.",
    },
    {
      year: "2019",
      degree: "Advanced Aesthetics Course",
      institution: "Aesthetic Dentistry Institute, Bangkok",
      detail: "Smile design, veneer placement, and composite artistry.",
    },
  ],

  // ─── MEMBERSHIPS ───────────────────────────────────────────
  memberships: [
    "Indian Dental Association (IDA)",
    "Indian Prosthodontic Society (IPS)",
    "ITI – International Team for Implantology",
    "Delhi State Dental Council",
  ],

  // ─── LANGUAGES ─────────────────────────────────────────────
  languages: ["English", "Hindi", "Punjabi"],

  // ─── FAQ ───────────────────────────────────────────────────
  faqs: [
    {
      q: "Is root canal treatment painful?",
      a: "With modern anaesthesia and rotary techniques, RCT is no more uncomfortable than a regular filling. Most patients are surprised by how painless it is.",
    },
    {
      q: "How long does a dental implant last?",
      a: "With proper care, dental implants can last a lifetime. The crown on top typically lasts 15–20 years before needing replacement.",
    },
    {
      q: "What is the cost of teeth whitening?",
      a: "Professional in-clinic laser whitening at our studio starts at ₹8,000. We recommend calling or WhatsApping us for a personalized quote based on your current shade and goals.",
    },
    {
      q: "Do you treat children?",
      a: "Yes. We have a dedicated pediatric dentistry approach with techniques specifically designed to keep children calm and comfortable during visits.",
    },
    {
      q: "Is there parking available at the clinic?",
      a: "Yes, street parking is available outside the clinic. The clinic is also accessible by metro — we're a 10-minute walk from the GK metro station.",
    },
    {
      q: "Do you offer EMI or payment options?",
      a: "Yes, we offer 0% EMI on select procedures through major credit cards. Please ask our team during your consultation for details.",
    },
  ],

  // ─── SOCIAL MEDIA ──────────────────────────────────────────
  socialMedia: {
    instagram: "https://instagram.com/sharmadentalstudio",
    facebook: "https://facebook.com/sharmadentalstudio",
    linkedin: "",
  },

  // ─── SEO ───────────────────────────────────────────────────
  seo: {
    homeTitle:
      "Dr. Priya Sharma – Dental Specialist in Delhi | Sharma Dental Studio",
    homeDesc:
      "Trusted dental care in Greater Kailash, New Delhi. Implants, RCT, crowns, whitening, orthodontics and pediatric dentistry by Dr. Priya Sharma, MDS Prosthodontics.",
    aboutTitle: "About Dr. Priya Sharma – Sharma Dental Studio",
    aboutDesc:
      "12+ years of dental expertise. BDS, MDS Prosthodontics. NMC registered. Trained in implantology from ITI India Chapter.",
    servicesTitle: "Dental Services – Sharma Dental Studio, New Delhi",
    servicesDesc:
      "Comprehensive dental services including implants, root canal, crowns, whitening, orthodontics, and pediatric dentistry in Greater Kailash, Delhi.",
    galleryTitle: "Clinic Gallery – Sharma Dental Studio",
    galleryDesc:
      "Photos of our dental clinic in Greater Kailash — reception, treatment rooms, and equipment.",
    contactTitle: "Contact Us – Sharma Dental Studio, New Delhi",
    contactDesc:
      "Call or WhatsApp Sharma Dental Studio in Greater Kailash, New Delhi. Mon–Sat 10 AM – 7 PM.",
    faqTitle: "Frequently Asked Questions – Sharma Dental Studio",
    faqDesc:
      "Answers to common questions about dental implants, root canals, whitening, payment options, and visiting our clinic in Delhi.",
  },
};

export type DoctorConfig = typeof doctor;
