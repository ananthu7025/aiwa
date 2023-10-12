import React, { useEffect, useState } from 'react';
import { fetchMainCategories, fetchSubcategoriesByMainCategory,fetchAllSub } from '../../api';
import { Link } from 'react-router-dom';
import CartOverlay from '../cartOverlay';


const Header = ({ setSelectedSub }) => {
    const [scrolled, setScrolled] = useState(false);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [selectedMainCategoryId, setSelectedMainCategoryId] = useState(null);
    const [isCartOverlayOpen, setIsCartOverlayOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        fetchMainCategories()
            .then((data) => {
                setCategories(data);
                if (data.length > 0) {
                    setSelectedMainCategoryId(data[0].id);
                }
            })
            .catch((error) => {
                console.error('Error fetching main categories:', error);
            });
    }, []);

    // useEffect(() => {
    //     if (selectedMainCategoryId !== null) {
    //         debugger
    //         fetchSubcategoriesByMainCategory(selectedMainCategoryId)
    //             .then((data) => {
    //                 setSubcategories(data);
    //             })
    //             .catch((error) => {
    //                 console.error('Error fetching subcategories:', error);
    //             });
    //     }
    // }, [selectedMainCategoryId]);
    useEffect(() => {
            fetchAllSub()
                .then((data) => {
                    setSubcategories(data);
                })
                .catch((error) => {
                    console.error('Error fetching subcategories:', error);
                });
    }, [selectedMainCategoryId]);
    const handleScroll = () => {
        if (window.pageYOffset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const handleDropdownClick = (mainCategoryId, subcategoryId) => {
        setSelectedMainCategoryId(mainCategoryId);
        const selectedSubcategory = subcategories.find((sub) => sub.id === subcategoryId);
        setSelectedSub(selectedSubcategory)
    };
    const openNav = () => {
        document.getElementById("myNav").style.width = "100%";
    };

    const closeNav = () => {
        document.getElementById("myNav").style.width = "0%";
    };

    console.log(subcategories);
    return (
    <header>
    <div className={`fixed-top ${scrolled ? 'scrolled' : ''}`} id="nav__section">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                    <img className="img-fluid" src={require('../../assests/logo.png')} alt="" srcSet="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto ml-auto topnav_link">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <div className="dropdown_grid">
                                    {categories.map(category => (
                                        <div className="dropdowngrid_item" key={category.id}>
                                            <h5>{category.name}</h5>
                                            <div className="strech_line margin"></div>
                                            {subcategories
                      .filter((subcategory) => subcategory.main_category_id === category.id)
                                                .map((subcategory) => (
                                                    <Link
                                                        to={`/subcategory/${subcategory.id}`}
                                                        className="dropdown-item"
                                                        key={subcategory.id}
                                                        onClick={() => handleDropdownClick(category.id, subcategory.id)}
                                                    >
                                                        {subcategory.name}
                                                    </Link>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resources</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Tools
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <div className="dropdowngrid_item fontweight">
                                    <a className="dropdown-item" href="#">Partner Portal</a>
                                    <a className="dropdown-item" href="#">Track Your Shipment</a>
                                    <a className="dropdown-item" href="#">Product Explorer</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="cart_icon">
                        <i className="fas fa-search"></i>
                        <i className="fas fa-shopping-cart" onClick={openNav}></i>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <CartOverlay isOpen={isCartOverlayOpen} onClose={closeNav} />
</header>
  )
}

export default Header
