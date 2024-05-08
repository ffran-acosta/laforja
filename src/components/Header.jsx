import logo from '../assets/imgs/logo/logo.png';

const Header = () => {
    return (
        <header className=" bg-black shadow-md py-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center px-">
                    <a href="/">
                        <img src={logo} alt="Logo" className=" h-16" />
                    </a>
                </div>

                <nav className='font-bruce-forever'>
                    <ul className="flex space-x-5 tracking-wider">
                        <li><a href="/about-us" className="text-white tracking-wider hover:text-customLightBlue duration-300">Nosotros</a></li>
                        <li><a href="/services" className="text-white hover:text-customLightBlue duration-300">Servicios</a></li>
                        <li><a href="/portfolio" className="text-white hover:text-customLightBlue duration-300">Portfolio</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;