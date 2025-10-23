import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                Welcome to Halwaiwala.In (we , our , us). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Event details and preferences</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Connect you with verified halwais and catering services</li>
                <li>Process and manage your inquiries and bookings</li>
                <li>Communicate with you about our services</li>
                <li>Improve our platform and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">4. Information Sharing</h2>
              <p>
                We may share your information with halwais and catering partners to fulfill your service requests. We do not sell your personal information to third parties. We may disclose your information when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">7. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our platform. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">8. Childrens Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the Last updated date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-3">10. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <ul className="list-none space-y-2 mt-4">
                <li>Email: support@halwaiwala.in</li>
                <li>Phone: +91 9811820494</li>
              </ul>
            </section>

            <section className="pt-8 border-t border-border">
              <p className="text-sm">
                By using Halwaiwala.In, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Privacy;