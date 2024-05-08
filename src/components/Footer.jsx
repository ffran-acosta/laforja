import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
// import imgLine from '../assets/imgs/elements/elementos.png'

const Footer = () => {
  return (
    <footer className=" bg-black shadow-md py-10 h-64 text-3xl">

      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center hover:scale-105 duration-500 px-4">
          <a className="text-white" href="/">
            hola@laforja.gg
          </a>
        </div>

        <nav className='font-bruce-forever'>
          <ul className="flex space-x-7 tracking-wider">
            <li>
              <a href="/about-us" className="text-white tracking-wider hover:text-customLightBlue duration-500">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="/services" className="text-white hover:text-customLightBlue duration-500">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="/portfolio" className="text-white hover:text-customLightBlue duration-500">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer