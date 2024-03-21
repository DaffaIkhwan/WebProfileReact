import "./halaman8.css";
import { Link } from "react-router-dom";

function Halaman8() {
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

      <div className="section__container resume__container" id="resume">
        <header className="section__header">Pendidikan & Pengalaman</header>
        <div className="section__description">Atas usaha, kerja keras, dan restu orang tua, berikut riwayat pendidikan dan pengalaman saya.</div>
        <div className="resume__tabs">
          <div className="resume__tablist">
            <Link to="/halaman3" className="btn">
              Pendidikan
            </Link>
            <Link to="/halaman4" className="btn">
              Pengalaman
            </Link>
            <Link to="/halaman7" className="btn">
              Sertifikat
            </Link>
            <Link to="/halaman8" className="btn active">
              Project
            </Link>
          </div>
          <a href="assets/Laporan Project Aplikasi Rental Aplikasi.pdf" target="_blank" rel="noopener noreferrer">
            <div className="panel__card">
              <span>
                <i className="ri-car-fill"></i>
              </span>
              <h4>Ke-Rent</h4>
              <p className="section__description">Aplikasi Rental Mobil</p>
              <p className="section__description">
                <img src="src/assets/rental.jpg" alt="about" className="rent-img" />
              </p>
            </div>
          </a>
          <div className="panel__card">
            <span>
              <i className="ri-route-fill"></i>
            </span>
            <h4>Graph Simulator</h4>
            <p className="section__description">Pencarian rute terpendek dengan algoritma dijkstra.</p>
            <p className="section__description">
              <img src="src/assets/graph.jpeg" alt="about" />
            </p>
          </div>
        </div>
      </div>

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

export default Halaman8;
