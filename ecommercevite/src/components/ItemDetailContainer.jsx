import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap/Container";

import {productos} from "../data/productos.json"


export const ItemDetailContainer = () => {
    const [item, setItem] = useState (null);

    const {id} = useParams();

    useEffect(() => {
        const mypromise = new Promise((resolve, reject) => {
            setTimeout(() =>{resolve(productos)}, 2000)
        });
        mypromise.then((response) => {
                const findById = response.find(item => item.id === id
                ); setItem(findById)
            });
    }, [id])

    return <Container className= "mt-4">
        {JSON.stringify(item)}
    </Container>
}