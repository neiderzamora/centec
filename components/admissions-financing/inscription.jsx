import ButtonPaypal from "./button_paypal";

export default function Inscription() {
  return (
    <div id="inscripcion" className="overflow-hidden py-20 sm:py-32 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pb-8 lg:mx-0 lg:max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Inscripción
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            Formulario de inscription [en proceso...]
          </p>
          <form className="p-2 text-gray-600" action="">
            <input className="p-2" type="text" placeholder="Nombre completo" />
            <input
              className="p-2 ml-2"
              type="text"
              placeholder="Correo electrónico"
            />
            <input className="p-2 ml-2" type="text" placeholder="Cedula" />
          </form>
          <ButtonPaypal />
        </div>
      </div>
    </div>
  );
}
 