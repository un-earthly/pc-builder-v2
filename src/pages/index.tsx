import ProductCard from "@/components/ProductCard";
import { Product } from "@/interface/product.interface";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase.init";
import { useDispatch } from "react-redux";
import { setProducts } from "@/redux/slices/productSlice";
export default function Home({ productsData }: any) {
  const featuredCategories = [
    "cpu"
  ]
  return <div>
    <div className="bg-gray-100">
      <h1>Featured Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {productsData?.map((product: Product) => <ProductCard product={product} />)}
      </div>
    </div>


    <h1>Featured Categories</h1>

    {/* {featuredCategories.map(cat => {
      div
    })} */}

  </div>
}
export const getStaticProps = async () => {
  const dispatch = useDispatch()
  const productsRef = collection(db, 'products');
  const snapshot = await getDocs(productsRef);

  const productsData = snapshot.docs.map((doc) => {
    const data = doc.data() as Product;
    return { ...data, id: doc.id };
  });
  dispatch(setProducts(productsData))
  return {
    props: {
      productsData,
    },
  };
};