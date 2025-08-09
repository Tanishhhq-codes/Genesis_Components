import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/footer.css';

const Footer = () => {
  const movingTextRef = useRef(null);

  useEffect(() => {
    const el = movingTextRef.current;
    const width = el.scrollWidth / 2; 
    
    gsap.set(el, { x: 0 });
    
    gsap.to(el, {
      x: -width,
      duration: 18,
      ease: 'sine.inOut',
      repeat: -1,
    });

    return () => gsap.killTweensOf(el);
  }, []);

  const textStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    color: '#ffffff',
    fontSize: '20rem',
    fontWeight: 100,
    fontFamily: "'Inter', 'Helvetica Neue', 'Arial', sans-serif",
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
  };

  return (
    <footer className="footer-container" style={{ position: 'relative', overflow: 'hidden', minHeight: '600px' }}>
      {/* Video Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.youtube.com/embed/Ut60OktMCoY?autoplay=1&mute=1&controls=0&loop=1&playlist=Ut60OktMCoY&modestbranding=1&playsinline=1&showinfo=0&rel=0&iv_load_policy=3"
          title="YouTube video background"
          frameBorder="0"
          allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '100vh',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.6) contrast(1.1) saturate(1.1)',
            pointerEvents: 'none',
          }}
        />
        
        {/* Overlays */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 1 }} />
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '150px',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 70%, transparent 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
      </div>
      
      {/* Content Layer */}
      <div style={{ position: 'relative', zIndex: 3, height: '100%' }}>
        <div className="footer-background">
          <div 
            ref={movingTextRef}
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              display: 'flex',
              whiteSpace: 'nowrap',
              width: 'max-content',
            }}
          >
            <div style={textStyle}>
              <img src="/logo.png" alt="Genesis Logo" className="genesis-logo" />
              GENESIS
            </div>
            <div style={textStyle}>
              <img src="/logo.png" alt="Genesis Logo" className="genesis-logo" />
              GENESIS
            </div>
          </div>
        </div>
        
        {/* Contact Panel */}
        <div className="overlay-side-panel">
          <div className="panel-content">
            <h3>Get in touch with us</h3>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Reason for contacting us?" rows="4"></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;