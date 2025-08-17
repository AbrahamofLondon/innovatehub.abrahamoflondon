import Head from "next/head";
import Link from "next/link";

const SITE_ORIGIN =
  process.env.NEXT_PUBLIC_INNOVATEHUB_ORIGIN ||
  "https://innovatehub.abrahamoflondon.org";
const AOF_URL =
  process.env.NEXT_PUBLIC_AOF_URL || "https://abrahamoflondon.org";
const ALOMARADA_URL =
  process.env.NEXT_PUBLIC_ALOMARADA_URL || "https://alomarada.com";
const ENDURELUXE_URL =
  process.env.NEXT_PUBLIC_ENDURELUXE_URL || "https://endureluxe.com";
const EARLY_ACCESS_FORM = "/forms/early-access.html";

export default function Home() {
  const year = new Date().getFullYear();

  const structured = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InnovateHub",
    url: SITE_ORIGIN,
    parentOrganization: {
      "@type": "Organization",
      name: "Abraham of London",
      url: AOF_URL,
    },
    sameAs: [AOF_URL, ALOMARADA_URL, ENDURELUXE_URL],
    description:
      "InnovateHub helps founders ship durable products with strategy, ethics, and disciplined execution—part of the Abraham of London family alongside Alomarada and Endureluxe.",
  };

  return (
    <>
      <Head>
        <title>InnovateHub — Abraham of London Ventures</title>
        <meta
          name="description"
          content="Strategy, playbooks, and hands-on support to ship durable products and sustainable services. Part of the Abraham of London family with Alomarada (investor advisory & African-diaspora mentoring) and Endureluxe (premium, sustainable fitness partnerships)."
        />
        <meta property="og:title" content="InnovateHub — Abraham of London Ventures" />
        <meta
          property="og:description"
          content="Build for longevity: strategy, ethics, and excellent craft—powered by the Abraham of London ecosystem."
        />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#0b2e1f" />
        <link rel="canonical" href={SITE_ORIGIN} />
        <link rel="icon" href="/assets/social/innovatehub.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}
        />
      </Head>

      <main className="wrap">
        <p className="badge">
          A venture by <a href={AOF_URL}>Abraham of London</a>
        </p>

        {/* Hero */}
        <header className="hero">
          <div className="mark" aria-hidden="true">IH</div>
          <h1>InnovateHub</h1>
          <p className="lead">
            Tools, playbooks, and hands-on support to ship{" "}
            <em className="underline">durable</em> products—rooted in ethics,
            strategy, and excellent craft.
          </p>

          <div className="ctaRow">
            <a className="btnPrimary" href={EARLY_ACCESS_FORM}>Get Early Access</a>
            <a className="btnGhost" href={AOF_URL}>Abraham of London</a>
          </div>
        </header>

        {/* Story */}
        <section className="narrative">
          <p>
            Guided by Abraham of London, InnovateHub balances principle with
            performance. We help you find strategic clarity, focus on the levers
            that actually move value, and build for longevity—not trend cycles.
          </p>
        </section>

        {/* Pillars */}
        <section className="grid">
          <article>
            <h3>Strategic Clarity</h3>
            <p>
              Positioning, roadmaps, and decision frameworks that cut noise and
              accelerate outcomes.
            </p>
          </article>
          <article>
            <h3>Disciplined Execution</h3>
            <p>
              Pragmatic playbooks and coaching that turn intent into compounding
              progress.
            </p>
          </article>
          <article>
            <h3>Community & Ethics</h3>
            <p>
              We optimise for long-term trust—products that respect people,
              markets, and the future they shape.
            </p>
          </article>
        </section>

        {/* Ecosystem */}
        <section className="brands">
          <h2>The Abraham of London Family</h2>

          <div className="brandCards">
            <BrandCard
              initials="AØL"
              title="Abraham of London"
              description="Strategic stewardship, thought leadership, and the standards that hold the family together."
              href={AOF_URL}
              cta="Visit"
            />
            <BrandCard
              initials="IH"
              title="InnovateHub"
              description="Product and service strategy and hands-on build support for founders who want to trade with integrity and pace."
              href="#"
              cta="You’re here"
              muted
            />
            <BrandCard
              initials="AL"
              title="Alomarada"
              description="Business advisory guiding investors and mentoring African-diaspora entrepreneurs to develop African markets through ethical exploration of market gaps—with a practical commitment to unlocking the continent’s staggering human capital."
              href={ALOMARADA_URL}
              cta="Learn more"
            />
            <BrandCard
              initials="EL"
              title="Endureluxe"
              description="Premium, sustainable fitness partnerships that promote wellbeing—powered by community and thoughtful technology, and complemented by writing that advances state-of-the-art knowledge and practical life wisdom."
              href={ENDURELUXE_URL}
              cta="Discover"
            />
          </div>
        </section>

        {/* Callout */}
        <section className="panel">
          <h3>Build Something Enduring</h3>
          <p>
            Join the early cohort shaping InnovateHub—access to playbooks,
            office hours, and collaboration pathways across Alomarada and
            Endureluxe.
          </p>
          <a className="btnPrimary" href={EARLY_ACCESS_FORM}>Request Access</a>
        </section>

        {/* Footer */}
        <footer className="footer">
          <nav>
            <Link href="/">Home</Link>
            <a href={EARLY_ACCESS_FORM}>Early Access</a>
            <Link href="/contact">Contact</Link>
            <a href={AOF_URL}>Abraham of London</a>
          </nav>
          <p className="legal">© {year} Abraham of London. All rights reserved.</p>
        </footer>
      </main>

      {/* Styles */}
      <style jsx>{`
        :root {
          --forest: #0b2e1f;
          --cream: #f7f5ee;
          --ink: #1f2937;
          --line: rgba(0, 0, 0, 0.08);
        }
        * { box-sizing: border-box; }
        body { background: var(--cream); color: var(--ink); }
        .wrap { max-width: 1020px; margin: 0 auto; padding: 3.25rem 1.25rem 4rem; }
        .badge { font-size: .95rem; opacity: .85; margin-bottom: 1.1rem; }
        .badge a { color: var(--forest); text-decoration: underline; }
        .hero { padding: 2rem 0 1rem; }
        .mark {
          width: 56px; height: 56px; border-radius: 14px; display: grid; place-items: center;
          background: radial-gradient(120% 120% at 30% 20%, #0b2e1f, #174b35);
          color: #fff; font-weight: 800; letter-spacing: .5px; margin-bottom: .8rem;
        }
        h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.3rem, 7vw, 3.6rem);
          line-height: 1.04; margin: 0 0 .65rem; color: var(--forest);
        }
        .lead { font-size: clamp(1.05rem, 2.6vw, 1.25rem); max-width: 58ch; opacity: .92; }
        .underline { border-bottom: 3px solid rgba(11,46,31,.25); font-style: normal; }
        .ctaRow { display: flex; gap: .75rem; margin-top: 1.2rem; flex-wrap: wrap; }
        .btnPrimary, .btnGhost {
          display: inline-flex; align-items: center; justify-content: center;
          padding: .85rem 1.25rem; border-radius: 999px; font-weight: 700;
          text-decoration: none; transition: transform .06s ease, filter .15s ease;
        }
        .btnPrimary { background: var(--forest); color: #fff; }
        .btnPrimary:hover { filter: brightness(.96); transform: translateY(-1px); }
        .btnGhost { border: 1px solid var(--line); background: #ffffffb3; }
        .btnGhost:hover { background: #fff; transform: translateY(-1px); }

        .narrative { margin: 1.8rem 0 .2rem; }
        .narrative p { max-width: 68ch; opacity: .95; }

        .grid { display: grid; grid-template-columns: 1fr; gap: 1rem; margin: 2.2rem 0 1.6rem; }
        .grid article {
          background: #fff; border: 1px solid var(--line); border-radius: 16px; padding: 1.2rem 1.1rem;
        }
        .grid h3 { margin: 0 0 .4rem; font-size: 1.12rem; color: var(--forest); }
        @media (min-width: 900px) { .grid { grid-template-columns: repeat(3, 1fr); } }

        .brands { margin: 2.4rem 0 1.4rem; }
        .brands h2 {
          font-family: Georgia, "Times New Roman", serif; font-size: 1.5rem; margin-bottom: 1rem; color: var(--forest);
        }
        .brandCards { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 900px) { .brandCards { grid-template-columns: repeat(2, 1fr); } }

        .panel {
          margin: 2.2rem 0 0; padding: 1.6rem; border: 1px solid var(--line);
          background: #fff; border-radius: 18px; text-align: center;
        }
        .panel h3 { margin: 0 0 .35rem; color: var(--forest); }
        .panel p { margin: 0 0 .9rem; opacity: .92; }

        .footer { margin-top: 2.4rem; text-align: center; }
        .footer nav { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .footer nav a { color: var(--forest); text-decoration: underline; }
        .legal { margin-top: .6rem; font-size: .92rem; opacity: .7; }
      `}</style>
    </>
  );
}

