import { IonAlert } from "@ionic/react";
import SquareButton from "./SquareButton";

export default function AppAlert(props) {
    return (
        <>
            <div className="send-btn" style={{ display: "flex", gap: "0.5rem" }}>
                <SquareButton {...props} handleClick={props.handleNextPage} />
                <SquareButton handleClick={props.handleBackPage} btnText={"السابق"} />
            </div>

            <IonAlert
                trigger={props.id}
                header={props.alertHeader}
                message={props.alertMessage}
                buttons={[props.okAction]}
                onDidDismiss={props.handleDismiss}
            ></IonAlert>
        </>
    )
}