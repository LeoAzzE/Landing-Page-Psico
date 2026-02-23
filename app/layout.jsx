import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata = {
  title: "Essência Mind – Psicologia Clínica e Organizacional",
  description:
    "Responsabilidade nas relações entre pessoas, vida e trabalho. Atendimento psicológico para adolescentes, adultos e casais. Saúde mental e consultoria para empresas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
