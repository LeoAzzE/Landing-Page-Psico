import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata = {
  title: "Essência Mind – Psicologia Clínica e Organizacional",
  description:
    "Responsabilidade nas relações entre pessoas, vida e trabalho. Atendimento psicológico para adolescentes, adultos e casais. Saúde mental e consultoria para empresas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[var(--background)] font-sans text-[var(--foreground)] antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
