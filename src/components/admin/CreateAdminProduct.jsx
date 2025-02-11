import { Button, Col, Form, Input, Radio, Row, Select, Typography } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import "./admin.css"
import { uploadProductImages, uploadProductVideo } from "../../feature/admin/adminApi";

const CreateAdminProduct = () => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([
    
    ]);
console.log(fileList);


    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });

    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    //   };
      const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
      };
      const handleChange = async ({ fileList: newFileList }) => {
        console.log("file upload");
        console.log(fileList);
        
    
        // Create a new FormData instance
        const formData = new FormData();
    
        // Append each image file to FormData
      
                formData.append("productImages", fileList.originFileObj);
            

    
        // Set state before making API call
        setFileList(newFileList);
    
        try {
            const res = await uploadProductImages(formData);
            console.log("Upload response:", res);
        } catch (error) {
            console.error("Upload failed:", error);
        }
    };
    
      const handleVideo = async ({ file }) => {
    console.log(file.originFileObj);

    const formData = new FormData();
    formData.append("productVideos", file.originFileObj);

    try {
      const res = await uploadProductVideo(formData);
      console.log("Upload response:", res);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload Image
      </div>
    </button>
  );
  return (
    <>
    <div className="px-32 py-5">
      <Row justify={"center"}>
        <Typography.Text className="text-[30px] font-semibold">
          Create Product
        </Typography.Text>
      </Row>
      <Form
      
      >
      
        <Row gutter={[20, 20]} className="pt-[24px]">
          <Col span={12}>
            <Form.Item>
              <Typography.Text className="text-[14px] font-semibold">
                Product Name
              </Typography.Text>
              <div className="pt-2">
              <Input className="py-1 rounded-full"  />
              </div>
            </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item>
              <Typography.Text className="text-[14px] font-semibold">
                Price
              </Typography.Text>
              <div className="pt-2">
              <Input  className="py-1 rounded-full" />
              </div>
            </Form.Item>
          
          </Col>
        </Row>
        <Row gutter={[20,20]}>
            <Col span={12}>
            <Typography.Text className="text-[14px] font-semibold">
                Categary
              </Typography.Text>
              <div className="pt-2 categary">
                    <Select
            defaultValue="lucy"
            
            style={{width:"100%"}}
            onChange={handleChange}
            options={[
                {
                value: 'jack',
                label: 'Jack',
                },
                {
                value: 'lucy',
                label: 'Lucy',
                }
            
            ]}
            />
    </div>
              
            </Col>
          
            <Col span={12}>
            <Typography.Text className="text-[14px] font-semibold">
                Metal Type
              </Typography.Text>
              <div className="pt-2">
                    <Select
            defaultValue="lucy"
            
            style={{width:"100%"}}
            // onChange={handleChange}
            options={[
                {
                value: 'jack',
                label: 'Jack',
                },
                {
                value: 'lucy',
                label: 'Lucy',
                }
            
            ]}
            />
    </div>
              
            
            </Col>
        </Row>
        <Row gutter={[20,20]} className="pt-[24px]">
            <Col span={24}>
             <Typography.Text className="text-[14px] font-semibold">
                Description
              </Typography.Text>
              <div className="pt-2">
            <Input className="py-1  rounded-full" />
            </div>
            </Col>
        </Row>



        <Row gutter={[20,20]} className="pt-[24px]">
            <Col span={12}>
             <Typography.Text className="text-[14px] font-semibold">
                Quantity
              </Typography.Text>
              <div className="pt-2">
            <Input className="py-1  rounded-full" />
            </div>
            </Col>
            <Col span={12}>
             <Typography.Text className="text-[14px] font-semibold">
                Weight in Grams
              </Typography.Text>
              <div className="pt-2">
            <Input className="py-1  rounded-full" />
            </div>
            </Col>
           
        </Row>
        <Row  gutter={[20,20]} className="pt-[24px]" >
            <Col span={12} className="px-1">
            <Typography.Text className="text-[14px] font-semibold">
                Size
              </Typography.Text>
              <div className="pt-2">
            <Radio.Group
                name="radiogroup"
                defaultValue={1}
                options={[
                { value: 1, label: 'S' },
                { value: 2, label: 'M' },
                { value: 3, label: 'L' },
                { value: 4, label: 'Xl' },
                ]}
            />
            </div>
            </Col>
            <Col span={12}className="px-1">
            <Typography.Text className="text-[14px] font-semibold">
                Made for
              </Typography.Text>
              <div className="pt-2">
            <Radio.Group
                name="radiogroup"
                defaultValue={1}
                options={[
                { value: 1, label: 'Men' },
                { value: 2, label: 'Women' },
                ]}
            />
            </div>
            </Col>
        </Row>
        <Row  gutter={[20,20]}  className="pt-[24px]" >
            <Col span={12}>
        <Typography.Text className="text-[14px] font-semibold">Upload Image</Typography.Text>
        <div className="pt-2">
        <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
        </Upload>
      </div>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
      </Col>
      <Col span={12}>
            <Typography.Text className="text-[14px] font-semibold">
                Upload Video
              </Typography.Text>
             <div className="pt-2"> 
              <Upload  className="mt-3 mb-3"
                    accept=".mp4"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    maxCount={1}
                    onChange={(e)=>{handleVideo(e)}}>

                    <Button>
                       Upload Video
                    </Button>
                    </Upload>
                    </div>
              </Col>

        </Row >

     
        <Row justify={"center"}>
            <Col >
            <div><Button className="rounded-full bg-[#214344] text-[#fff] px-10 py-2" >Submit</Button></div>
            </Col>
        </Row>
      </Form>
      </div>
    </>
  );
};
export default CreateAdminProduct;
