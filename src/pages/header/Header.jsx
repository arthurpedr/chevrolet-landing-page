import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo-chevrolet.svg';
import "../home/Componentes/Style.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const underlineHover = "relative inline-block after:content-[''] after:absolute after:left-1/2 after:bottom-[-30%] after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-600 hover:after:w-full hover:after:left-0";

  const headerRef = useRef(null);
  const lastScrollTop = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // Oculta ou mostra o header conforme o scroll
      if (currentScroll > lastScrollTop.current) {
        headerRef.current.style.top = "-100px";
      } else {
        headerRef.current.style.top = "0";
      }

      // Aplica ou remove a classe scrolled
      if (headerRef.current) {
        if (currentScroll > 10) {
          headerRef.current.classList.add("scrolled");
        } else {
          headerRef.current.classList.remove("scrolled");
        }
      }

      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    const debouncedHandleScroll = () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(handleScroll, 50);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      ref={headerRef}
      id="main-header"
      className="fixed top-0 left-0 w-full font-bold z-50 transition-all duration-300 backdrop-blur-lg"
    >
      <div className="flex items-center justify-between px-6 py-4 md:justify-center">
        {/* Logo (mobile) */}
        <img src={logo} alt="logo" className="w-[80px] md:hidden" />

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-xl">
          <li><a className={underlineHover} href="#Modelos">Veículos</a></li>
          <li><a className={underlineHover} href="#Servicos">Serviços</a></li>
          <li><img src={logo} alt="logo-chevrolet" className="h-8" /></li>
          <li><a className={underlineHover} href="#comprar">Comprar</a></li>
          <li><a className={underlineHover} href="#Concessionarias">Concessionárias</a></li>
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
          <li><a className={underlineHover} onClick={toggleMenu} href="#comprar">Comprar</a></li>
          <li><a className={underlineHover} onClick={toggleMenu} href="#Concessionarias">Concessionárias</a></li>
        </ul>
      )}
    </header>
  );
}

export default Header;
