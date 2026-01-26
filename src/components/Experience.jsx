export function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative">
      {/* Linha central (aparece a partir de md) */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border" />

      <ul className="space-y-10">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <li key={`${exp.date}-${exp.role}-${index}`} className="relative">
              {/* Layout desktop: 2 colunas com centro */}
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 items-start">
                {/* Coluna esquerda */}
                <div className={isLeft ? "md:text-right" : "md:order-2 md:text-left"}>
                  <div>
                    <time className="block text-sm text-muted-foreground">{exp.date}</time>
                    <div className="mt-1 font-semibold">{exp.role}</div>
                    <div className="text-sm text-muted-foreground">{exp.company}</div>

                    {exp.description ? (
                      <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                    ) : null}
                  </div>
                </div>

                {/* Coluna direita (vazia quando o card está à esquerda; e vice-versa) */}
                <div className={isLeft ? "hidden md:block" : "hidden md:block md:order-1"} />
              </div>

              {/* Dot no centro (desktop) */}
              <span className="hidden md:block absolute left-1/2 top-4 -translate-x-1/2">
                <span className="block h-4 w-4 rounded-full bg-background border-2 border-primary" />
              </span>

              {/* Dot + linha para mobile (linha à esquerda, mais simples) */}
              <div className="md:hidden relative pl-6">
                <span className="absolute left-0 top-2 h-full w-px bg-border" />
                <span className="absolute left-[-7px] top-2 h-4 w-4 rounded-full bg-background border-2 border-primary" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
