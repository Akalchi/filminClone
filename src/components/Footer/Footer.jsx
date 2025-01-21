import GithubLogo from "../../assets/icons/githubLogo.svg"
export default function Footer(){


    return(
        <footer className=" bg-grayBlue text-white w-full flex justify-between items-center p-4 mt-5 h-16">
            <div> 
                <a className="flex gap-4 " href="https://github.com/Akalchi/filminClone">Reactvolutionaries<img className="w-6 h-6" src={GithubLogo} alt="Github Logo"/></a>
            </div>
            <div>
                <p>Todos los derechos reservados ©</p>
            </div>
        </footer>
    )
}

