import { IonCard, IonCardSubtitle, IonCardTitle, IonCol } from "@ionic/react";
import { ArrowRightSquare } from "react-iconly";

import styles from "./CoffeeCard.module.css";

const CoffeeCard = props => {

    const { coffee } = props;

    return (

        <IonCol size="6" className="animate__animated animate__fadeIn">
            <IonCard className={ styles.coffeeCard } routerLink={ `/coffee/${ coffee.id }` }>
                <img src={ coffee.image } alt="coffee" />
                <IonCardTitle>{ coffee.name }</IonCardTitle>
                <IonCardSubtitle>{ coffee.summary }</IonCardSubtitle>
                <div className={ styles.coffeePrice }>
                    <h4>${ coffee.price }</h4>
                    <div className={ styles.coffeeAddButton }>
                        <ArrowRightSquare set="bold" className="yellow-icon" />
                    </div>
                </div>
            </IonCard>
        </IonCol>
    );
}

export default CoffeeCard;