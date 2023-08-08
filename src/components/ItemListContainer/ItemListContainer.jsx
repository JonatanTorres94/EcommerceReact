import { useEffect, useState } from "react"
import { requestData } from "../../helpers/requestdata"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Spinner } from "../Spinner/Spinner"
import { SubMenu } from "../SubMenu/SubMenu"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"


export const ItemListContainer = () => {

    const [products, setproduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {

        setLoading(true)
        // 1- armar la referencia (sync)
        const productsRef = collection(db, "products")
        const q = categoryId
                    ? query(productsRef, where('category', '==', categoryId))
                    : productsRef
        // 2- llamar a la ref (async)
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ... doc.data()
                    }
                })
                setproduct(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [categoryId])


    return (
        <div>
            <SubMenu />
            {

                loading
                    ? <h3 style={{ height: '100vh', textAlign: 'center', marginTop: '10%', fontSize: '20px' }} >Loading... <Spinner /> </h3>
                    : <ItemList products={products} />
            }

        </div>
    )
}