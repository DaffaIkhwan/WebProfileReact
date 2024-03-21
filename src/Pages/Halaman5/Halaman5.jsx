import "./halaman5.css";
import { Link } from "react-router-dom";

function Halaman5() {
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

      <section className="service" id="service">
        <div className="section__container service__container">
          <h2 className="section__header">Apa prestasi saya?</h2>
          <p className="section__description">Berikut ini adalah prestasi saya</p>
          <div className="service__grid">
            <div className="service__card">
              <span>
                <i className="ri-star-fill"></i>
              </span>
              <div>
                <h4>Juara 2 OSN</h4>
                <p>Saya juara 2 Olimpiade Siswa Nasional tingkat kabupaten INHU di bidang Matematika</p>
              </div>
            </div>
            <div className="service__card">
              <span>
                <i className="ri-book-fill"></i>
              </span>
              <div>
                <h4>Juara 2 Hafalan Al-Kahfi</h4>
                <p>Pada saat duduk di bangku SMP, saya juara 2 hafalan AL-Kahfi se SMP saya</p>
              </div>
            </div>
            <div className="service__card">
              <span>
                <i className="ri-football-line"></i>
              </span>
              <div>
                <h4>Juara 3 Futsal</h4>
                <p>Pada saat saya duduk di bangku SMP, saya juara 3 Futsal tingkat SMP sekabupaten Indaragiri Hulu</p>
              </div>
            </div>
            <div className="service__card">
              <span>
                <i className="ri-customer-service-fill"></i>
              </span>
              <div>
                <h4>Juara 2 Akustik</h4>
                <p>Pada saat saya duduk di bangku kuliah, saya juara 2 akustik sejurusan saya</p>
              </div>
            </div>
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
        <div className="footer__bar">Copyright © 2024 Nurfauzan Web Design . All rights reserved.</div>
      </footer>
    </>
  );
}

export default Halaman5;
