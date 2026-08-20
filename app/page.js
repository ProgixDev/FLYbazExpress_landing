export default function Page() {
  return (
    <>

<nav className="nav">
  <div className="wrap nav-inner">
    <div className="brand"><img src="/logo.png" alt="Flybaz Express" />Flybaz Express</div>
    <div className="nav-links">
      <a href="#comment-ca-marche">Comment ça marche</a>
      <a href="#voyageurs">Pour les voyageurs</a>
      <a href="#confiance">Confiance & sécurité</a>
    </div>
    <button className="btn btn-primary"><span className="material-symbols-outlined" style={{ fontSize: "18px" }}>download</span>Télécharger l&apos;app</button>
  </div>
</nav>

<header className="hero">
  <div className="hero-bg"></div>
  <div className="wrap hero-grid">
    <div className="hero-copy">
      <h1>Expédiez vos colis avec la communauté, partout dans le monde.</h1>
      <p className="hero-sub">Mettez en relation vos envois avec des voyageurs de confiance qui partent vers votre destination. Simple, rapide, et jusqu&apos;à 70 % moins cher qu&apos;un transporteur classique.</p>
      <div className="store-row">
        <a href="#" className="store-badge" aria-label="Télécharger sur l&apos;App Store">
          <img src="/app-store-badge.svg" alt="Télécharger dans l&apos;App Store" />
        </a>
        <a href="#" className="store-badge store-badge-play" aria-label="Disponible sur Google Play">
          <img src="/google-play-badge.png" alt="Disponible sur Google Play" />
        </a>
      </div>
    </div>
    <div className="hero-visual">
      <img src="/hero.png" alt="Un voyageur remet un colis à une expéditrice devant l&apos;avion, à l&apos;aéroport" />
    </div>
  </div>
</header>

<section id="comment-ca-marche">
  <div className="wrap">
    <div className="section-head">
      <h2>Comment ça marche</h2>
      <p>Trois étapes simples pour envoyer votre colis à l&apos;autre bout du monde.</p>
    </div>
    <div className="steps">
      <div className="step-card">
        <span className="step-num">01</span>
        <img src="/screen-1.png" alt="Illustration d&apos;un voyageur avec sa valise" />
        <h3>Trouvez un voyageur</h3>
        <p>Cherchez un voyageur qui effectue votre trajet prochainement.</p>
      </div>
      <div className="step-card">
        <span className="step-num">02</span>
        <img src="/screen-2.png" alt="Illustration d&apos;un livreur avec un colis et un repère de localisation" />
        <h3>Réservez vos kilos</h3>
        <p>Indiquez le poids et la nature de votre colis (documents, cadeaux, électronique).</p>
      </div>
      <div className="step-card">
        <span className="step-num">03</span>
        <img src="/screen-3.png" alt="Illustration d&apos;une remise de colis entre deux personnes" />
        <h3>Colis livré !</h3>
        <p>Votre destinataire récupère le colis en toute sécurité à l&apos;arrivée.</p>
      </div>
    </div>
  </div>
</section>

<section id="confiance" className="trust-section">
  <div className="wrap trust-grid">
    <div className="trust-cards">
      <div className="trust-card">
        <span className="material-symbols-outlined">verified_user</span>
        <h4>Vérification KYC</h4>
        <p>Identité réelle vérifiée pour chaque utilisateur.</p>
      </div>
      <div className="trust-card">
        <span className="material-symbols-outlined">star_rate</span>
        <h4>Avis certifiés</h4>
        <p>La communauté s&apos;évalue après chaque transaction.</p>
      </div>
      <div className="trust-card">
        <span className="material-symbols-outlined">chat_bubble</span>
        <h4>Messagerie sécurisée</h4>
        <p>Échangez en toute sécurité via notre plateforme.</p>
      </div>
      <div className="trust-card">
        <span className="material-symbols-outlined">shield_lock</span>
        <h4>Réservation protégée</h4>
        <p>Kilos, téléphones ou documents : chaque réservation est suivie de bout en bout.</p>
      </div>
    </div>
    <div className="trust-copy">
      <h2>Pourquoi nous faire confiance</h2>
      <p>La sécurité de vos envois est notre priorité absolue. Identité vérifiée, avis réels et suivi du trajet en direct : tout est pensé pour une expérience sereine.</p>
      <a className="trust-link" href="#">En savoir plus sur la sécurité <span className="material-symbols-outlined">arrow_forward</span></a>
    </div>
  </div>
</section>

<section id="voyageurs" className="travelers">
  <span className="blob blob-1"></span>
  <span className="blob blob-2"></span>
  <div className="wrap travelers-inner">
    <span className="eyebrow">Voyageurs</span>
    <h2>Rentabilisez vos voyages</h2>
    <p>Gagnez de l&apos;argent en partageant l&apos;espace libre dans vos valises. C&apos;est sûr, encadré, et facile à mettre en place.</p>
    <button className="btn btn-primary" style={{ padding: "15px 30px", fontSize: "15px" }}>Proposer un trajet</button>
  </div>
</section>

<section className="download-band">
  <div className="wrap download-inner">
    <h2>Prêt à envoyer ou à voyager ?</h2>
    <p>Rejoignez la communauté Flybaz Express et simplifiez vos expéditions dès aujourd&apos;hui.</p>
    <div className="store-row">
      <a href="#" className="store-badge" aria-label="Télécharger sur l&apos;App Store">
        <img src="/app-store-badge.svg" alt="Télécharger dans l&apos;App Store" />
      </a>
      <a href="#" className="store-badge store-badge-play" aria-label="Disponible sur Google Play">
        <img src="/google-play-badge.png" alt="Disponible sur Google Play" />
      </a>
    </div>
  </div>
</section>

<footer>
  <div className="wrap footer-inner">
    <div className="footer-brand"><img src="/logo.png" alt="" />Flybaz Express</div>
    <div className="footer-links">
      <a href="#">Conditions générales</a>
      <a href="#">Confidentialité</a>
      <a href="#">Contact</a>
      <a href="#">FAQ</a>
    </div>
    <div className="footer-copy">© 2026 Flybaz Express. Tous droits réservés.</div>
  </div>
</footer>
    </>
  );
}
