import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import products from "../data/productos.json"

export const ProductDetail = () => {
	const [productId, setProductId] = useState(null)
	const { id } = useParams()

	console.log({ id })
	useEffect(() => {
		setProductId(products.find(product => product.id === Number(id)))
	}, [id])

	if (!productId) return <div>Buscando..</div>

	return (
		<main>
			<h1>Detalle del producto:</h1>
			<h2>{productId.name}</h2>
			<img width={250} src={productId.img} alt={productId.name} />
			<p>{productId.detail}</p>
		</main>
	)
}