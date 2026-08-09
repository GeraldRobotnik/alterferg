import Image from "next/image";

const scratchProfile =
  "https://scratch.mit.edu/users/goofyguhguhguhisback/";
const alterfergStudio = "https://scratch.mit.edu/studios/51588167/";

const transmissions = [
  {
    number: "001",
    title: "SPRITE LEAK",
    description: "A first look at the Chapter 1 cast, portrait sprites, and a few extremely normal secrets.",
    image: "/sprite-leak.png",
    href: "https://scratch.mit.edu/projects/1363110243/",
    alt: "Pixel-art preview of the alterferg cast",
  },
  {
    number: "002",
    title: "YOUR BEST TUTOR",
    description: "Mr. Tutorial has a battle theme. That probably means everything is going perfectly.",
    image: "/your-best-tutor.png",
    href: "https://scratch.mit.edu/projects/1334084257/",
    alt: "Scratch thumbnail for the Your Best Tutor soundtrack preview",
  },
  {
    number: "003",
    title: "CHARACTER LEAK",
    description: "Two more faces from the world of alterferg step out of the dark.",
    image: "/character-leak.png",
    href: "https://scratch.mit.edu/projects/1332925781/",
    alt: "Scratch thumbnail for the alterferg character reveal",
  },
];

const cast = ["BOB", "WALLDEN", "MR. TUTORIAL", "FERG", "EZLIO", "FIH"];

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="mini-mark" href="#top" aria-label="Alterferg home">
          <span aria-hidden="true">A</span>F
        </a>
        <nav aria-label="Main navigation">
          <a href="#cast">CAST</a>
          <a href="#transmissions">TRANSMISSIONS</a>
          <a href={scratchProfile} target="_blank" rel="noreferrer">
            SCRATCH ↗
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />

          <div className="hero-content">
            <div className="signal-label">
              <span className="signal-dot" aria-hidden="true" />
              SIGNAL FOUND // CHAPTER 1
            </div>

            <h1 className="hero-logo">
              <Image
                src="/alterferg-title.jpg"
                alt=""
                width={1280}
                height={584}
                priority
                sizes="(max-width: 900px) 92vw, 800px"
              />
              <span className="sr-only">alterferg</span>
            </h1>

            <div className="release-line">
              <span>CHAPTER 1</span>
              <span className="release-divider" aria-hidden="true" />
              <strong>COMING SOON</strong>
            </div>

            <p className="hero-copy">
              AlterFerg is an RPG about a paper frog named Ferg, dropped through
              a mysterious rift into a world full of fun, different characters.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={alterfergStudio}
                target="_blank"
                rel="noreferrer"
              >
                ENTER THE STUDIO <span aria-hidden="true">→</span>
              </a>
              <a className="button button-ghost" href="#transmissions">
                VIEW TRANSMISSIONS
              </a>
            </div>
          </div>

          <a className="scroll-cue" href="#cast" aria-label="Scroll to the cast">
            <span>SCROLL</span>
            <span className="scroll-line" aria-hidden="true" />
          </a>
        </section>

        <section className="cast-section section" id="cast">
          <div className="section-heading">
            <p className="section-kicker">FILE // 01</p>
            <h2>MEET THE<br />CHAPTER 1 CAST</h2>
            <p className="section-intro">
              Friends, foes, tutors, frogs, and at least one guy who definitely
              should not be here.
            </p>
          </div>

          <div className="cast-layout">
            <figure className="leak-frame">
              <div className="corner corner-tl" aria-hidden="true" />
              <div className="corner corner-tr" aria-hidden="true" />
              <div className="corner corner-bl" aria-hidden="true" />
              <div className="corner corner-br" aria-hidden="true" />
              <Image
                src="/chapter-one-cast.jpg"
                alt="Chapter 1 cast sprite sheet featuring Bob, Wallden, Mr. Tutorial, Ferg, Ezlio, and Fih"
                width={1280}
                height={960}
                sizes="(max-width: 900px) 92vw, 62vw"
              />
              <figcaption>RECOVERED ASSET // SPRITE LEAK</figcaption>
            </figure>

            <div className="cast-index" aria-label="Chapter 1 characters">
              <p className="index-title">KNOWN ENTITIES</p>
              {cast.map((name, index) => (
                <div className="cast-row" key={name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{name}</strong>
                </div>
              ))}
              <p className="index-note">More information unavailable. Probably for the best.</p>
            </div>
          </div>
        </section>

        <section className="transmissions-section section" id="transmissions">
          <div className="section-heading section-heading-wide">
            <p className="section-kicker">OPEN CHANNEL</p>
            <h2>LATEST<br />TRANSMISSIONS</h2>
            <p className="section-intro">
              Development leaks, sounds from the void, and other evidence that
              alterferg is becoming real.
            </p>
          </div>

          <div className="transmission-grid">
            {transmissions.map((item) => (
              <a
                className="transmission-card"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                key={item.number}
              >
                <div className="transmission-image">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={282}
                    height={212}
                    sizes="(max-width: 760px) 88vw, 30vw"
                  />
                  <span className="card-number">{item.number}</span>
                </div>
                <div className="card-body">
                  <p>SCRATCH BROADCAST</p>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                  <strong>OPEN PROJECT ↗</strong>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="final-signal section">
          <div className="signal-box">
            <p className="section-kicker">DON&apos;T CHANGE THE CHANNEL</p>
            <h2>IT&apos;S COMING<br />STRAIGHT FROM<br /><em>YOUR HOUSE.</em></h2>
            <p>
              Follow goofyguhguhguhisback on Scratch for the next leak,
              soundtrack drop, and the eventual Chapter 1 release.
            </p>
            <div className="hero-actions final-actions">
              <a
                className="button button-primary"
                href={scratchProfile}
                target="_blank"
                rel="noreferrer"
              >
                FOLLOW ON SCRATCH <span aria-hidden="true">↗</span>
              </a>
              <a
                className="button button-ghost"
                href={alterfergStudio}
                target="_blank"
                rel="noreferrer"
              >
                OFFICIAL STUDIO ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a href="#top" className="footer-mark" aria-label="Back to top">AF</a>
        <p>ALTERFERG // CHAPTER 1 // COMING SOON</p>
        <p>CREATED BY <a href={scratchProfile} target="_blank" rel="noreferrer">GOOFYGUHGUHGUHISBACK ↗</a></p>
      </footer>
    </div>
  );
}
