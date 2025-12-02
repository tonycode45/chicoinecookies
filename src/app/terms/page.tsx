import { Container } from "@/components/layout/container"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 md:py-32">
        <Container className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-12 font-serif">
            Terms & Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 font-serif">Terms of Service</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to Chicoine Cookies. By accessing our website and placing orders, you agree to these terms.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-6">Orders & Payment</h3>
              <p className="text-muted-foreground mb-4">
                All orders are subject to availability. We accept major credit cards and process payments securely through our payment providers.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-6">Shipping & Delivery</h3>
              <p className="text-muted-foreground mb-4">
                We ship within the United States. Delivery times vary by location. All cookies are baked fresh to order and shipped the same day.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-6">Returns & Refunds</h3>
              <p className="text-muted-foreground mb-4">
                If you're not completely satisfied, contact us within 48 hours of delivery. We stand behind the quality of our cookies and will make it right.
              </p>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4 font-serif">Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                Your privacy matters to us. This policy explains how we collect, use, and protect your information.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-6">Information We Collect</h3>
              <p className="text-muted-foreground mb-4">
                We collect information you provide when placing orders, creating an account, or subscribing to our newsletter. This includes your name, email, shipping address, and payment information.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-6">How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Process and fulfill your orders</li>
                <li>Send order confirmations and shipping updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 mt-6">Data Protection</h3>
              <p className="text-muted-foreground mb-4">
                We use industry-standard security measures to protect your personal information. Payment information is encrypted and processed securely through our payment providers.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-6">Cookies & Tracking</h3>
              <p className="text-muted-foreground mb-4">
                We use cookies (the digital kind!) to improve your browsing experience and analyze site traffic. You can control cookie settings in your browser.
              </p>

              <h3 className="text-xl font-semibold mb-2 mt-6">Your Rights</h3>
              <p className="text-muted-foreground mb-4">
                You have the right to access, update, or delete your personal information. You can unsubscribe from marketing emails at any time.
              </p>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4 font-serif">Contact Us</h2>
              <p className="text-muted-foreground">
                Questions about our terms or privacy policy? Reach out at{" "}
                <a href="mailto:privacy@chicoinecookies.com" className="text-primary hover:underline">
                  privacy@chicoinecookies.com
                </a>
              </p>
              <p className="text-muted-foreground mt-4 text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </Container>
      </section>
    </div>
  )
}
