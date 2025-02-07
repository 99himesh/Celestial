import cardImage from "../../assets/shoes.jpg";
import React, { useEffect, useState } from "react";
import { Button, Modal, Tooltip, Typography } from "antd";
import {
  EyeFilled,
  ReloadOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Flex, Progress } from "antd";
import { Link } from "react-router-dom";
import CardModal from "./CardModal";
// import { addToCart } from "../../feature/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import image from "../../assets/girl.jpg";
import ringimage from "../../assets/rings.jpg";
import { WishListIcon } from "../../icons/icon";
import CustomDrawer from "../CustomDrawer";
import { addToCartData } from "../../feature/categary/cartApi";
import { addToCart } from "../../feature/categary/cartSlice";
import Cart from "../cart/Cart";
import { addToWishlistData } from "../../feature/wishlist/wishlistApi";
import video from "../../assets/video.mp4";
import wishlist from "../../assets/wishlist.png";
import bag from "../../assets/icons/bagYellow.png";
import similarYellow from "../../assets/icons/similarYellow.png";
// This is my card .start here
const Card = ({ item, shop }) => {
  const [open, setOpen] = useState(false);
  const [cartStatus,setCartStatus]=useState("");
  const [thumbnailButton, setThumbnailButton] = useState(false);
  const dispatch = useDispatch();
  const [cardId, setCardId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState();
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("userId");
  const [isLaptop, setIsLaptop] = React.useState(window.innerWidth >= 1024);
  // This function work as add to cart functionality
  const addCartHandler = async (item,status) => {
    setCartStatus(status)
    setOpen(true);
    const data = {
      userId: user,
      productId: item._id,
      quantity: item.quantity,
      price: item.price,
    };
    try {
      const res = await addToCartData(data, token);
    } catch (error) {
      console.log(error);
    }

   
  };
  // This function work as to show modal
  const showModal = (idx) => {
    setCardId(idx);
    setIsModalOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // This function calculate percentage discount
  const percentageCalculate = () => {
    const percentage = Math.floor(
      ((item?.discountPrice - item?.price) / item?.discountPrice) * 100
    );
    setDiscountPercentage(percentage);
  };
  const addToWishlistHandler = async (item,status) => {
    setCartStatus(status)
    setOpen(true);
    const data = { userId: localStorage.getItem("userId"), prodId: item?._id };

    try {
      const res = await addToWishlistData(data);
    } catch (error) {
      console.log(error);
    }
    
  };


  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth <= 1024);
    };
  
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    percentageCalculate();
  }, []);

  return (
    <>
    <div className="relative">
     <Link to={`/product/${item?._id}`}>
      <div
        onMouseEnter={() => {
          setThumbnailButton(true);
        }}
        onMouseLeave={() => {
          setThumbnailButton(false);
        }}
        className="w-[93%] mx-auto       border border-gray-200 rounded-xl "
      >
        
        <div className=" relative">
          <div className=" border-[#214344]  hover:rounded-t-[20px] h-[360px]  ">
            {!thumbnailButton && (
              <img
                className=" rounded-t-2xl w-full  h-full object-cover "
                src={item.images[0]}
                alt="product image "
              />
            )}
            {thumbnailButton && (
              <div className="w-full   border-[5px] border-[#214344] rounded-t-[19px]">
                
                <video
                  className="w-full h-[360px] rounded-t-2xl object-cover"
                  muted
                  loop
                  autoPlay
                >
                  <source
                    src={item?.video[0]}
                    alt="...Loading"
                    type="video/mp4"
                  />
                  <source src={item?.video[0]} type="video/ogg" />
                </video>
              </div>
            )}
          </div>
         
        </div>
        


        <div className="relative ">
         
            <div
              className={`px-3 pt-2 pb-12 flex flex-col bg-[#214344]  rounded-b-3xl`}
            >
              <div>
                <h5 className="md:text-[20px] text-[20px] font-semibold  text-white">
                  {item?.title}
                </h5>
              </div>
              <div className="flex items-center justify-between py-2 ">
                <div className="flex gap-2 items-center ">
                  <span className="text-[15px] font-semibold text-[#F0D5A0] ">
                    Rs. {item?.price}
                  </span>
                </div>
              </div>
             
                <div className="absolute w-[90%] bottom-2">
                  <Flex vertical>
                    <Progress
                      showInfo={false}
                      trailColor="white"
                      percent={null}
                      status="active"
                    />
                    <div className="flex justify-between">
                      <div className="flex gap-1">
                        <Typography.Text className="font-semibold text-[14px] text-[#F0D5A0] ">
                          Sold :
                        </Typography.Text>
                        <Typography.Text className="font-bold text-[14px] text-[#fff] ">
                          {item?.sold}
                        </Typography.Text>
                      </div>
                      <div className="flex gap-1">
                        <Typography.Text className="font-semibold text-[#F0D5A0]">
                          Available :
                        </Typography.Text>
                        <Typography.Text className="font-bold text-[14px] text-[#fff] ">
                          {item?.quantity}
                        </Typography.Text>
                      </div>
                    </div>
                  </Flex>
                </div>
            </div>
         
        </div>
      </div>
      </Link>
      <div
            className="absolute flex flex-col gap-2 right-[30px] top-[16px] h-[35px] w-[35px] cursor-pointer"
           
          >
            <Tooltip placement="left" title={"Add to Wishlist"}>
              
              <div  onClick={() => {
              addToWishlistHandler(item,"wishlist");
            }} className="bg-[#214344] h-[35px] w-[35px] flex justify-center  items-center rounded-full p-2 cursor-pointer  ">
                <img className="w-[20px] h-[18px]" src={wishlist} />
              </div>
            </Tooltip>
            {thumbnailButton && isLaptop &&(
              <Tooltip placement="left" title={"Cart"}> 
                  <div onClick={() => {
                    addCartHandler(item,"cart");
                  }} className="h-[35px] w-[35px] flex justify-center items-center rounded-full bg-[#214344] hover:bg-[#214344]  p-2">
                  <img className="h-[20px] w-[20px]" src={bag} />
                  </div>
              </Tooltip>
            )}

            {thumbnailButton && isLaptop &&(
              <Tooltip placement="left" title={"Share"}>
                
                <div
                  onClick={() => {
                    showModal(item?.id);
                  }}
                  className=" bg-[#214344] flex justify-center items-center h-[35px] w-[35px] p-2 rounded-full "
                >
                  <ShareAltOutlined
                    style={{ fontSize: "20px", color: "#F0D5A0" }}
                  />
                </div>
              </Tooltip>
            )}
            {thumbnailButton && isLaptop && (
              <Tooltip placement="left" title={"similar"}>  
                  <div className="h-[35px] w-[35px] flex justify-center  items-center p-2  bg-[#214344]  rounded-full ">
                    <img className="w-[20px] h-[20px] ps-0.5" src={similarYellow} />
                  </div>
              </Tooltip>
            )}
          </div>
          <div
          className={`fixed inset-0 transition-all duration-300 ${
            open ? " backdrop-blur-md" : "bg-transparent"
          } ${open  ? "z-[998]" : "z-[-1]"}`}
          onClick={onClose}
        ></div>

          </div>

       
      <CardModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        id={cardId}
      />
      <CustomDrawer
      cartStatus={cartStatus}
        component={<Cart />}
        open={open}
        setOpen={setOpen}
        onClose={onClose}
      />
    </>
  );
};
export default Card;
// This is my card .End here
