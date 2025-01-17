import { Circles, Grid, Hourglass } from 'react-loader-spinner'

const Loading = () => {
    const loadingStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
        fontSize: '18px',
        color: '#555',
    };


    return (
        <div style={loadingStyle}>
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#214344', '#F0D5A0']}
            />
        </div>
    )
};


export default Loading;