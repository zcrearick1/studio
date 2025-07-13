import { Music2 } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Music2 className="h-6 w-6 text-primary" />
      <span className="font-bold text-lg text-primary font-headline">Maestro</span>
    </div>
  );
}
