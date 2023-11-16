import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import data from "../data/productos.json"

import { CartWidget } from "./CartWidget"
import { NavLink } from "react-router-dom"

const categories = data.map(item => item.category)

const uniqueCategories = new Set(categories)
export const NavBar = () => {
    <Navbar bg="dark" data-bs-theme="dark">
		<Container>
			<Navbar.Brand href="/">Navbar</Navbar.Brand>
			<Nav className="me-auto">
				<NavLink to="/category/Iphone">Iphone</NavLink>
				<NavLink to="/category/celular">Iphone</NavLink>
			</Nav>
			<CartWidget/>
		</Container>
	</Navbar>
}