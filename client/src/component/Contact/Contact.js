import "./contact.scss";

function Contact() {
  return (
    <div id="contact">
      {/* About Banner */}
      <div className="about__banner">
        <div className="blur-overlay" />
        <h3>Blog Detail</h3>
      </div>
      {/* carousel */}
      <div className="about__carousel">
        <div className="about__carousel-items">
          <i className="ti-location-pin" />
          <p>12/2th Quincy St, NYC 12018</p>
        </div>
        <div className="about__carousel-items">
          <i className="ti-mobile" />
          <p>(+1) 1234 567</p>
        </div>
        <div className="about__carousel-items">
          <i className="ti-email" />
          <p>contact@site.com</p>
        </div>
      </div>
      {/* gg map */}
      <div className="about__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8611185519894!2d105.78051921436861!3d21.038242292831686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab354920c233%3A0x5d0313a3bfdc4f37!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4csIMSQ4bqhaSBo4buNYyBRdeG7kWMgZ2lhIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1642756487475!5m2!1svi!2s"
          width="100%"
          height={600}
          style={{ border: 0 }}
          allowFullScreen
          title="ggmap"
        />
      </div>
      {/* form */}
      <div className="about__form">
        <div className="about__form-texta">
          <textarea rows={5} placeholder="Your Message" defaultValue={""} />
        </div>
        <div className="about__form-warp">
          <div className="about__form-name">
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="about__form-email">
            <input type="text" placeholder="Your Email" />
          </div>
        </div>
        <div className="about__form-phone">
          <input type="text" placeholder="Phone Number" />
        </div>
        <button className="btn">SEND</button>
      </div>
    </div>
  );
}

export default Contact;
