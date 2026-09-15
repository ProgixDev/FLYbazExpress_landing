import LegalLayout from "../legal-layout";

export const metadata = {
  title: "Mentions légales — Flybaz Express",
  description: "Informations légales relatives à l'éditeur et l'hébergement de Flybaz Express.",
};

const SECTIONS = [
  {
    heading: "Éditeur de l'application",
    body: "Flybaz Express — [Raison sociale légale à compléter], immatriculée sous le numéro [numéro d'entreprise à compléter], dont le siège est situé à [adresse à compléter]. Site web : flybaz.ca.",
  },
  {
    heading: "Contact",
    body: "Email : contact@flybaz.ca\nTéléphone / WhatsApp : +1 438-998-2900",
  },
  {
    heading: "Directeur de la publication",
    body: "[Nom du responsable légal à compléter]",
  },
  {
    heading: "Hébergement",
    body: "Base de données, authentification et stockage de fichiers : Supabase Inc.\nDistribution de l'application mobile : Expo / EAS (Expo Application Services).\nHébergement du site web et du nom de domaine flybaz.ca : Hostinger.\nMessagerie électronique professionnelle : Zoho Mail.",
  },
  {
    heading: "Propriété intellectuelle",
    body: "L'ensemble des éléments constituant l'Application et le présent site (logo, charte graphique, textes, code source) est la propriété exclusive de l'exploitant de Flybaz Express, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, sans autorisation préalable est interdite.",
  },
  {
    heading: "Médiation et litiges",
    body: "En cas de litige, l'utilisateur est invité à contacter le support de Flybaz Express avant toute action en justice, afin de rechercher une solution amiable. À défaut d'accord, les tribunaux compétents seront ceux du lieu d'établissement de l'exploitant de l'Application [juridiction à préciser].",
  },
];

export default function MentionsLegales() {
  return <LegalLayout title="Mentions légales" updatedAt="15 septembre 2026" sections={SECTIONS} />;
}
