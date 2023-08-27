import { ContactWithMap } from "../components/ContactWithMap";
import "./About.css";
import certificates from "../datas/certificates.json";
import { CertificateCarusel } from "../components/CertificateCarusel";
export function About() {
  //   const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   // Fetch data from API and update the "products" state
  //   // Replace this with your API call logic
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('your-api-url');
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <>
      <div>
        <div className="about-content">
          <p className="about-title">Компаниямиз ҳақида</p>
          <p className="about-text">
            Биз сиз учун қайғурамиз .Соғлиғингиз ҳақида қайғуриш бизнинг
            вазифамиз.
          </p>
        </div>
        <div className="sertificate"></div>
      </div>
      <CertificateCarusel certificates={certificates} />
      <ContactWithMap />
    </>
  );
}
