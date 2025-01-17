import { Col, Row } from "antd";

const Testimonial=()=>{
    return(
        <div className="textimonial md:px-20">
            <div className="md:w-[30%] w-full mx-auto">
            <h1 className="md:text-[55px] text-[40px] text-center md:text-start  text-[#BFA785] font-[400]">Client Reviews & Testimonials</h1>
            </div>
    <Row className="py-10" gutter={[20,20]}>
        <Col xl={8} lg={8} sm={24} xs={24} >
        <div className="flex flex-col gap-5">
            <h4 className="text-[30px] font-[400] text-[#BFA785]">Amit Singh</h4>
            <p className="text-[20px]">Testimonials are short quotes from people who love your brand. It’s a great way to convince customers to try your services.</p>
        </div>
        </Col>
        <Col xl={8} lg={8} sm={24} xs={24} >
        <div className="flex flex-col gap-5">
            <h4 className="text-[30px] font-[400] text-[#BFA785]">Aman Maurya</h4>
            <p  className="text-[20px]">Testimonials are short quotes from people who love your brand. It’s a great way to convince customers to try your services.</p>
        </div></Col>
        <Col xl={8} lg={8} sm={24} xs={24} >
        <div className="flex flex-col gap-5">
            <h4 className="text-[30px] font-[400] text-[#BFA785]">Shivam Sharma</h4>
            <p  className="text-[20px]">Testimonials are short quotes from people who love your brand. It’s a great way to convince customers to try your services.</p>
        </div></Col>
        </Row>
        </div>

    )
}
export default Testimonial;