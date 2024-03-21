import "./halaman2.css";
import { Link } from "react-router-dom";

function Halaman2() {
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

      <section className="section__container about__container" id="Biodata">
        <div className="about__image2">
          <img src="src/assets/Biodata.jpg" alt="about" />
        </div>
        <div className="about__content">
          <h4>Biodata</h4>
          <p className="section__description">
            Nama :<span>Daffa Ikhwan Nurfauzan</span>
          </p>
          <p className="section__description">
            Jenis kelamin :<span>Laki-laki</span>
          </p>
          <p className="section__description">
            Tempat & tanggal lahir :<span>Rengat 27 Februari 2004</span>
          </p>
          <p className="section__description">
            Agama :<span>Islam</span>
          </p>
          <p className="section__description">
            Anak ke :<span>3 dari 3 bersaudara</span>
          </p>
          <p className="section__description">
            Alamat :<span>JL. Kuantan Timur No 477, Rengat</span>
          </p>
          <p className="section__description">
            No telepon :<span>082181137263</span>
            <div className="chart">
              <h1>
                Apa saja kesibukan saya?
                <br />
                <small>(setiap hari berbeda)</small>
              </h1>
              <div className="pie-chart">
                <div className="pie-text text1">tidur</div>
                <div className="pie-text text2">media sosial</div>
                <div className="pie-text text3">nonton</div>
                <div className="pie-text text4">berorganisasi</div>
              </div>
            </div>
          </p>
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

export default Halaman2;
