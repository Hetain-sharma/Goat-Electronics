// card.jsx

import PropTypes from "prop-types";
import { useCart } from "../Context/useCart";

function Card({ product }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const isInCart = !!cart[product.id]; 

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="bg-customCream h-[500px] w-[386px] flex items-center flex-col m-3 justify-between rounded-xl relative p-2">
      <div className="h-full w-full">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-80 w-80 m-auto rounded-xl"
        />
      </div>
      <div className="h-full w-full flex flex-col justify-between p-5">
        <div>
          <p className="text-primaryCream text-xl font-bold">
            {product.ratings}
          </p>
          <p className="text-primaryCream text-xl font-bold">{product.name}</p>
          <p className="text-primaryCream text-xl font-bold">${product.price}</p>
        </div>
        <div className="mt-4">
          <button
            className="border-secondaryCream border-[2px] text-primaryCream p-2 rounded-xl w-full"
            onClick={handleButtonClick}
            disabled={isInCart}
          >
            {isInCart ? "Item Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Prop Types definition
Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
