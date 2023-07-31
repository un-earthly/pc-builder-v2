import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase.init';
import ProductCard from '@/components/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import {  setProducts } from '@/redux/slices/productSlice';
import { Product } from '@/interface/product.interface';
import { RootState } from '@/redux/store';
const Add = () => {
    const cpuProducts = [{}]
    const handleAddData = async () => {
        try {
            const collectionRef = collection(db, 'products');
            for (const product of cpuProducts) {
                await addDoc(collectionRef, product);
            }
            console.log('CPU products added successfully to Firebase!');
        } catch (error) {
            console.error('Error adding CPU products to Firebase:', error);
        }
    };
   
    return (
        <div className='bg-gray-200 text-black '>
            {/* <div>
                <h1>Featured Products</h1>
                <div className="grid grid-cols-3 gap-10">
                    {products?.map((product: Product) => <ProductCard product={product} />)}
                </div>
            </div> */}

            <button onClick={handleAddData}>Add CPU Products to Firebase</button>
        </div>
    );
};

export default Add;
