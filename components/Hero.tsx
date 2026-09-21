import Image from "next/image";
import type { CSSProperties } from "react";
import { heroCards, site } from "@/lib/content";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__media">
        <Image
          src="/images/portrait.jpg"
          alt={site.portraitAlt}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__body">
        <div className="hero__copy">
          <h1 className="hero__title reveal" style={step(0)}>
            {site.headline}
          </h1>
          <p className="hero__intro reveal" style={step(1)}>
            {site.intro}
          </p>
          <div className="hero__actions reveal" style={step(2)}>
            <a className="btn btn--primary" href="#work">
              See my work
            </a>
            <a className="btn btn--light" href="#contact">
              Contact me
            </a>
          </div>
        </div>

        <div className="hero__aside">
          <p className="pill reveal" style={step(3)}>
            <span className="pill__mark" aria-hidden="true">
              {site.initials}
            </span>
            {site.role}, {site.location}
          </p>
          <ul className="cards">
            {heroCards.map((card, i) => (
              <li
                key={card.title}
                className={`card card--${card.tone} reveal`}
                style={step(4 + i)}
              >
                <span className="card__label">{card.label}</span>
                <div>
                  <h2 className="card__title">{card.title}</h2>
                  <p className="card__text">{card.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
