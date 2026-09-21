import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="section section--ice">
      <div className="split">
        <div className="split__lead">
          <h2 className="h2">Experience</h2>
        </div>
        <ol className="rows">
          {experience.map((item) => (
            <li key={item.where} className="row">
              <p className="row__key row__key--when">{item.when}</p>
              <div>
                <h3 className="row__title">
                  {item.current && <span className="dot" aria-label="Current role" />}
                  {item.where}
                </h3>
                <p>{item.what}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