/* ---------- Reusable brand card ---------- */

type BrandCardProps = {
  initials: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  muted?: boolean;
};

function BrandCard({ initials, title, description, href, cta, muted }: BrandCardProps) {
  return (
    <article className={`card ${muted ? "cardMuted" : ""}`}>
      <div className="logo">{initials}</div>
      <div>
        <h3 className="cardTitle">{title}</h3>
        <p className="cardText">{description}</p>
        <a
          className={`link ${muted ? "linkMuted" : ""}`}
          href={href}
          {...(muted ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        >
          {cta}
        </a>
      </div>

      <style jsx>{`
        .card {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 1rem;
          padding: 1.1rem;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: #fff;
        }
        .cardMuted { opacity: .85; }
        .logo {
          width: 64px; height: 64px; border-radius: 16px;
          display: grid; place-items: center; font-weight: 800;
          background: radial-gradient(120% 120% at 25% 15%, #0b2e1f, #205f44);
          color: #fff; letter-spacing: .5px;
        }
        .cardTitle { margin: 2px 0 6px; font-size: 1.1rem; color: var(--forest); }
        .cardText { margin: 0 0 .6rem; opacity: .92; }
        .link { color: var(--forest); text-decoration: underline; font-weight: 700; }
        .linkMuted { pointer-events: none; opacity: .55; }
      `}</style>
    </article>
  );
}
