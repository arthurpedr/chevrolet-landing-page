import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo-chevrolet.svg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const underlineHover = "relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-600 hover:after:w-full hover:after:left-0";

  const headerRef = useRef(null);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        headerRef.current.style.top = '-100px';
      } else {
        headerRef.current.style.top = '0';
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      ref={headerRef}
      id="main-header"
      className="fixed top-0 left-0 w-full bg-white text-black font-bold z-50 transition-all duration-300"
    >
      <div className="flex items-center justify-between px-6 py-4 md:justify-center">
        {/* Logo (mobile) */}
        <img src={logo} alt="logo" className="w-[100px] md:hidden" />

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-2xl">
          <li><a className={underlineHover} href="#Modelos">Veículos</a></li>
          <li><a className={underlineHover} href="#Servicos">Serviços</a></li>
          <li><img src={logo} alt="logo-chevrolet" className="h-8" /></li>
          <li><a className={underlineHover} href="#Comprar">Comprar</a></li>
          <li><a className={underlineHover} href="#Concessionárias">Concessionárias</a></li>
        </ul>

        {/* Botão menu (mobile) */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 pb-6 text-lg font-semi-bold bg-white shadow-md">
          <li><a className={underlineHover} onClick={toggleMenu} href="#Modelos">Veículos</a></li>
          <li><a className={underlineHover} onClick={toggleMenu} href="#Servicos">Serviços</a></li>
          <li><a className={underlineHover} onClick={toggleMenu} href="#Projects">Comprar</a></li>
          <li><a className={underlineHover} onClick={toggleMenu} href="#Contact">Concessionárias</a></li>
        </ul>
      )}
    </header>
  );
}

export default Header;
