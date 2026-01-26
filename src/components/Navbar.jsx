import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';

//Objeto com uma lista de link da navbar
const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false); //para guardar se está ou não a ser scrolled na página, para mudar a aparência da navbar
    //A ideia é depois de fazer scroll, a navbar fica fixa e tem uma certa transparência
    const [isMenuOpen, setIsMenuOpen] = useState(false); //controla se temos a menu da mobile aberta 

    //Event listener para detetar se fizemos scroll 
    useEffect(() => {
        const handleScroll = () => { //função chamada sempre que fazemos scroll
            setIsScrolled(window.screenY > 10);
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
                            {item.name}
                        </a>
                    ))}
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
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
              
            </div>
        </nav>
    )
}