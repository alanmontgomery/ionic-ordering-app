import { IonCard, IonCardSubtitle, IonCardTitle, IonCol, IonRow } from "@ionic/react";
import { Plus } from "react-iconly";

import styles from "./CoffeeCard.module.css";

const CoffeeCardOffer = props => {

    const { offer } = props;

    return (

        <IonRow>
            <IonCol size="12" className="animate__animated animate__fadeIn">
                <IonCard className={ `${ styles.coffeeCard } ${ styles.coffeeCardLong }` }>
                    
                    <IonRow>
                        <IonCol size="4">

                            <img src={ offer.image } alt="coffee" />
                        </IonCol>

                        <IonCol size="8">
                            <div className={ styles.coffeeCardLongDetails }>
                                <IonCardTitle>{ offer.title }</IonCardTitle>
                                <p>{ offer.description }</p>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonCard>
            </IonCol>
        </IonRow>
    );
}

export default CoffeeCardOffer;