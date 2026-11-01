import Link from "next/link";

const checks = [
  { number: "01", label: "Capture", detail: "Offline at the station" },
  { number: "02", label: "Compare", detail: "Against the signed form" },
  { number: "03", label: "Publish", detail: "With the source attached" },
];

const principles = [
  ["Traceable by design", "Follow a number back to its source."],
  ["Secure by default", "Authenticated access and encrypted transmission."],
  ["Resilient in the field", "Record now. Sync when a connection returns."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Uwazi 2027 home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>UWAZI <small>2027</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="#model">How it works</Link>
          <Link href="#evidence">The evidence</Link>
          <Link href="#about">About</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> A prototype for Kenya&apos;s 2027 elections</p>
          <h1>Follow a result<br /><em>all the way back.</em></h1>
          <p className="hero-intro">
            Uwazi makes the path from a polling station form to a public tally legible — so people can check the result, not just receive it.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="#model">Trace one result <span>↓</span></Link>
            <Link className="text-link" href="#about">Read the project brief <span>↗</span></Link>
          </div>
          <p className="hero-note"><span className="note-rule" /> Designed to support the legally recognised IEBC process — not replace it.</p>
        </div>

        <div className="result-passport" aria-label="A result passport showing the path from station to public tally">
          <div className="passport-meta"><span>FORM 34A</span><span>NAIROBI WEST · 2027</span></div>
          <div className="passport-number">24,806</div>
          <p className="passport-caption">Total valid votes recorded at<br />Kilimani Primary School</p>
          <div className="passport-trail">
            <div className="trail-step done"><span className="trail-dot">✓</span><div><b>Recorded</b><small>09:42 EAT · polling station</small></div></div>
            <div className="trail-step done"><span className="trail-dot">✓</span><div><b>Compared</b><small>3 checks passed · verification desk</small></div></div>
            <div className="trail-step current"><span className="trail-dot">3</span><div><b>Visible</b><small>Source form attached · public record</small></div></div>
          </div>
          <div className="passport-footer"><span>Signed source document</span><span>Public record ↗</span></div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Project commitments">
        {checks.map((check) => (
          <div key={check.number}><strong>{check.label}</strong><small>{check.detail}</small></div>
        ))}
      </section>

      <section className="model-section" id="model">
        <div className="section-lead">
          <p className="eyebrow">How it works</p>
          <h2>Every hand-off<br /><span>leaves a trace.</span></h2>
          <p className="section-intro">The official process stays in charge. Uwazi adds a readable trail around it, showing what happened, where, and what was checked.</p>
        </div>
        <div className="process-list">
        <article className="process-row">
          <div className="process-place"><span className="place-marker">●</span><small>POLLING STATION</small><b>Capture offline</b></div>
            <p>Officials record the announced figures even when connectivity is limited. The device keeps a secure local copy.</p>
            <span className="row-arrow">↘</span>
          </article>
          <article className="process-row featured">
            <div className="process-place"><span className="place-marker">●</span><small>VERIFICATION DESK</small><b>Compare the evidence</b></div>
            <p>Automated checks compare transmitted figures with the signed results form and flag anything that needs human review.</p>
            <span className="row-arrow">↘</span>
          </article>
          <article className="process-row">
            <div className="process-place"><span className="place-marker">●</span><small>PUBLIC PORTAL</small><b>Publish with context</b></div>
            <p>Citizens, candidates, and observers can trace a public tally back to its polling station source.</p>
            <span className="row-arrow">↘</span>
          </article>
        </div>
      </section>

      <section className="evidence-section" id="evidence">
        <div className="evidence-copy">
          <p className="eyebrow">The evidence</p>
          <h2>Don&apos;t take<br /><em>the number.</em></h2>
          <p>See the signed form, the checks around it, and the moment it became part of the public record. No black box replaces the source document.</p>
          <ul className="principle-list">{principles.map(([title, detail]) => <li key={title}><span>✓</span><div><strong>{title}</strong><small>{detail}</small></div></li>)}</ul>
        </div>
        <div className="evidence-visual">
          <div className="document">
            <div className="document-header"><span>UWAZI / 2027</span><span>FORM 34A</span></div>
            <div className="document-title">PRESIDENTIAL<br />ELECTION</div>
            <div className="document-lines"><i /><i /><i /><i /><i /></div>
            <div className="document-signature">Signed at the polling station</div><div className="document-seal">✓</div>
          </div>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label">WHY THIS MATTERS</div>
        <div className="about-content">
          <h2>Clarity is not<br />a technical feature.<br /><em>It is a public right.</em></h2>
          <div><p>Uwazi is a student-led project exploring practical ways to improve the accuracy, security, and transparency of election results communication in Kenya.</p><p className="muted">An exploration of better systems for the 2027 General Elections.</p><Link className="button button-light" href="mailto:hello@uwazi2027.example">Start a conversation <span>↗</span></Link></div>
        </div>
      </section>

      <footer className="site-footer"><Link className="brand" href="/"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>UWAZI <small>2027</small></span></Link><p>Results, with the evidence to match.</p><span className="footer-note">KENYA · 2027</span></footer>
    </main>
  );
}
