import { GetStaticProps, GetStaticPaths } from 'next';
import { Product } from '@/interface/product.interface';
import { db } from '../../../firebase.init';
import { collection, getDocs, doc, getDoc } from "firebase/firestore"
import ReviewItem from '@/components/ReviewCard';
import { useRouter } from 'next/router';

interface ProductDetailsProps {
    product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    const { reviews, image, keyFeatures, ...productDetails } = product;
    const hasReviews = Array.isArray(reviews) && reviews.length > 0;

    return (
        <>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                            src={image}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{productDetails.category}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productDetails.name}</h1>
                            <div className=" mb-4">

                                <p className="text-gray-600">Average Rating: {productDetails.averageRating}</p>
                                <p className="text-gray-600">Individual Rating: {productDetails.individualRating}</p>

                            </div>
                            <p className="leading-relaxed">
                                {productDetails.description}
                            </p>
                            <div className="mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                                {Object.entries(keyFeatures).map(([key, value]) => (
                                    <p key={key} className="text-gray-500 mb-2">
                                        {value}
                                    </p>
                                ))}

                                <p className='bg-teal-500 text-white px-5 font-semibold'>{productDetails.status}</p>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">Price : ${productDetails.price}</span>

                            </div>
                        </div>
                        <div>
                            {hasReviews && (
                                <div>
                                    <h2>Reviews:</h2>
                                    {reviews.map((item, index) => (
                                        <ReviewItem review={item} key={index} />
                                    ))}
                                </div>
                            )}
                            {!hasReviews && <p>No reviews available.</p>}
                        </div>
                    </div>
                </div>
            </section>
        </>
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