import { Button, Col, ConfigProvider, Form, Input, Radio, Row, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import "./admin.css";
import {
  createProductApi,
  editProductApi,
  getallCategaryApi,
  uploadProductImages,
  uploadProductVideo,
} from "../../feature/admin/adminApi";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router";
import { addAdminCategary } from "../../feature/admin/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";

const CreateAdminProduct = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const [video, setVideo] = useState();
  const [videoUrl, setVideoUrl] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState([]);
  const [productImagesUrl,setProductImagesUrl]=useState([])
  const [metalType, setMetalType] = useState([]);
  const [category,setCategary]=useState("")
  const editData=location?.state?.product;
  console.log(editData,"editData");
  
  const dispatch = useDispatch();
  const categaries=useSelector((state)=>state?.admin?.categary)
  const [productFormInput, setProductFormInput] = useState({
    title: "",
    price: "",
    description: "",
    quantity:"",
    weight:"",
    size:"",
    madefor:"",
    metalColor:""
  })
  const getCategary=async()=>{
    try {
      const res=await getallCategaryApi();
      dispatch(addAdminCategary(res))
    } catch (error) {
      console.log(error);  
    }

  }
  const categaryData=categaries?.map((item)=>{
    return{
      value:item.title,
      label:item.title
    }
  })

  const createProductInputHandler=(e)=>{
    console.log(e.target.value);
    setProductFormInput({...productFormInput,[e.target.name]:e.target.value})
    
  }
  function deepCompareArraysOnly(oldObj, newObj) {
    const changes = {};
  
    // Loop through keys in newObj to compare with oldObj
    for (const key in newObj) {
      // If the value is an array, compare deeply
      if (Array.isArray(newObj[key]) && Array.isArray(oldObj[key])) {
        if (!arraysAreEqual(oldObj[key], newObj[key])) {
          changes[key] = newObj[key]; // If arrays are different, return the new array
        }
      } else if (oldObj[key] !== newObj[key]) {
        // If values are different, return the new value
        changes[key] = newObj[key];
      }
    }
  
    // Handle deleted properties (keys in oldObj but not in newObj)
    for (const key in oldObj) {
      if (!(key in newObj)) {
        changes[key] = undefined; // indicate property was removed
      }
    }
  
    return changes;
  }
  
  // Helper function to compare two arrays deeply
  function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }


  const createProductHandler=async()=>{
    if(!editData && (productImagesUrl.length<4 || videoUrl.length<1)) return toast.error("Please add all images and videos")
    const data={
      ...productFormInput,images:productImagesUrl,video:videoUrl,metalType,compare_at_price:1200,category:category
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

      const newData = {
        ...productFormInput,
        images: productImagesUrl, // Ensure this includes existing or new images
        video: videoUrl, // Ensure this includes existing or new video
        metalType,
        category,
        compare_at_price: 1200
    };
   
  const changedData = deepCompareArraysOnly(editData, newData);
  if (Object.keys(changedData).length === 0) {
      return toast.info("No changes detected.");
  }

  try {
      const res = await editProductApi(changedData, editData._id);
      toast.success(res.message);
      navigate("/admin/products");
  } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
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
      setVideoUrl([res?.videos[0]]);
      toast.success(res.message);     

    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const imageHandler = async(e,i) => {
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
      if(editData){
        const updaateimage=res.images.splice(i,1,res.images[i])
        setProductImagesUrl([...productImagesUrl,updaateimage])
      }
      setProductImagesUrl([...productImagesUrl,res?.images[0]])
      toast.success(res.message); 
       
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message); 
    }
  };
  useEffect(()=>{
    getCategary()
    
    if(editData){
      setProductFormInput({...editData})
      setMetalType(editData?.metalType)
      setPreview(editData?.images)
      setVideoUrl([editData?.video[0]])
      setProductImagesUrl(editData?.images??[])
      setCategary(editData?.category??"")
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
        <Row gutter={[20, 20]}>
          
          <Col span={12}>
            <Typography.Text className="text-[14px] font-semibold">
             Categary
            </Typography.Text>
            <div className="pt-2">
            <Select
            name="categary"

            defaultValue="Nackless"
            onChange={(e)=>{setCategary(e)}}
            className="w-full rounded-md"
            options={categaryData}
          />
          </div>
          </Col>
          <Col span={12}>
            <Typography.Text className="text-[14px] font-semibold">
              Metal Type
            </Typography.Text>
            <div className="pt-2">
            <Select
            name="metalType"
            defaultValue="Gold"
            onChange={handleChange}
            className="w-full rounded-md"
            options={[
              { value: 'Gold', label: 'Gold' },
              { value: 'Silver', label: 'Silver (9-5)' },
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
         
          <Row gutter={[20, 20]} >
            <Col span={24}>
              <Typography.Text className="text-[14px] font-semibold">
                Description
              </Typography.Text>
              <div className="pt-2">
                <TextArea  name="description" value={productFormInput?.description} placeholder="Enter Description"    allowClear onChange={(e) => createProductInputHandler(e)} />
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
                    { value: "Unisex", label: "Unisex" },
                    { value: "Others", label: "Others" },
                  ]}
                />
              </div>
            </Col>
          </Row>
          <Row className="pb-5">
          <Col span={12}>
              <Typography.Text className="text-[14px] font-semibold">
               Metal Color
              </Typography.Text>
              <div className="pt-2">
                <Input name="metalColor" className="py-1  rounded-full"   onChange={(e) => createProductInputHandler(e)} value={productFormInput?.metalColor} placeholder="Enter Metal Color" />
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
                        imageHandler(e,1);
                      }}
                    />
                    {preview && (
                      <img
                        className="pt-1 rounded-full"
                        src={preview[0]??"https://zoci-data.s3.ap-south-1.amazonaws.com/productImages/1739966281003_no-image-found-360x250.webp"}
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
                        imageHandler(e,2);
                      }}
                    />
                    {preview && (
                      <img
                        className="pt-1 rounded-full"
                        src={preview[1]??"https://zoci-data.s3.ap-south-1.amazonaws.com/productImages/1739966281003_no-image-found-360x250.webp"}
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
                        imageHandler(e,3);
                      }}
                    />
                    {preview && (
                      <img
                        className="pt-1 rounded-full"
                        src={preview[2]??"https://zoci-data.s3.ap-south-1.amazonaws.com/productImages/1739966281003_no-image-found-360x250.webp"}
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
                        imageHandler(e,4);
                      }}
                    />
                    {preview && (
                      <img
                        className="pt-1 rounded-full"
                        src={preview[3]??"https://zoci-data.s3.ap-south-1.amazonaws.com/productImages/1739966281003_no-image-found-360x250.webp"}
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
