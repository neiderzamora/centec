import ButtonPaypal from "./button_paypal";
import PaymentForm from "./payment_method";

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
          <div className="max-w-3xl">
            <form
              className="p-2 text-gray-600 grid grid-cols-1 lg:grid-cols-3 gap-4"
              action=""
            >
              <input
                className="p-2"
                type="text"
                placeholder="Nombre completo"
              />
              <input
                className="p-2 "
                type="text"
                placeholder="Correo electrónico"
              />
              <input className="p-2" type="text" placeholder="Cedula" />
              <PaymentForm/>
              <select className="" name="" id="">
                <option value="">Posee un Subsidio?</option>
                <option value="">Si</option>
                <option value="">No</option>
              </select>
              <select className="p-2" name="" id="">
                <option value="">Seleccione plan de financiación</option>
                <option value="">Plan uno</option>
                <option value="">Plan dos</option>
              </select>
            </form>
            <ButtonPaypal />
          </div>
        </div>
      </div>
    </div>
  );
}
