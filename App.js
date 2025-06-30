export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Cutting Edge SC Solutions</h1>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md">
            Get a Quote
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Precision Logistics. Unmatched Solutions.</h2>
        <p className="text-lg max-w-2xl mx-auto">Streamlining supply chains with reliability, innovation, and a customer-first approach.</p>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-blue-600 text-4xl mb-2">🚚</div>
            <h3 className="text-xl font-semibold">Fast & Reliable</h3>
            <p>Logistics that meet your deadlines, every time.</p>
          </div>
          <div>
            <div className="text-blue-600 text-4xl mb-2">🧠</div>
            <h3 className="text-xl font-semibold">Smart Solutions</h3>
            <p>Customized strategies tailored to your supply chain.</p>
          </div>
          <div>
            <div className="text-blue-600 text-4xl mb-2">🌍</div>
            <h3 className="text-xl font-semibold">Global Reach</h3>
            <p>Cross-border capabilities to keep you moving.</p>
          </div>
          <div>
            <div className="text-blue-600 text-4xl mb-2">🤝</div>
            <h3 className="text-xl font-semibold">Client Focused</h3>
            <p>Service built around your goals and growth.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">
            Founded by Earl Ullbricht, Cutting Edge SC Solutions is dedicated to advancing logistics with innovative thinking and customer-first strategies. We are proudly South African, delivering service excellence across the country and beyond.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Logistics Consulting</h3>
              <p>Expert guidance to optimize your supply chain efficiency and strategy.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Transport Coordination</h3>
              <p>End-to-end planning and execution for local and international transport.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Supply Chain Optimization</h3>
              <p>Reduce costs, improve performance, and enhance reliability with tailored solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-xl" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-xl" />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-xl" />
            <textarea placeholder="Your Message" rows="5" className="w-full p-3 border border-gray-300 rounded-xl"></textarea>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to streamline your supply chain?</h2>
        <p className="mb-6">Let’s chat about how we can help. Reach out for a custom quote or consultation.</p>
        <button className="bg-white text-orange-500 font-semibold py-2 px-6 rounded-xl shadow-lg hover:bg-gray-100">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Cutting Edge SC Solutions. All rights reserved.
      </footer>
    </div>
  );
}
