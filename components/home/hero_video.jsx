export default function HeroHomeVideo() {
    return (
      <section id="hero_video" className="overflow-hidden relative -z-40 bg-white">
      <div className="mx-auto max-w-full h-auto">
        <video
          autoPlay
          loop
          muted
          className="w-full object-cover"
          >
            <source src="/home_video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    );
  }
  