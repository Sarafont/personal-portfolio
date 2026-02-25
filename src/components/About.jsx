import { ExperienceTimeline } from "./Experience";
import { Academic } from "./Academic";
import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const About = () => {
    const { t } = useTranslation();
    const experiences = t("about.experiences", { returnObjects: true });

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t("about.aboutLine")}{" "} <span className="text-primary">{t("about.meLine")}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    {/* Percurso académico */}
                    <div className="space-y-6 ">
                        <h3 className="text-2xl underline font-semibold">{t("about.academic")}</h3>
                        <Academic/>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="initial-button">
                                {t("about.contact")}
                            </a>
                            <a 
                                href="/CV_SaraFontes.pdf" 
                                //download
                                target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                {t("about.cv")}
                            </a>
                        </div>
                    </div>

                    {/* Experiencia Profissional */}
                    <div>
                        <h3 className="text-2xl underline font-semibold mb-6">{t("about.experience")}</h3>
                        <ExperienceTimeline experiences={experiences} />
                    </div>
                </div>
            </div>
        </section>
    )
}