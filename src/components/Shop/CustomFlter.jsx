
const CustomFilter=()=>{
    const filterHandler=(value)=>{
        
    }
   return(
    
    <>
    <div className="filter flex flex-wrap max-md:justify-center items-center gap-5">
        <h3 className="text-[16px] text-[#214344] ">Fast Filter:</h3>
        <div className="flex flex-wrap gap-5  ">
            <button  onClick={()=>{filterHandler("newArrival")}} className="px-14 py-3 rounded-full bg-[#214344] text-[#F0D5A0]  text-[16px]">NEW ARRIVAL</button>
            <button  onClick={()=>{filterHandler("bestSellers")}} className="px-14 py-3 rounded-full bg-[#214344] text-[#F0D5A0]  text-[16px]">BEST SELLERS</button>
            <button  onClick={()=>{filterHandler("trending")}} className="px-14 py-3 rounded-full bg-[#214344] text-[#F0D5A0]  text-[16px]">TRENDING</button>
            <button  onClick={()=>{filterHandler("mens")}} className="px-14 py-3 rounded-full bg-[#214344] text-[#F0D5A0]  text-[16px]">MEN'S</button>
            <button  onClick={()=>{filterHandler("gifts")}} className="px-14 py-3 rounded-full bg-[#214344] text-[#F0D5A0]  text-[16px]">GIFTS</button>
        </div>


    </div>
    </>

   )
}
export default CustomFilter;