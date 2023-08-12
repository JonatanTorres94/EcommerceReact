import { useContext, useState } from "react"
import { CartContext } from "../../contex/CartContext"
import { collection, getDocs, addDoc, documentId, writeBatch, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link, Navigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

const schema = Yup.object().shape({
    name: Yup.string()
        .min(3, "The name is too short")
        .max(20, "Maximum 20 characters")
        .required("This field is required"),
    address: Yup.string()
        .min(6, "The address is too short")
        .max(20, "Maximum 20 characters")
        .required("This field is required"),
    email: Yup.string()
        .required("This field is required")
        .email("The email is invalid")
})

const Checkout = () => {
    const { cart, fullValue, emptyCart } = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [itemsPurchased, setItemsPurchased] = useState([]);

    const handleSubmit = async (values) => {
        setLoading(true)

        const orden = {
            cliente: values,
            items: cart.map(item => ({ id: item.id, price: item.price, quantity: item.quantity, name: item.name })),
            total: fullValue(),
            fyh: new Date()
        }

      
        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "products")
        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))

        const products = await getDocs(q)
        const outOfStock = []

        products.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.quantity) {
                batch.update(doc.ref, {
                    stock: stock - item.quantity
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            const doc = await addDoc(ordersRef, orden)
            setItemsPurchased(cart);
            emptyCart()
            setOrderId(doc.id)
        } else {
            alert("There are items out of stock")
            console.log(outOfStock)
        }


        setLoading(false)
    }

    if (orderId) {
        return (
            <div className="container my-5 mx-auto max-w-lg p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-4xl mb-4">Your purchase was registered successfully!</h2>
                <hr className="mb-4" />
                <p className="mb-4">Your order number is: <strong>{orderId}</strong></p>
                <p className="mb-4"> Congratulations you have purchased the following items: </p>
                <div className="mb-4 flex flex-wrap gap-4">
                    {itemsPurchased.map((item) => (
                        <img
                            key={item.id}
                            src={item.imageSrc}
                            alt={item.imageAlt}
                            className="w-16 h-16 object-cover rounded-full"
                        />
                    ))}
                </div>

                <Link to="/" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block">
                    Return
                </Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <Formik
                initialValues={{
                    name: '',
                    address: '',
                    email: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {() => (
                    <Form>
                        <Field placeholder="Name" className="form-control my-2" type="text" name="name" />
                        <ErrorMessage name="name" component="h2" />
                        <Field placeholder="address" className="form-control my-2" type="text" name="address" />
                        <ErrorMessage name="address" component="p" />
                        <Field placeholder="Tu email" className="form-control my-2" type="email" name="email" />
                        <ErrorMessage name="email" component="p" />
                        <button type="submit" className="btn btn-success" disabled={loading}>Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Checkout

