import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";

interface certificate {
  id: number;
  path: string;
}
interface CaruselComponentProps {
  certificates: certificate[];
}
export const CertificateCarusel: React.FC<CaruselComponentProps> = ({
  certificates,
}) => {
  return (
    <Container>
      <p className="certificate-carusel-title">Бизнинг сертификатларимиз </p>
      <Carousel interval={2000}>
        {certificates.length > 0 &&
          certificates.map((certificate) => (
            <Carousel.Item key={certificate.id}>
              <div className="certificate-carusel-item-box">
                <img
                  className="certificate-carusel-img"
                  src={certificate.path}
                />
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </Container>
  );
};
