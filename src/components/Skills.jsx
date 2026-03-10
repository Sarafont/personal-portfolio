import { useState } from "react";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

const skills = [
    //FE
    { name: "HTML/CSS", level:90, category:"frontend" },
    { name: "Svelte", level:65, category:"frontend" },
    { name: "React", level:70, category:"frontend" },
    { name: "Angular", level:70, category:"frontend" },
    { name: "JavaScript", level:90, category:"frontend" },
    { name: "TypeScript", level:70, category:"frontend" },
    { name: "Tailwind CSS", level:90 ,category:"frontend" },
    //BE
    { name: "Java", level:70, category:"backend" },
    { name: "Pyhton", level:80, category:"backend" },
    { name: "SQL", level:80, category:"backend" },
    { name: "MySQL", level:70, category:"backend" },
    { name: "PostgreSQL", level:70, category:"backend" },
    { name: "C", level:60, category:"backend" },
    { name: "C++", level:35, category:"backend" },
    //Tools
    { name: "Git/Github", level:35, category:"tools" },
    { name: "Scrum Agile", level:35, category:"tools" },
]

const categories = ["all", "frontend", "backend", "tools"];

export const Skills = () => {
    const { t } = useTranslation();

    const skills = t("skills.skillsList", { returnObjects: true });
    const categories = t("skills.categories", { returnObjects: true });

    //escolher categoria
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    console.log("activeCategory:", activeCategory);
    console.log("categories in skills:", skills.map(s => s.category));

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t("skills.title")}{" "}<span className="text-primary">{t("skills.title2")}</span>
                </h2>

                {/* Filtros Mobile*/}
                <div className="grid grid-cols-2 gap-3 mb-12 md:hidden">
                    {categories.map((c) => (
                        <button
                        key={c.key}
                        onClick={() => setActiveCategory(c.key)}
                        className={cn(
                            "px-4 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer text-sm",
                            activeCategory === c.key
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                        >
                        {c.label}
                        </button>
                    ))}
                </div>

                {/* Filtros Desktop*/}
                <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((c) => (
                        <button
                            key={c.key}
                            onClick={() => setActiveCategory(c.key)}
                            className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                            activeCategory === c.key
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {c.label}
                        </button>
                    ))}
                </div>

                {/* Cards Mobile*/}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:hidden">
                    {filteredSkills.map((skill, key) => (
                        <div
                        key={key}
                        className="bg-card px-2 py-2 rounded-lg shadow-xs border text-center"
                        >
                        <h3 className="font-small text-sm leading-snug break-words">
                            {skill.name}
                        </h3>
                        </div>
                    ))}
                </div>
                
                {/* Cards Desktop*/}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div> 
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{width: skill.level + "%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}