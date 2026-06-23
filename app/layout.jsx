import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { StructuredData } from "@/components/StructuredData";
import { site, siteUrl } from "@/lib/site-config";

const title = "Essência Mind – Psicologia Clínica e Organizacional";
const description =
  "Responsabilidade nas relações entre pessoas, vida e trabalho. Atendimento psicológico para adolescentes, adultos e casais. Saúde mental e consultoria para empresas.";
const ogImage = `${siteUrl}${site.logo.main}`;

export const metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: site.name,
    title,
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: site.logo.favicon ?? site.logo.main,
    apple: site.logo.favicon ?? site.logo.main,
  },
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
        <StructuredData />
        <a
          href="#conteudo"
          className="fixed left-4 top-4 z-[100] -translate-x-[200%] rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white shadow-lg transition-transform focus:translate-x-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--primary)]"
        >
          Pular para o conteúdo
        </a>
        <div id="conteudo">{children}</div>
        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
