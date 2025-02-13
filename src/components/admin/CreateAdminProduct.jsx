import { Button, Col, ConfigProvider, Form, Input, Radio, Row, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import "./admin.css";
import {
  createProductApi,
  editProductApi,
  uploadProductImages,
  uploadProductVideo,
} from "../../feature/admin/adminApi";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";

const CreateAdminProduct = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const [video, setVideo] = useState();
  const [videoUrl, setVideoUrl] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState([]);
  const [productImagesUrl,setProductImagesUrl]=useState([])
  const [metalType, setMetalType] = useState([]);
  const editData=location?.state?.product;
  const [productFormInput, setProductFormInput] = useState({
    title: "",
    price: "",
    category: "",
    metalType:"",
    description: "",
    quantity:"",
    weight:"",
    size:"",
    madefor:""
  })

  const createProductInputHandler=(e)=>{
    console.log(e.target.value);
    setProductFormInput({...productFormInput,[e.target.name]:e.target.value})
    
  }
  const createProductHandler=async()=>{
    const data={
      ...productFormInput,images:productImagesUrl,video:videoUrl,metalType
    }
    if(!editData){
      try {
        const res=await createProductApi(data); 
        toast.success(res.message);     
        navigate ("/admin/products")

      } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);  
      }
    }else{
      try {
        const res=await editProductApi(data,editData._id); 
        toast.success(res.message);    
        navigate ("/admin/products")
      } catch (error) {
      console.log(error.message);
      toast.error(error.response.data.message);  
      }
    }
  }
  const handleChange = (value) => {
    setMetalType(value)
  };

  const videoHandler = async (e) => {
    const selectedVideo = e.target.files[0]; // Get the selected file
    setVideo(selectedVideo); // Update state

    if (!selectedVideo) {
      console.log("No file selected");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("productVideos", selectedVideo);
      const res = await uploadProductVideo(formData);
      setVideoUrl(res?.videos[0]);
      toast.success(res.message);     

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const imageHandler = async(e) => {
    const file = e.target.files[0];
    setImage(file);
    if(!file) {
      console.log("No file selected")
      return;
    }
    setPreview([...preview,URL.createObjectURL(file)]);
    const formData=new FormData();
    formData.append("productImages",file);
    try {
      const res=await uploadProductImages(formData);
      console.log(res);
      setProductImagesUrl([...productImagesUrl,res?.images[0]])
      toast.success(res.message); 
       
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      
      
    }


  };

  console.log(productImagesUrl,"images");
  console.log(videoUrl,"video");
  useEffect(()=>{
    
    if(editData){
      setProductFormInput({...editData})
      setMetalType(editData.metalType)
      setPreview(editData.images)
      setVideoUrl(editData.video[0])
      
    }
  },[])
  

  return (
    <>
     <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#214344",
        },
      }}
    >
      <div className="px-32 py-5">
        <Row justify={"center"}>
          <Typography.Text className="text-[30px] font-semibold text-[#214344]">
            Create Product
          </Typography.Text>
        </Row>

        <Form>
          <Row gutter={[20, 20]} className="pt-[24px]">
            <Col span={12}>
              <Form.Item>
                <Typography.Text className="text-[14px] font-semibold">
                  Product Name
                </Typography.Text>
                <div className="pt-2">
                  <Input name="title" onChange={(e) => createProductInputHandler(e)} value={productFormInput?.title} placeholder="Enter Product Name" className="py-1 rounded-full" />
                </div>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Typography.Text className="text-[14px] font-semibold">
                  Price
                </Typography.Text>
                <div className="pt-2">
                  <Input name="price" onChange={(e) => createProductInputHandler(e)} value={productFormInput?.price}  placeholder="Enter Product Price"  className="py-1 rounded-full" />
                </div>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[20, 20]}>
            <Col span={12}>
              <Typography.Text className="text-[14px] font-semibold">
              category
              </Typography.Text>
              <div className="pt-2 category">
               
              <Input name="category" onChange={(e) => createProductInputHandler(e)} value={productFormInput?.category}  placeholder="Enter Product category"  className="py-1 rounded-full" />
                
              </div>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-[14px] font-semibold">
                Metal Type
              </Typography.Text>
              <div className="pt-2">
              {/* <Input name="metalType" onChange={(e) => createProductInputHandler(e)} value={productFormInput.metalType}  placeholder="Enter Price"  className="py-1 rounded-full" /> */}
              <Select
              defaultValue="Gold"
              onChange={handleChange}
              className="w-full rounded-md"
              options={[
                { value: 'Gold', label: 'Gold' },
                { value: 'Silver', label: 'Silver' },
                { value: 'Platinum', label: 'Platinum' },
                { value: 'Diamond', label: 'Diamond' },
                { value: 'Brass', label: 'Brass' },
                { value: 'Others', label: 'Others' },
              ]}
            />
            </div>
            </Col>
          </Row>
          <Row gutter={[20, 20]} className="pt-[24px]">
            <Col span={24}>
              <Typography.Text className="text-[14px] font-semibold">
                Description
              </Typography.Text>
              <div className="pt-2">
                <Input  name="description" onChange={(e) => createProductInputHandler(e)} value={productFormInput?.description} placeholder="Enter Description" className="py-1  rounded-full" />
              </div>
            </Col>
          </Row>

          <Row gutter={[20, 20]} className="pt-[24px]">
            <Col span={12}>
              <Typography.Text className="text-[14px] font-semibold">
                Quantity
              </Typography.Text>
              <div className="pt-2">
                <Input  name="quantity" placeholder="Enter Quantity"  onChange={(e) => createProductInputHandler(e)} value={productFormInput?.quantity} className="py-1  rounded-full" />
              </div>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-[14px] font-semibold">
                Weight in Grams
              </Typography.Text>
              <div className="pt-2">
                <Input name="weight" className="py-1  rounded-full"   onChange={(e) => createProductInputHandler(e)} value={productFormInput?.weight} placeholder="Enter Weight" />
              </div>
            </Col>
          </Row>
          <Row gutter={[20, 20]} className="pt-[24px] pb-5">
            <Col span={12} className="px-1">
              <Typography.Text className="text-[14px] font-semibold">
                Size
              </Typography.Text>
              <div className="pt-2">
                <Radio.Group
                 name="size"
                  onChange={(e) => createProductInputHandler(e)}
                  value={productFormInput.size}
                  defaultValue={"s"}
                  options={[
                    { value: "s", label: "S" },
                    { value: "m", label: "M" },
                    { value: "l", label: "L" },
                    { value: "xl", label: "Xl" },
                  ]}
                />
              </div>
            </Col>
            <Col span={12} className="px-1">
              <Typography.Text className="text-[14px] font-semibold">
                Made for
              </Typography.Text>
              <div className="pt-2">
                <Radio.Group
                 name="madefor"
                  onChange={(e) => createProductInputHandler(e)}
                  value={productFormInput.madefor}
                  defaultValue={"Men"}
                  options={[
                    { value: "Men", label: "Men" },
                    { value: "Women", label: "Women" },
                    { value: "Kids", label: "Kids" },
                    { value: "Others", label: "Others" },
                  ]}
                />
              </div>
            </Col>
          </Row>
          <Row gutter={[20, 20]} className=" bg-[#fff] rounded-md px-2 py-5">
            <Col span={24}>
              <Typography.Text className="text-[18px] font-semibold ">
                Upload Media files 
              </Typography.Text>

              <div className="flex flex-wrap justify-between gap-5 pt-5">
                  <div>  
                  <Typography.Text className="text-[14px] font-[600] text-[#214344]">
                    Modal Image
                  </Typography.Text>
                  <div className="flex justify-between items-center ">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        imageHandler(e);
                      }}
                    />
                    {preview && (
                      <img
                        className="pt-1 rounded-full"
                        src={preview[0]}
                        alt="Preview"
                        width="50px"
                      />
                    )}
                    </div>
                  </div>
                  <div>
                  <Typography.Text className="text-[14px] font-[600] text-[#214344]">
                    Product Image
                  </Typography.Text>
                  <div className="flex justify-between items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        imageHandler(e);
                      }}
                    />
                    {preview && (
                      <img
                        className="pt-1 rounded-full"
                        src={preview[1]}
                        alt="Preview"
                        width="50px"
                      />
                    )}
                  </div>
                  </div>
                  <div>

                  <Typography.Text className="text-[14px] font-[600] text-[#214344]">
                    Additional Image 1
                  </Typography.Text>
                  <div className="flex justify-between items-center ">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        imageHandler(e);
                      }}
                    />
                    {preview && (
                      <img
                        className="pt-1 rounded-full"
                        src={preview[2]}
                        alt="Preview"
                        width="50px"
                      />
                    )}
                    </div>
                  </div>
                  <div>
                  <Typography.Text className="text-[14px] font-[600] text-[#214344]">
                    Additional Image 1
                  </Typography.Text>
                  <div className="flex justify-between items-center ">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        imageHandler(e);
                      }}
                    />
                    {preview && (
                      <img
                        className="pt-1 rounded-full"
                        src={preview[3]}
                        alt="Preview"
                        width="50px"
                      />
                    )}
                  </div>
                </div>
                </div>
            </Col>
            <Col span={12}>
              <Typography.Text className="text-[14px] font-semibold">
                Upload Video
              </Typography.Text>
              <div className="pt-2">
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    videoHandler(e);
                  }}
                />
              </div>
            </Col>
          </Row>

              <div className="pt-5 flex justify-center">
                <Button onClick={()=>createProductHandler()} className="rounded-full bg-[#214344] text-[#fff] px-10 py-2">
                  Submit
                </Button>
              </div>
        </Form>
      </div>
      </ConfigProvider>
    </>
  );
};
export default CreateAdminProduct;
