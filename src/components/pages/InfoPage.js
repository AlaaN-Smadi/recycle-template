import { IonCol, IonGrid, IonRow } from "@ionic/react";
import SquareText from "../customText/SquareTitle";
import SquareButton from "../buttons/SquareButton";
import { useState } from "react";
import MapView from "./Map";
import SquareInput from "../customText/SquareInput";


export default function InfoPage(props) {
    const [selectFromMap, setSelectFromMap] = useState(false);

    const handleSelectLocation = (locationName) => {
        const location = props.locations.find(_loc => _loc.name === locationName);
        props.setFormData({ ...props.formData, location });
    }

    const handleNumberInput = (e) => {
        props.setFormData({ ...props.formData, phoneNumber: e.target.value });
    }

    const openMap = () => {
        setSelectFromMap(true);
        // props.setFormData({ ...props.formData, selectedLocation: 'map' });
    }

    const closeMap = () => {
        setSelectFromMap(false);
    }

    return (
        <div className="inner-page">
            {
                selectFromMap &&
                <MapView formData={props.formData} setFormData={props.setFormData} closeMap={closeMap} />
            }
            <img className="App-logo" src="./logo.png" alt="logo" />
            <IonGrid>
                <IonRow>
                    <IonCol >
                        <IonRow>
                            <IonCol >
                                <SquareInput handleChange={handleNumberInput} inputMode={"decimal"} type="tel" leftText={true} smallText={true} placeholder={"+974"} />
                            </IonCol>
                            <IonCol >
                                <SquareText smallText={true} text={"رقم الهاتف"} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText squareLocation={true} noMargin={true} smallText={true} text={"الموقع"} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} handleClick={handleSelectLocation} activeSelect={props.formData.location.name === props.locations[0].name} text={props.locations[0].name} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} handleClick={handleSelectLocation} activeSelect={props.formData.location.name === props.locations[1].name} text={props.locations[1].name} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} handleClick={handleSelectLocation} activeSelect={props.formData.location.name === props.locations[2].name} text={props.locations[2].name} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol >
                                <SquareText noMargin={true} location={true} handleClick={openMap} activeSelect={props.formData.location.name === 'map'} smallText={true} text={"الموقع على الخريطة"} />
                            </IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} handleClick={handleSelectLocation} activeSelect={props.formData.location.name === props.locations[3].name} text={props.locations[3].name} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} handleClick={handleSelectLocation} activeSelect={props.formData.location.name === props.locations[4].name} text={props.locations[4].name} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} handleClick={handleSelectLocation} activeSelect={props.formData.location.name === props.locations[5].name} text={props.locations[5].name} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} handleClick={handleSelectLocation} activeSelect={props.formData.location.name === props.locations[6].name} text={props.locations[6].name} />
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <div style={{display: "flex", gap:"0.5rem"}}>
                <SquareButton disableClick={!props.formData.location.name || !props.formData.phoneNumber || `${props.formData.phoneNumber}`.length < 8} handleClick={props.handleNext} btnText={"التالي"} />
                <SquareButton handleClick={props.handleBackPage} btnText={"السابق"} />
            </div>

        </div>
    )
}