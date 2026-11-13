// ---------------------------------------------------------------
//  Saara website content yahin se control hota hai.
//  Naya product add karna ho to bas neeche list mein ek line jodo.
//  Product JPGs are in public/products/; selected photos are in public/products/ai/.
// ---------------------------------------------------------------

export const COMPANY = {
  name: "G&S Resources Industries Pvt. Ltd.",
  tagline: "Industrial Hardware, Electrical & Automation Supplies",
  phone: "7988427451",
  phoneDisplay: "+91 79884 27451",
  whatsapp: "917988427451",
  email: "gsresourcesindustries@gmail.com",
  address: "Sec. 3, Rewari, Haryana",
  about:
    "G&S Resources Industries Pvt. Ltd. is a reliable supplier of industrial hardware, electrical and electronic components, pneumatic and hydraulic products, machinery spare parts, maintenance essentials, stationery items, and housekeeping products. We are committed to providing quality products at competitive prices with a focus on customer satisfaction, timely delivery, and dependable sourcing.",
  mission:
    "Our goal is to simplify industrial and commercial purchasing by connecting businesses with trusted suppliers and offering cost-effective solutions for their production, maintenance, office, and housekeeping requirements. We believe in building long-term business relationships through quality, transparency, and trust.",
};

export const publicAssetPath = (path) =>
  `${import.meta.env.BASE_URL}${encodeURI(path.replace(/^\/+/, ""))}`;

export const productImagePath = (name) =>
  publicAssetPath(`products/${name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}.jpg`);

export const CATEGORIES = [
  {
    id: "hardware",
    title: "Hardware & Industrial",
    icon: "Wrench",
    image: publicAssetPath("products/hardware.jpg"),
    blurb: "Fasteners, bearings, soldering and everyday shop-floor essentials.",
    items: [
      { name: "Lead Free Solder Wire", image: publicAssetPath("products/ai/lead-free-solder-wire.jpg") },
      { name: "Silver Lead Solder Wire" },
      { name: "Low Temp Tin Bismuth Solder Wire", note: "Sn42Bi58" },
      { name: "Soldering Guns & Irons", note: "Electric, SMD rework, butane" },
      { name: "Nuts, Bolts & Washers" },
      { name: "Self-Tapping Screws" },
      { name: "Rivets" },
      { name: "Circlips" },
      { name: "Cotter Pins" },
      { name: "Threaded Rod" },
      { name: "Anchors / Rawl Plugs", image: publicAssetPath("products/ai/anchors-rawl-plugs.jpg") },
      { name: "Hose Clamps" },
      { name: "Cable Ties" },
      { name: "Allen Bolts / Socket Screws", image: publicAssetPath("products/ai/allen-bolts-socket-screws.jpg") },
      { name: "Bearings", image: publicAssetPath("products/ai/bearings.jpg") },
    ],
  },
  {
    id: "electrical",
    title: "Electrical Items",
    icon: "Zap",
    image: publicAssetPath("products/electrical.jpg"),
    blurb: "Switchgear, control gear, wiring accessories and power supplies.",
    items: [
      { name: "MCB", image: publicAssetPath("products/ai/mcb.jpg") },
      { name: "MCCB" },
      { name: "Contactors" },
      { name: "Overload Relays", note: "Thermal, 0.1 - 12.5A" },
      { name: "Relays" },
      { name: "Push Buttons" },
      { name: "Selector Switches" },
      { name: "Indicator Lamps" },
      { name: "Terminal Blocks" },
      { name: "Cable Glands" },
      { name: "Lugs" },
      { name: "Ferrules" },
      { name: "Wires & Cables" },
      { name: "Flexible Conduits" },
      { name: "Junction Boxes" },
      { name: "Transformers" },
      { name: "Fuses" },
      { name: "Fuse Holders" },
      { name: "Industrial Plugs & Sockets" },
      { name: "Panel Cooling Fans" },
      { name: "SMPS", note: "Switch Mode Power Supply" },
    ],
  },
  {
    id: "pneumatic",
    title: "Pneumatic & Hydraulic",
    icon: "Cog",
    image: publicAssetPath("products/pneumatic-hydraulic.jpg"),
    blurb: "Cylinders and fittings for automation and machinery.",
    items: [
      { name: "Pneumatic Cylinders" },
      { name: "Hydraulic Cylinders" },
      { name: "Pneumatic Fittings" },
    ],
  },
  {
    id: "sensors",
    title: "Electronic Sensors",
    icon: "Radar",
    image: publicAssetPath("products/sensors.jpg"),
    blurb: "Detection and sensing solutions for automation lines.",
    items: [
      { name: "Photoelectric Sensors" },
      { name: "Proximity Sensors" },
      { name: "Ultrasonic Sensors" },
      { name: "Colour Sensors" },
      { name: "Smoke Sensors" },
      { name: "Metal Detector Sensors" },
      { name: "IR Sensors" },
      { name: "Limit Sensors" },
    ],
  },
];

export const ALSO_SUPPLY = [
  { title: "Machinery Spare Parts", text: "Dependable sourcing of spares to keep production running." },
  { title: "Maintenance Essentials", text: "Day-to-day consumables for plant and facility upkeep." },
  { title: "Stationery Items", text: "Office stationery for commercial and industrial offices." },
  { title: "Housekeeping Products", text: "Cleaning and housekeeping supplies for facilities." },
];

export const WHY_US = [
  {
    icon: "BadgePercent",
    title: "Competitive Pricing",
    text: "Quality products at prices that make sense for bulk and regular purchasing.",
  },
  {
    icon: "Truck",
    title: "Timely Delivery",
    text: "Planned sourcing and dispatch so your maintenance and production don't wait.",
  },
  {
    icon: "ShieldCheck",
    title: "Dependable Sourcing",
    text: "We connect you with trusted suppliers so you get the right item, every time.",
  },
  {
    icon: "Handshake",
    title: "Long-term Relationships",
    text: "Built on quality, transparency and trust, with customer satisfaction first.",
  },
];
