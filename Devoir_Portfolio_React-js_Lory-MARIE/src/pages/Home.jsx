import React from "react"; // ✅ OBLIGATOIRE dans ton cas
import { useState } from "react";
import "/src/assets/CSS/global.css";
import "/src/assets/CSS/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  const fetchGitHubProfile = async () => {
    const username = "Marie-Lory";
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    setProfile(data);
  };

  const openModal = () => {
    setIsOpen(true);
    fetchGitHubProfile();
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div className="App">
      {/* La modale */}
      {isOpen && (
        <div className="custom-modal" onClick={closeModal}>
          <div
            className="custom-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Profil GitHub</h2>
            {profile ? (
              <div>
                <p>
                  <strong>Nom :</strong> {profile.name || "N/A"}
                </p>
                <p>
                  <strong>Bio :</strong> {profile.bio || "N/A"}
                </p>
                <p>
                  <strong>Localisation :</strong> {profile.location || "N/A"}
                </p>
                <p>
                  <strong>Dépôts :</strong> {profile.public_repos}
                </p>
                <a href={profile.html_url} target="_blank" rel="noreferrer">
                  Voir GitHub
                </a>
              </div>
            ) : (
              <p>Chargement…</p>
            )}
          </div>
        </div>
      )}
      <header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              JOHN DOE
            </Link>
            {/* Bouton burger : visible sur petits écrans */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Menu collapsible : apparaissant en dessous de 768px */}
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item text-uppercase">
                  <Link className="nav-link active" aria-current="page" to="/">
                    home
                  </Link>
                </li>
                <li className="nav-item text-uppercase">
                  <Link className="nav-link" to="/Services">
                    services
                  </Link>
                </li>
                <li className="nav-item text-uppercase">
                  <Link className="nav-link" to="/Portfolio">
                    portfolio
                  </Link>
                </li>
                <li className="nav-item text-uppercase">
                  <Link className="nav-link" to="/Contact">
                    contact
                  </Link>
                </li>
                <li className="nav-item text-uppercase">
                  <Link className="nav-link" to="/Mentions_legales">
                    mentions légales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {/* Mise en page de l'image et du texte de présentation */}
        <div className="hero">
          <img
            src="/src/assets/img/hero-bg.jpg"
            alt="représentation John DOE travaillant sur son ordinateur"
          />
          <div className="hero-overlay">
            <h1>Bonjour, je suis John DOE</h1>
            <h2>Développeur web full stack</h2>
            {/* Bouton permettant d'ouvrir le modal */}
            <button className="block-border-modal" onClick={openModal}>
              En savoir plus
            </button>
          </div>
        </div>
        <div className="about-wrapper">
          <section className="about-skills">
            {/* COLONNE GAUCHE */}
            <div className="about">
              <h3>A propos</h3>
              <hr />

              <img
                src="/src/assets/img/john-doe-about.jpg"
                alt="John DOE de profil"
              />

              <p className="text-espacement-image">
                J'ai 25 ans et je suis actuellement à la recherche d'un travail
                en alternance.
              </p>
            </div>

            {/* COLONNE DROITE */}
            <div className="skills">
              <h3>Mes compétences</h3>
              <hr />

              <p className="text-espacement-jauge">HTML 5 90%</p>
              <div className="jauge-container">
                <div className="jauge-rouge-remplie" />
              </div>

              <p className="text-espacement-jauge">CSS3 80%</p>
              <div className="jauge-container">
                <div className="jauge-cyan-remplie" />
              </div>

              <p className="text-espacement-jauge">JAVASCRIPT 70%</p>
              <div className="jauge-container">
                <div className="jauge-jaune-remplie" />
              </div>

              <p className="text-espacement-jauge">PHP 60%</p>
              <div className="jauge-container">
                <div className="jauge-verte-remplie" />
              </div>

              <p className="text-espacement-jauge">REACT 50%</p>
              <div className="jauge-container">
                <div className="jauge-bleue-remplie" />
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <div>
          {/* Séparation en plusieurs parties du footer */}
          <section>
            <h4>John Doe</h4>
            <a
              href="https://www.google.com/maps?&ty=18&q=40%20rue%20Laure%20Diebold%20%2069009%20Lyon%2C%20France&mb=45.782462~4.790229~45.77473~4.807968&cardbg=%23F98745&dt=1750716000000&tt=40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France&tsts1=%2526ty%253D18%2526q%253D40%252520rue%252520Laure%252520Deboid%252520%25252069009%252520Lyon%25252C%252520France%2526mb%253D45.782462~4.790229~45.77473~4.807968%2526cardbg%253D%252523F98745%2526dt%253D1750716000000&tstt1=40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France&cp=45.778596~4.794836&lvl=16.32&pi=0&ftst=1&ftics=True&v=2&sV=2&form=S00027"
              target="_blank"
              rel="nofollow noreferrer"
            >
              40 rue Laure Deboid <br /> 69009 Lyon, France
            </a>
            <address>
              <a
                href="mailto:john.doe@gmail.com"
                target="_blank"
                rel="nofollow noreferrer"
              >
                john.doe@gmail.com
              </a>
              <a
                href="tel:10-20-30-40-50"
                target="_blank"
                rel="nofollow noreferrer"
              >
                10 20 30 40 50
              </a>
            </address>

            {/* Mise en page des icones ainsi que du changement de couleur au survol */}
            <a
              className="Icone-image-position"
              href="https://github.com/"
              rel="nofollow noreferrer"
              target="_blank"
            >
              <img
                src="/src/assets/img/github.png"
                alt="Icone Github "
                rel="nofollow noreferrer"
                className="icon"
              />
              <img
                src="/src/assets/img/github-Hover.png"
                alt="Icone Github blanc au survol"
                rel="nofollow noreferrer"
                className="icon-hover"
              />
            </a>

            <a
              className="Icone-image-position"
              href="https://x.com/"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <img
                src="/src/assets/img/twitter.png"
                alt="Icone Twitter"
                rel="nofollow noreferrer"
                className="icon"
              />
              <img
                src="/src/assets/img/twitter-Hover.png"
                alt="Icone Twitter blanc au survol"
                rel="nofollow noreferrer"
                className="icon-hover"
              />
            </a>

            <a
              className="Icone-image-position"
              href="https://www.linkedin.com/login"
              target="_blank"
              rel="nofollow noreferrer"
            >
              <img
                src="/src/assets/img/logo-linkedin.png"
                alt="Icone linkedin"
                className="icon"
              />
              <img
                src="/src/assets/img/logo-linkedin-Hover.png"
                alt="Icone linkedin blanc au survol"
                className="icon-hover"
              />
            </a>
          </section>

          <section className="footer-section-2">
            <h4>Liens utiles</h4>
            <Link to="/">Acceuil</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Contact">Me contacter</Link>
            <Link to="/Mentions_legales">Mentions légales</Link>
          </section>

          <section className="footer-section-3">
            <h4>Mes dernières réalisations</h4>
            <Link to="/Portfolio">Fresh Food</Link>
            <Link to="/Portfolio">Restaurant Akira</Link>
            <Link to="/Portfolio">Espace Bien-être SEO</Link>
            <Link to="/Portfolio">création d'une API</Link>
          </section>
        </div>
      </footer>
    </div>
  );
}
