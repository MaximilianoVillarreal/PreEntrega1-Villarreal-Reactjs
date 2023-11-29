import { useContext } from "react";
import { Container, Table} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
    const { clear, items} = useContext(CartContext)
    const navigate = useNavigate()

    if (!items.lenght){
        return <Container className="mt-4"><h2>Realiza un pedido</h2><button onClick={() => Navigate("/")}>Volver al Inicio</button></Container>
    }

    return(
        <Container className="mt-4">
            <h1>Carrito</h1>
            <Table striped>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Imágen</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
            {items?.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><img src={item.img} width={300} /></td>
                    <td onClick={() => alert()}>X</td>
                </tr>
    ))}
        </tbody>
    </Table>
        <button onClick={clear}>Vaciar Carrito</button>
    </Container>
    )
}
