

import { useOrder } from "./Context/useOrder";
import { useCart } from "./Context/useCart";
import NavBar from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const { addOrder, profileData } = useOrder();
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleOrderNow = () => {
    Object.values(cart).forEach((product) => {
      addOrder(product);
    });
    clearCart();
  };

  const itemTotal = Object.values(cart).reduce((total, product) => {
    const price = parseFloat(product.price);
    if (isNaN(price)) {
      console.warn(`Invalid price for product ${product.id}: ${product.price}`);
      return total; 
    }

    return total + (price < 0 ? 0 : price); //
  }, 0);

  const discount = 0;
  const platformFee = 2;
  const shippingFee = 2;
  const totalAmount = itemTotal - discount + platformFee + shippingFee;
  const refundAmount = totalAmount * 0.6;

  return (
    <div>
      <NavBar />
      <div className="w-full h-full flex justify-around my-8 bg flex-col">
        <div className="w-full h-full flex justify-around my-8 bg">
          <div className="w-[640px] h-full flex flex-col">
            {Object.keys(cart).length === 0 ? (
              <div className="flex justify-center items-center h-full text-center">
                <h2 className="text-xl text-gray-600">
                  Your Cart is Empty <br /> Go to home Page for more products
                </h2>
              </div>
            ) : (
              <div className="overflow-y-auto h-[calc(2*14rem)]">
                {" "}
                
                {Object.values(cart).map((product) => {
                  const price = parseFloat(product.price);
                  return (
                    <div
                      key={product.id}
                      className="w-[600px] h-[215px] bg-primaryBlack flex items-center justify-around rounded-xl m-2"
                    >
                      <div>
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="h-48 w-48"
                        />
                      </div>
                      <div>
                        <div className="h-full w-full flex justify-between">
                          <div className="p-5">
                            <p className="text-white text-xl">{product.name}</p>
                            <p className="text-white text-xl">
                              ${isNaN(price) ? product.price : price}
                            </p>
                            <p className="text-white mt-4"> Qty : 1</p>
                          </div>
                        </div>
                      </div>
                      <div className="h-full flex justify-between">
                        <div className="p-5">
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="text-white text-xl"
                          >
                            <FontAwesomeIcon icon={faXmark} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {Object.keys(cart).length > 0 && (
            <>
              <div className="w-1/4 h-[400px] bg-customCream rounded-xl m-2 flex items-center flex-col p-5">
                <p>Price Details</p>
                <hr className="h-[2px] bg-black w-32" />
                <div className="flex justify-between h-[200px] w-64 m-5">
                  <div>
                    <p className="pb-2">
                      <strong> Item Total</strong>
                    </p>
                    <p className="pb-2">
                      <strong>Total Discount</strong>
                    </p>
                    <p className="pb-2">
                      <strong>Platform Fee</strong>
                    </p>
                    <p className="pb-2">
                      <strong>Shipping Fee</strong>
                    </p>
                    <hr className="h-[2px] bg-black" />
                    <p className="pb-2">
                      <strong>Total Amount</strong>
                    </p>
                  </div>
                  <div>
                    <p className="pb-2">
                      <strong>${itemTotal}</strong>
                    </p>
                    <p className="pb-2">
                      <strong>${discount}</strong>
                    </p>
                    <p className="pb-2">
                      <strong>${platformFee}</strong>
                    </p>
                    <p className="pb-2">
                      <strong>${shippingFee}</strong>
                    </p>
                    <p className="pb-2">
                      <strong>${totalAmount.toFixed(2)}</strong>
                    </p>
                  </div>
                </div>
                {Object.values(profileData).every((value) => !value) ? (
                  <button
                    onClick={handleLoginRedirect}
                    className="h-[40px] w-60 bg-secondaryCream text-primaryCream rounded-xl m-2"
                  >
                    Login To Place Orders
                  </button>
                ) : (
                  <button
                    onClick={handleOrderNow}
                    className="h-[40px] w-60 bg-secondaryCream text-primaryCream rounded-xl m-2"
                  >
                    Order Now
                  </button>
                )}
              </div>
              <div className="w-1/4 h-[400px] bg-customCream rounded-xl m-2 flex items-center flex-col p-5">
                <p>Take It on Membership</p>
                <hr className="h-[2px] bg-black w-32" />
                <div className="flex justify-between h-[200px] w-64 m-5">
                  <div>
                    <p className="pb-2">
                      <strong> Item Total</strong>
                    </p>
                    <p className="pb-2">
                      <strong>Total Discount</strong>
                    </p>
                    <p className="pb-2">
                      <strong>Platform Fee</strong>
                    </p>
                    <p className="pb-2">
                      <strong>Shipping Fee</strong>
                    </p>
                    <p className="pb-2">
                      <strong>Membership Duration </strong>
                    </p>
                    <hr className="h-[2px] bg-black" />
                    <p className="pb-2">
                      <strong>Total Amount</strong>
                    </p>
                    <hr className="h-[2px] bg-black" />
                    <p className="pb-2">
                      <strong>Refund Amount</strong>
                    </p>
                  </div>
                  <div>
                    <p className="pb-2">
                      <strong>${itemTotal}</strong>
                    </p>
                    <p className="pb-2">
                      <strong>${discount}</strong>
                    </p>
                    <p className="pb-2">
                      <strong>${platformFee}</strong>
                    </p>
                    <p className="pb-2">
                      <strong>${shippingFee}</strong>
                    </p>
                    <p className="pb-2">
                      <strong>3 Months</strong>
                    </p>
                    <p className="pb-2">
                      <strong>${totalAmount.toFixed(2)}</strong>
                    </p>
                    <p className="pb-2">
                      <strong>${refundAmount.toFixed(2)}</strong>
                    </p>
                  </div>
                </div>
                {Object.values(profileData).every((value) => !value) ? (
                  <button
                    onClick={handleLoginRedirect}
                    className="h-[40px] w-60 bg-secondaryCream text-primaryCream rounded-xl m-2"
                  >
                    Login To Place Orders
                  </button>
                ) : (
                  <button
                    onClick={handleOrderNow}
                    className="h-[40px] w-60 bg-secondaryCream text-primaryCream rounded-xl m-2"
                  >
                    Order Now
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="h-48 w-2/4 bg-customCream m-auto rounded-xl flex items-center justify-evenly flex-col ">
        <p>
          {" "}
          <strong>Benifits of Membership</strong>
          <hr className="bg-black h-[2px]"></hr>
        </p>
        <div>
          <div>
            <p className="pb-2">
              You can return it within three months if it doesn`t suit you well.
            </p>
            <p className="pb-2">
              Upon return, you will receive 60% of your money back
            </p>
            <p className="pb-2">
              You have a period of three months to try it out and see if it
              meets your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
