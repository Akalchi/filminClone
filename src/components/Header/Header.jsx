import FilminLogo from "../../assets/img/filminLogo.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-gradient-to-b from-black to-grayBlue w-full flex items-center">
            <img className="w-16 h-16 ml-12" src={FilminLogo} alt="Filmin Logo" />
            <nav className="ml-10">
                <ul className="text-lg flex gap-8">
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
        </header>
    );
}
