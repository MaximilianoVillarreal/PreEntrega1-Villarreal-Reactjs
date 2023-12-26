import { useContext } from "react"

import { ItemCounter } from "./ItemCounter"
import { CartContext } from "../contexts/CartContext"

export const ItemDetail = ({item}) => {
    const contextValue = useContext(CartContext);
    const {onAdd} = contextValue || { onAdd: () => {} };

    const add = (quantity) => {
        onAdd(item, quantity)
    }
    return (
        <>
        <h1>{item.title}</h1>
        <img src={item.img} width={400}/>
        <h2>Disponible: {item.stock}</h2>
        <ItemCounter onAdd={add} stock={item.stock} initial={1}/>
        </>
    )
}