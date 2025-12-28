export const ContactSection = () => {
  return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
    <div className="container mx-auto max-w-5xl"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Get in <span className="text-primary">Touch</span>
        </h2>
        <div className="max-w-xl mx-auto bg-card p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-foreground font-medium mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-secondary/20 text-foreground" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-foreground font-medium mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-secondary/20 text-foreground" required />
                </div>
                <div>
                    <label htmlFor="message" className="block text-foreground font-medium mb-2">Message</label>
                    <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-foreground rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-secondary/20 text-foreground" required></textarea>
                </div>
                <div>
                    <button type="submit" className="cosmic-button bg-primary text-primary-forground hover:shadow-primary/70 w-full">Send Message</button>
                </div>
            </form>
        </div>
    </section>;
}
