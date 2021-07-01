const Footer = () => {
  return (
    <footer className="app-footer">
      <a
        href="https://github.com/Norbs89/React-Collection"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {">"}Github_
      </a>
      <a
        href="https://linkedin.com/in/norbert-huvos"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {">"}LinkedIn_
      </a>
      <a
        href="https://norbs89.github.io/"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {">"}Portfolio Site_
      </a>
      <a
        href="https://www.freecodecamp.org/fcc3fb86832-6ca2-4f28-927e-6ebf0fb63661"
        className="footer-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {">"}FreeCodeCamp_
      </a>
      <span className="ver-num">
        {"{"}Ver. 1.0.2{"}"}
      </span>
    </footer>
  );
};

export default Footer;
