import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactForm() {
  return (
    <>
      {/* Form + Map */}
      <section className="py-12 md:py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* LEFT — Contact Form */}
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Send us a Message
              </h2>
              <form
                action="https://formspree.io/f/xkoeqeek"
                method="POST"
                className="flex-1 space-y-4 bg-background p-6 md:p-8 rounded-lg border border-border"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground bg-background text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-colors inline-flex items-center justify-center gap-2 text-sm"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>

            {/* RIGHT — Google Map */}
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Find Us</h2>
              <div className="flex-1 min-h-100 rounded-lg overflow-hidden border border-border shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5893937!2d72.84698!3d19.2986561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1a3171b207b:0x2e4e256490d5e8f3!2sG%20Designer%20House!5e0!3m2!1sen!2sin!4v1716547200000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-12 md:py-16 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 border border-border rounded-lg text-center hover:border-foreground transition-colors">
              <MapPin className="w-6 h-6 mx-auto mb-3 text-accent" />
              <h3 className="text-base font-bold mb-2">Office Location</h3>
              <p className="text-muted-foreground text-sm">1&2 Narayan Smruti</p>
              <p className="text-muted-foreground text-sm">Temba Hospital Road</p>
              <p className="text-muted-foreground text-sm">Bhayandar (West) 401101</p>
            </div>

            <div className="p-6 border border-border rounded-lg text-center hover:border-foreground transition-colors">
              <Phone className="w-6 h-6 mx-auto mb-3 text-accent" />
              <h3 className="text-base font-bold mb-2">Phone</h3>
              <a href="tel:+918879464416" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">
                8879464416
              </a>
              <a href="tel:+919324590880" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">
                9324590880
              </a>
            </div>

            <div className="p-6 border border-border rounded-lg text-center hover:border-foreground transition-colors">
              <Mail className="w-6 h-6 mx-auto mb-3 text-accent" />
              <h3 className="text-base font-bold mb-2">Email</h3>
              <a href="mailto:contact@gdesignerhouse.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                contact@gdesignerhouse.com
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}