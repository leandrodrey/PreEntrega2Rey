import {useEffect, useState} from 'react'
import {collection, getDocs} from "firebase/firestore";
import {db} from "../services/firebase.config";

const UseFirebase = () => {

    const [products, setProducts] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const col = collection(db, 'products');
                const data = await getDocs(col);
                const result = data.docs.map(doc => doc={id:doc.id,...doc.data()})
                setProducts(result);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        getProducts();
    }, [])

    return {
        products
    };
}
export default UseFirebase
