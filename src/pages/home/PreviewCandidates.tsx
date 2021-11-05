// NPM Packaged
import { Link } from "react-router-dom";

// Project files
import data from "data/candidates.json";
import iCandidate from "interfaces/iCandidate";
import Item from "components/ItemCandidate";
import Image from "assets/images/candidates.jpg";
import "styles/pages/home/Candidates.sass";

export default function PreviewCandidates() {
  // Properties
  const candidates = randomCandidates(data, 3);

  // Methods
  function randomCandidates(array: iCandidate[], length: number): iCandidate[] {
    // safeguard
    if (array.length < length) {
      console.warn("You are trying to get more candidates than available");
      length = array.length;
    }

    const clonedArray = [...array];
    const shuffled = clonedArray.sort(() => 0.5 - Math.random());
    const randomCandidates: iCandidate[] = shuffled.slice(0, length);

    return randomCandidates;
  }

  // Components
  const Items = candidates.map((item) => <Item key={item.id} item={item} />);

  return (
    <section className="candidates background-dark">
      <div className="container">
        <div className="content">
          <h2>Meet the candidates</h2>
          <p>
            Learn more about the candidates's skills, previous work life
            experience, education and personality. Make sure to check out their
            portfolios.
          </p>
          <div className="component-items">{Items}</div>
          <Link className="button" to="/candidates">
            View all candidates
          </Link>
        </div>
        <img
          className="support-picture"
          src={Image}
          alt="2 women sharing a single laptop"
        />
      </div>
    </section>
  );
}