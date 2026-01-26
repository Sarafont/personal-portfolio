import { useEffect, useState } from "react";
import Dark_mode from "../assets/dark_mode.png";
import Light_mode from "../assets/light_mode.png";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); 

    /*
    Apesar de guardar o tema no localStorage, se ele fizer refresh ele vai buscar o default na mesma! Por isso, para além de guardar 
    o tema escolhido no localStorage, é preciso lê-lo quando o componente é montado (após o 1º render), de forma a mostrar 
    esse componente com o ultimo tema guardado em theme no localStorage. 
    */
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light"); 
            setIsDarkMode(false); 
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode) { //se estiver escuro
            document.documentElement.classList.remove("dark"); //aplicar o styling definido em dark no index.css
            localStorage.setItem("theme", "light"); //para quando fizer refresh recordar a alteração de tema
            setIsDarkMode(false); //pomos a claro (escuro falso)
        } else { // se estiver claro
            document.documentElement.classList.add("dark"); //aplicar o styling definido em dark no index.css
            localStorage.setItem("theme", "dark"); //para quando fizer refresh recordar a alteração de tema
            setIsDarkMode(true); // pomos escuro
        }
    }

    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 rounded-full transition-colors duration-300",
                "focus:outlin-hidden"
            )}>
            {isDarkMode ?  <img src={Light_mode} alt="light_mode" className="h-5 w-auto"/> : <img src={Dark_mode} alt="dark_mode" className="h-4 w-auto"/>}
        </button>
    )
}