import "./halaman4.css";
import { Link } from "react-router-dom";

function Halaman4() {
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
            <Link to="/halaman4" className="btn active">
              Pengalaman
            </Link>
            <Link to="/halaman7" className="btn">
              Sertifikat
            </Link>
            <Link to="/halaman8" className="btn">
              Project
            </Link>
          </div>
          <div className="panel__grid" data-panel="2">
            <div className="panel__card">
              <span>
                <i className="ri-star-fill"></i>
              </span>
              <h4>OSN</h4>
              <p className="section__description">Olimpiade Siswa Nasional (OSN)</p>
              <p className="section__description">
                Juara 2 tingkat kabupaten, dan gagal di tingkat provinsi
                <img src="src/assets/osn.jpg" alt="about" />
              </p>
            </div>
            <div className="panel__card">
              <span>
                <i className="ri-star-fill"></i>
              </span>
              <h4>Anggota OSIS</h4>
              <p className="section__description">SMP</p>
              <p className="section__description">
                Saat duduk di bangku SMP saya bergabung sebagai pengurus OSIS bidang Bela Negara
                <img src="src/assets/osis smp.jpeg" alt="about" />
              </p>
            </div>
            <div className="panel__card">
              <span>
                <i className="ri-star-fill"></i>
              </span>
              <h4>Ketua Osis</h4>
              <p className="section__description">SMK</p>
              <p className="section__description">
                Saat duduk di bangku SMK saya menjabat sebagai ketua OSIS
                <img src="src/assets/osis smk.jpeg" alt="about" />
              </p>
            </div>
            <div className="panel__card">
              <span>
                <i className="ri-star-fill"></i>
              </span>
              <h4>Paklu</h4>
              <p className="section__description">SMK</p>
              <p className="section__description">
                Saat duduk di bangku SMK saya menjabat sebagai Paklurah PASSUS
                <img src="src/assets/paklu.jpeg" alt="about" />
              </p>
            </div>
            <div className="panel__card">
              <span>
                <i className="ri-star-fill"></i>
              </span>
              <h4>Anggota HMJ</h4>
              <p className="section__description">S1</p>
              <p className="section__description">
                Saat duduk di bangku kuliah, saya bergabung dengan HIMATIF sebagai anggota biro politik
                <img src="src/assets/header.jpg" alt="about" />
              </p>
            </div>
            <div className="panel__card">
              <span>
                <i className="ri-star-fill"></i>
              </span>
              <h4>Juara 2 Akustik</h4>
              <p className="section__description">S1</p>
              <p className="section__description">
                Saat duduk di bangku kuliah, saya juara 2 lomba akustik setingkat jurusan
                <img src="src/assets/band.jpeg" alt="about" />
              </p>
            </div>
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
        <div className="footer__bar">Copyright © 2024 Nurfauzan Web Design . All rights reserved.</div>
      </footer>
    </>
  );
}

export default Halaman4;
