import carrito from '../assets/carrito.png'
export const CartWidget = () => {
    return (
        <>
            <img src={carrito} alt="carrito" width={60} />
            <span>0</span>
        </>
    )
}