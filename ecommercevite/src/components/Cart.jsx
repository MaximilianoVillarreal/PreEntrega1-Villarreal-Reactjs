import { useContext, useState } from "react";
import { Container, Table, Button, Form} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

export const Cart = () => {
    const { clear, items, onRemove} = useContext(CartContext)
    const [ buyer, setBuyer] = useState({
        name: "",
        phone: "",
        email: "",
    })
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
                    <td onClick={() => onRemove(item.id)}>X</td>
                </tr>
    ))}
        </tbody>
    </Table>
        <button onClick={clear}>Vaciar Carrito</button>
        <hr />
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Dirección de correo electrónico</Form.Label>
        <Form.Control type="email" value={buyer.email} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" value={buyer.name} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Teléfono</Form.Label>
        <Form.Control type="text"  value={buyer.phone}/>
      </Form.Group>
      <Button variant="primary" >
        Enviar
      </Button>
    </Form>
    </Container>
    )
}
