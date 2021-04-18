import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonNote, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { Bag } from "react-iconly";
import { useEffect, useRef, useState } from "react";
import ViewCoffeeCard from "../components/ViewCoffeeCard";
import { CartStore, CoffeeStore, FavouriteStore } from "../store";
import { getCartCoffees, getCoffees, getFavouriteCoffees } from "../store/Selectors";
import './Home.css';

const Favourites = () => {

    const cartRef = useRef();
    const router = useIonRouter();

    const coffees = CoffeeStore.useState(getCoffees);
    const favourites = FavouriteStore.useState(getFavouriteCoffees);
    const cart = CartStore.useState(getCartCoffees);

    const [ searchResults, setSearchResults ] = useState([]);
    const [ amountLoaded, setAmountLoaded ] = useState(6);

    useEffect(() => {

        const getFavourites = () => {

            setSearchResults([]);

            favourites.forEach(favourite => {

                var coffeeID = favourite;
                const tempCoffee = coffees.filter(c => parseInt(c.id) === parseInt(coffeeID))[0];
                setSearchResults(prevSearchResults => [ ...prevSearchResults, tempCoffee ]);
            });
        }

        getFavourites();
    }, [ favourites ]);

    const fetchMore = async (e) => {

		//	Increment the amount loaded by 6 for the next iteration
		setAmountLoaded(prevAmount => (prevAmount + 6));
		e.target.complete();
	}

    return (

        <IonPage id="favourites-page">
            <IonHeader translucent>
				<IonToolbar>
					<IonTitle>Favourites</IonTitle>

					<IonButtons slot="end">
						<div ref={ cartRef } className="button-container animate__animated" onClick={ () => router.goBack() }>
							<Bag set="bold" className={ (cart && cart.length > 0) ? "yellow-icon" : "gray-icon" } />
						</div>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			
			<IonContent fullscreen>
                <IonGrid>

                    <IonRow className="ion-text-center">
                        <IonCol size="12">
                            <IonNote>{ searchResults && searchResults.length } { (searchResults.length > 1 || searchResults.length === 0) ? " favourites" : " favourite" } found</IonNote>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        { searchResults && searchResults.map((coffee, index) => {

                            if ((index <= amountLoaded)) {
                                return (
                                    <ViewCoffeeCard key={ `favourite_coffee_${ index }`} coffee={ coffee } cartRef={ cartRef } />
                                );
                            }
                        })}
                    </IonRow>
                </IonGrid>

                <IonInfiniteScroll threshold="100px" onIonInfinite={ fetchMore }>
					<IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Fetching more...">
					</IonInfiniteScrollContent>
				</IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
}

export default Favourites;