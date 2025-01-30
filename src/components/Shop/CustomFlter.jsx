
const CustomFilter=()=>{
    const filterHandler=(value)=>{
        
    }
   return(
    
    <>
    <div className="filter flex flex-wrap max-md:justify-center items-center gap-5">
        <h3 className="text-[16px] text-[#214344] ">Fast Filter:</h3>
        <div className="flex flex-wrap gap-5  ">
            <button  onClick={()=>{filterHandler("newArrival")}} className=" w-[150px] py-2  rounded-full bg-[#214344] text-[#F0D5A0]  text-[14px]">NEW ARRIVAL</button>
            <button  onClick={()=>{filterHandler("bestSellers")}} className="w-[150px] py-2  rounded-full bg-[#214344] text-[#F0D5A0]  text-[14px]">BEST SELLERS</button>
            <button  onClick={()=>{filterHandler("trending")}} className="w-[150px] py-2  rounded-full bg-[#214344] text-[#F0D5A0]  text-[14px]">TRENDING</button>
            <button  onClick={()=>{filterHandler("mens")}} className="w-[150px] py-2  rounded-full bg-[#214344] text-[#F0D5A0]  text-[14px]">MEN'S</button>
            <button  onClick={()=>{filterHandler("gifts")}} className="w-[150px] py-2 rounded-full bg-[#214344] text-[#F0D5A0]  text-[14px]">GIFTS</button>
        </div>


    </div>
    </>

   )
}
export default CustomFilter;