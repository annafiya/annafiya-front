import { FormComplate } from "../components/FormComplate";
// import { Product } from "../components/Product";
import { Psorinorm } from "../components/Psorinorm";
// import products from "../datas/items.json";
import "./Products.css";
export function Products() {
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
      <Psorinorm />
      {/* <Product products={products} /> */}
      <FormComplate />
    </>
  );
}
