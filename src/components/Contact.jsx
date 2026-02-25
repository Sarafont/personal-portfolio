import { Github, Linkedin, Mail, Phone, Map, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="conatainer mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {t("contact.title")}{" "}<span className="text-primary">{t("contact.title2")}</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    {t("contact.subtitle")}
                </p>

                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        {t("contact.info")}
                    </h3>

                    <div className="space-x-6 justify-center flex items-center">
                        {/*Email*/}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:sarafontes2001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    {t("contact.email")}
                                </a>
                            </div>
                        </div>
                        {/**/}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Map className="h-6 w-6 text-primary"/>
                            </div>
                            <div>
                                <h4 className="font-medium">{t("contact.location")}</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    {t("contact.city")}
                                </a>
                            </div>
                        </div>
                    </div> 

                    <div className="pt-8">
                        <h4>{t("contact.connect")}</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://pt.linkedin.com/in/sara-fontes-b930b09b?trk=public_profile_browsemap">
                                <Linkedin />
                            </a>
                            <a href="https://github.com/Sarafont">
                                <Github />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

