export default function Page() {
  return (
    <>

<nav className="nav">
  <div className="wrap nav-inner">
    <div className="brand"><img src="/logo.png" alt="Flybaz Express" />Flybaz Express</div>
    <div className="nav-links">
      <a href="#comment-ca-marche">Comment ça marche</a>
      <a href="#confiance">Confiance &amp; sécurité</a>
      <a href="#voyageurs">Pour les voyageurs</a>
    </div>
    <button className="btn btn-dark">Télécharger l&apos;app</button>
  </div>
</nav>

<header className="hero">
  <div className="hero-photo">
    <img src="/Airport%20Departure%20Scene.png" alt="" aria-hidden="true" />
  </div>

  <div className="wrap hero-grid">
    <div className="hero-copy">
      <h1 className="display">Expédiez partout avec Flybaz Express</h1>
      <p className="hero-sub">
        Confiez vos colis à des voyageurs vérifiés qui partent déjà vers votre destination.
        Simple, suivi de bout en bout, et jusqu&apos;à 70 % moins cher.
      </p>
      <button className="btn btn-dark btn-lg">
        Commencer
        <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
      </button>
    </div>

    <div className="hero-phones">
      <div className="phone phone-back">
        <div className="phone-screen">
          <img src="/2.jpg" alt="Carte des trajets disponibles dans l&apos;application Flybaz Express" />
        </div>
      </div>
      <div className="phone phone-front">
        <div className="phone-screen">
          <img src="/3.jpg" alt="Écran d&apos;accueil de l&apos;application : envoyez sans stress" />
        </div>
      </div>
    </div>
  </div>

  <div className="wrap hero-foot">
    <div className="store-row">
      <a href="#" className="store-badge" aria-label="Télécharger sur l&apos;App Store">
        <img src="/app-store-badge.svg" alt="Télécharger dans l&apos;App Store" />
      </a>
      <a href="#" className="store-badge store-badge-play" aria-label="Disponible sur Google Play">
        <img src="/google-play-badge.png" alt="Disponible sur Google Play" />
      </a>
    </div>
  </div>
</header>

<section id="comment-ca-marche">
  <div className="wrap">
    <div className="section-head">
      <span className="eyebrow">Comment ça marche</span>
      <h2 className="display">Trois étapes, <em>et c&apos;est parti</em></h2>
      <p>De la recherche du voyageur à la remise du colis, tout se passe dans l&apos;application.</p>
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

<section id="confiance" className="trust">
  <div className="wrap trust-grid">
    <div className="trust-copy">
      <span className="eyebrow">Confiance &amp; sécurité</span>
      <h2 className="display">Chaque colis, <em>entre de bonnes mains</em></h2>
      <p>
        Identité vérifiée, avis réels et suivi du trajet en direct : tout est pensé
        pour que vous confiiez vos envois l&apos;esprit tranquille.
      </p>
      <a className="trust-link" href="#">
        En savoir plus sur la sécurité
        <span className="material-symbols-outlined">arrow_forward</span>
      </a>
    </div>
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
        <p>Chaque réservation est suivie de bout en bout, du dépôt à la remise.</p>
      </div>
    </div>
  </div>
</section>

<section id="voyageurs" className="travelers">
  <div className="wrap travelers-grid">
    <div className="travelers-copy">
      <span className="eyebrow">Voyageurs</span>
      <h2 className="display">Rentabilisez <em>chaque voyage</em></h2>
      <p>
        Gagnez de l&apos;argent en partageant l&apos;espace libre dans vos valises.
        Vous choisissez vos kilos, vos trajets et vos expéditeurs.
      </p>
      <button className="btn btn-dark btn-lg">Proposer un trajet</button>
      <div className="travelers-stats">
        <div>
          <div className="stat-num">70 %</div>
          <div className="stat-label">d&apos;économies en moyenne</div>
        </div>
        <div>
          <div className="stat-num">48 h</div>
          <div className="stat-label">de délai moyen de livraison</div>
        </div>
        <div>
          <div className="stat-num">100 %</div>
          <div className="stat-label">des profils vérifiés</div>
        </div>
      </div>
    </div>
    <div className="travelers-visual">
      <img src="/hero.png" alt="Un voyageur remet un colis à une expéditrice devant l&apos;avion, à l&apos;aéroport" />
    </div>
  </div>
</section>

<section className="download">
  <div className="download-photo">
    <img src="/Airport%20Departure%20Scene.png" alt="" aria-hidden="true" />
  </div>
  <div className="wrap">
    <div className="download-inner">
      <span className="eyebrow">Disponible maintenant</span>
      <h2 className="display">Prêt à envoyer <em>ou à voyager ?</em></h2>
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
