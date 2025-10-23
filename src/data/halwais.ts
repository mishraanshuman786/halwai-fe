export interface Halwai {
  id: string;
  name: string;
  city: string;
  specialties: string[];
  rating: number;
  reviews: number;
  experience: string;
  minOrder: string;
  image: string;
  description: string;
  categories: string[];
}

export const halwais: Halwai[] = [
  {
    id: "1",
    name: "Ram Lal & Sons Sweets",
    city: "Delhi",
    specialties: ["Traditional Sweets", "Wedding Catering", "Kaju Katli", "Gulab Jamun"],
    rating: 4.8,
    reviews: 156,
    experience: "25+ years",
    minOrder: "50 guests",
    image: "/api/placeholder/400/300",
    description: "Renowned for authentic Delhi-style sweets and premium wedding catering services with a legacy spanning over two decades.",
    categories: ["Weddings/Engagement", "Local Events"]
  },
  {
    id: "2",
    name: "Sharma Halwai House",
    city: "Ghaziabad",
    specialties: ["Samosas", "Jalebis", "Party Snacks", "Chaat"],
    rating: 4.6,
    reviews: 98,
    experience: "15+ years",
    minOrder: "30 guests",
    image: "/api/placeholder/400/300",
    description: "Famous for crispy samosas and authentic North Indian snacks, perfect for local celebrations and gatherings.",
    categories: ["Local Events", "Corporate events"]
  },
  {
    id: "3",
    name: "Gupta Wedding Caterers",
    city: "Delhi",
    specialties: ["Full Wedding Menu", "Live Counters", "Chaat Counter", "Dessert Bar"],
    rating: 4.9,
    reviews: 203,
    experience: "30+ years",
    minOrder: "100 guests",
    image: "/api/placeholder/400/300",
    description: "Premium wedding catering with live counters and customized menus. Trusted by Delhi's finest families for grand celebrations.",
    categories: ["Weddings/Engagement"]
  },
  {
    id: "4",
    name: "Bansal Sweets & Namkeen",
    city: "Meerut",
    specialties: ["Gazak", "Revdi", "Traditional Sweets", "Dry Fruits Sweets"],
    rating: 4.7,
    reviews: 134,
    experience: "40+ years",
    minOrder: "25 guests",
    image: "/api/placeholder/400/300",
    description: "Meerut's heritage sweet shop specializing in traditional winter sweets like gazak and revdi with authentic recipes.",
    categories: ["Local Events", "Weddings/Engagement"]
  },
  {
    id: "5",
    name: "Modern Caterers Delhi",
    city: "Delhi",
    specialties: ["Corporate Buffets", "Pan-Asian", "Continental", "Indian Fusion"],
    rating: 4.5,
    reviews: 87,
    experience: "12+ years",
    minOrder: "50 guests",
    image: "/api/placeholder/400/300",
    description: "Contemporary catering solutions for corporate events with a blend of Indian and international cuisines.",
    categories: ["Corporate events"]
  },
  {
    id: "6",
    name: "Agrawal Family Caterers",
    city: "Noida",
    specialties: ["Home-style Cooking", "Vegetarian Thali", "Dal Baati", "Rajasthani Cuisine"],
    rating: 4.8,
    reviews: 142,
    experience: "20+ years",
    minOrder: "40 guests",
    image: "/api/placeholder/400/300",
    description: "Authentic home-style cooking with a focus on traditional Rajasthani and North Indian vegetarian cuisine.",
    categories: ["Weddings/Engagement", "Local Events"]
  },
  {
    id: "7",
    name: "Singh Mithai Wala",
    city: "Greater Noida",
    specialties: ["Ras Malai", "Kalakand", "Barfi", "Ladoos"],
    rating: 4.6,
    reviews: 76,
    experience: "18+ years",
    minOrder: "30 guests",
    image: "/api/placeholder/400/300",
    description: "Specializing in milk-based sweets with hygenic preparation and fresh ingredients delivered daily.",
    categories: ["Local Events", "Weddings/Engagement"]
  },
  {
    id: "8",
    name: "Verma Events & Catering",
    city: "Ghaziabad",
    specialties: ["Party Packages", "Birthday Catering", "Theme Parties", "Kids Menu"],
    rating: 4.7,
    reviews: 118,
    experience: "10+ years",
    minOrder: "25 guests",
    image: "/api/placeholder/400/300",
    description: "Complete party solutions with themed decorations and kid-friendly menus for birthdays and celebrations.",
    categories: ["Local Events", "Corporate events"]
  }
];