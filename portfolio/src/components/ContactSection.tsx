import { Mail, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Interested in working together or have a question?
          I’d love to connect — feel free to reach out!
        </p>

        <div className="bg-card p-8 rounded-lg shadow-lg space-y-8">
          
          {/* Email */}
          <div className="flex items-center justify-center gap-4">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <Mail size={22} />
            </div>
            <a
              href="mailto:khancock524@email.com"
              className="text-lg hover:text-primary transition-colors"
            >
              khancock524@email.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center justify-center gap-4">
            <div className="p-4 rounded-full bg-primary/10 text-primary">
              <Linkedin size={22} />
            </div>
            <a
              href="https://www.linkedin.com/in/katiehancock524"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-primary transition-colors"
            >
              linkedin.com/in/katiehancock524
            </a>
          </div>

          {/* Optional CTA */}
          <p className="text-sm text-muted-foreground pt-4">
            I’m currently open to new opportunities and collaborations.
          </p>
        </div>
      </div>
    </section>
  );
};
