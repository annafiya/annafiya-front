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
            Ан-Нафиа жамоаси қарийб 2019-2020 йилдан буён ўз оиласига содиқ
            бўлган азолар билан биргаликда 4 йилдирки сиз азизларга ҳизмат қилиб
            келмоқда.Бу вақт мобайнида инсонларнинг ташқи сурати дини ирқи
            миллатидан қатъий назар уларнинг сафлари 10 мингдан ортиқ
            юртдошларимизга манфаат келтирмоқда.Кампаниянинг асл мақсади
            инсонларга тиббий ва табиий қолаверса псиҳологик ёндашувни ўз олдига
            асл мақсад қилиб қўйишдир.Ҳар бир жамият ҳар бир инсон соғлом яшашга
            haqlidir.Yilning ҳар қандай фасли ҳафтанинг ҳар қандай куни кун
            давомида ҳар қайси дақиқасида биз билан бўлинг. Сиз билан соғлом
            турмуш тарзини биргаликда қуршдан мамнунмиз.
          </p>
        </div>
        <div className="sertificate"></div>
      </div>
      <CertificateCarusel certificates={certificates} />
      <ContactWithMap />
    </>
  );
}
