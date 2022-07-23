//CSS
import { Link } from "react-router-dom";
import styles from "./About.modules.css";

const About = () => {
  return (
    <div className="about">
      <h2>
        Sobre o mini <span>blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end
      </p>
      <Link to="/posts/create" className="btn">
        Criar Post
      </Link>
    </div>
  );
};

export default About;
