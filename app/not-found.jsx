import Link from "next/link";
import { Home, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--primary)]/10 mb-6">
          <FileQuestion className="h-10 w-10 text-[var(--primary)]" />
        </div>
        <h1 className="text-6xl sm:text-7xl font-bold text-[var(--primary)]">404</h1>
        <p className="mt-2 text-xl font-semibold text-slate-700">
          Página não encontrada
        </p>
        <p className="mt-3 text-slate-600">
          O endereço que você acessou não existe ou foi movido. Volte ao início e
          continue navegando pelo {site.name}.
        </p>
        <Button asChild size="lg" variant="gradient" className="mt-8 inline-flex gap-2">
          <Link href="/">
            <Home className="h-5 w-5" />
            Voltar ao início
          </Link>
        </Button>
      </div>
    </div>
  );
}
