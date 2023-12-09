import { IonGrid, IonRow } from "@ionic/react";
import SquareText from "../customText/SquareTitle";
import CircleButton from "../buttons/CircleCutton";
import SquareButton from "../buttons/SquareButton";

const sections = ["بلاستيك", "حديد", "ورق وكتب", "المنيوم", "زجاج", "كرتون", "الكترونيات", "نحاس"];

export default function SortPage(props) {
    
    const handleSelectSection = (section) => {
        props.setFormData({...props.formData, section});
    }
    
    return (
        <div className="inner-page">
            <SquareText text={"الفرز حسب الأصول"} />
            <IonGrid>
                {
                    sections.map((_section, index) => {
                        if (index % 2 === 0) {
                            return (
                                <IonRow key={index}>
                                    <CircleButton activeSelect={props.formData.section === sections[index]} handleClick={handleSelectSection} title={sections[index]} />
                                    {
                                        sections[index + 1] &&
                                        <CircleButton activeSelect={props.formData.section === sections[index+1]} handleClick={handleSelectSection} title={sections[index + 1]} />
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