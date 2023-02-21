// Project files
import iCandidate from "interfaces/iCandidate";

interface iProps {
  item: iCandidate;
}

export default function Footer({ item }: iProps) {
  const { name, pronoun, portfolio_url } = item;

  return (
    <footer className="footer">
      <div className="container">
        <h2>Are you interested in {name}?</h2>
        <p>
          See more details by checking {pronoun} projects done with us during
          the boot camp.
        </p>

        <a target="_blank" className="button" href={portfolio_url}>
          View portfolio
        </a>
      </div>
    </footer>
  );
}
