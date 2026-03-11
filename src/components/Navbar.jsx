import { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "./ThemeToggle";

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
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            const scrollY = window.scrollY;

            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = "0";
            document.body.style.right = "0";
            document.body.style.width = "100%";
        } else {
            const scrollY = document.body.style.top;

            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.width = "";

            if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
            }
        }

        return () => {
            const scrollY = document.body.style.top;

            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.width = "";

            if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
            }
        };
    }, [isMenuOpen]);

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

                {/* Versão mobile - botão */}
                {!isMenuOpen && (
                    <button 
                        onClick={() => setIsMenuOpen(true)} 
                        className="md:hidden p-2 text-foreground z-50"
                        aria-label="Open Menu"
                    >
                        <Menu size={24} />
                    </button>
                )}

                { /* Versão mobile menu*/}
                <div className={cn(
                    "fixed inset-0 z-40 md:hidden bg-background overflow-y-auto",
                    "transition-all duration-300",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                >
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 right-6 text-foreground z-50"
                        aria-label="Close Menu"
                    >
                        <X size={28} />
                    </button>
                    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
                        <div className="flex flex-col space-y-8 text-xl items-center">
                        {navItems.map((item) => (
                            <a
                            key={item.key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            {t(`nav.${item.key}`)}
                            </a>
                        ))}

                        <div className="pt-4 flex items-center gap-4">
                            <button
                            onClick={() => changeLanguage("en")}
                            className={cn(
                                "flex items-center gap-2 px-3 py-2 rounded-full border transition-colors",
                                current === "en"
                                ? "border-primary text-primary"
                                : "border-border text-foreground/80"
                            )}
                            >
                            <img src="/en.png" alt="English" className="w-5 h-5 rounded-sm" />
                            EN
                            </button>

                            <button
                            onClick={() => changeLanguage("pt")}
                            className={cn(
                                "flex items-center gap-2 px-3 py-2 rounded-full border transition-colors",
                                current === "pt"
                                ? "border-primary text-primary"
                                : "border-border text-foreground/80"
                            )}
                            >
                            <img src="/pt.png" alt="Português" className="w-5 h-5 rounded-sm" />
                            PT
                            </button>
                        </div>

                        <div className="pt-2 flex flex-col items-center gap-2">
                            <ThemeToggle className="p-2 bg-primary/10" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}