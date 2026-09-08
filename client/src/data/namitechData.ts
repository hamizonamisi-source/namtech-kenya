export const BRAND = {
  name: "NamiTech",
  legalName: "NamiTech Kenya Ltd",
  tagline: "Connecting & Securing the Nation",
  phoneDisplay: "+254 738 735 545",
  phoneRaw: "+254738735545",
  phoneTel: "tel:+254738735545",
  whatsappUrl:
    "https://wa.me/254738735545?text=Hello%20NamiTech,%20I%20would%20like%20a%20free%20quote%20for%20Internet%20/%20CCTV%20installation%20in%20Kenya.",
  email: "hamizonamisi@gmail.com",
  location:
    "Kenya (Serving Nairobi, Mombasa, Kisumu, Nakuru, Eldoret & Nationwide)",
  headline: "Fast Internet & Advanced CCTV Installation in Kenya",
  subheadline:
    "NamiTech delivers high-speed networking, reliable home/office internet setups, and 24/7 security camera solutions.",
  images: {
    hero: "/assets/namitech-hero.jpg",
    logoCropped: "/assets/namitech-logo-extracted.jpg",
    rack: "/assets/service-networking-rack.jpg",
    cctv: "/assets/service-cctv-technician.jpg",
    noc: "/assets/operations-noc.jpg",
    map: "/assets/kenya-fiber-map.jpg",
  },
};

export const SERVICES = [
  {
    id: "internet-setup",
    title: "Internet & Networking Setup",
    shortTitle: "Internet & Networking",
    icon: "Wifi",
    heroImage: BRAND.images.rack,
    badge: "High Speed Fiber & LAN",
    description:
      "High-speed internet deployment, fiber configuration, router setup, structured LAN/WAN cabling, and WiFi dead-zone elimination for homes and offices across Kenya.",
    features: [
      "Fiber optic splice & termination",
      "Enterprise & home router configuration",
      "Mesh WiFi & dead-zone elimination",
      "Cat6/Cat6A structured LAN & WAN cabling",
      "Bandwidth management & guest WiFi portals",
      "Multi-tenant & compound WiFi distribution",
    ],
    targetLocations: [
      "Nairobi Estates & CBD",
      "Mombasa Coastal Region",
      "Kisumu & Western Kenya",
      "Nakuru & Central Rift",
    ],
  },
  {
    id: "cctv-security",
    title: "CCTV & Security Solutions",
    shortTitle: "CCTV & Smart Security",
    icon: "ShieldAlert",
    heroImage: BRAND.images.cctv,
    badge: "24/7 HD & IP Monitoring",
    description:
      "Professional HD/IP CCTV camera installation, remote mobile view setup, maintenance, and smart security monitoring for residential and commercial properties.",
    features: [
      "Full HD & 4K Ultra-clear IP camera installation",
      "Live remote viewing on smartphone, tablet & PC",
      "Night vision, color-at-night & perimeter motion alerts",
      "NVR / DVR storage configuration & cloud backup",
      "Biometric access control & smart intercom sync",
      "Preventative maintenance & camera re-positioning",
    ],
    targetLocations: [
      "Commercial Buildings & Warehouses",
      "Private Gated Communities",
      "Retail Stores & Supermarkets",
      "Educational & Healthcare Facilities",
    ],
  },
  {
    id: "structured-cabling",
    title: "Structured Cabling & Server Racks",
    shortTitle: "Structured Cabling",
    icon: "Server",
    heroImage: BRAND.images.rack,
    badge: "Clean Cable Management",
    description:
      "Organized server rack installations, patch panel dressing, cable containment, and certified copper/fiber backbone solutions that eliminate downtime.",
    features: [
      "Server rack setup & cable dressing",
      "Patch panels, trunking & conduit installation",
      "Fluke testing & labeling of all network drops",
      "Server room ventilation & UPS power backup integration",
    ],
    targetLocations: [
      "Corporate Offices",
      "Fintech & Call Centers",
      "Hospitals & Schools",
      "Industrial Yards",
    ],
  },
  {
    id: "smart-intercom-access",
    title: "Smart Intercom & Access Control",
    shortTitle: "Access Control",
    icon: "Lock",
    heroImage: BRAND.images.noc,
    badge: "Biometric & Video Entry",
    description:
      "Keyless door access, biometric time-and-attendance systems, and video gate intercoms integrated directly into your local network.",
    features: [
      "Fingerprint, RFID card & face recognition scanners",
      "Video gate doorbells with mobile answering",
      "Automated gate triggers & magnetic door locks",
      "Employee attendance logging & HR report export",
    ],
    targetLocations: [
      "Offices",
      "Apartment Blocks",
      "Warehouses",
      "Institutions",
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Local Expertise",
    icon: "Compass",
    description:
      "Tailored networking and surveillance solutions built specifically for Kenyan businesses, estates, and homes. We understand local ISP dynamics and power infrastructure.",
  },
  {
    title: "Fast Installation",
    icon: "Zap",
    description:
      "Rapid deployment with neat, structured cabling and minimal downtime. Most residential WiFi and CCTV jobs completed within 24 to 48 hours.",
  },
  {
    title: "24/7 Support & Maintenance",
    icon: "Clock",
    description:
      "Dedicated technical assistance whenever you need it. Our rapid-response technicians in Nairobi and across Kenya keep your network and cameras online.",
  },
  {
    title: "Crystal-Clear Remote Viewing",
    icon: "Smartphone",
    description:
      "Access your CCTV camera feeds anywhere in the world on iOS, Android, and Windows with low latency and zero complex port forwarding.",
  },
];

export const KENYA_LOCATIONS = [
  "Nairobi (Westlands, Kilimani, Karen, Upper Hill, CBD, Gigiri, Runda)",
  "Kiambu & Ruiru (Thika Road Corridor, Kahawa, Ruaka)",
  "Mombasa & Coastal Region (Nyali, Bamburi, Diani)",
  "Kisumu & Lake Basin Region",
  "Nakuru, Naivasha & Central Rift",
  "Eldoret & Uasin Gishu",
  "Machakos, Athi River & Syokimau",
];

export const TESTIMONIALS = [
  {
    name: "Kennedy Mwangi",
    role: "Property Manager, Kilimani Apartments, Nairobi",
    review:
      "NamiTech installed 32 IP cameras and structured WiFi across all four wings of our residential complex. Their cabling is neat, and our tenants now enjoy seamless internet and 24/7 security.",
    rating: 5,
  },
  {
    name: "Beatrice Achieng",
    role: "Director, Apex Logistics Ltd, Mombasa",
    review:
      "We had persistent WiFi dead-zones in our warehouse and unreliable cameras. NamiTech re-engineered our LAN with mesh WiFi and fitted HD night-vision cameras. Highly recommended!",
    rating: 5,
  },
  {
    name: "Dr. Silas Omondi",
    role: "Medical Clinic Owner, Kisumu",
    review:
      "The mobile view setup allows me to check our clinics even when I am traveling. Clean work, punctuality, and great customer care from the NamiTech team.",
    rating: 5,
  },
];
