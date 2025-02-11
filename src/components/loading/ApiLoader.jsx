import { useSelector } from "react-redux";
import loader from "../../assets/loader.mp4"
import Header from "../header/Header";

const ApiLoader=()=>{
    const loadingStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#red',
        fontSize: '18px',
        color: '#555',
        
    };

    const isLoading = useSelector((state) => state.load.pageLoading);
    return(
        <>
       {isLoading && <>
        <Header/>
        <div style={loadingStyle} className="backdrop-blur-md">
                    
                    <video width="80px" height="80px" muted loop autoPlay>
          <source src={loader} type="video/mp4"/>
          <source src={loader} type="video/ogg"/>
        </video>
                </div>
                </>}
        
        </>
    )
}

export default  ApiLoader