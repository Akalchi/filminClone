import Albphoto from "../../assets/img/alb.jpg"
import Alephoto from "../../assets/img/ale.jpg"
import Emmphoto from "../../assets/img/emm.jpeg"
import Karphoto from "../../assets/img/kar.jpeg"
import Vicphoto from "../../assets/img/vic.jpg"
import Jesphoto from "../../assets/img/jes.jpg"

export default function Footer() {
    return (
        <footer className="w-full flex flex-col md:flex-row justify-between items-center mt-8 p-6 md:p-10 h-auto md:h-32">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <p className="font-light text-xl text-center md:text-left mb-4 md:mb-0">ReactVolutionaries</p>
                <a className="flex gap-4" href="https://github.com/Algama17" target="_blank">
                    <img className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full transition-transform transform hover:scale-110" s
                    src={Albphoto} alt="Github Alb" />
                </a>
                <a className="flex gap-4" href="https://github.com/Akalchi" target="_blank">
                    <img className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full transition-transform transform hover:scale-110" 
                    src={Alephoto} alt="Github Ale" />
                </a>
                <a className="flex gap-4" href="https://github.com/emmalanza" target="_blank">
                    <img className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full transition-transform transform hover:scale-110" 
                    src={Emmphoto} alt="Github Emm" />
                </a>
                <a className="flex gap-4" href="https://github.com/JesusEnjamio" target="_blank">
                    <img className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full transition-transform transform hover:scale-110" 
                    src={Jesphoto} alt="Github Jes" />
                </a>
                <a className="flex gap-4" href="https://github.com/karinalorenzo" target="_blank">
                    <img className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full transition-transform transform hover:scale-105" 
                    src={Karphoto} alt="Github Kar" />
                </a>
                <a className="flex gap-4" href="https://github.com/berto9675" target="_blank">
                    <img className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full transition-transform transform hover:scale-110" 
                    src={Vicphoto} alt="Github Vic" />
                </a>
            </div>
            <div className="text-center mt-4 md:mt-0">
                <p>© Todos los derechos reservados</p>
            </div>
        </footer>
    );
}
