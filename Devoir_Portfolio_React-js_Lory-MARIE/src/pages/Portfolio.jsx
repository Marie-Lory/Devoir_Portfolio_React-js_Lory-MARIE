import React from "react"; // ✅ OBLIGATOIRE dans ton cas
import "/src/assets/CSS/global.css";
import "/src/assets/CSS/Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
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
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/Portfolio"
                  >
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
        <img
          className="image-presentation"
          src="/src/assets/img/banner.jpg"
          alt="Représentation John DOE travaillant sur son ordinateur"
        />
        <div className="presentation">
          <h1 className="text-presentation">Portfolio</h1>
          <p className="text-presentation">
            Voici quelques-unes des mes réalisations
          </p>
          <hr></hr>
        </div>

        {/* Mise en page des 6 cards Boostrap de façon ordonées */}
        <div className="section-espacement">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card card-hover">
                {/* Card fresh Food */}
                <img
                  className="card-img-top"
                  src="/src/assets/img/portfolio/fresh-food.jpg"
                  alt="Tas de fruits et légumes"
                />
                <div className="card-body">
                  <h2 className="card-title" >
                    Fresh Food
                  </h2>
                  <p className="card-text">
                    Site de vente de produits frais en ligne
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Voir le site
                  </Link>
                </div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
                  >
                    Site réalisé avec PHP et MySQL
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Restaurant Akira */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card card-hover">
                <img
                  className="card-img-top"
                  src="/src/assets/img/portfolio/restaurant-japonais.jpg"
                  alt=" Nourritures japonaises"
                />
                <div className="card-body">
                  <h2 className="card-title" >
                    Restaurant Akira
                  </h2>
                  <p className="card-text">
                    Site de vente de produits frais en ligne
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Voir le site
                  </Link>
                </div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
                  >
                    Site réalisé avec WordPresse
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Espace bien-être */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card card-hover">
                <img
                  className="card-img-top"
                  src="/src/assets/img/portfolio/espace-bien-etre.jpg"
                  alt="Produits pour le Bien-être"
                />
                <div className="card-body">
                  <h2 className="card-title" >
                    Espace bien-être
                  </h2>
                  <p className="card-text">
                    Site de vente de produits frais en ligne
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Voir le site
                  </Link>
                </div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
                  >
                    Site réalisé avec LARAVEL
                  </li>
                </ul>
              </div>
            </div>

            {/* Card SEO */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card card-hover">
                <img
                  className="card-img-top"
                  src="/src/assets/img/portfolio/seo.jpg"
                  alt="Plusieurs mots décrivant le SEO "
                />
                <div className="card-body">
                  <h2 className="card-title" >
                    SEO
                  </h2>
                  <p className="card-text">
                    Amélioration du référencement d'un site e-commerce
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Voir le site
                  </Link>
                </div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"

                  >
                    SUtilisation des outils SEO
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Création d'une API */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card card-hover">
                <img
                  className="card-img-top"
                  src="/src/assets/img/portfolio/coder.jpg"
                  alt="Ligne de code sur un ordinateur"

                />
                <div className="card-body">
                  <h2 className="card-title" >
                    Création d'une API
                  </h2>
                  <p className="card-text">
                    Création d'une API RESTFULL publique
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Voir le site
                  </Link>
                </div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
                  >
                    PHP-SYMFONY
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Création du prototype d'un site */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card card-hover">
                <img
                  className="card-img-top"
                  src="/src/assets/img/portfolio/screens.jpg"
                  alt="Un bureau avec un ordinateur, une tablette et un portable dessus"
                />
                <div className="card-body">
                  <h2 className="card-title" >
                    Maquettage d'un site web
                  </h2>
                  <p className="card-text">Création du prototype d'un site</p>
                  <Link to="#" className="btn btn-primary">
                    Voir le site
                  </Link>
                </div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
                  >
                    Site réalisé avec FIGMA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        {/* Séparation en plusieurs parties du footer */}
        <div>
          <section className="col-12 col-md-6 col-lg-4 mb-4">
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
            <Link to="/Portfolio">portfolio</Link>
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

export default Portfolio;
