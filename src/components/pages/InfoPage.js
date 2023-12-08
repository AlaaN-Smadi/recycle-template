import { IonCol, IonGrid, IonRow } from "@ionic/react";
import SquareText from "../customText/SquareTitle";
import SquareButton from "../buttons/SquareButton";

export default function InfoPage(props) {
    return (
        <div className="inner-page">
            <img className="App-logo" src="./logo.png" alt="logo" />
            <IonGrid>
                <IonRow>
                    <IonCol >
                        <IonRow>
                            <IonCol >
                                <SquareText leftText={true} smallText={true} text={"+974"} />
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
                                <SquareText noMargin={true} smallText={true} text={"الدوحة"} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} text={"الريان"} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} text={"الوكرة"} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol >
                                <SquareText noMargin={true} location={true} smallText={true} text={"الموقع على الخريطة"} />
                            </IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} text={"الخور"} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} text={"ام صالل"} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} text={"الظعاين"} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol ></IonCol>
                            <IonCol >
                                <SquareText noMargin={true} smallText={true} text={"الشمال"} />
                            </IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <SquareButton handleClick={props.handleNext} btnText={"التالي"} />

        </div>
    )
}