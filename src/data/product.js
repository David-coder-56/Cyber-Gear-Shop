export const products = [
  // ================= PERIPHERALS (IDs 1-6) =================
  {
    id: 1,
    name: "Cyber Mouse X Pro",
    price: 59.99,
    category: "Mouse",
    img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    featured: true,
    bestSeller: true,
    quantity: 3,
    description: "Ultra-lightweight wireless gaming mouse with 26k DPI sensor and 80-hour battery life.",
    stats: { rating: 5.0, sold: "5.2k sold" }
  },
  {
    id: 2,
    name: "Neon Mech Keyboard",
    price: 129.99,
    category: "Keyboard",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    featured: true,
    bestSeller: true,
    quantity: 4,
    description: "Hot-swappable mechanical switches with per-key RGB lighting and aluminum chassis.",
    stats: { rating: 4.8, sold: "3.1k sold" }
  },
  {
    id: 3,
    name: "Pro Gaming Headset",
    price: 89.99,
    category: "Headphones",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: true,
    quantity: 6,
    description: "Immersive 7.1 surround sound with noise-canceling microphone for crystal clear comms.",
    stats: { rating: 4.7, sold: "8k sold" }
  },
  {
    id: 4,
    name: "Cyber Controller Z (PS4)",
    price: 79.99,
    category: "Controllers",
    img: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80",
    featured: true,
    bestSeller: false,
    quantity: 6,
    description: "Hall-effect triggers and remappable back buttons designed for competitive console gaming.",
    stats: { rating: 4.9, sold: "2.5k sold" }
  },
  {
    id: 5,
    name: "Streamer Mic Pro",
    price: 119.99,
    category: "Mics",
    img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: true,
    quantity: 4,
    description: "Studio-quality cardioid condenser microphone with built-in shock mount.",
    stats: { rating: 4.6, sold: "4.5k sold" }
  },
  {
    id: 6,
    name: "RGB XL Mousepad",
    price: 29.99,
    category: "Mouse Pad",
    img: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: true,
    quantity: 3,
    description: "Water-resistant speed surface with 12 lighting zones to sync with your setup.",
    stats: { rating: 4.9, sold: "12k sold" }
  },

  // ================= TABLETS (IDs 7-12) =================
  {
    id: 7,
    name: "Cyber Tab 12 Pro",
    price: 799.99,
    category: "Tablets",
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
    featured: true,
    bestSeller: false,
    quantity: 1,
    description: "Liquid Retina XDR display with Neural Engine processing and stylus synchronization.",
    stats: { rating: 4.9, sold: "1.2k sold" }
  },
  {
    id: 8,
    name: "Cyber Tab 12 Air",
    price: 699.99,
    category: "Tablets",
    img: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: true,
    quantity: 1,
    description: "Ultra-light tablet optimized for on-the-go creative multitasking and productivity.",
    stats: { rating: 4.8, sold: "980 sold" }
  },
  {
    id: 9,
    name: "Cyber Tab Mini",
    price: 499.99,
    category: "Tablets",
    img: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 1,
    description: "Compact 8-inch cyber slate designed for handheld gaming and field analytics.",
    stats: { rating: 4.7, sold: "1.5k sold" }
  },
  {
    id: 10,
    name: "Cyber Tab Creator",
    price: 849.99,
    category: "Tablets",
    img: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 1,
    description: "Designed for concept artists, digital designers, and UI/UX developers.",
    stats: { rating: 5.0, sold: "430 sold" }
  },
  {
    id: 11,
    name: "Cyber Tab Edu",
    price: 399.99,
    category: "Tablets",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: true,
    quantity: 1,
    description: "Responsive tablet engineered for student coding, research, and remote study.",
    stats: { rating: 4.6, sold: "2.3k sold" }
  },
  {
    id: 12,
    name: "Cyber Tab Max",
    price: 899.99,
    category: "Tablets",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    featured: true,
    bestSeller: false,
    quantity: 1,
    description: "Expansive 13-inch display slate for intensive split-screen workstation tasks.",
    stats: { rating: 4.9, sold: "610 sold" }
  },

  // ================= KEYBOARDS (IDs 13-14) =================
  {
    id: 13,
    name: "Stealth TKL Mechanical",
    price: 109.99,
    category: "Keyboard",
    img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: true,
    quantity: 2,
    description: "Compact tenkeyless layout with sound-dampened linear switches.",
    stats: { rating: 4.8, sold: "3.4k sold" }
  },
  {
    id: 14,
    name: "Neon RGB Pro",
    price: 149.99,
    category: "Keyboard",
    img: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 2,
    description: "Tournament keyboard with rapid-trigger magnetic analog Hall effect switches.",
    stats: { rating: 4.7, sold: "1.1k sold" }
  },

  // ================= LAPTOPS (IDs 15-17) =================
  {
    id: 15,
    name: "Nebula 16 Gaming Rig",
    price: 1899.99,
    category: "Laptop",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80",
    featured: true,
    bestSeller: false,
    quantity: 1,
    description: "Flagship gaming rig featuring vapor chamber cooling and 240Hz QHD display.",
    stats: { rating: 4.9, sold: "520 sold" }
  },
  {
    id: 16,
    name: "Nebula 14 Creator",
    price: 1499.99,
    category: "Laptop",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: true,
    quantity: 1,
    description: "High-spec workstation with color-accurate 3K OLED screen and all-day battery.",
    stats: { rating: 4.8, sold: "780 sold" }
  },
  {
    id: 17,
    name: "Nebula Lite",
    price: 999.99,
    category: "Laptop",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 1,
    description: "Everyday cyber-grade ultrabook with CNC aluminum chassis and fast charging.",
    stats: { rating: 4.6, sold: "1.9k sold" }
  },

  // ================= LIGHTING, WEBCAM, AUDIO, CPU, COMBOS (IDs 18-26) =================
  {
    id: 18,
    name: "Ceiling Studio Light",
    price: 89.99,
    category: "Lighting",
    img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 3,
    description: "Diffuse edge-lit LED panel with bi-color warmth and wireless remote control.",
    stats: { rating: 4.5, sold: "870 sold" }
  },
  {
    id: 19,
    name: "Vision 4K Webcam",
    price: 159.99,
    category: "Webcam",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    featured: true,
    bestSeller: false,
    quantity: 2,
    description: "Ultra HD 4K sensor with AI auto-framing, HDR correction, and stereo mics.",
    stats: { rating: 4.8, sold: "1.6k sold" }
  },
  {
    id: 20,
    name: "Sonic Blast Speakers",
    price: 199.99,
    category: "Speaker",
    img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: true,
    quantity: 2,
    description: "2.1 acoustic desktop monitor array with downward-firing subwoofer.",
    stats: { rating: 4.7, sold: "2.1k sold" }
  },
  {
    id: 21,
    name: "Pulse Core CPU",
    price: 2499.99,
    category: "CPU",
    img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80",
    featured: true,
    bestSeller: false,
    quantity: 1,
    description: "Custom loop liquid-cooled cyber rig with 32-thread CPU and high-bandwidth VRAM.",
    stats: { rating: 5.0, sold: "190 sold" }
  },
  {
    id: 22,
    name: "Ultimate Combo Setup",
    price: 299.99,
    category: "Combo",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: true,
    quantity: 1,
    description: "Complete tactical set: mechanical keyboard, ultralight mouse, headset, and desk pad.",
    stats: { rating: 4.9, sold: "3.2k sold" }
  },
  {
    id: 23,
    name: "Cyber Vision Webcam",
    price: 119.99,
    category: "Webcam",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 2,
    description: "1080p 60FPS zero-lag streaming camera with integrated physical privacy shutter.",
    stats: { rating: 4.6, sold: "940 sold" }
  },
  {
    id: 24,
    name: "Ultimate Office Combo Setup",
    price: 349.99,
    category: "Combo",
    img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 1,
    description: "Ergonomic workspace bundle with wireless split keyboard, vertical mouse, and arm rest.",
    stats: { rating: 4.7, sold: "620 sold" }
  },
  {
    id: 25,
    name: "Laptop Blast Speakers",
    price: 79.99,
    category: "Speaker",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 3,
    description: "Low-profile soundbar engineered to clip onto laptops or tuck beneath monitors.",
    stats: { rating: 4.4, sold: "1.4k sold" }
  },
  {
    id: 26,
    name: "Studio Mic Pro",
    price: 149.99,
    category: "Mics",
    img: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 2,
    description: "Multi-pattern USB/XLR broadcast microphone with real-time hardware gain dial.",
    stats: { rating: 4.8, sold: "1.8k sold" }
  },

  // ================= CONTROLLERS & AUDIO (IDs 27-32) =================
  {
    id: 27,
    name: "Cyber Controller Z Elite (PS4)",
    price: 99.99,
    category: "Controllers",
    img: "https://images.unsplash.com/photo-1592840496073-e72bbe6196a0?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: true,
    quantity: 3,
    description: "Tournament gamepad with interchangeable thumbstick modules and trigger stops.",
    stats: { rating: 4.9, sold: "4.1k sold" }
  },
  {
    id: 28,
    name: "Cyber Controller Z RGB (PS4)",
    price: 89.99,
    category: "Controllers",
    img: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 2,
    description: "Transparent cyber chassis showcasing custom controllable interior RGB glows.",
    stats: { rating: 4.6, sold: "1.3k sold" }
  },
  {
    id: 29,
    name: "Cyber Controller Z Stealth (PS4)",
    price: 74.99,
    category: "Controllers",
    img: "https://images.unsplash.com/photo-1612287233207-6c2e55850942?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 2,
    description: "Textured military grip casing with quiet vibration motors and braided cable.",
    stats: { rating: 4.7, sold: "2.0k sold" }
  },
  {
    id: 30,
    name: "Pro Gaming Headset Elite",
    price: 139.99,
    category: "Headphones",
    img: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 2,
    description: "50mm planar magnetic drivers with active spatial positioning and leatherette earcups.",
    stats: { rating: 4.9, sold: "2.7k sold" }
  },
  {
    id: 31,
    name: "Pro Gaming Headset RGB",
    price: 99.99,
    category: "Headphones",
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 3,
    description: "Lightweight over-ear headset with reactive RGB earcups and broadcast condenser mic.",
    stats: { rating: 4.7, sold: "1.9k sold" }
  },
  {
    id: 32,
    name: "Pro Gaming Headset Lite",
    price: 69.99,
    category: "Headphones",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 4,
    description: "Featherlight 240g frame with breathable memory foam for endurance marathons.",
    stats: { rating: 4.5, sold: "3.6k sold" }
  },

  // ================= MORE MICE (IDs 33-34) =================
  {
    id: 33,
    name: "Cyber Mouse X Elite",
    price: 79.99,
    category: "Mouse",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: true,
    quantity: 3,
    description: "Ergonomic contouring with pure PTFE glides and optical switches rated for 90M clicks.",
    stats: { rating: 4.9, sold: "6.1k sold" }
  },
  {
    id: 34,
    name: "Cyber Mouse X Stealth",
    price: 64.99,
    category: "Mouse",
    img: "https://images.unsplash.com/photo-1626218174358-7769486c4b79?auto=format&fit=crop&w=600&q=80",
    featured: false,
    bestSeller: false,
    quantity: 2,
    description: "Matte black stealth finish with silent switches for nocturnal stealth sessions.",
    stats: { rating: 4.7, sold: "2.4k sold" }
  }
];
