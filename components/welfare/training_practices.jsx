const INF = [
  {
    data: "En CENTEC, reconocemos que el aprendizaje va más allá del aula. Por eso, estamos comprometidos con el desarrollo integral de nuestros estudiantes a través de nuestras Prácticas Formativas. Estas prácticas ofrecen oportunidades únicas para adquirir experiencia práctica, desarrollar habilidades laborales y explorar pasiones en un entorno real de trabajo.",
  },
  {
    data: "Nuestro programa de Prácticas Formativas está diseñado para brindar a los estudiantes la oportunidad de aplicar sus conocimientos en situaciones del mundo real, mientras reciben orientación y apoyo de profesionales experimentados. Ya sea a través de pasantías, proyectos de investigación o experiencias de trabajo voluntario, nuestras prácticas formativas están diseñadas para preparar a los estudiantes para el éxito en su futuro laboral.",
  },
  {
    data: "Únete a nosotros mientras transformamos el aprendizaje en acción a través de nuestras Prácticas Formativas en CENTEC. ¡Descubre cómo puedes dar forma a tu futuro mientras contribuyes al crecimiento y desarrollo de nuestra comunidad!",
  },
];

export default function TrainingPractices() {
  return (
    <div
      id="practicas-formativas"
      className="overflow-hidden bg-secondaryDarkBlue py-20 sm:py-32 lg:py-32"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Prácticas Formativas
          </h2>

          <div class="mx-auto lg:col-span-7 lg:pt-6 xl:col-span-6 my-auto">
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
