import { ExperienceTimeline } from "./Experience";
import { Academic } from "./Academic";
import { Github, Linkedin } from "lucide-react";

export const About = () => {
    const experiences = [
        { date: "2019", role: "Content insertion", company: "Global Skillmind" },
        { date: "2022", role: "Full Stack Developer", company: "Cesium Summer Camp - UMinho" },
        { date: "2022–2023", role: "Sales Assistant", company: "Inditex Lda" },
        { date: "2024–2025", role: "Full Stack Developer - Curricular internship", company: "Accenture" },
        { date: "2025–Current", role: "Front-end Developer - Internship", company: "Accenture" },
    ];

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    {/* Percurso académico */}
                    <div className="space-y-6 ">
                        <h3 className="text-2xl underline font-semibold">Academic background</h3>
                        <Academic/>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="initial-button">
                                Get in touch
                            </a>
                            <a 
                                href="/CV_SaraFontes.pdf" 
                                //download
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                View my CV
                            </a>
                        </div>
                    </div>

                    {/* Experiencia Profissional */}
                    <div>
                        <h3 className="text-2xl underline font-semibold mb-6">Experience</h3>
                        <ExperienceTimeline experiences={experiences} />
                    </div>
                </div>
            </div>
        </section>
    )
}