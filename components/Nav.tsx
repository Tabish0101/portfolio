import { site } from "@/lib/content";

export default function Nav() {
  return (
    <header className="nav">
      <a className="nav__logo" href="#top" aria-label={`${site.name}, home`}>
        {site.initials}
      </a>
      <nav className="nav__links" aria-label="Primary">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav__cta" href="#contact">
        Get in touch
      </a>
    </header>
  );
}
