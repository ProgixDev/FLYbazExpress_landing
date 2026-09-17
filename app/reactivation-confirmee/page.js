export const metadata = {
  title: "Compte réactivé — Flybaz Express",
  description: "Votre paiement a été reçu et votre compte a été réactivé.",
};

export default function ReactivationConfirmee() {
  return (
    <div className="confirm-page">
      <img src="/logo.png" alt="Flybaz Express" className="confirm-logo" />
      <div className="confirm-check">
        <span className="material-symbols-outlined">check</span>
      </div>
      <h1>Compte réactivé !</h1>
      <p>Votre paiement a bien été reçu. Votre compte Flybaz Express est de nouveau actif — vous pouvez retourner dans l&apos;application et vous connecter.</p>
    </div>
  );
}
