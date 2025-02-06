import { Circles, Grid, Hourglass } from 'react-loader-spinner'
import loader from "../../assets/loader.mp4"
const DrawerLoader = () => {
    const loadingStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundColor: '#red',
        fontSize: '18px',
        color: '#555',
    
        
    };


    return (
        <div style={loadingStyle} className="backdrop:blur-lg">
            <video width="80px" height="80px" muted loop autoPlay>
  <source src={loader} type="video/mp4"/>
  <source src={loader} type="video/ogg"/>
</video>
        </div>
    )
};


export default DrawerLoader;