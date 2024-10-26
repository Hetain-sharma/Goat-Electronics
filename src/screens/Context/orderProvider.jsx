import { createContext, useState } from "react";

// Create a context for orders and profile
const OrderContext = createContext();

// Provider component
export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [profileData, setProfileData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
  });

  // Function to add an order
  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  // Function to set profile data
  const updateProfileData = (data) => {
    setProfileData(data);
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, profileData, updateProfileData }}
    >
      {children}
    </OrderContext.Provider>
  );
}


export { OrderContext };
