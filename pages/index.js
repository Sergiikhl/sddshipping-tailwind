export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="text-center space-y-4">
          <img src="/logo.png" alt="SDD Shipping Logo" className="mx-auto w-48 h-auto" />
          <h1 className="text-5xl font-semibold tracking-tight">SDD Shipping Ltd</h1>
          <p className="text-xl text-gray-600">Maritime Solutions & Global Cargo Transport</p>
        </header>

        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed">
              SDD Shipping Ltd is a trusted general cargo shipping company with years of
              experience in the Black Sea, Mediterranean, and international trade routes.
              We offer reliable vessel operations, professional chartering services, and efficient cargo handling.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Voyage and time chartering</li>
              <li>Bulk and general cargo transport</li>
              <li>Ship management and technical services</li>
              <li>Port agency and logistics coordination</li>
            </ul>
          </div>
        </section>

        <section className="max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center">Send a Message</h2>
          <form action="https://formspree.io/f/xpzgrzdz" method="POST" className="space-y-4">
            <input name="name" type="text" placeholder="Your Name" required className="w-full border border-gray-300 rounded px-4 py-2" />
            <input name="email" type="email" placeholder="Your Email" required className="w-full border border-gray-300 rounded px-4 py-2" />
            <textarea name="message" placeholder="Your Message" rows="5" required className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
            <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">Send</button>
          </form>
        </section>

        <footer className="border-t pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SDD Shipping Ltd. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
