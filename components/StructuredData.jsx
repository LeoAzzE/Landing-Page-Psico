import { site, siteUrl, contact } from "@/lib/site-config";

export function StructuredData() {
  const telephone = contact.whatsappDigits || contact.whatsapp?.replace(/\D/g, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.slogan,
    url: siteUrl,
    image: `${siteUrl}${site.logo.main}`,
    ...(contact.email && !contact.email.includes("inserir") && { email: contact.email }),
    ...(telephone && { telephone: `+55 ${telephone}` }),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    ...(contact.cnpj && { taxID: contact.cnpj }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
