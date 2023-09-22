import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
    const [isNavScrolled, setNavScrolled] = useState(false);
    const [isNavOpen, setNavOpen] = useState(false);
    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setNavScrolled(true);
            } else {
                setNavScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="Home">
            <Header isNavScrolled={isNavScrolled} toggleNav={toggleNav} />
            <main>
                <>
                    <div className="banner_section">
                        <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner imgsize">
                                <div className="carousel-item active">
                                    <div className="bannerimage">
                                        <img
                                            className="d-block w-100"
                                            src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1670793072%2Fi_Stock_1148233855_7b06faa8ce.jpg&w=3840&q=75"
                                            alt="First slide"
                                        />
                                        <div className="image_text">
                                            <h1>
                                                Energy is <span>everything.</span>
                                            </h1>
                                            <p>
                                                We help you manage it with our intelligent energy and process
                                                management solutions. Explore our suite of products.
                                            </p>
                                            <a href="#">GET IN TOUCH</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="bannerimage">
                                        <img
                                            className="d-block w-100"
                                            src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1670793103%2Fi_Stock_1220009869_c25766df09.jpg&w=3840&q=75"
                                            alt="Second slide"
                                        />
                                        <div className="image_text">
                                            <h1>
                                                Energy is <span>everything.</span>
                                            </h1>
                                            <p>
                                                We help you manage it with our intelligent energy and process
                                                management solutions. Explore our suite of products.
                                            </p>
                                            <a href="#">GET IN TOUCH</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="bannerimage">
                                        <img
                                            className="d-block w-100"
                                            src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1670793130%2Fi_Stock_539213388_96c37c4413.jpg&w=3840&q=75"
                                            alt="Third slide"
                                        />
                                        <div className="image_text">
                                            <h1>
                                                Energy is <span>everything.</span>
                                            </h1>
                                            <p>
                                                We help you manage it with our intelligent energy and process
                                                management solutions. Explore our suite of products.
                                            </p>
                                            <a href="#">GET IN TOUCH</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>

                <section>
                    <div className="brands_section">
                        <div className="brand_inner">
                            <div className="sqaure"></div>
                            <h2>
                                Top global brands <span>trust us and our products</span> to harness
                                their energy resources.
                            </h2>
                        </div>
                        <div className="brand_image">
                            <img
                                src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1670792649%2Flifestyle_98fd222165.png&w=3840&q=75"
                                alt=""
                            />
                            <img
                                src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1670792649%2Fdr_reddys_dad82052af.png&w=3840&q=75"
                                alt=""
                                srcSet=""
                            />
                            <img
                                src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1670792649%2Fab_carter_inc_da8afcff25.png&w=3840&q=75"
                                alt=""
                                srcSet=""
                            />
                            <img
                                src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1670792649%2Fhal_b8c2f99b65.png&w=3840&q=75"
                                alt=""
                                srcSet=""
                            />
                            <img
                                src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1670792649%2Fshalimar_81cbe74646.png&w=3840&q=75"
                                alt=""
                                srcSet=""
                            />
                            <img
                                src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1670792649%2Fcapitaland_d9af1fa578.png&w=3840&q=75"
                                alt=""
                                srcSet=""
                            />
                        </div>
                        <div className="reduction_section">
                            <div className="reduction_item">
                                <h6>FEATURED CASE STUDY</h6>
                                <h3>
                                    13% reduction in <br /> operating costs.
                                </h3>
                                <p>
                                    Energy makes up almost a third of the raw material cost in a textile
                                    factory. Optimising energy usage can drastically reduce operating
                                    costs. Find out how we partnered with textile giant Sowmiya Spinners
                                    to increase factory efficiency.
                                </p>
                                <a href="">LEAR MORE</a>
                            </div>
                            <div className="reduction_image">
                                <img
                                    className="img-fluid"
                                    src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1670691473%2Fab_carter_image_5049c17391.png&w=3840&q=75"
                                    alt=""
                                    srcSet=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
         <Footer/>
        </div>
    )
}

export default Home