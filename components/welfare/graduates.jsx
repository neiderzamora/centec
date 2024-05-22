import Image from "next/image";

const INF = [
  {
    data: "En CENTEC, consideramos a nuestros egresados como parte fundamental de nuestra comunidad. Valoramos su contribución y éxito en el mundo laboral y personal, y nos enorgullece seguir siendo parte de su viaje incluso después de graduarse.",
  },
  {
    data: "Nuestra sección de Egresados está dedicada a mantener vínculos sólidos con nuestros graduados, ofreciendo oportunidades de crecimiento profesional, desarrollo personal y conexión continua con la comunidad CENTEC. Nos esforzamos por mantener una red activa y vibrante de egresados, donde puedan compartir experiencias, colaborar en proyectos y seguir aprendiendo y creciendo juntos.",
  },
  {
    data: "Únete a nosotros mientras celebramos el éxito y el impacto duradero de nuestros egresados en CENTEC. ¡Descubre cómo puedes seguir siendo parte de nuestra comunidad y contribuir al crecimiento y desarrollo continuo de nuestra institución!",
  },
];

const IMAGES = [
  {
    url: "https://educentec.edu.co/graduates/g.webp",
    alt: "egresados centec",
    css: "lg:transform lg:scale-110 lg:-rotate-6"
  },
  {
    url: "https://educentec.edu.co/graduates/g_2.webp",
    alt: "egresados centec",
    css: "lg:transform lg:scale-110 lg:rotate-6 lg:translate-x-4 lg:translate-y-10"
  },

  {
    url: "https://educentec.edu.co/graduates/g_3.webp",
    alt: "egresados centec",
    css: "lg:transform lg:scale-110 lg:rotate-12"
  },
  {
    url: "https://educentec.edu.co/graduates/g_5.webp",
    alt: "egresados centec",
    css: "lg:transform lg:-rotate-10 lg:translate-x-10"
  },
];

export default function Graduates() {
  return (
    <div
      id="egresados"
      className="overflow-hidden bg-white py-20 sm:py-32 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div class="mx-auto max-w-2xl lg:col-span-7 lg:max-w-none xl:col-span-6 my-auto">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-800">
              Egresados
            </h2>
            {INF.map((item, index) => (
              <ul
                key={index}
                className="space-y-4 text-lg my-2 font-normal text-gray-100"
              >
                <li className="flex items-center space-x-2 p-2 text-lg lg:text-xl text-gray-600 text-justify">
                  {item.data}
                </li>
              </ul>
            ))}
          </div>
          <div class="mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 my-auto">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8">
              {IMAGES.map((item, index) => (
                <div key={index} className="group">
                  <div className={`aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ${item.css}`}>
                    <Image
                      height={500}
                      width={500}
                      src={item.url}
                      alt={item.alt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
