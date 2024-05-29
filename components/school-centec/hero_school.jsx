export default function HeroSchool() {
  return (
    <section id="HeroSchool" className="overflow-hidden relative -z-40 bg-white">
      <div className="mx-auto max-w-full h-auto">
        <video
          autoPlay
          loop
          muted
          className="w-full object-cover"
        >
          <source src="/school_centec.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
