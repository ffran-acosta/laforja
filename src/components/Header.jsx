import logo from '../assets/imgs/logo/logo.png';

const Header = () => {
    return (
        <header className=" bg-black shadow-md py-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center px-">
                    <img src={logo} alt="Logo" className=" h-16" />
                </div>

                <nav className='font-bruce-forever'>
                    <ul className="flex space-x-3">
                        <li><a href="/about-us" className="text-white hover:text-gray-800">Nosotros</a></li>
                        <li><a href="/services" className="text-white hover:text-gray-800">Servicios</a></li>
                        <li><a href="/portfolio" className="text-white hover:text-gray-800">Portfolio</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;