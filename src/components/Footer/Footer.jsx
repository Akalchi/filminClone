import Albphoto from "../../assets/img/alb.jpg"
import Alephoto from "../../assets/img/ale.jpg"
import Emmphoto from "../../assets/img/emm.jpeg"
import Karphoto from "../../assets/img/kar.jpeg"
import Vicphoto from "../../assets/img/vic.jpg"
import Jesphoto from "../../assets/img/jes.jpg"
export default function Footer(){


    return(
        <footer className=" bg-grayBlue text-white w-full flex justify-between items-center p-4 mt-5 h-16">
            <div className="flex flex-row gap-3"> 
                <p>Reactvolutionaries</p>
                <a className="flex gap-4 " href="https://github.com/Algama17"><img className="w-8 h-8 rounded-full" src={Albphoto} alt="Github Alb"/></a>
                <a className="flex gap-4 " href="https://github.com/Akalchi "><img className="w-8 h-8 rounded-full" src={Alephoto} alt="Github Ale"/></a>
                <a className="flex gap-4 " href="https://github.com/emmalanza"><img className="w-8 h-8 rounded-full" src={Emmphoto} alt="Github Emm"/></a>
                <a className="flex gap-4 " href="https://github.com/JesusEnjamio"><img className="w-8 h-8 rounded-full" src={Jesphoto} alt="Github Jes"/></a>
                <a className="flex gap-4 " href="https://github.com/karinalorenzo"><img className="w-8 h-8 rounded-full" src={Karphoto} alt="Github Kar"/></a>
                <a className="flex gap-4 " href="https://github.com/berto9675"><img className="w-8 h-8 rounded-full" src={Vicphoto} alt="Github Vic"/></a>
                
            </div>
            <div>
                <p>Todos los derechos reservados ©</p>
            </div>
        </footer>
    )
}

