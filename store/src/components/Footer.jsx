import "../css/footer.css";

const Footer = () => (
  <div className="background-box">
    <footer className="footer-container">
      <div className="footer-box">
        <h1 className="logo-footer">fabricad</h1>
        <ul>
          <li className="facebook-logo">
            <ion-icon
              a
              href="https://m.facebook.com/fabricad.serv/?_rdr"
              name="logo-facebook"
            ></ion-icon>
          </li>
          <li className="instagram-logo">
            <ion-icon name="logo-instagram"></ion-icon>
          </li>
        </ul>
        <p>copyright@2022 by fabricadserv</p>
      </div>
      <div className="footer-box">
        <h1 className="logo-footer">About us</h1>
        <p>
          Atelierul se afla in localitatea, <br />
          Barai,strada ..nr.. jud.
          <br /> Cluj Napoca. fondat in 2018 <br />
          productie de serie <br />
          mobila la comanda
          <br /> prelucrari CNC modelare 3d
        </p>
      </div>

      <div className="footer-box ">
        <h1 className="logo-footer">contact</h1>
        <p>
          098-093-933
          <br />
          098-093-933
          <br />
          fabricad@gmail.com
        </p>
      </div>
    </footer>
  </div>
);

export default Footer;
