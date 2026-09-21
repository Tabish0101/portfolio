import { work } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="section section--paper">
      <div className="split">
        <div className="split__lead">
          <h2 className="h2">{work.title}</h2>
          <p>{work.summary}</p>
        </div>
        <ul className="rows" aria-label="Who FLX is built for">
          {work.roles.map((role) => (
            <li key={role.who} className="row">
              <h3 className="row__key">{role.who}</h3>
              <p>{role.what}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
