const INF = [
  {
    data: "En CENTEC, la solidaridad es uno de nuestros valores fundamentales. Creemos en la importancia de apoyarnos mutuamente y construir una comunidad inclusiva y compasiva donde cada miembro pueda prosperar, independientemente de sus circunstancias socioeconómicas.",
  },
  {
    data: "Nuestros Programas de Apoyo Socioeconómico están diseñados para ofrecer ayuda y recursos a aquellos miembros de nuestra comunidad que puedan enfrentar dificultades financieras. Ya sea a través de becas, subsidios, programas de asistencia alimentaria o ayuda con necesidades básicas, nos esforzamos por brindar un apoyo sólido a aquellos que lo necesitan.",
  },
  {
    data: "En CENTEC, creemos que todos merecen la oportunidad de alcanzar su máximo potencial, y estamos comprometidos a eliminar barreras económicas para el acceso a la educación y al bienestar. Nuestros Programas de Apoyo Socioeconómico son un reflejo de nuestro compromiso con la equidad y la justicia social, y estamos orgullosos de trabajar juntos como una comunidad para hacer una diferencia en las vidas de nuestros miembros más necesitados.",
  },
  {
    data: "Únete a nosotros mientras trabajamos para construir un mundo más justo y solidario en CENTEC. ¡Descubre cómo puedes contribuir y beneficiarte de nuestros Programas de Apoyo Socioeconómico hoy mismo!",
  },
  {
    data: " ",
  },
  {
    data: "Programas de apoyo Socioeconómico",
    style: { "font-size": "1.5rem", fontWeight: "600", textColor: "white" },
  },
];

const SUB_INF = [
  {
    title: "Deportes:",
    description:
      "Por obtención de logros deportivos (Medallas) a Nivel Municipal, Departamental o Nacional, obtendrá descuento en el Semestre a cursar, así: Oro (100%), Plata (70%), Bronce (50%).",
  },
  {
    title: "Cultura:",
    description:
      "Por demostrar habilidades artísticas (Canto, Baile, Literatura, Pintura, Cuenteria, Teatro, instrumentos musicales y afines), obtendrá descuento en el Semestre entre el 10% y el 100%.",
  },
  {
    title: "Auxilios Especiales:",
    description:
      "Según estudio previo de Bienestar Institucional y aval de la Junta Directiva, al considerar las condiciones económicas, académicas o excepcionales, del estudiante, obtendrá descuento en el Semestre entre el 10% y el 100%.",
  },
  {
    title: "Incentivos Personales:",
    description:
      "Descuento de pago de contado, según plan financiero establecido semestralmente.",
  },
  {
    title: "Descuento por Núcleo familiar:",
    description:
      "Es un descuento del 15% que se otorga, al hermano que tenga el valor de la matricula más alta. Cuando son tres hermanos o más, se otorga un descuento del 15% al segundo y del 20% al tercero y de ahí en adelante el 20% para los demás. </br> Los descuentos se mantienen siempre y cuando los hermanos estén estudiando en la Institución en niveles de programas técnicos y bajo las siguientes condiciones:",
    promo: [
      {
        Ptitle: "Cuando son dos hermanos:",
        Pdescription:
          "Primer hermano se le aplica 15% del valor de la matrícula, Segundo hermano no se le aplica descuento.",
      },
      {
        Ptitle: "Cuando son tres hermanos:",
        Pdescription:
          "Primer hermano se le aplica 15% del valor de la matrícula, Segundo hermano se le aplica 20% del valor de la matrícula, Tercer hermano no se le aplica descuento.",
      },
    ],
  },
];

export default function Solidarity() {
  return (
    <div
      id="solidaridad"
      className="overflow-hidden bg-primaryBlue py-20 sm:py-32 lg:py-32"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Solidaridad
          </h2>

          <div class="mx-auto lg:col-span-7 lg:pt-6 xl:col-span-6 my-auto">
            {INF.map((item, index) => (
              <ul key={index} className="space-y-4 text-lg my-2 font-normal">
                <li
                  className="flex items-center space-x-2 p-2 text-lg lg:text-xl text-gray-100 text-justify"
                  style={item.style}
                >
                  {item.data}
                </li>
              </ul>
            ))}
          </div>
          <div class="mx-auto lg:col-span-7 xl:col-span-6 my-auto">
            {SUB_INF.map((item, index) => (
              <ul
                key={index}
                className="space-y-4 text-lg ml-2 font-normal text-gray-100"
              >
                <li className="flex items-center space-x-2 p-2 text-lg lg:text-xl text-gray-300 text-justify">
                  <span className="text-gray-200">
                    <strong>{item.title}</strong>{" "}
                    <span
                      className="text-gray-300"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </span>
                </li>

                {item.promo && (
                  <ul className="ml-6 text-gray-900 text-lg bg-slate-300/70 rounded-lg p-2">
                    {item.promo.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <span>
                          <h4 className="font-bold inline-flex text-gray-800">
                            - {subItem.Ptitle}
                          </h4>{" "}
                          <span>{subItem.Pdescription}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
