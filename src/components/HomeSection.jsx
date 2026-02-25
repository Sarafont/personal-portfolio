import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HomeSection = () => {
    const { t } = useTranslation();

    return(
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">{t("home.greetingPrefix")}{" "}</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">{t("home.firstName")}{" "}</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{t("home.lastName")}</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        {t("home.intro")}
                    </p>
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">{t("home.scroll")}</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    )
}
