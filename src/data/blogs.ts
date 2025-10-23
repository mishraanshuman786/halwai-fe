export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Making Perfect Gulab Jamun: A Sweet Journey",
    excerpt: "Discover the centuries-old tradition of crafting the perfect Gulab Jamun, from selecting the right khoya to achieving that melt-in-your-mouth texture.",
    content: "The journey of Gulab Jamun begins with the selection of the finest quality khoya (mawa). Master halwais spend years perfecting the art of kneading, shaping, and frying these golden spheres to achieve the perfect consistency...",
    category: "Sweet Stories",
    author: "Chef Ramesh Kumar",
    date: "2024-01-15",
    image: "https://picsum.photos/800/400",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Meet Master Halwai Sharma: 40 Years of Sweet Excellence",
    excerpt: "An exclusive interview with Delhi's legendary halwai who has been serving sweetness and joy to generations of families.",
    content: "Master Halwai Sharma's journey began in a small shop in Old Delhi. Today, his sweets grace the tables of the city's most prestigious celebrations. In this interview, he shares his secrets...",
    category: "Halwai Highlights",
    author: "Priya Malhotra",
    date: "2024-01-10",
    image: "https://picsum.photos/800/400",
    readTime: "7 min read"
  },
  {
    id: "3",
    title: "Diwali Special: Traditional Sweets That Light Up Your Celebration",
    excerpt: "Explore the most beloved traditional sweets that make Diwali celebrations extra special, from kaju katli to soan papdi.",
    content: "Diwali, the festival of lights, is incomplete without an array of traditional Indian sweets. Each sweet carries its own significance and tradition. Kaju Katli, with its diamond shape, symbolizes prosperity...",
    category: "Festival Specials",
    author: "Anjali Desai",
    date: "2024-01-05",
    image: "https://picsum.photos/800/400",
    readTime: "6 min read"
  }
];