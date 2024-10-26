
import NavBar from "./NavBar";
import { useOrder } from "./Context/useOrder";
import { useNavigate } from "react-router-dom"; 

function Profile() {
  const { orders, profileData } = useOrder(); 
  const navigate = useNavigate(); 

  const handleLoginRedirect = () => {
    navigate("/login"); 
  };

  return (
    <div>
      <NavBar />

      {Object.values(profileData).every((value) => !value) ? (
        <div className="mt-96 w-auto flex items-center justify-center">
          <button
            onClick={handleLoginRedirect}
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login Now
          </button>
        </div>
      ) : (
        <div className="h-auto w-2/4 m-auto p-2 flex justify-center items-center">
          <div>
            <div className="h-52 w-[620px] bg-customCream m-3 rounded-md p-5">
              <h1>Profile Details</h1>
              <hr className="w-32 bg-black h-[2px]" />
              <div className="flex justify-around px-12 items-center">
                <div>
                  <p className="my-2">Name: </p>
                  <p className="my-2">Mobile No: </p>
                  <p className="my-2">Email Id: </p>
                  <p className="my-2">Location:</p>
                </div>
                <div>
                  <p className="my-2">{profileData.name || "N/A"}</p>
                  <p className="my-2">{profileData.mobile || "N/A"}</p>
                  <p className="my-2">{profileData.email || "N/A"}</p>
                  <p className="my-2">{profileData.location || "N/A"}</p>
                </div>
              </div>
              
            </div>
            <div className="h-auto w-[620px] bg-customCream rounded-md p-5 m-3">
              <h1>Your Orders</h1>
              <hr className="w-32 bg-black h-[2px]" />
              <div className="flex px-12 items-center flex-col">
                {orders.length === 0 ? (
                  <p>No orders placed yet.</p> 
                ) : (
                  orders.map((order, index) => (
                    <div
                      key={index}
                      className="w-[600px] h-40 border-2 border-transparent flex items-center justify-around rounded-xl m-2"
                    >
                      <div>
                        <img
                          src={order.imageUrl}
                          alt={order.name}
                          className="h-28 w-28"
                        />
                      </div>
                      <div>
                        <div className="h-full w-full flex justify-between">
                          <div className="p-5">
                            <p className="text-secondaryCream text-xl">
                              {order.name}
                            </p>
                            <p className="text-secondaryCream text-xl">
                              ${order.price}
                            </p>
                            <p className="text-black mt-4"> Qty : 1</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;


