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
  <source src={"https://zoci-data.s3.ap-south-1.amazonaws.com/productVideos/1739968128208_loader.mp4"} type="video/mp4"/>
  <source src={"https://zoci-data.s3.ap-south-1.amazonaws.com/productVideos/1739968128208_loader.mp4"} type="video/ogg"/>
</video>
        </div>
    )
};


export default DrawerLoader;