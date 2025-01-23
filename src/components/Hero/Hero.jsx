import Cine from "../../assets/img/cine.png"
export default function Hero(){

    return(
<section className="bg-gradient-to-b from-grayBlue to-dark w-full h-full flex justify-center items-center p-10">

  <div className="w-2/3 flex justify-center pl-20">
    <h1 className="font-bold text-6xl tracking-wide leading-relaxed text-gray-100 drop-shadow-lg">
      Existimos porque el cine nos cambió la vida
    </h1>
  </div>

  <div className="w-1/3 flex justify-center">
    <img 
      src={Cine} 
      alt="Cine" 
      className="w-60 h-60 opacity-80"
    />
  </div>
</section>

    )
}
