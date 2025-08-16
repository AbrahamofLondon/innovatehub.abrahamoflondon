import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head><title>Contact | InnovateHub</title></Head>
      <main style={{minHeight:"70vh", padding:"4rem 1.25rem", maxWidth:720, margin:"0 auto"}}>
        <h1 style={{fontSize:"2rem", fontWeight:800, marginBottom:"1rem"}}>Contact</h1>
        <p style={{opacity:0.85, marginBottom:"1rem"}}>Tell us about your project.</p>

        {/* IMPORTANT: no data-netlify or form-name here */}
        <iframe
          src="/forms/contact.html"
          title="Contact form"
          style={{width:"100%", height:"560px", border:"0", borderRadius:"12px"}}
        />
        <p style={{marginTop:"0.75rem", fontSize:14, opacity:.7}}>
          Trouble seeing the form?{" "}
          <a href="/forms/contact.html">Open it in a new tab.</a>
        </p>
      </main>
    </>
  );
}
