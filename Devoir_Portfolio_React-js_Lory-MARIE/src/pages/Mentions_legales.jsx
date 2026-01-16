import React from "react"; // ✅ OBLIGATOIRE dans ton cas
import "/src/assets/CSS/Mentions_legales.css";
import "/src/assets/CSS/global.css";
import { Link } from "react-router-dom";

const Mentions_legales = () => {
  return (
    <div className="App">
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
                  <Link className="nav-link" to="/">
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Mentions_legales"
                  >
                    mentions légales
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Mise en page de la présentation  */}
        <div className="presentation">
          <h1 className="text-presentation">Mentions légales</h1>
          <hr></hr>
        </div>

        {/* Mise en page du contenu déroulant grâce aux classe d'accordéons de Bootstrap */}
        <div className="accordéon-position">
          <div className="accordion" id="accordionExample">
            <section className="accordion-item">
              {/* Espace : Editeur du site */}
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Editeur du site
                </button>
              </h2>

              {/* Espace : John Doe */}
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3>John Doe</h3>
                  <div>
                    <img
                      className="taille-pictogramme"
                      src="/src/assets/img/carte.png"
                      alt="Icone d'une carte de localisation"
                    />{" "}
                    40 rue Laure Diebold
                  </div>
                  <div>
                    <img
                      className="taille-pictogramme"
                      src="/src/assets/img/localisateur.png"
                      alt="Icone du localisateur"
                    />{" "}
                    69009 Lyon, France
                  </div>
                  <div>
                    <img
                      className="taille-pictogramme"
                      src="/src/assets/img/telephone-intelligent.png"
                      alt="Icone d'un téléphone"
                    />{" "}
                    10 20 30 40 50
                  </div>
                  <div>
                    <img
                      className="taille-pictogramme"
                      src="/src/assets/img/adresse-email.png"
                      alt="Icone d'une envellope mail"
                    />{" "}
                    john.doe@gmail.com
                  </div>
                </div>
              </div>
            </section>
            <section className="accordion-item">
              {/* Espace : Hébergeur */}
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Hébergeur
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3 className="gras-h3">alwaysdata</h3>
                  <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                  <a href="www.alwaysdata.com">
                    <img
                      className="taille-pictogramme"
                      src="/src/assets/img//globe.png"
                      alt="Icone du globe représentant le web"
                    />
                    <span className="espacement-text-pictogramme">
                      www.always.com
                    </span>
                  </a>
                </div>
              </div>
            </section>
            {/* Espace : Crédits */}
            <section className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Crédits
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <h3 className="gras-h3">Crédits</h3>
                  <p>
                    Ce site a été réalisé par John Doe, étudiant au{" "}
                    <a href="https://www.centre-europeen-formation.fr/">
                      Centre Européen de formation
                    </a>
                  </p>
                  <p>
                    Les images utiliséessur ce site snt libre de droits et ont
                    été obtenu sur le site{" "}
                    <a href="https://pixabay.com/fr/">Pixabay</a>
                  </p>
                  <p>
                    La flavicon de ce site a été fournie par{" "}
                    <a href="https://www.flaticon.com/">
                      John does Icons erstellt von Freepik - Flaticon
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer>
        {/* Séparation en plusieurs parties du footer */}
        <div>
          <section className="footer-section-1 col-12 col-md-4 mb-4">
            <h4>John Doe</h4>
            <a
              href="https://www.google.com/maps?&ty=18&q=40%20rue%20Laure%20Diebold%20%2069009%20Lyon%2C%20France&mb=45.782462~4.790229~45.77473~4.807968&cardbg=%23F98745&dt=1750716000000&tt=40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France&tsts1=%2526ty%253D18%2526q%253D40%252520rue%252520Laure%252520Diebold%252520%25252069009%252520Lyon%25252C%252520France%2526mb%253D45.782462~4.790229~45.77473~4.807968%2526cardbg%253D%252523F98745%2526dt%253D1750716000000&tstt1=40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France&cp=45.778596~4.794836&lvl=16.32&pi=0&ftst=1&ftics=True&v=2&sV=2&form=S00027"
              target="_blank"
              rel="nofollow noreferrer"
            >
              40 rue Laure Diebold <br /> 69009 Lyon, France
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
              target="_blank"
              rel="nofollow noreferrer"
            >
              <img
                src="/src/assets/img/github.png"
                alt="Icone Github"
                className="icon"
              />
              <img
                src="/src/assets/img/github-Hover.png"
                alt="Icone Github blanc au survol"
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
                className="icon"
              />
              <img
                src="/src/assets/img/twitter-Hover.png"
                alt="Icone Twitter blanc au survol"
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

          <section className="footer-section-2 col-12 col-md-4 mb-4">
            <h4>Liens utiles</h4>
            <Link to="/">Acceuil</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Contact">Me contacter</Link>
            <Link to="/Mentions_legales">Mentions légales</Link>
          </section>

          <section className="footer-section-3 col-12 col-md-4 mb-4">
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
};

export default Mentions_legales;
