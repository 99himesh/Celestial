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
// This is my card .start here
const ShopCard = ({ item, shop }) => {
  const [open, setOpen] = useState(false);
  const [thumbnailButton, setThumbnailButton] = useState(false);
  const dispatch = useDispatch();
  const [cardId, setCardId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState();
  const [cartStatus,setCartStatus]=useState("");
  
  // This function work as add to cart functionality
  const addCartHandler = async (item,status) => {

    
    setCartStatus(status)
    setOpen(true);
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("userId");
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
            className="w-[100%] mx-auto rounded-3xl  shadow-2xl"
          >
            <div className=" relative">
              <div className=" border-[#214344] rounded-xl sm:h-[370px] h-[165px]  ">
                {!thumbnailButton && (
                  <img
                    className="rounded-t-2xl sm:border-[5px] border-[3px] border-[#214344] w-full  h-full object-cover "
                    src={item?.images[0]}
                    alt="product image "
                  />
                )}
                {thumbnailButton && (
                  <div className="w-full   border-[3px] border-[#214344] rounded-t-[19.5px]">
                    <video
                      className="w-full sm:h-[370px] h-[165px] rounded-t-2xl object-cover"
                      muted
                      loop
                      autoPlay
                    >
                      <source
                        src={item?.video[0]}
                        alt="...Loading"
                        type="video/mp4"
                      />
                      <source src={item.video[0]} type="video/ogg" />
                    </video>
                  </div>
                )}
              </div>
              
            </div>

            <div className="relative  ">
              <div
                className={`sm:px-5 px-2 sm:py-4 pb-2  flex flex-col bg-[#214344] sm:gap-2 gap-1  rounded-b-3xl`}
              >
                <div>
                  <h5 className="md:text-[16px] text-[16px] font-[500]   text-white">
                    {item?.title}
                  </h5>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex gap-2 items-center ">
                    <span className="text-[15px] font-semibold text-[#F0D5A0] ">
                      Rs. {item?.price}
                    </span>
                  </div>
                </div>
                <div className=" max-sm:hidden">
                  <Flex vertical>
                    <Progress
                      showInfo={false}
                      trailColor="white"
                      percent={null}
                      status="active"
                    />
                    <div className="flex flex-wrap justify-between">
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
                <div className="pt-3">
                  <Button className="rounded-full w-[100%] hover:!border-[#214344] font-semibold text-[#214344] py-5 hover:!text-[#214344]">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div
                className="absolute flex flex-col gap-2 sm:right-5 right-3 sm:top-5 top-3 sm:size-[35px] size-[24px] cursor-pointer"
                onClick={() => {
                  addToWishlistHandler(item,"wishlist");
                }}
              >
                <Tooltip placement="left" title={"Add to Wishlist"}>
                 
                  <div className="bg-[#214344] rounded-full sm:p-2 p-1.5 cursor-pointer">
                    <img src={wishlist} />
                  </div>
                </Tooltip>
                {/* {thumbnailButton &&<Tooltip placement="left" title={"Compare"}> <button  className="text-[#fff] bg-[#214344] p-2 rounded-full text-sm"><ReloadOutlined   style={{fontSize:"20px" ,color:"#F0D5A0"}} /></button></Tooltip>} */}
                {thumbnailButton && (
                  <Tooltip placement="left" title={"Cart"}>
                   
                    <button
                      onClick={() => {
                        addCartHandler(item,"cart");
                      }}
                      className="text-white bg-[#214344] hover:bg-[#214344]  text-sm  p-2  rounded-full text-center"
                    >
                      <img className="h-[20px] w-[20px]" src={bag} />
                    </button>
                  </Tooltip>
                )}
                {thumbnailButton && (
                  <Tooltip placement="left" title={"Share"}>
                   
                    <button
                      onClick={() => {
                        showModal(item?.id);
                      }}
                      className="text-[#fff] bg-[#214344] p-2 rounded-full text-sm"
                    >
                      <ShareAltOutlined
                        style={{ fontSize: "20px", color: "#F0D5A0" }}
                      />
                    </button>
                  </Tooltip>
                )}
              </div>
              <div
        className={`fixed inset-0 transition-all duration-300 ${open ? " backdrop-blur-md" : "bg-transparent"} ${open  ? "z-[998]" : "z-[-1]"}`}
        onClick={onClose}
      ></div>

      </div>

<CustomDrawer cartStatus={cartStatus} component={<Cart />} open={open} setOpen={setOpen} onClose={onClose} />

    </>
  );
};
export default ShopCard;
// This is my card .End here
