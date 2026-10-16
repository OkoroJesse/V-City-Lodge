export interface RoomCategory {
  id: string;
  slug: string;
  name: string;
  badge?: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  bedConfig: string;
  maxOccupancy: string;
  view: string;
  features: string[];
  amenities: {
    icon: string;
    label: string;
  }[];
  pricingNote: string;
}

export interface AmenityItem {
  id: string;
  title: string;
  category: "room" | "hotel" | "service";
  description: string;
  icon: string;
  isVerified: boolean;
  notes?: string;
  image?: string;
}

export interface DiningItem {
  id: string;
  title: string;
  category: "bar" | "delicacy" | "cocktail";
  subtitle: string;
  description: string;
  image: string;
  isVerified: boolean;
}

export interface BookingPlatform {
  id: string;
  name: string;
  url: string;
  badge?: string;
  isDirect?: boolean;
}

export interface HotelConfig {
  name: string;
  legalName: string;
  tagline: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  aboutIntro: string;
  aboutStory: string;
  address: {
    street: string;
    layout: string;
    area: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    fullFormatted: string;
  };
  contact: {
    primaryPhone: string;
    displayPhone: string;
    telLink: string;
    secondaryPhone: string;
    secondaryTelLink: string;
    whatsappNumber: string;
    whatsappLink: string;
    alternativePhone: {
      number: string;
      source: string;
      isVerified: boolean;
      note: string;
    };
    emailPlaceholder: string;
    receptionHours: string;
  };
  stayPolicies: {
    checkIn: string;
    checkOut: string;
    frontDesk: string;
    parking: string;
    breakfastHours: string;
    guestroomsCount: string;
    wifi: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  branding: {
    logoUrl: string;
    exteriorHero: string;
  };
  rooms: RoomCategory[];
  amenities: AmenityItem[];
  dining: DiningItem[];
  bookingPlatforms: BookingPlatform[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const hotelConfig: HotelConfig = {
  name: "V City Lodge Hotel & Suite",
  legalName: "V City Lodge Hotel & Suite Ltd",
  tagline: "Contemporary Comfort & Refined Hospitality in Kubwa, Abuja",
  heroEyebrow: "CHIKAKORE, KUBWA · ABUJA, NIGERIA",
  heroHeadline: "Comfort That Feels Like Coming Home.",
  heroSubheadline:
    "Discover a tranquil, contemporary haven in Chikakore, Kubwa. Designed with modern architecture, private balconies, and warm hospitality crafted around your peace of mind.",
  aboutIntro:
    "Located in Chikakore Layout off Champion Road in Kubwa, Abuja, V City Lodge Hotel & Suite Ltd offers guests approximately 40 stylishly appointed rooms, secure self-parking, and a serene residential retreat away from highway congestion.",
  aboutStory:
    "From its striking geometric exterior with warm terracotta accents and glass-fronted balconies to its art-directed interior suites, V City Lodge blends contemporary Nigerian design with effortless modern hospitality. Whether visiting Kubwa for business, family occasions, or leisure in the Federal Capital Territory, our 24-hour reception team ensures an attentive, peaceful stay.",
  address: {
    street: "Plot 209, Chief Henry Anamonye Street",
    layout: "Chikakore Layout, off Champion Road",
    area: "Chikakore, Kubwa",
    city: "Abuja",
    state: "Federal Capital Territory",
    country: "Nigeria",
    postalCode: "901101",
    fullFormatted:
      "Plot 209, Chief Henry Anamonye Street, Chikakore Layout, off Champion Road, Chikakore, Kubwa, Abuja, FCT, Nigeria, 901101",
  },
  contact: {
    primaryPhone: "+234 807 984 7797",
    displayPhone: "+234 807 984 7797",
    telLink: "tel:+2348079847797",
    secondaryPhone: "+234 803 819 9530",
    secondaryTelLink: "tel:+2348038199530",
    whatsappNumber: "2348079847797",
    whatsappLink:
      "https://wa.me/2348079847797?text=Hello%20V%20City%20Lodge,%20I%20would%20like%20to%20enquire%20about%20room%20availability%20and%20rates.",
    alternativePhone: {
      number: "+234 705 777 1144",
      source: "Trip.com listing",
      isVerified: false,
      note: "Unconfirmed secondary number reported on third-party platform. Google Hotels confirmed line +234 807 984 7797 is prioritized.",
    },
    emailPlaceholder: "reservations@vcitylodge.com",
    receptionHours: "24 Hours Daily",
  },
  stayPolicies: {
    checkIn: "12:00 PM (Noon)",
    checkOut: "12:00 PM (Noon)",
    frontDesk: "24-Hour Front Desk Service",
    parking: "Free On-Site Secure Self-Parking",
    breakfastHours: "7:00 AM – 11:00 AM",
    guestroomsCount: "Approximately 40 Guestrooms",
    wifi: "Complimentary High-Speed Wi-Fi",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  branding: {
    logoUrl: "/images/hotel/logo-gold.png",
    exteriorHero: "/images/hotel/exterior-facade.jpg",
  },
  rooms: [
    {
      id: "deluxe-balcony",
      slug: "deluxe-room-balcony",
      name: "Deluxe Room City View With Balcony",
      badge: "Signature Category",
      subtitle: "Cobalt Blue Velvet Feature Wall with Private City Balcony",
      description:
        "The verified hallmark accommodation at V City Lodge, showcasing a vibrant royal blue velvet fluted wall, gilded circular mirror, plush armchair, and a private balcony overlooking Kubwa.",
      longDescription:
        "Step into a refined, color-rich sanctuary created for guests who appreciate distinctive style. The Deluxe Room City View With Balcony pairs an opulent royal blue velvet vertical-fluted accent wall with custom gilded accents and a comfortable cream tufted armchair. Step out through private glass doors onto your own personal balcony to enjoy fresh breezes and the peaceful neighborhood scenery of Chikakore.",
      image: "/images/hotel/room-deluxe-balcony.jpg",
      gallery: [
        "/images/hotel/room-deluxe-balcony.jpg",
        "/images/hotel/exterior-facade.jpg",
      ],
      bedConfig: "1 King-Size Bed",
      maxOccupancy: "2 Adults",
      view: "Private Balcony with Chikakore / City Skyline View",
      features: [
        "Private Balcony with Glass Railings",
        "Signature Royal Blue Velvet Accent Wall",
        "Plush Cream Tufted Armchair",
        "Circular Gilded Vanity Mirror",
        "Whisper-Quiet Split Unit Air Conditioning",
        "Wall-Mounted Flat-Screen Television",
        "En-suite Bathroom with Modern Fixtures",
        "Complimentary High-Speed Wi-Fi",
      ],
      amenities: [
        { icon: "Balcony", label: "Private Balcony" },
        { icon: "Wind", label: "Split Air Conditioning" },
        { icon: "Tv", label: "Flat-Screen TV" },
        { icon: "Wifi", label: "Free Wi-Fi" },
        { icon: "Bed", label: "King Bed" },
        { icon: "Bath", label: "Private Bath" },
      ],
      pricingNote:
        "Direct enquiry pricing available upon request. Speak with our reservations desk for current seasonal availability.",
    },
    {
      id: "royal-diamond",
      slug: "royal-diamond-suite",
      name: "Royal Diamond Gold Suite",
      badge: "Signature Gold Edition",
      subtitle: "Geometric Chevron Headboard & Sinuous Wave Sconces",
      description:
        "A showpiece of contemporary glamour, highlighted by an illuminated geometric chevron padded feature wall, flowing wave sconces, and gold-framed mirrored accents.",
      longDescription:
        "Our Royal Diamond Gold Suite delivers an arresting fusion of dramatic onyx tones and warm golden radiance. The signature floor-to-ceiling headboard is crafted from diamond-patterned acoustic upholstery, flanked by gold-tinted mirrors and sinuous sculptural light sconces. Designed for discerning guests who appreciate bespoke craftsmanship.",
      image: "/images/hotel/room-royal-diamond.jpg",
      gallery: [
        "/images/hotel/room-royal-diamond.jpg",
        "/images/hotel/exterior-facade.jpg",
      ],
      bedConfig: "1 King-Size Bed",
      maxOccupancy: "2 Adults",
      view: "Courtyard & Architectural View",
      features: [
        "Illuminated Chevron & Diamond Padded Wall",
        "Sinuous Wave Ambient Light Sconces",
        "Floor-to-Ceiling Gold Mirrored Accents",
        "Independent Split Air Conditioning",
        "Bedside Nightstands with Gold Hardware",
        "En-suite Bathroom with Premium Fixtures",
        "High-Speed Wi-Fi",
        "Intercom Direct to Front Desk",
      ],
      amenities: [
        { icon: "Sparkles", label: "Gold Accent Wall" },
        { icon: "Wind", label: "Air Conditioning" },
        { icon: "Bed", label: "King Bed" },
        { icon: "Wifi", label: "Free Wi-Fi" },
        { icon: "Lamp", label: "Designer Sconces" },
        { icon: "Bath", label: "En-suite Bath" },
      ],
      pricingNote:
        "Contact our 24-hour reception desk to confirm current room rates and availability.",
    },
    {
      id: "superior-king",
      slug: "superior-king-suite",
      name: "Superior King Suite",
      badge: "Floating Glow",
      subtitle: "Ambient Under-Bed Halo Lighting with Scarlet Lounge Bench",
      description:
        "A sophisticated modern bedroom boasting an illuminated floating bed frame, vertical fluted wood slat corner, warm pendant lighting, and a vibrant red upholstered bench.",
      longDescription:
        "The Superior King Suite is curated for rest and visual warmth. A soft golden halo emanates from beneath the floating bed frame, paired with overhead recessed tray ceiling lights and an amber pendant lamp. A striking scarlet bench at the foot of the bed and an abstract woven area rug over timber flooring create a balanced, luxurious aesthetic.",
      image: "/images/hotel/room-superior-king.jpg",
      gallery: [
        "/images/hotel/room-superior-king.jpg",
        "/images/hotel/exterior-facade.jpg",
      ],
      bedConfig: "1 Plush King Bed",
      maxOccupancy: "2 Adults",
      view: "Quiet Residential Outlook",
      features: [
        "Floating Bed with Warm LED Under-Glow",
        "Vertical Fluted Corner Acoustic Slatting",
        "Plush Scarlet End-of-Bed Bench",
        "Designer Amber Pendant Lighting",
        "Textured Marble Pattern Area Rug",
        "Whisper-Quiet Split Climate Control",
        "Lounge Chair & Reading Area",
        "Complimentary Wi-Fi",
      ],
      amenities: [
        { icon: "Sparkles", label: "Under-Bed Halo" },
        { icon: "Bed", label: "King Bed" },
        { icon: "Wind", label: "Air Conditioning" },
        { icon: "Wifi", label: "Free Wi-Fi" },
        { icon: "Armchair", label: "Scarlet Bench" },
        { icon: "Bath", label: "Private Bath" },
      ],
      pricingNote:
        "Direct enquiry pricing available through our reservations desk.",
    },
    {
      id: "business-executive",
      slug: "business-executive-suite",
      name: "Business Executive Suite",
      badge: "Work & Rest",
      subtitle: "Dedicated Ergonomic Workstation & Crisp Luxury Linen",
      description:
        "Engineered for visiting executives and corporate travelers, featuring a high-back ergonomic mesh office chair, work desk, upholstered ottoman bench, and quiet surroundings.",
      longDescription:
        "Travel for business without compromising on restful comfort. The Business Executive Suite features a dedicated work station with an ergonomic mesh swivel desk chair, high-speed Wi-Fi, and generous desk space for laptops and documents. Rest peacefully in the king-size bed dressed in crisp striped white linens, complemented by an upholstered storage ottoman bench and blackout drapery.",
      image: "/images/hotel/room-business-executive.jpg",
      gallery: [
        "/images/hotel/room-business-executive.jpg",
        "/images/hotel/exterior-facade.jpg",
      ],
      bedConfig: "1 Executive King Bed",
      maxOccupancy: "2 Adults",
      view: "Peaceful Suburban View",
      features: [
        "Ergonomic High-Back Mesh Desk Chair",
        "Dedicated Executive Working Desk",
        "Crisp Striped Percale Linen",
        "Upholstered Foot-of-Bed Ottoman",
        "Floor-to-Ceiling Drapery with Privacy Sheers",
        "Individual Split Unit Climate Control",
        "Direct Intercom to Front Office",
        "High-Speed Wi-Fi for Video Calls",
      ],
      amenities: [
        { icon: "Briefcase", label: "Work Station" },
        { icon: "Armchair", label: "Ergonomic Chair" },
        { icon: "Bed", label: "King Bed" },
        { icon: "Wind", label: "Air Conditioning" },
        { icon: "Wifi", label: "High-Speed Wi-Fi" },
        { icon: "Bath", label: "Private Bath" },
      ],
      pricingNote:
        "Corporate and long-stay rates available upon enquiry with front desk.",
    },
    {
      id: "executive-suite",
      slug: "executive-suite",
      name: "Executive Suite",
      badge: "Warm Ambience",
      subtitle: "Grid Leather-Tufted Headboard with Warm Ambient Backlighting",
      description:
        "An inviting haven highlighted by a tailored grid-panel padded headboard, warm indirect lighting, deep mahogany side pillars, and a dedicated armchair.",
      longDescription:
        "Designed for deep relaxation and quiet focus, the Executive Suite features a luxurious floor-to-ceiling grid-tufted headboard washed with soft warm halo illumination. Dark timber accents create an intimate, grounded aesthetic, while whisper-quiet climate control and plush bedding ensure an undisturbed night's sleep.",
      image: "/images/hotel/room-executive-suite.jpg",
      gallery: [
        "/images/hotel/room-executive-suite.jpg",
        "/images/hotel/exterior-facade.jpg",
      ],
      bedConfig: "1 Plush King Bed",
      maxOccupancy: "2 Adults",
      view: "Quiet Courtyard / Residential View",
      features: [
        "Bespoke Grid-Tufted Padded Headboard",
        "Integrated Warm Ambient LED Backlighting",
        "Individual Bedside Reading Sconces",
        "Dark Mahogany Architectural Wall Accents",
        "Whisper-Quiet Air Conditioning",
        "Plush Lounge Chair",
        "Complimentary High-Speed Wi-Fi",
        "Direct Front Desk Intercom",
      ],
      amenities: [
        { icon: "Bed", label: "Plush King Bed" },
        { icon: "Wind", label: "Air Conditioning" },
        { icon: "Lamp", label: "Reading Sconces" },
        { icon: "Wifi", label: "Free Wi-Fi" },
        { icon: "Armchair", label: "Lounge Seating" },
        { icon: "Bath", label: "En-Suite Bath" },
      ],
      pricingNote:
        "Contact our 24-hour reception desk to confirm current room rates and availability.",
    },
    {
      id: "ambassador-suite",
      slug: "ambassador-suite",
      name: "Ambassador Suite",
      badge: "Luxury Timber Finish",
      subtitle: "Architectural Wood-Slat Wall Panelling & Tray Cove Lighting",
      description:
        "An expansive, beautifully lit suite styled with natural wood slat acoustic paneling, illuminated tray ceiling, upholstered foot-of-bed bench, and large screen TV.",
      longDescription:
        "Our Ambassador Suite represents modern architectural warmth at its finest. Natural grain vertical wood paneling frames the bed, complemented by layered cove ceiling lighting that casts a soft, golden radiance throughout the room. Complete with a tailored tufted bench, expansive wardrobe storage, and high-definition entertainment, it offers an executive retreat in the heart of Kubwa.",
      image: "/images/hotel/room-presidential-suite.jpg",
      gallery: [
        "/images/hotel/room-presidential-suite.jpg",
        "/images/hotel/suite-presidential-foosball.jpg",
        "/images/hotel/exterior-facade.jpg",
      ],
      bedConfig: "1 Extra-Large King Bed",
      maxOccupancy: "2 Adults",
      view: "Panoramic Property & Sky View",
      features: [
        "Vertical Wood-Slat Architectural Feature Wall",
        "Illuminated Cove Tray Ceiling Lighting",
        "Tufted Foot-of-Bed Bench",
        "Wide Screen High-Definition Television",
        "Artisan Bed Runner & Decorative Pillows",
        "Independent Climate Control",
        "Complimentary High-Speed Wi-Fi",
        "Private Bathroom with Quality Amenities",
      ],
      amenities: [
        { icon: "Bed", label: "King Bed" },
        { icon: "Tv", label: "Large Smart TV" },
        { icon: "Wind", label: "Air Conditioning" },
        { icon: "Wifi", label: "High-Speed Wi-Fi" },
        { icon: "Sparkles", label: "Cove Lighting" },
        { icon: "Bath", label: "En-suite Bathroom" },
      ],
      pricingNote:
        "Direct reservations and corporate rates available through the front desk.",
    },
  ],
  amenities: [
    {
      id: "front-desk",
      title: "24-Hour Front Desk",
      category: "service",
      description:
        "Attentive front office personnel on-site around the clock to welcome late arrivals, manage key check-ins, and assist with any guest needs.",
      icon: "Clock",
      isVerified: true,
      image: "/images/hotel/exterior-facade.jpg",
    },
    {
      id: "parking",
      title: "Free On-Site Self-Parking",
      category: "hotel",
      description:
        "Spacious, paved on-site parking behind our secure red gated perimeter wall, offering peace of mind for guests traveling with personal vehicles.",
      icon: "Car",
      isVerified: true,
      image: "/images/hotel/exterior-facade.jpg",
    },
    {
      id: "wifi",
      title: "Complimentary Wi-Fi",
      category: "hotel",
      description:
        "Stay seamlessly connected in your room and common areas for remote work, streaming, and messaging throughout your stay.",
      icon: "Wifi",
      isVerified: true,
      image: "/images/hotel/room-business-executive.jpg",
    },
    {
      id: "pool",
      title: "Outdoor Swimming Pool",
      category: "hotel",
      description:
        "Refresh and unwind in our on-site outdoor pool, complete with stainless steel entry rails, safety rings, poolside lounge seating, shade umbrellas, and a relaxing terrace dining area.",
      icon: "Waves",
      isVerified: true,
      image: "/images/hotel/pool-outdoor.jpg",
    },
    {
      id: "fitness",
      title: "Fully Equipped Fitness Centre",
      category: "hotel",
      description:
        "Maintain your training regime in our spacious fitness facility, featuring treadmills, elliptical machines, weight stations, cable rigs, a boxing bag, spin bike, and dedicated stretching zone.",
      icon: "Dumbbell",
      isVerified: true,
      image: "/images/hotel/fitness-center-treadmills.jpg",
    },
    {
      id: "games",
      title: "Games & Entertainment Lounge",
      category: "hotel",
      description:
        "Enjoy recreational downtime in our dedicated games lounge featuring a full-size blue table tennis table, lounge seating, gold drape accents, large-screen entertainment wall, and air conditioning.",
      icon: "Gamepad2",
      isVerified: true,
      image: "/images/hotel/games-lounge-tv.jpg",
    },
    {
      id: "balconies",
      title: "Private Balconies",
      category: "room",
      description:
        "Enjoy fresh air and open suburban vistas from the private glass-fronted balconies featured in our Deluxe Room category.",
      icon: "Sun",
      isVerified: true,
      image: "/images/hotel/room-deluxe-balcony.jpg",
    },
    {
      id: "breakfast",
      title: "Morning Breakfast Service",
      category: "service",
      description:
        "Reported morning breakfast available for guests between 7:00 AM and 11:00 AM daily. Inquire with front desk upon check-in.",
      icon: "Coffee",
      isVerified: true,
      notes: "Listed on property directory (7:00 AM - 11:00 AM). Confirm exact menu options at reception.",
      image: "/images/hotel/exterior-facade.jpg",
    },
    {
      id: "laundry",
      title: "Laundry & Luggage Storage",
      category: "service",
      description:
        "Professional laundry handling and secure luggage holding available so you can explore Abuja unburdened.",
      icon: "Luggage",
      isVerified: true,
      image: "/images/hotel/exterior-facade.jpg",
    },
    {
      id: "terrace-patio",
      title: "Rooftop Terrace & Patio Lounge",
      category: "hotel",
      description:
        "Relax in our open-air rooftop patio featuring woven wicker armchairs, glass tables, vibrant red cushions, beverage service, and leafy garden trellis.",
      icon: "Sun",
      isVerified: true,
      image: "/images/hotel/terrace-lounge-patio.jpg",
    },
  ],
  dining: [
    {
      id: "bar-lounge",
      title: "Signature Bar & Lounge",
      category: "bar",
      subtitle: "Curated spirits, craft beverages & a warm ambient atmosphere",
      description:
        "Our in-house bar features a fully stocked back-bar displaying a curated selection of premium spirits, wines, and beverages. The granite counter, warm copper pendant lighting, and rich wood panelling create an inviting atmosphere for guests to unwind any evening.",
      image: "/images/hotel/delicacy-bar-lounge.jpg",
      isVerified: true,
    },
    {
      id: "terrace-patio-dining",
      title: "Rooftop Terrace & Patio Lounge",
      category: "bar",
      subtitle: "Open-air patio dining & chilled beverage service",
      description:
        "Enjoy breezy al fresco dining and relaxed conversation under the leafy trellis with comfortable wicker armchairs, glass-top tables, and dedicated bar service.",
      image: "/images/hotel/terrace-lounge-patio.jpg",
      isVerified: true,
    },
    {
      id: "cocktail-suya",
      title: "Signature Cocktails & Skewer Platter",
      category: "cocktail",
      subtitle: "Pineapple cooler cocktails paired with grilled suya skewers",
      description:
        "Tropical pineapple and lime cocktails served alongside expertly grilled meat skewers in our bar setting — a quintessential Nigerian evening dining experience paired with international bar standards.",
      image: "/images/hotel/delicacy-cocktail-dining.jpg",
      isVerified: true,
    },
    {
      id: "suya-rice-platter",
      title: "Chicken Suya & Savory Rice Platter",
      category: "delicacy",
      subtitle: "Skewered spiced chicken with seasoned rice & pepper gravy",
      description:
        "Tender grilled chicken skewers seasoned with traditional suya aromatics, served with a dome of golden vegetable rice, fresh carved carrots, and a rich pepper dipping sauce.",
      image: "/images/hotel/delicacy-suya-rice-platter.jpg",
      isVerified: true,
    },
    {
      id: "grilled-fish-potatoes",
      title: "Herb-Crusted Grilled Fish & Hasselback Potatoes",
      category: "delicacy",
      subtitle: "Continental gourmet fish fillet with dill & crisp potatoes",
      description:
        "Flaky, golden-crusted fish fillet garnished with fresh dill, served with crispy sliced hasselback roasted potatoes, sautéed French beans, and carved lime.",
      image: "/images/hotel/delicacy-grilled-fish-potatoes.jpg",
      isVerified: true,
    },
    {
      id: "jollof-peppersoup",
      title: "Nigerian Fried Rice & Peppersoup",
      category: "delicacy",
      subtitle: "Hearty local cuisine served in-restaurant",
      description:
        "Generously portioned Nigerian fried rice with a rich assorted meat peppersoup — fresh, flavourful, and served warm at our in-hotel restaurant. A taste of authentic Nigerian cuisine within your stay.",
      image: "/images/hotel/delicacy-jollof-peppersoup.jpg",
      isVerified: true,
    },
    {
      id: "suya-skewers",
      title: "Suya Skewers with Salad & Fries",
      category: "delicacy",
      subtitle: "Premium grilled meat skewers with garden salad",
      description:
        "Flame-grilled suya skewers loaded with seasoned beef, red onion and bell pepper, served with a crisp garden salad, golden fries and a ramekin of tomato dip — a sophisticated plated presentation.",
      image: "/images/hotel/delicacy-skewers-suya.jpg",
      isVerified: true,
    },
    {
      id: "peppered-assorted",
      title: "Peppered Assorted Meat",
      category: "delicacy",
      subtitle: "Richly seasoned Nigerian peppered meat platter",
      description:
        "Tender assorted meat cuts slow-cooked in a deep, richly spiced pepper sauce with onion rings — a bold, deeply satisfying Nigerian delicacy served as a sharing platter or main course.",
      image: "/images/hotel/delicacy-peppered-meat.jpg",
      isVerified: true,
    },
  ],
  bookingPlatforms: [
    {
      id: "direct",
      name: "Book Direct (WhatsApp)",
      url: "https://wa.me/2348079847797?text=Hello%20V%20City%20Lodge,%20I%20would%20like%20to%20reserve%20a%20room.",
      badge: "Preferred",
      isDirect: true,
    },
    {
      id: "google",
      name: "Google Hotels",
      url: "https://www.google.com/travel/hotels/entity/ChoIpP-3wt-W1O7SARoNL2cvMTF4MnBnenptMBAB",
    },
    {
      id: "agoda",
      name: "Agoda",
      url: "https://www.agoda.com/v-city-lodge-hotel-and-suites-h75678328/hotel/abuja-ng.html",
    },
    {
      id: "hotels-com",
      name: "Hotels.com",
      url: "https://www.hotels.com/ho3640732032/",
    },
    {
      id: "expedia",
      name: "Expedia",
      url: "https://www.expedia.com/Abuja-Hotels-V-City-Lodge-Hotel-And-Suites.h113741626.Hotel-Information",
    },
    {
      id: "goibibo",
      name: "Goibibo",
      url: "https://www.goibibo.com/hotels-international/v-city-lodge-and-suites-hotel-in-bwari-4300105676144834393/",
    },
    {
      id: "easemytrip",
      name: "EaseMyTrip",
      url: "https://www.easemytrip.com/hotels/v-city-lodge-hotel-and-suites-9147412/",
    },
  ],
  faqs: [
    {
      question: "Where is V City Lodge Hotel & Suite located?",
      answer:
        "We are located at Plot 209, Chief Henry Anamonye Street, Chikakore Layout, off Champion Road, Chikakore, Kubwa, Abuja, FCT, Nigeria. We offer a peaceful residential environment away from expressway traffic while remaining conveniently accessible to Kubwa central.",
    },
    {
      question: "What are the standard check-in and check-out times?",
      answer:
        "Check-in begins at 12:00 PM (Noon), and check-out is at 12:00 PM (Noon). If you require an early check-in or late checkout, please contact our 24-hour reception team in advance to verify availability.",
    },
    {
      question: "How do I make a reservation or check current room rates?",
      answer:
        "You can make a direct booking enquiry by calling our reception at +234 807 984 7797, messaging us directly on WhatsApp, or completing our online enquiry form. Our reservations desk will promptly confirm room availability and provide verified current pricing.",
    },
    {
      question: "Is secure parking available on the premises?",
      answer:
        "Yes, V City Lodge provides complimentary on-site self-parking behind our secure gated perimeter with 24-hour manned security.",
    },
    {
      question: "Do guestrooms feature private balconies?",
      answer:
        "Yes, our Deluxe Room City View With Balcony category features private balconies with contemporary glass railings overlooking the surrounding neighborhood.",
    },
    {
      question: "Are Wi-Fi and air conditioning provided in the rooms?",
      answer:
        "Yes, all guestrooms feature independent split-unit air conditioning and complimentary wireless internet access.",
    },
  ],
};
