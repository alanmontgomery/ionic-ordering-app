import { IonButton, IonCard, IonCardSubtitle, IonCardTitle, IonCol, IonRow } from "@ionic/react";

import { useRef } from "react";
import { Bag } from "react-iconly";
import { addToCart } from "../store/CartStore";
import '../pages/Home.css';

const ViewCoffeeCard = props => {

    const { coffee, cartRef } = props;
    const coffeeCartRef = useRef();

    const addCoffeeToCart = (e, coffeeID) => {

        e.preventDefault();
        e.stopPropagation();

        coffeeCartRef.current.style.display = "";
        coffeeCartRef.current.classList.add("animate__fadeOutUp");

        setTimeout(() => {

            cartRef.current.classList.add("animate__tada");
            addToCart(coffeeID);

            setTimeout(() => {
                
                cartRef.current.classList.remove("animate__tada");
                coffeeCartRef.current.style.display = "none";
            }, 500);
        }, 500);
    }

    return (

        <IonRow key={ coffee.id } className="animate__animated animate__fadeIn">
            <IonCol size="6">

                <IonCard className="coffee-card">
                    
                    <img src={ coffee.image } alt="coffee type" />
                        <IonCardTitle className="custom-margin-left">{ coffee.name }</IonCardTitle>
                        <IonCardSubtitle className="custom-margin-left">{ coffee.summary }</IonCardSubtitle>
                </IonCard>
            </IonCol>

            <IonCol size="6" className="ion-margin-top ion-padding-top ion-padding-end">
                    <IonCardSubtitle>Description</IonCardSubtitle>
                    <p>{ coffee.description }</p>

                    <IonRow className="ion-justify-content-between">
                        <IonCol size="8">
                            <IonButton routerLink={ `/coffee/${ coffee.id }`} color="main" expand="block">View &rarr;</IonButton>
                        </IonCol>

                        <IonCol size="4">
                            <IonButton color="main" expand="block" onClick={ e => addCoffeeToCart(e, coffee.id) }>
                                <Bag set="bold" />
                            </IonButton>

                            <div ref={ coffeeCartRef } style={{ position: "absolute", display: "none", fontSize: "3rem" }} className="animate__animated">
                                <Bag set="bold" />
                            </div>
                        </IonCol>
                    </IonRow>
            </IonCol>
        </IonRow>
    );
}

export default ViewCoffeeCard;