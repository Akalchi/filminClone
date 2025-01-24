import Cine from "../../assets/img/cine.png"

export default function Hero() {
  return (
    <section className="w-full h-full flex flex-col sm:flex-row justify-center items-center p-6 sm:p-10">
      <div className="w-full sm:w-2/3 flex justify-center sm:pl-20 mb-6 sm:mb-0">
        <h1 className="font-bold text-4xl sm:text-6xl tracking-wide leading-relaxed text-gray-100 drop-shadow-lg text-center sm:text-left">
          Existimos porque el cine nos cambió la vida
        </h1>
      </div>

      <div className="w-full sm:w-1/3 flex justify-center">
        <img
          src={Cine}
          alt="Cine"
          className="w-40 h-40 sm:w-60 sm:h-60 opacity-80"
        />
      </div>
    </section>
  )
}
