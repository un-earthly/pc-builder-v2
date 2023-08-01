import ProductCard from "@/components/ProductCard";
import { Product } from "@/interface/product.interface";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase.init";
import { useDispatch } from "react-redux";
import { setProducts } from "@/redux/slices/productSlice";
import Link from "next/link"
import { useState } from "react";
export default function Home({ productsData }: any) {
  const year = new Date().getFullYear()
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
  return <div className="bg-gray-100">

    <div className="bg-indigo-200 lg:grid lg:grid-cols-10 gap-5 place-items-center lg:text-left text-center min-h-screen">
      <div className="col-span-4">
        <div className="flex items-center justify-center p-3 h-full flex-col">
          <h1 className="lg:text-5xl md:text-4xl font-semibold text-indigo-950 uppercase">Looking to build your pc ?</h1>
          <p className="text-indigo-950 font-medium mt-4">Technology has become a part of our daily lives, and we depend on tech products daily for a vast portion of our lives.
            Lets build Your first pc and excel in future.</p>
          <div className="bg-white w-full  mt-3 flex items-center rounded-md overflow-hidden justify-center">
            <input placeholder="email" type="text" className="bg-transparent text-indigo-400 px-5 outline-none border-none flex-1" />
            <button className="bg-indigo-500 w-28 p-3">
              send
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-6 ">
        {/* <div className="bg-[url(https://www.corsair.com/pc-builder/WYSIWYG/welcome_DEFAULT.png)] bg-contain bg-no-repeat bg-center h-40"></div> */}
        <div>
          <img className="w-3/4 m-auto" src="https://www.corsair.com/pc-builder/WYSIWYG/welcome_DEFAULT.png" alt={"hero"} />
        </div>
      </div>
    </div>

    <div className="p-7" >
      <h1 className="text-center text-indigo-500 mb-4 lg:text-4xl font-bold ">Featured Products</h1>
      <div className="grid lg:grid-cols-4  md:grid-cols-2 place-items-center  gap-4">
        {productsData?.slice(0, 8).map((product: Product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>


    <div>
      <h1 className="text-center text-indigo-500 lg:text-4xl my-5 font-bold ">Featured Categories</h1>
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
    <footer className="bg-indigo-200 flex p-4 text-indigo-950 font-extrabold items-center justify-center">
      <p>@Copryright {year} ZABUILD</p>
    </footer>
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