import { FormComplate } from "../components/FormComplate";
import { ShortInfo } from "../components/ShortInfo";
// import { ProductCarousel } from "../components/OurProducts";
// import products from "../datas/items.json";
import { ContactWithMap } from "../components/ContactWithMap";
export function Home() {
  //   const [products, setProducts] = useState<Product[]>([]);

  //   useEffect(() => {
  //     // Fetch data from API and update the "products" state
  //     // Replace this with your API call logic
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch('your-api-url');
  //         const data = await response.json();
  //         setProducts(data);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };

  //     fetchData();
  //   }, []);
  return (
    <>
      <ShortInfo />
      {/* <ProductCarousel products={products} /> */}
      <FormComplate />
      <ContactWithMap />
    </>
  );
}
