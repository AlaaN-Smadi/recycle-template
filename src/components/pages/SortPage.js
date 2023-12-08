import { IonCol, IonGrid, IonRow } from "@ionic/react";
import SquareText from "../customText/SquareTitle";
import CircleButton from "../buttons/CircleCutton";
import SquareButton from "../buttons/SquareButton";

export default function SortPage(props) {
    return (
        <div className="inner-page">
            <SquareText text={"الفرز حسب الأصول"} />
            <IonGrid>
                <IonRow>
                    <CircleButton title={"بلاستيك"} />
                    <CircleButton title={"حديد"} />
                </IonRow>
                <IonRow>
                    <CircleButton title={"ورق وكتب"} />
                    <CircleButton title={"المنيوم"} />
                </IonRow>
                <IonRow>
                    <CircleButton title={"زجاج"} />
                    <CircleButton title={"كرتون"} />
                </IonRow>
                <IonRow>
                    <CircleButton title={"الكترونيات"} />
                    <CircleButton title={"نحاس"} />
                </IonRow>
            </IonGrid>
            <SquareButton handleClick={props.handleNext} btnText={"التالي"} />
        </div>
    )
}