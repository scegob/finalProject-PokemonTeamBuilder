import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="Footer">
      {` Pokemon and All Respective Names are Trademark & © Nintendo 1996 - ${year}`}{" "}
      Coded by{" "}
      <a href="https://github.com/scegob" target="_blank">
        Billeh Scego
      </a>
    </footer>
  );
};

export default Footer;
