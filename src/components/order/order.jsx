import { Modal, Form, Input, Button, ConfigProvider, Typography } from "antd";
import { addOrder, payment } from "../../feature/order/orderApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUserData } from "../../feature/auth/authSlice";
import { getUserData } from "../../feature/auth/authApi";
import { toast } from "react-toastify";

const OrderModal = ({ isModalOpen, setIsModalOpen, item }) => {
  console.log(item,"dkjfhjkhd");
  
  const [form] = Form.useForm(); // Ant Design form instance
  const [orderStatus, setOrderStatus] = useState(false);
  const [order, setOrder] = useState({});
  const userProfile = useSelector((state) => state.auth.userData);
  const users = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
        
    if(values.pincode.length > 6) return
    [{ product: item?._id, quantity: 1, price: item?.price }]
    
    const data = {
      shippingInfo: { ...values },
      userId: localStorage.getItem("userId"),
      orderItems: item.map((ele) => ({
        product: ele?._id,
        quantity: 1,
        price: ele?.price
      })),
      totalPrice: item.reduce((acc, ele) => acc + ele.price, 0),
    };

    try {
      const res = await addOrder(data);
      setOrderStatus(true);

      toast.success(res.message);
      console.log(res);
      setOrder(res);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    form.resetFields(); // Reset form after submission
  };

  const handleCancel = () => {
    form.resetFields(); // Reset form when closing
    setIsModalOpen(false);
  };

  const orderPlace = async (data) => {
    try {
      const res = await payment(data);
      toast.success(res.message);
      setIsModalOpen(false);
    } catch (error) {
      console.log("error");
      
      console.log(error);
      toast.error(error.response.data.message);
      setIsModalOpen(false);
    }
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const pay = async () => {
    
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }


    
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: parseInt(order.paymentAmount * 100),
      currency: "INR",
      name: "Zoci",
      description: order.description,
      order_id: order.razorpayOrderId,
      image:"https://zoci-data.s3.ap-south-1.amazonaws.com/productImages/1740047051814_Screenshot%202025-02-20%20155231.pnga",
      handler: function (response) {
        const data = {
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        orderPlace(data);
      },
      prefill: {
        name: `${order.shippingInfo.firstname} ${order.shippingInfo.lastname}`,
        contact: users.mobile,
        email: "hello@zoci.in",
      },

      notes: {
        address: "India",
      },
      theme: {
        color: "#158993",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      console.error("Payment failed:", response.error);
      setIsModalOpen(false);
      toast.error("Payment failed");
      alert("Payment failed, try again");
      paymentWindow.close();
    });
    paymentObject.open("", "_blank", "width=500,height=700");
  };

  const getUserHandler = async () => {
    try {
      const res = await getUserData();
      dispatch(addUserData(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserHandler();
  }, []);

  return (
    <Modal
      title={
        <Typography.Text className="text-[20px] ">Create Order</Typography.Text>
      }
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      <ConfigProvider theme={{ token: { colorPrimary: "#214344" } }}>
        {!orderStatus ? (
          <div className="bg-white w-full p-6 rounded-lg shadow-md">
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="First Name"
                name="firstname"
                rules={[
                  { required: true, message: "Please enter your first name" ,pattern: /^[A-Za-z\s]+$/},
                ]}
              >
                <Input
                  className="rounded-full"
                  placeholder="Enter your First Name"
                />
              </Form.Item>

              <Form.Item
                label="Last Name"
                name="lastname"
                rules={[
                  { required: true, message: "Please enter your last name",pattern: /^[A-Za-z\s]+$/ },
                ]}
              >
                <Input
                  className="rounded-full"
                  placeholder="Enter your Last Name"
                />
              </Form.Item>

              <Form.Item
                label="Address"
                name="address"
                rules={[
                  { required: true, message: "Please enter your address",pattern: /^[A-Za-z\s]+$/, },
                ]}
              >
                <Input
                  className="rounded-full"
                  placeholder="Enter your Address"
                />
              </Form.Item>

              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: "Please enter your city" ,pattern: /^[A-Za-z\s]+$/,}]}
              >
                <Input className="rounded-full" placeholder="Enter your City" />
              </Form.Item>

              <Form.Item
                label="State"
                name="state"
                rules={[{ required: true, message: "Please enter your state" ,pattern: /^[A-Za-z\s]+$/,}]}
              >
                <Input
                  className="rounded-full"
                  placeholder="Enter your State"
                />
              </Form.Item>

              <Form.Item
                label="Pin Code"
                name="pincode"
                
                rules={[
                  { required: true, message: "Please enter your pin code",  pattern: /^\d{6}$/},
                ]}
              >
                <Input
                  className="rounded-full"
                  placeholder="Enter your Pin Code"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full rounded-full hover:!bg-[#214344] bg-[#214344]"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-end py-5">
             {item.map((ele,idx)=>{
              return(
                <div key={idx} className="flex  gap-5">
                <div className="size-[100px]">
                  <img
                    src={ele?.images[0]}
                    className="rounded-md object-cover"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Typography.Text className="text-[#214344] text-[24px] font-semibold">
                    {ele?.title}
                  </Typography.Text>
                  <Typography.Text className="text-[#214344] text-[16px] font-bold">
                    Rs.{ele?.price}
                  </Typography.Text>
                </div>
              </div>

              )
             }) }
              <div>
                <Button
                  onClick={() => {
                    pay();
                  }}
                  className="bg-[#214344] !hover:!text-[#fff]   text-white font-semibold py-3 px-6 rounded-lg shadow-md 
        transition-all duration-500 transform hover:scale-125 "
                >
                  Pay Now
                </Button>
              </div>
            </div>
          </>
        )}
      </ConfigProvider>
    </Modal>
  );
};

export default OrderModal;
