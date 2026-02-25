import { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { useTranslation } from "react-i18next";

//Objeto com uma lista de link da navbar
const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
];

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const current = i18n.language?.startsWith("en") ? "en" : "pt";

    const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    setIsLangOpen(false);
    };

    const dropDownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
            setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const [isScrolled, setIsScrolled] = useState(false); //para guardar se está ou não a ser scrolled na página, para mudar a aparência da navbar
    //A ideia é depois de fazer scroll, a navbar fica fixa e tem uma certa transparência
    const [isMenuOpen, setIsMenuOpen] = useState(false); //controla se temos a menu da mobile aberta 

    //Event listener para detetar se fizemos scroll 
    useEffect(() => {
        const handleScroll = () => { //função chamada sempre que fazemos scroll
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                {/* Logo do portfolio */}
                <a className="text-xl font-bold text-foreground flex items-center" href="#home">
                    <span className="relative z-10"> Sara Fontes </span>
                </a>

                {/* Versão desktop */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {t(`nav.${item.key}`)}
                        </a>
                    ))}

                    {/* Mudança de língua */}
                    <div className="relative mt-1">
                        <button
                            onClick={() => setIsLangOpen((prev) => !prev)}
                            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                        >
                            <img
                            src={current === "en" ? "/en.png" : "/pt.png"}
                            alt="Language"
                            className="w-5 h-5 rounded-sm"
                            />
                        </button>

                        {isLangOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-background border rounded-md shadow-lg z-50">
                            <button
                                onClick={() => changeLanguage("en")}
                                className="flex items-center gap-2 w-full px-3 py-2 hover:bg-muted transition-colors"
                            >
                                <img src="/en.png" alt="English" className="w-5 h-5 rounded-sm" />
                                English
                            </button>

                            <button
                                onClick={() => changeLanguage("pt")}
                                className="flex items-center gap-2 w-full px-3 py-2 hover:bg-muted transition-colors"
                            >
                                <img src="/pt.png" alt="Português" className="w-5 h-5 rounded-sm" />
                                Português
                            </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Versão mobile */}
                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

                <div className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}    
                            >
                                {t(`nav.${item.key}`)}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}