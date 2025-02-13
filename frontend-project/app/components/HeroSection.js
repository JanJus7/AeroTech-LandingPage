import SocialShare from "./SocialShare";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-800 via-purple-800 to-indigo-900">
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
        <SocialShare />
      </div>
    </section>
  );
}
