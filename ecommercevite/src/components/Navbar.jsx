import { CartWidget } from "./CartWidget"
export const Navbar = () => {
    return (<nav>
        <div>Bienvenidos</div>
        <ul>
            <li>Inicio</li>
            <li>iPhone</li>
            <li>Samsung</li>
            <li>Motorola</li>
            <li>LG</li>
            <li>Ayuda</li>
        </ul>
        <CartWidget/>
    </nav>)
}