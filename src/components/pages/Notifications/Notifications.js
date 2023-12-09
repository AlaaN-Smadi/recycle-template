import React, { useEffect, useState } from 'react';
import { IonButton, IonModal, IonContent, IonLabel, IonItem, IonItemDivider, IonItemGroup } from '@ionic/react';
import Noty from './Icon';
import { storageManager } from '../../../assets/Storage';


function Notifications() {
  const [submissions, setSubmissions] = useState([]);
  useEffect(() => {
    storageManager.initStorage().then(() => {
      storageManager.getSubmissions().then(_sub => {
        setSubmissions(_sub);
      });
    });
  }, []);
  return (
    <>
      <IonButton fill="outline" id="open-modal" >
        <Noty width={"30px"} color={"#122C34"} count={submissions.length} />
      </IonButton>
      <IonModal
        trigger="open-modal"
        initialBreakpoint={0.5}
        breakpoints={[0, 0.25, 0.5, 1.0]}
        handleBehavior="cycle"
      >
        <IonContent className="ion-padding">
          <IonItem className='center-text'>
            <IonLabel>
              طلباتي
            </IonLabel>
          </IonItem>
          <div style={{
            height: '50vh',
            overflow: 'scroll'
          }} className="ion-margin-top">
            {
              submissions.length ?
                submissions.map((_sub, index) => {
                  return (
                    <IonItemGroup>
                      <IonItemDivider>
                        <IonLabel>{index + 1}</IonLabel>
                      </IonItemDivider>
                      <IonItem>
                        <IonLabel>الأصل</IonLabel>
                        <IonLabel>{_sub.section}</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>رقم الهاتف</IonLabel>
                        <IonLabel>+974 {_sub.phoneNumber}</IonLabel>
                      </IonItem>
                      <IonItem>
                        <IonLabel>الموقع</IonLabel>
                        <IonLabel>{_sub.location.name}</IonLabel>
                      </IonItem>
                      {
                        _sub.quantity &&
                        <IonItem>
                          <IonLabel>الكمية</IonLabel>
                          <IonLabel>{_sub.quantity}</IonLabel>
                        </IonItem>
                      }
                      <IonItem lines="none">
                        <IonLabel>السعر</IonLabel>
                        <IonLabel>{_sub.priceType === "مقابل مادي" ? _sub.price : _sub.priceType}</IonLabel>
                      </IonItem>
                    </IonItemGroup>
                  )
                }) : <></>
            }
          </div>
        </IonContent>
      </IonModal>
    </>
  );
}

export default Notifications;
