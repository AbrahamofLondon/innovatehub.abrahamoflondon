import Head from "next/head";
import Link from "next/link";

const AOF_URL = process.env.NEXT_PUBLIC_AOF_URL || "https://abrahamoflondon.org";
const EARLY_ACCESS_FORM = "/forms/early-access.html";

export default function Home() {
  return (
    <>
      <Head>
        <title>InnovateHub — by Abraham of London</title>
        <meta
          name="description"
          content="InnovateHub, a venture by Abraham of London, empowers founders with strategy, playbooks, and support, alongside Alomarad and Enduleluxe."
        />
        <meta property="og:title" content="InnovateHub — by Abraham of London" />
        <meta
          property="og:description"
          content="Elevate your product with strategy, ethics, and design from the Abraham of London family."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://innovatehub.abrahamoflondon.org" />
        <meta name="theme-color" content="#0b2e1f" />
        <link rel="icon" href="/assets/social/innovatehub.ico" />
      </Head>

      <main className="wrap">
        <p className="badge">
          A venture from <a href={AOF_URL}>Abraham of London</a>
        </p>

        <header className="hero">
          <h1>InnovateHub</h1>
          <p className="lead">
            Elevate your product with <span className="underline">durable</span> strategy, playbooks, and support—faster and with fewer regrets, alongside Alomarad and Enduleluxe.
          </p>

          <div className="ctaRow">
            <a className="btnPrimary" href={EARLY_ACCESS_FORM}>
              Get Early Access
            </a>
            <a className="btnGhost" href={AOF_URL}>
              Abraham of London
            </a>
          </div>
        </header>

        <section className="grid">
          <article>
            <h3>Strategic Vision</h3>
            <p>
              InnovateHub delivers focused market strategies and roadmaps, compounded by Abraham of London’s expertise.
            </p>
          </article>
          <article>
            <h3>Disciplined Building</h3>
            <p>
              Lightweight systems and playbooks, with Alomarad ensuring ethical development and Enduleluxe adding design finesse.
            </p>
          </article>
          <article>
            <h3>Community Excellence</h3>
            <p>
              A network valuing craftsmanship and outcomes, uniting InnovateHub, Alomarad, and Enduleluxe under one banner.
            </p>
          </article>
        </section>

        <section className="brands">
          <h2>The Abraham of London Family</h2>
          <ul>
            <li>
              <span className="brand">Abraham of London</span>
              <span className="muted"> — Strategic oversight and stewardship</span>
            </li>
            <li>
              <span className="brand">InnovateHub</span>
              <span className="muted"> — Product strategy and build support</span>
            </li>
            <li>
              <span className="brand">Alomarad</span>
              <span className="muted"> — Ethical development and human capital</span>
            </li>
            <li>
              <span className="brand">Enduleluxe</span>
              <span className="muted"> — Performance, wellness, and design</span>
            </li>
          </ul>
        </section>

        <section className="panel">
          <h3>Build Something Timeless</h3>
          <p>
            Join the early group shaping InnovateHub, with access to playbooks, office hours, and collaboration with Alomarad and Enduleluxe.
          </p>
          <a className="btnPrimary" href={EARLY_ACCESS_FORM}>
            Request Access
          </a>
        </section>

        <footer className="footer">
          <nav>
            <a href="/">Home</a>
            <a href={EARLY_ACCESS_FORM}>Early Access</a>
            <a href="/contact">Contact</a>
            <a href={AOF_URL}>Abraham of London</a>
          </nav>
          <p className="legal">
            © {new Date().getFullYear()} Abraham of London. All rights reserved.
          </p>
        </footer>
      </main>

      <style jsx>{`
        :root {
          --forest: #0b2e1f;
          --cream: #f7f5ee;
          --ink: #1f2937;
          --line: rgba(0, 0, 0, 0.08);
        }
        * { box-sizing: border-box; }
        body { background: var(--cream); color: var(--ink); }
        .wrap {
          max-width: 980px; margin: 0 auto; padding: 3.5rem 1.25rem 4rem;
        }
        .badge {
          font-size: 0.9rem; opacity: 0.8; margin-bottom: 1.25rem;
        }
        .badge a { color: var(--forest); text-decoration: underline; }
        .hero { padding: 2rem 0 1rem; }
        h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.2rem, 6vw, 3.5rem);
          line-height: 1.05;
          margin: 0 0 0.75rem;
          color: var(--forest);
        }
        .lead {
          font-size: clamp(1.05rem, 2.5vw, 1.25rem);
          max-width: 48ch;
          opacity: 0.9;
        }
        .underline { border-bottom: 3px solid rgba(11, 46, 31, 0.25); }
        .ctaRow { display: flex; gap: 0.75rem; margin-top: 1.25rem; flex-wrap: wrap; }
        .btnPrimary, .btnGhost {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 0.8rem 1.2rem; border-radius: 999px; font-weight: 600;
          text-decoration: none;
        }
        .btnPrimary { background: var(--forest); color: white; }
        .btnPrimary:hover { filter: brightness(0.95); }
        .btnGhost { border: 1px solid var(--line); background: #ffffffaa; }
        .btnGhost:hover { background: #ffffff; }
        .grid {
          display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 2.5rem 0 1.5rem;
        }
        .grid article {
          background: #fff; border: 1px solid var(--line); border-radius: 16px;
          padding: 1.25rem 1.1rem;
        }
        .grid h3 { margin: 0 0 0.4rem; font-size: 1.1rem; }
        @media (min-width: 880px) {
          .grid { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        }
        .brands { margin: 2.25rem 0 1rem; }
        .brands h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.4rem; margin-bottom: 0.75rem;
        }
        .brands ul { list-style: none; padding: 0; margin: 0; }
        .brands li { padding: 0.5rem 0; border-bottom: 1px solid var(--line); }
        .brand { font-weight: 600; }
        .muted { opacity: 0.7; }
        .panel {
          margin: 2rem 0 0; padding: 1.5rem; border: 1px solid var(--line);
          background: #fff; border-radius: 18px; text-align: center;
        }
        .panel h3 { margin: 0 0 0.35rem; }
        .panel p { margin: 0 0 0.9rem; opacity: 0.9; }
        .footer { margin-top: 2.25rem; text-align: center; }
        .footer nav { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .footer nav a { color: var(--forest); text-decoration: underline; }
        .legal { margin-top: 0.6rem; font-size: 0.9rem; opacity: 0.7; }
      `}</style>
    </>
  );
}