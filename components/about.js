// components/About.js
function About() {
  return (
    <section className=" bg-[#0c162a] text-white py-20 px-4 md:px-0 z-10 w-full rounded-md mt-20">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Smart dosage tracking
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-slate-400">
          RadTrack is a state-of-the-art platform designed to track radiation
          doses across facilities. Leveraging the power of modern technology, we
          provide seamless integration and real-time monitoring to ensure safety
          and compliance. Our mission is to revolutionize radiation tracking,
          making it more efficient, accurate, and user-friendly.
        </p>
      </div>
    </section>
  );
}

export default About;
