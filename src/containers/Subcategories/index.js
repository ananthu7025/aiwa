import React, { useEffect, useState } from 'react';
import { fetchProductsBySubcategory, fetchSubCatById } from '../../api/index';
import { useParams } from 'react-router-dom';
import { addToCart, removeSingleItemFromCart } from '../../store/action/cartAction';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function SelectedSubcategory({ selectedSub }) {

  const { subcategoryId } = useParams();
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartButtonState, setCartButtonState] = useState({});
  const [data, setData] = useState()


  const handleAddToCart = (item) => {
    if (cartButtonState[item.id] === 'added') {
      setCartButtonState({
        ...cartButtonState,
        [item.id]: 'not-added',
      });
      dispatch(removeSingleItemFromCart(item.id));

    } else {
      setCartButtonState({
        ...cartButtonState,
        [item.id]: 'added',
      });
      dispatch(addToCart(item));
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchProductsBySubcategory(subcategoryId)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  useEffect(() => {
    fetchSubCatById(subcategoryId)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [isModalOpen, selectedSub]);

  return (

    <div className="Home">
      <Header />
      <main>
        <section className="product_outer">
          <div className="product_inner">
            <h5>ENERGY AND POWER MONITORS</h5>
            <div className="product_grid">
              <div className="product_img">
                {/* <img
                  className="img-fluid"
                  src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1674707895%2FEDC_2450_036f4274c4.png&w=1920&q=75"
                  alt=""
                /> */}
                <img
                  className="img-fluid"
                  src={data?.image}
                  alt=""
                  style={{marginTop:"30px"}}
                />
              </div>
              <div className="product_detail">
                <h1>{data?.name}</h1>
                <div className="strech_line"></div>
                <div className="product_items">


                  {data?.description.split(',').map((title, index) => {
                    const staticImages = [
                      "https://res.cloudinary.com/doqlszv19/image/upload/v1672810659/1000_V_dc_measurement_8c1cec6c77.svg",
                      "https://res.cloudinary.com/doqlszv19/image/upload/v1672483018/bi_directional_abba2ccdbd.svg",
                      "https://res.cloudinary.com/doqlszv19/image/upload/v1672483018/bems_connectivity_380b79fc70.svg"
                    ];

                    return (
                      <div key={index} className="product_item">
                        <img
                          className="img-fluid"
                          src={staticImages[index]}
                          alt=""
                        />
                        <div className="product_title">{title}</div>
                      </div>
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="product_btn"
                  onClick={handleOpenModal}
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >
                  Add to estimate
                </button>
              </div>
              <div className="product_info">
                <h4>IMPROVE ENERGY EFFICIENCY OF DC ELECTRICAL SYSTEMS.</h4>
              </div>
            </div>
          </div>
        </section>

        {isModalOpen && (

          <div className="modal-dialog" role="document">
            <div className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="model_break">
                    <h6 className="modal_subtitle">Energy and Power Monitors</h6>
                    <h5 className="modal_title" id="exampleModalLongTitle">
                      DC Energy Meters
                    </h5>
                  </div>
                  <button
                    type="button"
                    className="close"
                    onClick={handleCloseModal}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>

                <div className="modal-body">
                  {products.map((product) => (
                    <div key={product.id} className="modalbody_grid">
                      <div className="modalbody_item">
                        <img
                  className="img-fluid"
                  src={product?.image_url}
                  alt=""
                />
                        {/* <img
                          className="img-fluid"
                          src={require("../../Screenshot (82).png")}
                          alt=""
                        /> */}
                      </div>
                      <div className="modalbody_item">
                        <h5>{product.name}</h5>
                        <p className="codetext">
                          CATCODE: <span>{product.CATCODE}</span>
                        </p>
                        <p className="description">
                          {product.description}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="modalbody_item"
                        style={{ all: "unset" }}
                        onClick={() => handleAddToCart(product)}
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                      >
                        {cartButtonState[product.id] === 'added' ? (
                          <i className="fas fa-minus-circle" />
                        ) : (
                          <i className="fas fa-plus-circle" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        )}

        <section>
          <div className="device_inner">
            <div className="device_grid">
              <div className="device_item">
                <img
                  className="img-fluid"
                  src="https://www.elmeasure.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdoqlszv19%2Fimage%2Fupload%2Fv1674789747%2FDC_c37ac744dc.png&w=2048&q=75"
                  alt=""
                />
              </div>
              <div className="device_details">
                <h3>Smart DC metering for renewable energy sources</h3>
                <ul>
                  <li>
                    Multiple channels can be measured by a single meter, EN2450N &amp;
                    EN2450D
                  </li>
                  <li>Differential current input for all the current channels</li>
                  <li>Programmable shunt secondary 50mV to 100mV</li>
                  <li>
                    Programmable CT Primary for all channels up to 200A - for Hall
                    Effect CT
                  </li>
                  <li>
                    data logging for parameters such as Energy, Load hours and Ampere
                    hours
                  </li>
                  <li>Easy installation,Compact size, weight and simple wiring</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default SelectedSubcategory;
