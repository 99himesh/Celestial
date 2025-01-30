import { Circles, Grid, Hourglass } from 'react-loader-spinner'
import loader from "../../assets/loader.mp4"
const Loading = () => {
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


    return (
        <div style={loadingStyle}>
            {/* <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#214344', '#F0D5A0']}
            /> */}
            <video width="100px" height="100px" muted loop autoPlay>
  <source src={loader} type="video/mp4"/>
  <source src={loader} type="video/ogg"/>
</video>
        </div>
    )
};


export default Loading;