export default function HeroSchool() {
  return (
    <section id="HeroSchool" className="overflow-hidden bg-white">
      <div className="mx-auto max-w-full">
        <video
          autoPlay
          loop
          muted
          className="lg:w-full h-full lg:h-[40rem] object-cover"
        >
          <source src="/home_video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
