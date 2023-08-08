import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Spinner } from "../Spinner/Spinner"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

   
    const { itemId } = useParams()

    
    useEffect(() => {
        setLoading(true)

        //1- armo ref
        const itemRef = doc(db, "products", itemId )
        //2- llamar ref
        getDoc(itemRef)
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {

                loading
                    ? <h3 style={{ height: '100vh', textAlign: 'center', marginTop: '10%', fontSize: '20px' }} >Loading... <Spinner /> </h3>
                    : <ItemDetail item={item} />
            }

        </div>
    )
}