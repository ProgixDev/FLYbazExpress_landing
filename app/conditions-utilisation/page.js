import LegalLayout from "../legal-layout";

export const metadata = {
  title: "Conditions d'utilisation — Flybaz Express",
  description: "Conditions d'utilisation de l'application et du site Flybaz Express.",
};

const SECTIONS = [
  {
    heading: "1. Objet",
    body: "Les présentes Conditions d'utilisation régissent l'accès et l'utilisation de l'application Flybaz Express (« l'Application »), qui met en relation des voyageurs disposant d'espace disponible dans leurs bagages (« Voyageurs ») et des personnes souhaitant faire transporter un colis, des documents ou de petits appareils électroniques (« Expéditeurs »). En créant un compte ou en utilisant l'Application, vous acceptez sans réserve les présentes conditions.",
  },
  {
    heading: "2. Rôle de Flybaz Express",
    body: "Flybaz Express est une plateforme de mise en relation. Elle n'est ni transporteur, ni transitaire, ni partie au contrat de transport conclu directement entre le Voyageur et l'Expéditeur. Flybaz Express ne prend pas possession des colis, ne garantit pas leur contenu, leur état ou leur livraison, et n'intervient pas dans le paiement du prix du transport, qui est réglé directement de la main à la main entre l'Expéditeur et le Voyageur au moment de la remise du colis.",
  },
  {
    heading: "3. Inscription et compte",
    body: "L'utilisation de l'Application nécessite la création d'un compte avec une adresse email et un numéro de téléphone valides. Vous devez être majeur (ou avoir l'autorisation d'un représentant légal selon la loi applicable dans votre pays de résidence) et fournir des informations exactes. Vous êtes responsable de la confidentialité de vos identifiants et de toute activité effectuée depuis votre compte.",
  },
  {
    heading: "4. Vérification d'identité",
    body: "Pour la sécurité de tous les utilisateurs, Flybaz Express peut demander une vérification d'identité (pièce d'identité, selfie, numéro de téléphone) via des prestataires tiers spécialisés. Un compte non vérifié peut avoir un accès limité à certaines fonctionnalités. Fournir de faux documents constitue une violation grave des présentes conditions et peut entraîner la suspension immédiate du compte.",
  },
  {
    heading: "5. Frais et paiements",
    body: "Publier un trajet est soumis à des frais de mise en ligne, facturés au Voyageur au moment de la publication. Un Expéditeur doit régler des frais de mise en relation pour pouvoir contacter un Voyageur et réserver de l'espace sur un trajet donné. Ces frais sont traités par notre prestataire de paiement (Stripe) et sont non remboursables, sauf en cas d'annulation du trajet par le Voyageur (voir Article 7). Le prix du transport du colis lui-même est convenu librement entre le Voyageur et l'Expéditeur et se règle directement en main propre au moment de la remise — Flybaz Express n'intervient pas dans cette transaction et n'en perçoit aucune part.",
  },
  {
    heading: "6. Code de remise et responsabilité de la transaction",
    body: "Chaque réservation confirmée génère un code secret à 6 chiffres, communiqué uniquement à l'Expéditeur. Ce code ne doit être transmis qu'à la personne autorisée à récupérer le colis à destination. La saisie de ce code par le Voyageur vaut confirmation de la remise du colis et, le cas échéant, du règlement du prix convenu. Il appartient aux utilisateurs de vérifier l'identité de leur interlocuteur et le contenu du colis avant toute remise.",
  },
  {
    heading: "7. Annulation et remboursement",
    body: "Un Voyageur peut annuler un trajet publié. Si des réservations existent, Flybaz Express recherche un trajet similaire à proposer à l'Expéditeur concerné. À défaut de trajet similaire, les frais de mise en relation payés par l'Expéditeur pour ce trajet lui sont automatiquement remboursés. Si un trajet similaire est proposé, l'Expéditeur peut choisir de l'accepter ou de demander lui-même le remboursement de ses frais de mise en relation.",
  },
  {
    heading: "8. Colis et articles interdits",
    body: "Il est strictement interdit de faire transporter, via l'Application, des substances illégales, des armes, des matières dangereuses, de la contrefaçon, des espèces en grande quantité, ou tout objet dont le transport est prohibé par la loi du pays de départ, de transit ou de destination. Chaque utilisateur est seul responsable de la conformité du contenu transporté avec les réglementations douanières et légales applicables. Flybaz Express décline toute responsabilité en cas de non-respect de cette obligation.",
  },
  {
    heading: "9. Comportement et modération",
    body: "Les utilisateurs s'engagent à se comporter de manière respectueuse et honnête. Tout comportement frauduleux, abusif, ou toute violation des présentes conditions peut entraîner un avertissement, une suspension temporaire ou un bannissement définitif du compte, à la seule discrétion de Flybaz Express. Un système de signalement est disponible dans l'Application pour rapporter un comportement inapproprié.",
  },
  {
    heading: "10. Avis et évaluations",
    body: "Après chaque mission, les utilisateurs peuvent laisser un avis et une note sur leur interlocuteur. Ces avis doivent refléter une expérience réelle et ne doivent pas contenir de propos diffamatoires, injurieux ou mensongers. Flybaz Express se réserve le droit de supprimer tout avis contraire à ces règles.",
  },
  {
    heading: "11. Limitation de responsabilité",
    body: "Dans la mesure permise par la loi applicable, Flybaz Express ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation de l'Application, de la perte, du vol, du retard ou de la détérioration d'un colis, ou de tout litige entre un Voyageur et un Expéditeur. L'Application est fournie « en l'état », sans garantie de disponibilité ininterrompue.",
  },
  {
    heading: "12. Résiliation",
    body: "Vous pouvez supprimer votre compte à tout moment depuis l'Application ou en contactant le support. Flybaz Express peut suspendre ou résilier un compte en cas de violation des présentes conditions, avec ou sans préavis selon la gravité des faits reprochés.",
  },
  {
    heading: "13. Modification des conditions",
    body: "Flybaz Express peut modifier les présentes conditions à tout moment. Les utilisateurs seront informés de toute modification substantielle via l'Application. La poursuite de l'utilisation de l'Application après une modification vaut acceptation des nouvelles conditions.",
  },
  {
    heading: "14. Droit applicable et contact",
    body: "Les présentes conditions sont régies par le droit applicable au lieu d'établissement de l'exploitant de l'Application [à préciser : pays/province]. Pour toute question, contactez-nous à contact@flybaz.ca ou au +1 438-998-2900.",
  },
];

export default function ConditionsUtilisation() {
  return <LegalLayout title="Conditions d'utilisation" updatedAt="15 septembre 2026" sections={SECTIONS} />;
}
