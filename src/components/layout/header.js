import { ShoppingBag } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import '../../styles/header.css'
import { useSelector } from 'react-redux'

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const cart = useSelector((state) => state.retrieveCartReducer.cart)
    const { total_items } = cart
    return (
        <>
            <header className='fixed-top shadow'>
                <nav className='navbar navbar-expand-xl bg-light'>
                    <div className='container-fluid'>
                        <button className="navbar-toggler border-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" to="/">Shop</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/shop/">All Products</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Men
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/product/category/shirts/">Shirts</Link></li>
                                        <li><Link className="dropdown-item" to="/product/category/pants/">Pants</Link></li>
                                        <li><Link className="dropdown-item" to="/product/category/men-innerwears/">Innerwear</Link></li>
                                        <li><Link className="dropdown-item" to="/product/category/mens-footwears/">Footwears</Link></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Women
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/product/category/top/">Tops</Link></li>
                                        <li><Link className="dropdown-item" to="/product/category/jeans/">Jeans</Link></li>
                                        <li><Link className="dropdown-item" to="/product/category/women-innerwear/">Innerwears</Link></li>
                                        <li><Link className="dropdown-item" to="/product/category/women-footwears/">Footwears</Link></li>
                                    </ul>
                                </li>


                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Kids
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Boys</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/product/category/boys-shirts/">Shirts</Link></li>
                                        <li><Link className="dropdown-item" to="/product/category/boys-pants/">Jeans</Link></li>
                                        <li><Link className="dropdown-item" to="/product/category/boys-footwears/">Footwears</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="#">Girls</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/product/category/girls-tops/">Tops</Link></li>
                                        <li><Link className="dropdown-item" to="/product/category/girls-jeans/">Jeans</Link></li>
                                        <li><Link className="dropdown-item" to="/product/category/girls-footwears/">Footwears</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {
                            location.pathname !== "/cart/" ? <IconButton onClick={() => navigate("/cart/")}>
                                <Badge color='secondary' badgeContent={<strong>{total_items}</strong>}>
                                    <ShoppingBag />
                                </Badge>
                            </IconButton> : null
                        }
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header