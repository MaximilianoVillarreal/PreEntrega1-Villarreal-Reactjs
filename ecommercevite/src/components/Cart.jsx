import { useContext, useState } from "react";
import { Container, Table, Button, Form} from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import {getFirestore, collection, addDoc,} from "firebase/firestore";

import { CartContext } from "../contexts/CartContext";

const initialValues = {
        name: "",
        phone: "",
        email: "",
}
export const Cart = () => {
    const [ buyer, setBuyer] = useState(initialValues)
    const { clear, items, onRemove} = useContext(CartContext)
    const navigate = useNavigate();
    const total = items.reduce (
        (acumulador, valorActual) => acumulador + (valorActual.quantity * valorActual.price), 0
        )
    const handleChange = (event) => {
        setBuyer((buyer) => {
            return{
                ...buyer,
                [event.target.name] : event.target.value,
            }
        })
    }
    const sendOrder = (ev) => {
        ev.preventDefault()
        
            const order = {
                buyer,
                items,
                total: 13600,
            };
        
            const db = getFirestore();
            const orderCollection = collection(db, "orders");
        
            addDoc(orderCollection, order).then(({ id }) => {
                if (id) {
                    alert("Su orden: " + id + " ha sido completada!");
                    setBuyer(initialValues);
                    clear();
                }
            });
    }

    if (!items.length){
        return <Container className="mt-4"><h2>Realiza un pedido</h2><button onClick={() => navigate("/")}>Volver al Inicio</button></Container>
    }

    return(
        <Container className="mt-4">
            <h1>Carrito</h1>
            <Table striped>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Imágen</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
            {items?.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td><img src={item.img} width={300} /></td>
                    <td onClick={() => onRemove(item.id)}>X</td>
                </tr>
    ))}
        </tbody>
        <tfoot>
            <tr>
                <td>Total: {total}</td>
            </tr>
        </tfoot>
    </Table>
        <button onClick={clear}>Vaciar Carrito</button>
        <hr />
    <Form>
        <Form.Group className="mb-3" >
            <Form.Label>Dirección de correo electrónico</Form.Label>
            <Form.Control type="email" value={buyer.email} onChange={handleChange} name="email" required/>
        </Form.Group>

        <Form.Group className="mb-3" >
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={buyer.name} onChange={handleChange} name="name" required/>
        </Form.Group>
        <Form.Group className="mb-3" >
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="text"  value={buyer.phone} onChange={handleChange} name="phone" required/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={sendOrder} >
            Enviar
        </Button>
    </Form>
    </Container>
    )
}

