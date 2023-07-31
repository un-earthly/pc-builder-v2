import { Product } from '@/interface/product.interface';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { db } from '../../../firebase.init';

const fetchCategoryData = async (category: string) => {
    const productsRef = collection(db, 'products');

    const q = query(productsRef, where('category', '==', category));

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
        <div>
            <h1>Category: {category}</h1>
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
