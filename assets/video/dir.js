export default function Video() {
  return (
    <video autoPlay loop muted className="lg:w-full h-full lg:h-[40rem] object-cover saturate-150">
      <source src="/home_video.mp4" type="video/mp4" />
    </video>
  );
}
