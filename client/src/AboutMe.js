import './AboutMe.scss';
import me from './me.jpeg';

function AboutMe() {
  return (
    <div id="about-me">
      <img className="img-fluid mb-3" src={me} alt="My Name" />
      <h1>Serena Chen</h1>
      <p>Hello</p>
    </div>
  );
}

export default AboutMe;
