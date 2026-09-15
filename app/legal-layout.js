export default function LegalLayout({ title, updatedAt, sections }) {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-inner">
          <a href="/" className="brand"><img src="/logo.png" alt="Flybaz Express" />Flybaz Express</a>
          <div className="nav-links">
            <a href="/#comment-ca-marche">Comment ça marche</a>
            <a href="/#confiance">Confiance &amp; sécurité</a>
            <a href="/#voyageurs">Pour les voyageurs</a>
          </div>
          <a href="/" className="btn btn-dark">Retour à l&apos;accueil</a>
        </div>
      </nav>

      <header className="wrap legal-header">
        <a href="/" className="back-link">
          <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_back</span>
          Retour à l&apos;accueil
        </a>
        <h1>{title}</h1>
        <p className="legal-updated">Dernière mise à jour : {updatedAt}</p>
      </header>

      <div className="wrap legal-body">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2>{s.heading}</h2>
            <p>{s.body}</p>
          </section>
        ))}
      </div>

      <footer>
        <div className="wrap footer-inner">
          <div className="footer-brand"><img src="/logo.png" alt="" />Flybaz Express</div>
          <div className="footer-links">
            <a href="/conditions-utilisation">Conditions générales</a>
            <a href="/confidentialite">Confidentialité</a>
            <a href="/mentions-legales">Mentions légales</a>
            <a href="mailto:contact@flybaz.ca">Contact</a>
          </div>
          <div className="footer-copy">© 2026 Flybaz Express. Tous droits réservés.</div>
        </div>
      </footer>
    </>
  );
}
