import { useEffect, useState } from "react"
import { requestData } from "../../helpers/requestdata"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { Spinner } from "../Spinner/Spinner"



export const ItemListContainer = () => {

    const [products, setproduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    console.log(categoryId)
    useEffect(() => {

        setLoading(true)

        requestData()
            .then(res => {
                categoryId
                    ? setproduct(res.filter(products => products.category === categoryId)) 
                    : setproduct(res)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return (
        <div>
            <h3> hola</h3>
            {
                
                loading
                    ? <h3 style={{ height: '100vh', textAlign:'center', marginTop:'10%', fontSize:'20px' }} >Loading... <Spinner/> </h3> 
                    : <ItemList products={products} />
            }
            
        </div>
    )
}