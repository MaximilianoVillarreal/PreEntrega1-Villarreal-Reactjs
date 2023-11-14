import { CartWidget } from "./CartWidget"
import { NavLink } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import data from "../data/productos.json"

const categories = data.map(item => item.category)

const uniqueCategories = new Set(categories)
export const NavBar = () => {
    <Navbar bg="dark" data-bs-theme="dark">
		<Container>
			<Navbar.Brand>Navbar</Navbar.Brand>
			<Nav className="me-auto">
				<NavLink to="/">
					<span className="nav-link">Inicio</span>
				</NavLink>
				{[...uniqueCategories].map(category => (
					<NavLink key={category} to={`/category/${category}`}>
						<span className="nav-link">{category}</span>
					</NavLink>
				))}
				<NavLink to="/Ayuda">
					<span className="nav-link">Ayuda</span>
				</NavLink>
			</Nav>
		</Container>
	</Navbar>
}