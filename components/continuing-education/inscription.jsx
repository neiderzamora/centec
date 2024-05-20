import FormPayU from "@/components/_payU/payU";
import { DSC } from "@/utils/payU/product_continuing_education";

export default function Inscription() {
  return (
    <div id="inscripcion" className="overflow-hidden py-20 sm:py-32 lg:py-32 bg-gradient-to-t from-secondaryDarkBlue to-primaryBlue/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl pb-8 lg:mx-0 lg:max-w-3xl">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Inscripción
          </h2>
          <div className="max-w-3xl">
            <FormPayU 
            centecSelect={DSC}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
