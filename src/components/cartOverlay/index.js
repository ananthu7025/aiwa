import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSingleItemFromCart } from '../../store/action/cartAction';
import { submitCartDetails } from '../../api';

function CartOverlay({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        city: '',
      });
    
      const openStyle = isOpen ? { width: "100%" } : { width: "0" };
      const cartItems = useSelector((state) => state.cart.cartItems);
      const dispatch = useDispatch();
    
      const handleRemoveItem = (itemId) => {
        dispatch(removeSingleItemFromCart(itemId));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
          cartedItems: cartItems.map((item) => ({
            productId: item.item.id,
            quantity: item.quantity,
          })),
          userDetails: {
            name: formData.name,
            companyName: formData.companyName,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
          },
        };
        submitCartDetails(payload)
          .then((response) => {
            console.log(response);
            if (response.ok) {
              console.log('Details submitted successfully');
            } else {
              console.error('Error submitting details');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      };

  return (
    <div id="myNav" className="overlay" style={openStyle}>
      <div className="overlay-content">
        <section className="contact-outer">
          <span className="closebtn" onClick={onClose}>&times;</span>
          <div className="formsection">
            <div className="sqaure bgwhite"></div>
            <h1>How can we help you?</h1>

            <form
              action="#"
              className="formsection-inner"
              data-toggle="validator"
              id="formId"
              method="post"
              onSubmit={handleSubmit} 
            >
              <h5>ADDED PRODUCTS ({cartItems.length})</h5>
              {cartItems.length === 0 ? (
                <h6 style={{ color: "white" }}>Your cart is empty.</h6>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="cart_product">
                    <div className="cart_item">
                      <img
                        className="img-fluid"
                        src={item.item.image_url}
                        alt={item.item.image_url}
                      />
                    </div>
                    <div className="cart_item">
                      <h5>{item.item.name}</h5>
                      <div className="strech_line"></div>
                      <p className="codetext">
                        CATCODE: <span>{item.item.catCode}</span>
                      </p>
                      <p className="description">{item.item.description}</p>
                    </div>
                    <div className="cart_item">
                      <i
                        className="fas fa-minus-circle"
                        onClick={() => handleRemoveItem(item.item.id)}
                      ></i>
                    </div>
                  </div>
                ))
              )}

              <h5>I'M INTERESTED IN...</h5>
              <div className="checkbox_grid">
                <div className="form-check checkbox">
                  <input type="checkbox" className="form-check-input" id="Check1" />
                  <label className="form-check-label" htmlFor="Check1">a demo</label>
                </div>
                <div className="form-check checkbox">
                  <input type="checkbox" className="form-check-input" id="Check2" />
                  <label className="form-check-label" htmlFor="Check2">a quote</label>
                </div>
                <div className="form-check checkbox">
                  <input type="checkbox" className="form-check-input" id="Check3" />
                  <label className="form-check-label" htmlFor="Check3">technical details</label>
                </div>
                <div className="form-check checkbox">
                  <input type="checkbox" className="form-check-input" id="Check4" />
                  <label className="form-check-label" htmlFor="Check4">solution benefits</label>
                </div>
                <div className="form-check checkbox">
                  <input type="checkbox" className="form-check-input" id="Check5" />
                  <label className="form-check-label" htmlFor="Check5">supporting documents</label>
                </div>
              </div>

              <h5>HERE MY CONTACT DETAILS...</h5>

              <div className="form_grid">
                <div className="form-group">
                  <div className="field">
                    <label htmlFor="fullname">FULL NAME</label>
                    <input
                      type="text"
                      className="form-control"
                      htmlFor="fullname"
                      data-error="* Required"
                      name="name"
                      id="name"
                      placeholder="Name *"
                      required
                      value={formData.name} 
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    />
                  </div>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <div className="field">
                    <label htmlFor="companyname">COMPANY NAME</label>
                    <input
                      type="text"
                      className="form-control"
                      name="companyname"
                      htmlFor="companyname"
                      data-error="* Required"
                      id="companyname"
                      placeholder="Company Name *"
                      required
                      value={formData.companyName} 
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })} 
                    />
                  </div>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <div className="field">
                    <label htmlFor="emailaddress">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      className="form-control"
                      htmlFor="emailaddress"
                      data-error="* Required"
                      id="email"
                      name="email"
                      placeholder="Email *"
                      required
                      value={formData.email} 
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    />
                  </div>
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <div className="field">
                    <label htmlFor="phonenumber">PHONE NUMBER</label>
                    <input
                      type="tel"
                      className="form-control"
                      htmlFor="phonenumber"
                      name="phone"
                      id="phone"
                      minLength="10"
                      maxLength="10"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone} 
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="field">
                    <label htmlFor="city">CITY</label>
                    <input
                      type="text"
                      className="form-control"
                      htmlFor="city"
                      data-error="* Required"
                      name="city"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="button-area">
                <button type="submit" className="btn check" value="Check">
                  SUBMIT YOUR DETAILS
                </button>
                <span></span>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CartOverlay;
