import {useState} from 'react'
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "../services/firebase.config";
import item from "../items.json";

const UseFirebase = () => {

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [loading,setLoading] = useState(false);

    const getFirestore = (path) => {
        return collection(db, path);
    }
    const getProducts = async () => {
        setLoading(true);
        try {
            /*const data = await getDocs(getFirestore('products'));
            const result = data.docs.map(doc => doc={id:doc.id,...doc.data()});*/
            setProducts(item);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const getProductsByCategoryId = async (categoryId) => {
        setLoading(true);
        try {
            /*const data = await getDocs(getFirestore('products'));
            const result = data.docs.map(doc => doc={id:doc.id,...doc.data()});*/
            const filteredItem = await item.filter((item) => item.categoryId === categoryId);
            setProducts(filteredItem);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const getProductById = async (id) => {
        setLoading(true);
        try {
            /*const data = await getDocs(getFirestore('products'));
            const result = data.docs.map(doc => doc={id:doc.id,...doc.data()});*/
            const randomItem = await item[Math.floor(Math.random() * item.length)];
            setProduct(randomItem);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (e, form) => {
        e.preventDefault();
        const order = await addDoc(getFirestore('orders'), form);
        console.log(order);
    }

    return {
        getProducts,
        getProductsByCategoryId,
        products,
        getProductById,
        product,
        handleSubmit
    }
}
export default UseFirebase;
