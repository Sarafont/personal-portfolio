import { Github, Linkedin, Mail, Phone, Map, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
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

                    {/* MOBILE */}
                    <div className="md:hidden flex flex-col gap-6 items-center">
                        <div className="flex flex-col items-center text-center">
                            <div className="flex rounded-full gap-2 p-3 bg-primary/10 mb-2">
                                <Mail className="h-5 w-5 text-primary mt-0.5" />
                                 <h4 className="font-medium">Email</h4>
                            </div>
                            <a
                                href="mailto:sarafontes2001@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors break-all text-sm"
                            >
                                {t("contact.email")}
                            </a>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="flex rounded-full gap-2 p-3 bg-primary/10 mb-2">
                                <Map className="h-5 w-5 text-primary mt-0.5" />
                                <h4 className="font-medium">{t("contact.location")}</h4>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {t("contact.city")}
                            </p>
                        </div>
                    </div>

                    {/* DESKTOP */}
                    <div className="hidden md:flex gap-10 justify-center items-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                            <h4 className="font-medium">Email</h4>
                            <a
                                href="mailto:sarafontes2001@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                {t("contact.email")}
                            </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                <Map className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                            <h4 className="font-medium">{t("contact.location")}</h4>
                                <p className="text-muted-foreground">
                                    {t("contact.city")}
                                </p>
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

