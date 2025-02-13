import { Modal, Form, Input, Button } from "antd";
import { addOrder, payment } from "../../feature/order/orderApi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addUserData } from "../../feature/auth/authSlice";
import { getUserData } from "../../feature/auth/authApi";
import { toast } from "react-toastify";

const OrderModal = ({ isModalOpen, setIsModalOpen, items }) => {
  const [form] = Form.useForm(); // Ant Design form instance
  const [orderStatus, setOrderStatus] = useState(false);
  const [order, setOrder] = useState({});
  const userProfile = useSelector((state) => state.auth.userData);
  const users=useSelector(state=>state.auth.userData)
  const dispatch=useDispatch();
  const onFinish = async (values) => {
    const data = {
      shippingInfo: { ...values },
      userId: localStorage.getItem("userId"),
      orderItems: [{ product: items._id, quantity: 1, price: items.price }],
      totalPrice: items.price,
    };

    try {
      const res = await addOrder(data);
      console.log(res.orderId);
      setOrder(res);
      setOrderStatus(true);
    } catch (error) {
      console.log(error);
    }
    form.resetFields(); // Reset form after submission
  };

  const handleCancel = () => {
    form.resetFields(); // Reset form when closing
    setIsModalOpen(false);
  };

  const orderPlace = async(data) => {
    try {
      const res=await payment(data)
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
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
console.log(order.description);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: parseInt(order.paymentAmount * 100),
        currency: "INR",
        name: "Zoci",
        description: order.description,
        order_id:order.razorpayOrderId,
        image:
          "https://zoci-data.s3.ap-south-1.amazonaws.com/productImages/1739276265624_header.png",
        handler: function (response) {
          const data={
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          }
          orderPlace(data);
        },
        prefill: {
          name: `${order.shippingInfo.firstname} ${order.shippingInfo.lastname}`,
          contact: users.mobile,
          email:"hello@zoci.in"
        },

        notes: {
          address: "India",
        },
        theme: {
          color: "#158993",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };




   const getUserHandler=async()=>{
          try {
              
              const res=await getUserData();
              dispatch(addUserData(res.data))
              
          } catch (error) {
            console.log(error);
              
          }
      }
  
  
      useEffect(()=>{
          getUserHandler();
      },[])

  return (
    <Modal
      title="Create Order"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
    >
      {!orderStatus ? (
        <div className="bg-white w-full p-6 rounded-lg shadow-md">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input placeholder="Enter your First Name" />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input placeholder="Enter your Last Name" />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input placeholder="Enter your Address" />
            </Form.Item>

            <Form.Item
              label="City"
              name="city"
              rules={[{ required: true, message: "Please enter your city" }]}
            >
              <Input placeholder="Enter your City" />
            </Form.Item>

            <Form.Item
              label="State"
              name="state"
              rules={[{ required: true, message: "Please enter your state" }]}
            >
              <Input placeholder="Enter your State" />
            </Form.Item>

            <Form.Item
              label="Pin Code"
              name="pincode"
              rules={[
                { required: true, message: "Please enter your pin code" },
              ]}
            >
              <Input placeholder="Enter your Pin Code" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-[#214344]"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        <Button
          onClick={() => {
            pay();
          }}
        >
          Pay
        </Button>
      )}
    </Modal>
  );
};

export default OrderModal;
