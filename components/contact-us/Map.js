import React from 'react'
import GoogleMapReact from 'google-map-react';

const Map = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <div>
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDF5Pi7HaVtg9EvORzGIBuJ0u6vKnxpsGo" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >

                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Map