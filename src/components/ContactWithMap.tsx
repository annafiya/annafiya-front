export function ContactWithMap() {
  return (
    <>
      <div className="contact-info-box" style={{ padding: "" }}>
        <div className="contact-info-text-box" style={{}}>
          <p className="contact-info-title">Алоқа учун : </p>
          <a
            href="tel:+998958116969"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p className="contact-info-text">+ 998 95 810 69 69</p>
          </a>
          <a
            href="tel:+998958116969"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p className="contact-info-text">+ 998 95 811 69 69</p>
          </a>

          <p className="contact-info-text">nabihonovmuhammadbilol@gmail.com</p>
          <p className="contact-info-text">
            Зангиота тумани Осиё маҳаласи, Тошкент
          </p>
        </div>
        <div className="contact-info-map-box">
          <iframe
            className="contact-info-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.73112493646!2d68.96755359608842!3d41.282434839211774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQvnNoa2VudCwgT2B6YmVraXN0b24!5e0!3m2!1suz!2s!4v1693139005094!5m2!1suz!2s"
          ></iframe>
        </div>
      </div>
    </>
  );
}
