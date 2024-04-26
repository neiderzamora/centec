const INF = [
  {
    data: "Bienvenidos a la sección de Bienestar Institucional de CENTEC, donde nos preocupamos por el cuidado integral de nuestra comunidad. En CENTEC, entendemos que el bienestar no solo se trata de alcanzar el éxito académico o laboral, sino también de promover la salud física, emocional y social de todos nuestros miembros.",
  },
  {
    data: "Nuestro compromiso con el bienestar se refleja en una amplia gama de programas y servicios diseñados para apoyar y fortalecer a nuestra comunidad en todos los aspectos de sus vidas. Desde programas deportivos y actividades de autocuidado hasta servicios de asesoramiento psicológico y eventos de inclusión, nos esforzamos por crear un ambiente donde todos se sientan valorados, apoyados y empoderados para alcanzar su máximo potencial.",
  },
  {
    data: "En esta sección, encontrarás información sobre los diversos programas y recursos disponibles para promover tu bienestar y el de aquellos que te rodean. Te invitamos a explorar y participar en nuestras iniciativas de bienestar, porque en CENTEC, tu salud y felicidad son nuestra prioridad.",
  },
  {
    data: "¡Bienvenidos a un espacio donde el cuidado de tu bienestar es tan importante como tu éxito académico y laboral!",
  },
];

export default function Welcome() {
  return (
    <div className="relative isolate -z-40 overflow-hidden bg-gray-900 py-12 sm:py-16 lg:py-22">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div>
          {INF.map((item, index) => (
            <ul
              key={index}
              className="space-y-4 text-lg my-2 font-normal text-gray-100"
            >
              <li className="flex items-center space-x-2 p-2 text-lg lg:text-xl">{item.data}</li>
            </ul>
          ))}
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
