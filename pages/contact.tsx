import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head><title>Contact | InnovateHub</title></Head>
      <main style={{minHeight:"70vh", padding:"4rem 1.25rem", maxWidth:720, margin:"0 auto"}}>
        <h1 style={{fontSize:"2rem", fontWeight:800, marginBottom:"1rem"}}>Contact</h1>
        <p style={{opacity:0.85, marginBottom:"1rem"}}>Tell us about your project.</p>

        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label>Name<br/><input name="name" required style={{width:"100%", padding:"0.6rem", margin:"0.25rem 0 0.75rem"}}/></label>
          <label>Email<br/><input name="email" type="email" required style={{width:"100%", padding:"0.6rem", margin:"0.25rem 0 0.75rem"}}/></label>
          <label>Message<br/><textarea name="message" rows={5} required style={{width:"100%", padding:"0.6rem", margin:"0.25rem 0 1rem"}}/></label>
          <button type="submit" style={{background:"#0b2e1f", color:"#fff", padding:"0.75rem 1.25rem", borderRadius:999}}>
            Send
          </button>
        </form>
      </main>
    </>
  );
}
