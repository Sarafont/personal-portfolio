import { GraduationCap } from "lucide-react";

export function Academic() {
  return (
    <div className="space-y-6">

      <ol className="relative pl-16 space-y-6">
        <li className="relative">
          <div className="flex items-start gap-3">
            <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold">Bachelor&apos;s degree in Computer Science</p>
              <p className="text-sm text-muted-foreground">University of Minho</p>
              <span className="text-xs text-muted-foreground">2020–2023</span>
            </div>
          </div>
        </li>

        <li className="relative">
          <div className="flex items-start gap-3">
            <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <p className="font-semibold">Master&apos;s degree in Information Systems</p>
              <p className="text-sm text-muted-foreground">University of Minho</p>
              <span className="text-xs text-muted-foreground">2023–2025</span>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
}
