import NavBar from "../NavBar";
import { useCart } from "../Context/useCart";
import Card from "./Card";
const headphoneDetails = [
  {
    id: 1,
    ratings: 4,
    name: "Grooves Alpha",
    price: 27,
    imageUrl:
      "https://www.grooveslifestyle.com/assets-admin/images/product/665068d4786da.webp",
  },
  {
    id: 2,
    ratings: 4.6,
    name: "Grooves Infinity",
    price: 35,
    imageUrl:
      "https://www.grooveslifestyle.com/assets-admin/images/product/6644b72cd6bb0.webp",
  },
  {
    id: 3,
    ratings: 4.2,
    name: "Grooves Metal",
    price: 30,
    imageUrl:
      "https://www.grooveslifestyle.com/assets-admin/images/product/66518e0361ef7.webp",
  },
  {
    id: 4, // Changed id to avoid duplicate
    ratings: 3.9,
    name: "Grooves Delta",
    price: 20,
    imageUrl:
      "https://www.grooveslifestyle.com/assets-admin/images/product/665187856c77e.webp",
  },
  // Add more product objects here
];
const smartphoneDetails = [
  {
    id: 1,
    ratings: 4,
    name: "Redmi 9a",
    price: 50,
    imageUrl:
      "https://i03.appmifile.com/973_operator_in/08/10/2024/4bb90327789001113d39eb89807a8d8d.png?thumb=1&w=606&h=404&width=606&height=404",
  },
  {
    id: 2,
    ratings: 4.6,
    name: "moto g 6s",
    price: 55,
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/u/-original-imah2fjd7wfd9ksh.jpeg?q=70",
  },
  {
    id: 3,
    ratings: 4.2,
    name: "Infinix Fold ",
    price: 55,
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/e/h/z/zero-flip-5g-x6962-infinix-original-imah5ztehzcs3hnh.jpeg?q=70&crop=false",
  },
  {
    id: 4, 
    ratings: 4.2,
    name: "Vivo T3 Lite",
    price: 25,
    imageUrl:
      "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/l/3/-original-imah27wvna2g9hfc.jpeg?q=70",
  },
  
];
const HomeAppliancesDetails = [
  {
    id: 1,
    ratings: 4,
    name: "EPSON Printer",
    price: 40,
    imageUrl:
      "https://rukminim2.flixcart.com/image/300/300/kwl0akw0/printer/x/q/3/-original-imag989ygsdy6v6x.jpeg?q=70",
  },
  {
    id: 2,
    ratings: 4.6,
    name: "TCL QLED",
    price: 100,
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/television/j/t/a/-original-imah2pgdyckhvtqc.jpeg?q=70&crop=false",
  },
  {
    id: 3,
    ratings: 4.2,
    name: "canon Eos ",
    price: 99,
    imageUrl:
      "https://rukminim2.flixcart.com/image/832/832/xif0q/dslr-camera/i/o/c/eos-r100-24-1-eos-r100-kit-canon-original-imagqeydhsxgacxp.jpeg?q=70&crop=false",
  },
  {
    id: 4, 
    ratings: 4.2,
    name: "LG Front Load",
    price: 29,
    imageUrl:
      "https://rukminim2.flixcart.com/image/300/300/xif0q/washing-machine-new/k/j/7/-original-imagr6pzqhjrfchs.jpeg?q=70",
  },
  
];
function HomePage() {
  const { addToCart } = useCart();

  function handleCart(product) {
    addToCart(product);
    console.log("Added to cart", product);
  }

  return (
    <div>
      <NavBar />
      {/* ... rest of the component */}
      <div className="overflow-x-auto flex space-x-4">
        {headphoneDetails.map((product) => (
          <Card
            product={product}
            key={product.id}
            handleCart={() => handleCart(product)}
          />
        ))}
      </div>
      <div className="overflow-x-auto flex space-x-4">
        {smartphoneDetails.map((product) => (
          <Card
            product={product}
            key={product.id}
            handleCart={() => handleCart(product)}
          />
        ))}
      </div>
      <div className="overflow-x-auto flex space-x-4">
        {HomeAppliancesDetails.map((product) => (
          <Card
            product={product}
            key={product.id}
            handleCart={() => handleCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
