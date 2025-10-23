// app/halwais/HalwaisClient.tsx
"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Star, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { halwais } from "@/data/halwais";

export default function HalwaisClient() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCity, setSelectedCity] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "All");

  const cities = ["All", "Delhi", "Ghaziabad", "Noida", "Greater Noida", "Meerut"];
  const categories = ["All", "Local Events", "Weddings/Engagement", "Corporate events"];

  const filteredHalwais = halwais.filter((halwai) => {
    const cityMatch = selectedCity === "All" || halwai.city === selectedCity;
    const categoryMatch = selectedCategory === "All" || halwai.categories.includes(selectedCategory);
    return cityMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* ... your full component unchanged ... */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
