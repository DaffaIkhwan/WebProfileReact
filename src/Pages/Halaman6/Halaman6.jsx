import "./halaman6.css";
import { Link } from "react-router-dom";

function Halaman6() {
  return (
    <>
      <nav>
        <div className="nav__header">
          <div className="logo">
            <img src="src/assets/LOGO.png" alt="Logo" />
          </div>
          <ul className="nav__links" id="nav-links">
            <li className="link">
              <Link to="/halaman2">Biodata</Link>
            </li>
            <li className="link">
              <Link to="/halaman5">Prestasi</Link>
            </li>
            <li className="link">
              <Link to="/halaman6">Galeri</Link>
            </li>
            <li className="link">
              <Link to="/halaman3">Portofolio</Link>
            </li>
            <li className="link">
              <Link to="/">
                <i className="ri-menu-fill"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="Galeri" id="galeri">
        <div className="section__container galeri__container">
          <h2 className="section__header">Dokumentasi</h2>
          <div className="about__image">
            <img src="src/assets/IMG_20230829_201935_423.webp" alt="about" />
          </div>
          <div className="about__image">
            <img src="src/assets/IMG_20231020_214429_018.jpg" alt="about" />
          </div>
          <div className="about__image">
            <img src="src/assets/IMG_20231103_231339_373.jpg" alt="about" />
          </div>
          <div className="about__image">
            <img src="src/assets/paklu.jpeg" alt="about" />
          </div>
          <div className="about__image">
            <img src="src/assets/osis smk.jpeg" alt="about" />
          </div>
          <div className="about__image">
            <img src="src/assets/osis smp.jpeg" alt="about" />
          </div>
          <div className="about__image">
            <img src="src/assets/band.jpeg" alt="about" />
          </div>
        </div>
      </section>

      <div className="garis"></div>

      <footer className="footer" id="contact">
        <div className="section__container footer__container">
          <h2 className="section__header">Hubungi Saya</h2>
          <p className="section__description">Sebagai Upaya dalam meningkatkan pengalaman pembaca, kontak kami siaga selama 24/7.</p>
          <div className="footer__grid">
            <div className="footer__content">
              <h4>Daffa Ikhwan Nurfauzan</h4>
              <p>Kirim pesan atau terhubung dengan media sosial saya.</p>
              <p>Terimakasih telah berkunjung!</p>
              <div className="footer__socials">
                <a href="https://www.facebook.com/daffa.ikhwan.9">
                  <i className="ri-facebook-fill"></i>
                </a>
                <a href="https://www.instagram.com/nurfauuzan/">
                  <i className="ri-instagram-fill"></i>
                </a>
                <a href="mailto:dapaikhwan@gmail.com">
                  <i className="ri-mail-fill"></i>
                </a>
              </div>
            </div>
            <div className="footer__form">
              <form action="/">
                <div className="input__row">
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Email" />
                </div>
                <textarea placeholder="Your Message"></textarea>
                <button className="btn btn__primary" type="button">
                  Kirim pesan
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer__bar">Copyright © 2024 Nurfauzan Web Design. All rights reserved.</div>
      </footer>
    </>
  );
}

export default Halaman6;
