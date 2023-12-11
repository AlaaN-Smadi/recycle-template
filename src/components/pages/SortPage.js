import { IonGrid, IonRow } from "@ionic/react";
import SquareText from "../customText/SquareTitle";
import CircleButton from "../buttons/CircleCutton";
import SquareButton from "../buttons/SquareButton";
import Notifications from "./Notifications/Notifications";

const sections = ["بلاستيك", "حديد", "ورق وكتب", "المنيوم", "زجاج", "أثاث", "الكترونيات", "نحاس"];

export default function SortPage(props) {

    const handleSelectSection = (section) => {
        props.setFormData({ ...props.formData, section });
    }

    return (
        <div className="inner-page">
            <div style={{display: "flex"}}>
                <Notifications />
                <SquareText text={"الفرز حسب الأصول"} />
            </div>
            <IonGrid>
                {
                    sections.map((_section, index) => {
                        if (index % 2 === 0) {
                            return (
                                <IonRow className="ion-justify-content-center" key={index}>
                                    <CircleButton activeSelect={props.formData.section === sections[index]} handleClick={handleSelectSection} title={sections[index]} />
                                    {
                                        sections[index + 1] &&
                                        <CircleButton activeSelect={props.formData.section === sections[index + 1]} handleClick={handleSelectSection} title={sections[index + 1]} />
                                    }
                                </IonRow>
                            )
                        }
                    })
                }
            </IonGrid>
            <SquareButton disableClick={!props.formData.section} handleClick={props.handleNext} btnText={"التالي"} />
        </div>
    )
}