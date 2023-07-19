import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { requestData } from "../../helpers/requestdata"
import { Spinner } from "../Spinner/Spinner"
import { ItemDetail } from "../ItemDetail/ItemDetail"


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        requestData()
            .then(r => {
                setItem(r.find(prod => prod.id === Number(itemId)))
            })
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