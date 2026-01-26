import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
       id: 1,
       title: "Art Gallery - React Project" ,
       description: "Website for the Institute of Chicago, where is listed the artwork of the week, and the user can vote in their favorite artworks.",
       image: "/projects/ArtGallery.png",
       tags: ["React", "HTML/CSS", "JavaScript"],
       demoUrl: "",
       githubUrl: "https://github.com/Sarafont/React-Project---Art-Gallery",
    },
    {
       id: 2,
       title: "MovieCine - Angular Project" ,
       description: "This is a webpage for a fictitious movie rental business, where the user can rent movies online.",
       image: "/projects/MovieCine.png",
       tags: ["Angular", "HTML/CSS", "JavaScript"],
       demoUrl: "",
       githubUrl: "https://github.com/Sarafont/Angular-MovieCine-Project",
    },
    {
       id: 3,
       title: "Restaurant Inventory Management - Software Engineering Project" ,
       description: "This project is an application developed in Java and SQL for managing the inventory of a fictional restaurant.",
       image: "/projects/GestaoStock.png",
       tags: ["Java", "SQL", "Netbeans"],
       demoUrl: "https://www.youtube.com/watch?v=OXiiC4CCKOc",
       githubUrl: "https://github.com/Sarafont/Engenharia-de-Software",
    },
    {
       id: 4,
       title: "Tracking Monitoring of Program Execution - Operating Systems Project" ,
       description: "Project developed in the Operating Systems course unit of the Bachelor’s degree in Computer Science. ",
       image: "/projects/SO.png",
       tags: ["C"],
       demoUrl: "",
       githubUrl: "https://github.com/Sarafont/SO-TP",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
                    Projects
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Some of my projects</p>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
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
                                            >
                                                <ExternalLink size={20}/>
                                            </a>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
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
                            Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
}