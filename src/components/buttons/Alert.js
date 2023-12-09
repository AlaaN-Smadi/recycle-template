import { IonAlert } from "@ionic/react";
import SquareButton from "./SquareButton";

export default function AppAlert(props) {
    return (
        <>
            <SquareButton {...props} />

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