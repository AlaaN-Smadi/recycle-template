import { IonCol, IonGrid, IonRow } from "@ionic/react";
import SquareText from "../customText/SquareTitle";
import Password from "../customText/Password";
import AppAlert from "../buttons/Alert";
import { useEffect, useState } from "react";

export default function SignUp(props) {
    const [showSender, setShowSender] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowSender(true);
        }, 300);
    }, []);
    return (
        <div className="inner-page">
            <SquareText text={"الكمية المتوفرة"} />
            <Password />
            <IonGrid>
                <IonRow>
                    <IonCol >
                        <IonRow>
                            <IonCol >
                                <SquareText text={"مقابل مادي"} />
                            </IonCol>
                            <IonCol >
                                <SquareText text={"مجاني"} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol >
                                <SquareText text={"السعر"} />
                            </IonCol>
                            <IonCol ></IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
            {
                showSender &&
                <AppAlert handleNext={props.handleNext} okAction={"تم"} alertMessage={"تم حفظ المعلومات بنجاح"} alertHeader={"تم الحفظ"} id={"sendBtn"} send={true} btnText={"ارسال"} />
            }
        </div>
    )
}