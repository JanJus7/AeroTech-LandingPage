export default function HeroSection() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The Future of Aviation with{" "}
          <span className="text-blue-400">AeroTech</span>
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Innovative solutions for the aviation industry – safer, faster, more
          efficient.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
