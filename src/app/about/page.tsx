import { Award, Target, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-accent to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 animate-fade-up">
            About Halwaiwala.In
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto animate-fade-up">
            Your trusted partner in creating unforgettable celebrations
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
            Our <span className="text-gradient">Story</span>
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="mb-4">
              Halwaiwala.In was born from a simple yet powerful vision: to bridge the gap between food lovers and the talented halwais who have been preserving Indias rich culinary heritage for generations.
            </p>
            <p className="mb-4">
              We understand that every celebration is unique, and finding the right caterer who understands your vision, respects your budget, and delivers exceptional quality can be challenging. Thats where we come in.
            </p>
            <p>
              Our platform connects you with verified, experienced halwais across Delhi NCR who specialize in creating authentic traditional sweets and providing comprehensive catering services. From intimate family gatherings to grand wedding celebrations, we ensure your event is nothing short of spectacular.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Our <span className="text-gradient">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality First",
                description: "We partner only with halwais who maintain the highest standards of hygiene and quality"
              },
              {
                icon: Target,
                title: "Customer Focus",
                description: "Your satisfaction is our priority. We ensure every detail meets your expectations"
              },
              {
                icon: Heart,
                title: "Authentic Tradition",
                description: "Preserving traditional recipes and cooking methods passed down through generations"
              },
              {
                icon: Users,
                title: "Trusted Network",
                description: "Building lasting relationships between customers and local artisan halwais"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-all duration-300 animate-fade-up">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
            Where We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Currently serving across major cities in Delhi NCR
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Ghaziabad", "Delhi", "Noida", "Greater Noida", "Meerut"].map((city) => (
              <Card key={city} className="hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold">{city}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Plan Your Next Event?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with our verified halwais and let us help make your celebration memorable
          </p>
          <Link href="https://wa.me/919811820494" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;