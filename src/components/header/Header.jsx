  import { Link, NavLink } from "react-router";
  import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
  import { useEffect, useState } from "react";
  import EasyMenuHeader from "./EasyMenuHeader";
  import { useDispatch, useSelector } from "react-redux";
  import headerImage from "../../assets/header.png";
  import CustomDrawer from "../CustomDrawer";
  import Cart from "../cart/Cart";
  import { getCartData } from "../../feature/categary/cartApi";
  import { addToCart } from "../../feature/categary/cartSlice";
  import serach from "../../assets/search.png";
  import bag from "../../assets/Bag.png";
  import wishlist from "../../assets/wishlist.png";
  import menuIcon from "../../assets/Menuicon.png";
  import { Input } from "antd";
  import { getProductFilterApi } from "../../feature/product/productApi";
  import { searchProducts } from "../../feature/product/productSlice";
  import CustomSearch from "../home/CustomSearch";
  import { addToWishlistData, getWishlistData } from "../../feature/wishlist/wishlistApi";
  import { addToWishList } from "../../feature/wishlist/wishlistSlice";
  // This is my main Header. start here
  const Header = () => {
    const [open, setOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartStatus,setCartStatus]=useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();
    // const [search, setSearch] = useState(false);
    const cart = useSelector((state) => state.cart?.cart);
    const searchData = useSelector((state) => state.product.searchData);
    const wish=useSelector(state=>state.wish.wishlist)
    console.log(wish);
    
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const cartShowDrawer = (status) => {
      
      setCartOpen(true);
      setCartStatus(status)
    };

    const cartOnClose = () => {
      setCartOpen(false);
      
    };
    const getDataCart = async () => {
      try {
        const res = await getCartData();
        dispatch(addToCart(res?.data?.cartItems));
      } catch (error) {}
    };

    const getDataWishlist = async () => {
      try {
        const res = await getWishlistData();
        console.log(res);
        
        dispatch(addToWishList(res?.wishlist));
      } catch (error) {}
    };


    useEffect(() => {
      getDataCart();
      getDataWishlist();
    }, []);

    return (
      <>
      <div className="relative">
        <div
        className={`header fixed w-full z-[999] bg-[#214344] ${
          isModalOpen || open || cartOpen ? 'backdrop-blur-md' : ''
        } ${open ? 'backdrop-blur-md' : ''}`}
      >
          <div className="flex justify-between md:px-[56px] px-[30px] py-5    items-center">
            <div className="flex items-center">
              <div className="flex md:gap-[56px]  gap-5 items-center cursor-pointer ">
                <NavLink
                  onClick={()=>{cartShowDrawer("wishlist")}}
                  className={"relative max-sm:hidden  cursor-pointer"}>
                <div
                
                  className="h-[32px] w-[31px] pt-[2px] "
                >
                  <img src={wishlist} />
                </div>
                {wish?.length > 0 && (
                    <div className="flex justify-center   text-[#214344] items-center absolute  text-[10px] text-center  -top-1  -right-3 h-[16px] w-[16px] rounded-full bg-[#F0D5A0]">
                      {wish?.length}
                    </div>
                  )}
                  </NavLink>
                <NavLink
                  // onClick={cartShowDrawer}
                  onClick={()=>{cartShowDrawer("cart")}}

                  className="relative"
                >
                  <div className="md:h-[28px] h-[20px] md:w-[25px] w-[16px]  cursor-pointer">
                    <img className="object-fit" src={bag} />
                  </div>
                  {cart?.length > 0 && (
                    <div className="flex justify-center  text-[#214344] items-center absolute  text-[10px] text-center  -top-1  -right-3 h-[16px] w-[16px] rounded-full bg-[#F0D5A0]">
                      {cart?.length}
                    </div>
                  )}
                </NavLink>
              </div>
            </div>
            <div>
              <Link to={"/"}>
                <img src={headerImage} className="lg:h-[70px] h-[35px]" />
              </Link>
            </div>
            <div className="flex gap-[51px]  cursor-pointer">
              {/* {search && <Input onChange={(e)=>{
                searchHandler(e)
              }} className="bg-[#e4cc9b] border-none  rounded-full" placeholder="Search Your Products"/>
          } */}
              <div className="flex items-center md:gap-[51px]   ">
                <div
                 onClick={()=>{setIsModalOpen(true)}}
                  className="max-sm:hidden h-[28px] w-[28px] cursor-pointer"
                >
                  <img src={serach} className="object-fit" />
                </div>
                <div className="">
                  <NavLink
                    onClick={() => {
                      showDrawer();
                    }}
                    className="text-[#fff] "
                  >
                    {
                      <div className=" md:h-[12px] md:w-[24px] h-[8px] w-[18px]">
                        <img className="object-fit" src={menuIcon} />
                      </div>
                    }
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        
       

      <div
        className={`fixed inset-0 transition-all duration-300 ${open ? " backdrop-blur-md" : "bg-transparent"} ${open || cartOpen ? "z-[998]" : "z-[-1]"}`}
        onClick={onClose}
      ></div>

      <CustomDrawer  component={<Cart />} open={cartOpen} setOpen={setOpen} onClose={cartOnClose} />
   
        <EasyMenuHeader open={open} setOpen={setOpen} />
        <CustomDrawer
        cartStatus={cartStatus}
          component={<Cart />}
          open={cartOpen}
          setOpen={setOpen}
          onClose={cartOnClose}
        />
      
       {isModalOpen && <div className=" absolute top-0  w-full transition-all duration-1000 ease-in-out transform bg-[#efe6dc]  z-[9999]">
        <div className="fixed top-0 z-[999] w-full bg-[#efe6dc]">
          <CustomSearch isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} items={searchData} />
      </div>
        </div>}
        </div>
      
      </>
    );
  };
  export default Header;


  
