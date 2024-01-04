import { Outlet, Link } from "react-router-dom";
const Layout = () => {
return (
    <>
    <nav>
        <ul>
        <li>
            <Link to="/blogs">Blogs</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/useReducer">useReducer</Link>
        </li>
        </ul>
    </nav>
    <Outlet />
    </>
)
};
export default Layout;