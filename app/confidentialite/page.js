import LegalLayout from "../legal-layout";

export const metadata = {
  title: "Politique de confidentialité — Flybaz Express",
  description: "Comment Flybaz Express collecte, utilise et protège vos données personnelles.",
};

const SECTIONS = [
  {
    heading: "1. Données que nous collectons",
    body: "Nous collectons : vos informations d'inscription (nom complet, email, téléphone, ville/pays de résidence) ; les documents et photos fournis lors de la vérification d'identité ; les informations relatives à vos trajets publiés et réservations effectuées ; les messages échangés avec d'autres utilisateurs via la messagerie intégrée ; les avis et notes laissés ou reçus ; les informations de paiement traitées par notre prestataire Stripe (nous ne stockons jamais vos données de carte bancaire) ; et des données techniques (jeton de notification push, journal des connexions) nécessaires au bon fonctionnement de l'Application.",
  },
  {
    heading: "2. Pourquoi nous les utilisons",
    body: "Ces données servent à : créer et sécuriser votre compte ; vérifier votre identité afin de renforcer la confiance entre utilisateurs ; permettre la mise en relation entre Voyageurs et Expéditeurs ; traiter les paiements des frais de mise en ligne et de mise en relation ; vous envoyer des notifications relatives à vos trajets et réservations ; assurer la modération et la sécurité de la plateforme (signalements, bannissements) ; et répondre à vos demandes auprès du support.",
  },
  {
    heading: "3. Avec qui nous les partageons",
    body: "Vos données peuvent être transmises à nos prestataires techniques, strictement dans la mesure nécessaire à leur mission : Supabase (hébergement de la base de données et des fichiers), Stripe (traitement des paiements), Prelude (vérification du numéro de téléphone), un prestataire de vérification d'identité tiers (KYC), et notre service d'envoi d'emails transactionnels. Nous ne vendons jamais vos données à des tiers à des fins publicitaires. Certaines informations (nom, note, avis, trajets publiés) sont visibles par les autres utilisateurs de l'Application dans le cadre normal du service.",
  },
  {
    heading: "4. Conservation des données",
    body: "Vos données sont conservées le temps nécessaire à la finalité pour laquelle elles ont été collectées, et au minimum pendant la durée de votre compte. Les documents de vérification d'identité et l'historique des transactions peuvent être conservés plus longtemps pour respecter nos obligations légales et prévenir la fraude. Vous pouvez demander la suppression de votre compte et de vos données à tout moment, sous réserve des obligations légales de conservation.",
  },
  {
    heading: "5. Sécurité",
    body: "Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données (chiffrement des communications, contrôle d'accès, isolation des données par utilisateur). Aucun système n'étant infaillible, nous ne pouvons garantir une sécurité absolue, mais nous nous engageons à vous informer rapidement en cas d'incident affectant vos données.",
  },
  {
    heading: "6. Vos droits",
    body: "Selon votre lieu de résidence, vous disposez de droits d'accès, de rectification, de suppression, de limitation et de portabilité de vos données, ainsi que du droit de vous opposer à certains traitements. Vous pouvez exercer ces droits en nous contactant à contact@flybaz.ca. Nous répondrons dans les meilleurs délais et conformément à la réglementation applicable.",
  },
  {
    heading: "7. Notifications et communications",
    body: "Avec votre autorisation, l'Application vous envoie des notifications push relatives à vos trajets et réservations (par exemple lorsqu'un voyageur est en escale ou arrivé à destination). Vous pouvez désactiver ces notifications à tout moment depuis les réglages de votre appareil ou de l'Application.",
  },
  {
    heading: "8. Transferts internationaux",
    body: "Flybaz Express opérant à l'international, vos données peuvent être traitées par des prestataires situés dans des pays différents du vôtre. Nous veillons à ce que ces prestataires offrent un niveau de protection adéquat de vos données.",
  },
  {
    heading: "9. Modification de cette politique",
    body: "Cette politique de confidentialité peut être mise à jour pour refléter l'évolution de l'Application ou de la réglementation. Toute modification substantielle vous sera notifiée via l'Application.",
  },
  {
    heading: "10. Contact",
    body: "Pour toute question relative à vos données personnelles, contactez-nous à contact@flybaz.ca ou au +1 438-998-2900.",
  },
];

export default function Confidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" updatedAt="15 septembre 2026" sections={SECTIONS} />
  );
}
