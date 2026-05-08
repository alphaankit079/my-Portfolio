import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      alert("Message Sent Successfully!");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project idea or want to collaborate?
            Feel free to contact me anytime.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="text-primary" />
              </div>

              <div>
                <h4 className="font-medium mb-1">
                  Email
                </h4>

                <a
                  href="mailto:ankit.singh28112011@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ankit.singh28112011@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="text-primary" />
              </div>

              <div>
                <h4 className="font-medium mb-1">
                  Phone
                </h4>

                <a
                  href="tel:+917903908743"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 7903908743
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="text-primary" />
              </div>

              <div>
                <h4 className="font-medium mb-1">
                  Location
                </h4>

                <p className="text-muted-foreground">
                  Delhi, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-card border border-border rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>

                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>

                <textarea
                  required
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}

                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};