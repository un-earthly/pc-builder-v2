import { Product } from '@/interface/product.interface';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { db } from '../../../firebase.init';
import ProductCard from '@/components/ProductCard';

const fetchCategoryData = async (category: string) => {
    const productsRef = collection(db, 'products');

    const q = query(productsRef, where('category', '==', category.toUpperCase()));

    const snapshot = await getDocs(q);

    const productsData = snapshot.docs.map((doc) => {
        const data = doc.data() as Product;
        return { ...data, id: doc.id };
    });

    return productsData;
};

const CategoryPage = ({ data }: { data: any }) => {
    console.log(data)
    const router = useRouter();
    const { category } = router.query;

    return (
        <div className='bg-gray-100 min-h-screen'>

            <div className='grid lg:grid-cols-3 gap-10 p-10 md:grid-cols-2 '>
                {
                    data.map((p:Product) => <ProductCard key={p.id} product={p} />)
                }
            </div>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = ['cpu', 'motherboard', 'ram', 'psu', 'storage', 'monitor', 'others'];

    const paths = categories.map((category) => ({
        params: { category },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const category = params?.category as string;
    const data = await fetchCategoryData(category);
    return {
        props: {
            data,
        },
    };
};

export default CategoryPage;
