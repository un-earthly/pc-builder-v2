import { GetStaticProps, GetStaticPaths } from 'next';
import { Product } from '@/interface/product.interface';
import { db } from '../../../firebase.init';
import { collection, getDocs, doc, getDoc } from "firebase/firestore"

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { reviews, image, keyFeatures, ...productDetails } = product;
    return (
        <div className="flex items-center justify-center flex-col min-h-screen bg-gray-100">
            <img src={image} alt="" />
            <div className="max-w-3xl p-8 rounded">
                {Object.entries(productDetails).map(([key, value]) => (
                    <p key={key} className="text-gray-500 mb-2">
                        {key}: {value}
                    </p>
                ))}
            </div>
            {Object.entries(keyFeatures).map(([key, value]) => (
                <p key={key} className="text-gray-500 mb-2">
                    {value}
                </p>
            ))}
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Reviews:</h2>
                <ul className="list-disc list-inside">
                    {reviews.map((item, index) => (
                        <li key={index} className="text-gray-500 my-2 p-4 border border-gray-300 rounded">
                            <p>User: {item.userId}</p>
                            <p>Rating: {item.rating}</p>
                            <p>Comment: {item.comment}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductDetails;

export const getStaticPaths: GetStaticPaths = async () => {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    const productsData = snapshot.docs.map((doc) => doc.id);

    const paths = productsData.map((productId) => ({ params: { id: productId } }));

    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps<ProductDetailsProps> = async ({ params }) => {
    const productId = params?.id as string;

    const productRef = doc(db, 'products', productId);
    const productSnapshot = await getDoc(productRef);

    if (productSnapshot.exists()) {
        const productData = productSnapshot.data() as Product;


        return {
            props: {
                product: productData,
            },
        };
    } else {
        return {
            notFound: true,
        };
    }
};