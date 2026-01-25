"use client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { z } from "zod";
import EnquiryForm from "@/components/ui/EnquiryForm";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^[0-9]{10}$/, "Phone must be exactly 10 digits"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Enquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    try {
      // Validate form data
      const validated = contactSchema.parse(formData);
      setIsSubmitting(true);

      // Prepare WhatsApp message with proper encoding
      const message = `*New Contact Form Submission*%0A%0A*Name:* ${encodeURIComponent(validated.name)}%0A*Email:* ${encodeURIComponent(validated.email)}%0A*Phone:* ${encodeURIComponent(validated.phone)}%0A*Message:* ${encodeURIComponent(validated.message)}`;
      
      // Open WhatsApp
      window.open(`https://wa.me/919811820494?text=${message}`, '_blank');

      toast({
        title: "Message sent!",
        description: "We'll get back to you soon via WhatsApp.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form for errors.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-accent to-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 animate-fade-up">
            Halwaiwala.in
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto animate-fade-up">
            Looking for a trusted halwai for your next big event?
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Event <span className="text-gradient">Enquiry</span>
                </h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of these channels. Were here to help make your celebration perfect!
                </p>
              </div>

             
            </div>

           

        
          </div>
           <EnquiryForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Enquiry;