import Head from "next/head";

const AOF_URL = process.env.NEXT_PUBLIC_AOF_URL || "https://abrahamoflondon.org";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — InnovateHub by Abraham of London</title>
        <meta
          name="description"
          content="Contact InnovateHub, a venture by Abraham of London, for product strategy support. Inquiries for Alomarad or Enduleluxe are also welcome."
        />
        <meta name="theme-color" content="#0b2e1f" />
      </Head>

      <main className="wrap">
        <p className="badge">
          A venture from <a href={AOF_URL}>Abraham of London</a>
        </p>

        <header className="hero">
          <h1>Contact InnovateHub</h1>
          <p className="lead">
            Reach out for product strategy support, or specify if your inquiry relates to Alomarad (ethical development) or Enduleluxe (performance design). We respond within 2–3 working days.
          </p>
        </header>

        <iframe src="/forms/contact.html" title="Contact form" className="iframe" />

        <p className="fallback">
          Trouble seeing the form? <a href="/forms/contact.html">Open it in a new tab</a>.
        </p>
      </main>

      <style jsx>{`
        :root {
          --forest: #0b2e1f;
          --cream: #f7f5ee;
          --ink: #1f2937;
          --line: rgba(0, 0, 0, 0.08);
        }
        .wrap {
          max-width: 860px;
          margin: 0 auto;
          padding: 3rem 1.25rem 4rem;
          color: var(--ink);
        }
        .badge {
          font-size: 0.9rem;
          opacity: 0.8;
          margin-bottom: 1rem;
        }
        .badge a {
          color: var(--forest);
          text-decoration: underline;
        }
        .hero h1 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(2rem, 6vw, 3rem);
          line-height: 1.05;
          margin: 0 0 0.5rem;
          color: var(--forest);
        }
        .lead {
          font-size: clamp(1.05rem, 2.5vw, 1.2rem);
          max-width: 60ch;
          opacity: 0.9;
          margin: 0 0 1rem;
        }
        .iframe {
          width: 100%;
          height: 640px;
          border: 1px solid var(--line);
          border-radius: 14px;
          background: #fff;
        }
        .fallback {
          margin-top: 0.6rem;
          font-size: 0.95rem;
          opacity: 0.8;
        }
        .fallback a {
          color: var(--forest);
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}