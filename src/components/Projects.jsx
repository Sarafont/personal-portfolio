import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Projects = () => {
    const { t } = useTranslation();
    const projects = t("projects.items", { returnObjects: true });

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
                    {t("projects.title")}
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t("projects.subtitle")}</p>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <a 
                                    href={project.image}
                                    target="_blank"
                                    className="block h-48 overflow-hidden cursor-zoom-in"
                                >
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    />
                                </a>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary border text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                        
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4"> {project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 ">
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                aria-label={t("projects.openDemo")}
                                                title={t("projects.openDemo")}
                                            >
                                                <ExternalLink size={20}/>
                                            </a>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            aria-label={t("projects.openGithub")}
                                            title={t("projects.openGithub")}
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://github.com/Sarafont"
                        target="_blank" //isto é para abrir noutra janela
                        className="initial-button w-fit flex items-center mx-auto gap-2"
                    >
                            {t("projects.ctaGithub")}<ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}