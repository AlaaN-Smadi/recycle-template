import { IonCol, IonGrid, IonRow } from "@ionic/react";
import SquareText from "../customText/SquareTitle";
import Password from "../customText/Password";
import AppAlert from "../buttons/Alert";
import { useEffect, useState } from "react";
import SquareInput from "../customText/SquareInput";
import { storageManager } from "../../assets/Storage";
import SquareButton from "../buttons/SquareButton";

export default function SignUp(props) {
    console.log('form data -=> ', props.formData);
    const [showSender, setShowSender] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowSender(true);
        }, 300);
    }, []);

    const handleChangeQuantity = (e) => {
        props.setFormData({ ...props.formData, quantity: e.target.value });
    }

    const handleChangePrice = (e) => {
        props.setFormData({ ...props.formData, price: e.target.value });
    }

    const handleSelectPriceType = (priceType) => {
        props.setFormData({ ...props.formData, priceType });
    }

    const handleFinish = () => {
        storageManager.addNewSubmission(props.formData).then(() => {
            props.handleNext();
        });
    }

    return (
        <div className="inner-page">
            <SquareInput centerText={true} handleChange={handleChangeQuantity} type="number" placeholder={"الكمية المتوفرة"} />
            <Password />
            <IonGrid>
                <IonRow>
                    <IonCol >
                        <IonRow>
                            <IonCol >
                                <SquareText handleClick={handleSelectPriceType} activeSelect={props.formData.priceType === "مقابل مادي"} text={"مقابل مادي"} />
                            </IonCol>
                            <IonCol >
                                <SquareText handleClick={handleSelectPriceType} activeSelect={props.formData.priceType === "مجاني"} text={"مجاني"} />
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol >
                                <SquareInput disableClick={props.formData.priceType !== "مقابل مادي"} centerText={true} handleChange={handleChangePrice} type="number" placeholder={"السعر"} />
                            </IonCol>
                            <IonCol></IonCol>
                        </IonRow>
                    </IonCol>
                </IonRow>
            </IonGrid>
            {
                showSender &&
                <AppAlert handleBackPage={props.handleBackPage} disableClick={props.formData.priceType === "مقابل مادي" && !props.formData.price} handleDismiss={handleFinish} okAction={"تم"} alertMessage={"تم حفظ المعلومات بنجاح"} alertHeader={"تم الحفظ"} id={"sendBtn"} send={true} btnText={"ارسال"} />
            }
        </div>
    )
}