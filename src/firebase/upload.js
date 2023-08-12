import { addDoc, collection } from "firebase/firestore"
import MONK_DATA from "../data/MOCK_DATA.json" assert {type:'json'}
import { db } from "./config.js"

const productRef = collection(db, "products")


MONK_DATA.forEach(item => {
    delete item.id
    addDoc(productRef, item)
})

console.log(MONK_DATA)

