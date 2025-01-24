import FilminLogo from "../../assets/img/filminLogo.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-gradient-to-b from-black to-grayBlue w-full h-32 sm:h-16 fixed top-0 left-0 z-10">
            <div className="flex flex-col sm:flex-row items-center px-4 sm:px-12">
                <img className="w-16 h-16 mb-4 sm:mb-0" src={FilminLogo} alt="Filmin Logo" />
                <nav>
                    <ul className="text-lg flex gap-8 sm:gap-12 sm:ml-10">
                        <li className="hover:text-filminGreen transition-colors duration-300 cursor-pointer">
                            <Link to="/">Inicio</Link>
                        </li>
                        <li className="hover:text-filminGreen transition-colors duration-300 cursor-pointer">
                            <Link to="/peliculas">Películas</Link>
                        </li>
                        <li className="hover:text-filminGreen transition-colors duration-300 cursor-pointer">
                            <Link to="/series">Series</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

