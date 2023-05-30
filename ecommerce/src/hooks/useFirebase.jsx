import {useState} from 'react'
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "../services/firebase.config";
import item from "../items.json";

const UseFirebase = () => {

    const [products, setProducts] = useState([]);
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

    const handleSubmit = async (e, form) => {
        e.preventDefault();
        const order = await addDoc(getFirestore('orders'), form);
        console.log(order);
    }

    return {
        getProducts,
        products,
        handleSubmit
    }
}
export default UseFirebase;
