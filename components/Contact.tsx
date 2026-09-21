import Image from "next/image";
import { site } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Image
        className="contact__bg"
        src="/images/grain-gradient.png"
        alt=""
        fill
        sizes="100vw"
      />
      <div className="contact__card">
        <h2 className="h2">Let's talk about what you're building.</h2>
        <p>
          I'm happy to discuss product builds, backend architecture or joining a team.
        </p>
        <a className="btn btn--primary" href={`mailto:${site.email}`}>
          Email {site.name.split(" ")[0]}
        </a>
      </div>
      <footer className="contact__foot">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </section>
  );
}
