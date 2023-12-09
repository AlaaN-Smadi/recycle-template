import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import SquareButton from "../buttons/SquareButton";
import { useEffect, useState } from "react";



const mapStyles = {
    "backgroundColor": '#070C12',
    "styles": [
        {
            "featureType": 'all',
            "stylers": [
                { "lightness": -30, "saturation": -30, "visibility": "simplified", "hue": "#070C12" } // Change water color to a shade of blue
            ]
        }
    ],
};
const libraries = ['places'];

export default function MapView(props) {
    const [selectedLocation, setSelectedLocation] = useState(props.formData.location);
    const [showMarker, setShowMarker] = useState(false);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPSAPIKEY || '', // Your API key here
        libraries
    });
    
    const handleMapClick = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        const location = { lat, lng };
        props.setFormData({...props.formData, location});
    }
    
    useEffect(()=>{
        if (isLoaded) {
            setTimeout(() => {
                setShowMarker(true)
            }, 100);
        }
    }, [isLoaded]);

    return (
        <div className="map-view-container">
            {
                !isLoaded ?
                    <> Loading... </> :
                    <GoogleMap center={selectedLocation} options={mapStyles} zoom={10} mapContainerClassName='map-container'>
                        {
                            showMarker &&
                            <Marker icon={{scaledSize: new window.google.maps.Size(40, 40), url: "images/pin-icon.png"}} position={props.formData.location} />
                        }
                    </GoogleMap>
            }
            <SquareButton fixedBottom={true} handleClick={props.closeMap} btnText={"استمرار"}/>
        </div>
    )
}