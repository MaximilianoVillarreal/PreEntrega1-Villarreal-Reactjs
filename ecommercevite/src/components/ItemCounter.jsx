import { useState } from "react"

export const ItemCounter = ({ onAdd, stock, initial }) => {
    const [count, setCount] = useState(initial)
    const sumarArticulo = () => {
        if (stock > count) {
            setCount(prev => prev + 1)
        }
    }
    const restarArticulo = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }
    const agregarArticulo = () => {
        onAdd(count)
        setCount(initial)
    }
    return (
        <>
        <br />
        <br />
        <div style={{display: "flex"}}>
            <div style={{fontSize: 32}} onClick={restarArticulo}>-</div>
            <mark value={count}></mark>
            <div style={{fontSize: 32}} onClick={sumarArticulo}>+</div>
        </div>
        <br />
        <button onClick={agregarArticulo}>Agregar al carrito</button>
        </>
    )
}