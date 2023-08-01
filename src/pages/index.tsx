import ProductCard from "@/components/ProductCard";
import { Product } from "@/interface/product.interface";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase.init";
import { useDispatch } from "react-redux";
import { setProducts } from "@/redux/slices/productSlice";
import Link from "next/link"
export default function Home({ productsData }: any) {
  interface category { image: string, category: string }
  const dispatch = useDispatch()
  const categories: category[] = [
    {
      category: "cpu",
      image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gaming-console-48x48.png"
    },
    {
      category: "motherboard",
      image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gaming-console-48x48.png"
    },
    {
      category: "storage",
      image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gimbal-48x48.png"
    },
    {
      category: "psu",
      image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/powerstation-48x48.png"
    },
    {
      category: "monitor",
      image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/laptop-battery-01-48x48.png"
    },
    {
      category: "others",
      image: "https://www.startech.com.bd/image/cache/catalog/category-thumb/gpu-48x48.png"
    }
  ]
  dispatch(setProducts(productsData))
  return <div className="bg-gray-100 p-4">
    <div className="p-3" >
      <h1 className="text-center text-indigo-500 mb-4 lg:text-4xl ">Featured Products</h1>
      <div className="grid lg:grid-cols-4  md:grid-cols-2 place-items-center  gap-4">
        {productsData?.slice(0, 8).map((product: Product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>


    <div>
      <h1 className="text-center text-indigo-500 lg:text-4xl font-semibold my-5 ">Featured Categories</h1>
      <div className="md:flex flex-wrap  items-center justify-center">
        {categories.map((c: category, index: number) => (
          <Link className="flex items-center justify-center m-5" key={index} href={"category/" + c.category}>
            <div className="flex items-center justify-center flex-col bg-indigo-200 hover:bg-indigo-400 p-8
             rounded-xl hover:shadow-xl shadow-indigo-400 duration-100 md:w-36 w-3/4">
              <img src={c.image} alt={c.category}></img>
              <span className="px-4 text-indigo-950 font-bold mt-1 mx-2">{c.category.toUpperCase()}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>


  </div>
}
export const getStaticProps = async () => {
  const productsRef = collection(db, 'products');
  const snapshot = await getDocs(productsRef);

  const productsData = snapshot.docs.map((doc) => {
    const data = doc.data() as Product;
    return { ...data, id: doc.id };
  });

  return {
    props: {
      productsData,
    },
  };
};