import { IonBadge, IonButton, IonCardSubtitle, IonCol, IonContent, IonFooter, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonNote, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { Delete, TickSquare } from "react-iconly";
import { useEffect, useState } from "react";
import { CartStore, CoffeeStore } from "../store";
import { removeFromCart } from "../store/CartStore";
import { getCartCoffees, getCoffees } from "../store/Selectors";

import styles from "./Cart.module.css";

const Cart = () => {

    const coffees = CoffeeStore.useState(getCoffees);
    const cart = CartStore.useState(getCartCoffees);

    const [ cartProducts, setCartProducts ] = useState([]);
    const [ amountLoaded, setAmountLoaded ] = useState(6);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {

        const getCartProducts = () => {

            setCartProducts([]);
            setTotal(0);

            cart.forEach(coffee => {

                var coffeeID = coffee;
                const tempCoffee = coffees.filter(p => parseInt(p.id) === parseInt(coffeeID))[0];

                setTotal(prevTotal => prevTotal + parseFloat(tempCoffee.price));
                setCartProducts(prevSearchResults => [ ...prevSearchResults, tempCoffee ]);
            });
        }

        getCartProducts();
    }, [ cart ]);

    const fetchMore = async (e) => {

		//	Increment the amount loaded by 6 for the next iteration
		setAmountLoaded(prevAmount => (prevAmount + 6));
		e.target.complete();
	}

    const removeProductFromCart = async (index) => {

        removeFromCart(index);
    }

    return (

        <IonPage id="cart-page">
            <IonHeader>
				<IonToolbar>
                    <IonTitle>Checkout</IonTitle>
				</IonToolbar>
			</IonHeader>
			
			<IonContent fullscreen>

                    <IonRow className="ion-text-center ion-margin-top ion-margin-bottom">
                        <IonCol size="12">
                            <IonNote>{ cartProducts && cartProducts.length } { (cartProducts.length > 1 || cartProducts.length === 0) ? " coffees" : " coffee" } found</IonNote>
                        </IonCol>
                    </IonRow>

                    <IonList>
                        { cartProducts && cartProducts.map((coffee, index) => {

                            if ((index <= amountLoaded)) {
                                return (
                                <IonItemSliding className={ styles.cartSlider }>
                                    <IonItem key={ index } lines="none" detail={ false } className={ styles.cartItem }>

                                        <img alt="cart coffee" src={ coffee.image } />
                                        <IonLabel className="ion-padding-start ion-text-wrap">
                                            <h4>{ coffee.name }</h4>
                                        </IonLabel>

                                        <div className={ styles.cartActions }>
                                            <IonBadge color="dark">${ coffee.price }</IonBadge>
                                        </div>
                                    </IonItem>

                                    <IonItemOptions side="end">
                                        <IonItemOption color="main" style={{ paddingLeft: "1rem", paddingRight: "1rem" }} onClick={ () => removeProductFromCart(index) }>
                                            <Delete set="bold" />
                                        </IonItemOption>
                                    </IonItemOptions>
                                </IonItemSliding>
                                );
                            }
                        })}
                    </IonList>
            </IonContent>

            <IonFooter className={ styles.cartFooter }>
                <div className={ styles.cartCheckout }>
                    <IonCardSubtitle>${ total.toFixed(2) }</IonCardSubtitle>

                    <IonButton color="main">
                        <TickSquare set="bold" /> 
                        <span style={{ marginTop: "-0rem" }}>&nbsp;Checkout</span>
                    </IonButton>
                </div>
            </IonFooter>
        </IonPage>
    );
}

export default Cart;