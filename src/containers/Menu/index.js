/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const handleNavClick = (event, sectionClassName) => {
  event.preventDefault(); // Empêche le comportement par défaut du lien

  const section = document.querySelector(`.${sectionClassName}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Menu = () => (
  <nav>
    <Logo />
    <ul>
      <li>
        {/* <a href="#nos-services">Nos services</a> */}
        <a href="#nos-services" onClick={(event) => handleNavClick(event, "ServicesContainer")}>
          Nos services
        </a>
      </li>
      <li>
      <a href="#nos-realisations" onClick={(event) => handleNavClick(event, "EventsContainer")}>
          Nos réalisations
        </a>
      </li>
      <li>
      <a href="#notre-equipe" onClick={(event) => handleNavClick(event, "PeoplesContainer")}>
          Notre équipe
        </a>
      </li>
    </ul>
    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button>
  </nav>
);

export default Menu;
