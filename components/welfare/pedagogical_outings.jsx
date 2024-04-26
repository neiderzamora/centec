import Image from "next/image";

const INF = [
    {
      data: "En CENTEC, creemos en la importancia de aprender más allá de las paredes del aula. Nuestras Salidas Pedagógicas ofrecen a nuestros estudiantes la oportunidad de explorar el mundo real y enriquecer su aprendizaje a través de experiencias prácticas y enriquecedoras.",
    },
    {
      data: "Nuestro programa de Salidas Pedagógicas está diseñado para llevar el currículo fuera del aula y conectar a los estudiantes con el entorno que los rodea. Ya sea visitando museos, empresas locales, sitios históricos o participando en actividades al aire libre, estas salidas ofrecen una forma única de aprender y comprender el mundo de manera práctica y significativa.",
    },
    {
      data: "A través de nuestras Salidas Pedagógicas, los estudiantes tienen la oportunidad de desarrollar habilidades de observación, pensamiento crítico y trabajo en equipo, mientras exploran nuevos lugares, culturas y perspectivas. Estas experiencias no solo enriquecen su aprendizaje académico, sino que también contribuyen a su crecimiento personal y desarrollo integral.",
    },
    {
        data: "Únete a nosotros mientras llevamos el aprendizaje más allá del aula a través de nuestras emocionantes Salidas Pedagógicas en CENTEC. ¡Descubre cómo puedes ampliar tus horizontes y enriquecer tu educación con nosotros!",
      },
  ];

const IMAGES = [
  {
    url: "/groupThree.webp"
  },
  {

    url: "/groupThree_2.webp"
  },
]

export default function PedagogicalOutings() {
  return (
    <div
      id="salidas-pedagogicas"
      className="overflow-hidden bg-primaryBlue py-20 sm:py-32 lg:py-32"
    >
      <div className="mx-auto max-w-7xl flex justify-end px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div class="lg:block relative hidden mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 my-auto">
          {IMAGES.map((item, index) => (
                <div key={index} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <Image
                      height={500}
                      width={500}
                      src={item.url}
                      alt="salida pedagogica"
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </div>
              ))}
          </div>
          <div class="mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6 my-auto">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Salidas Pedagógicas
            </h2>
            {INF.map((item, index) => (
              <ul
                key={index}
                className="space-y-4 text-lg my-2 font-normal text-gray-100"
              >
                <li className="flex items-center space-x-2 p-2 text-lg lg:text-xl text-gray-300 text-justify">
                  {item.data}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
