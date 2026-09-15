export const metadata = {
  title: "Email confirmé — Flybaz Express",
  description: "Votre adresse email a bien été confirmée.",
};

export default function EmailConfirme() {
  return (
    <div className="confirm-page">
      <img src="/logo.png" alt="Flybaz Express" className="confirm-logo" />
      <div className="confirm-check">
        <span className="material-symbols-outlined">check</span>
      </div>
      <h1>Email confirmé !</h1>
      <p>Votre adresse email a bien été vérifiée. Vous pouvez retourner à l&apos;application Flybaz Express et vous connecter.</p>
    </div>
  );
}
