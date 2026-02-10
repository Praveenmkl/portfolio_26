import Image from 'next/image';
import "./Hero.css";
import signature from "../../../public/signature.png"

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Praveen Kalansooriya</h1>
        <h2>Fullstack Developer ● UI/UX Enthusiast</h2>
        <div className="signature-wrapper">
          <Image
            src={signature}
            alt="Portfolio Signature Logo"
            width={800}
            className="hero-signature"
            priority
          />
        </div>
        <p>I design intuitive user experiences and build powerful web applications. Turning ideas into visually stunning and functional digital products.</p>
        <button>RESUME</button>
        <button>Let&apos;s Talk</button>
      </div>
    </section>
  );
}