import { IonBadge, IonButton, IonButtons, IonCard, IonCardSubtitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useEffect, useRef, useState } from 'react';
import { Bag, Heart, CaretLeft, InfoSquare } from "react-iconly";
import { useParams } from 'react-router';
import { CoffeeSizeStore, CoffeeStore, FavouriteStore } from '../store';
import { addToCart } from '../store/CartStore';
import { addToFavourites } from '../store/FavouriteStore';
import { getCoffee, getCoffeeSizes, getFavouriteCoffees } from '../store/Selectors';
import './Home.css';

import styles from "./ViewCoffee.module.css";

const ViewCoffee = props => {

    const router = useIonRouter();
	const params = useParams();
	const coffee = CoffeeStore.useState(getCoffee(params.id));
	const favourites = FavouriteStore.useState(getFavouriteCoffees);
	const coffeeSizes = CoffeeSizeStore.useState(getCoffeeSizes);
	const [ selectedSize, setSelectedSize ] = useState(false);
	
	const favouriteRef = useRef();
	const coffeeCartRef = useRef();
	const [ isFavourite, setIsFavourite ] = useState(false);

	const getPrice = () => coffee.prices.filter(p => parseInt(p.size_id) === parseInt(selectedSize))[0].price;

	 useEffect(() => {

        const coffeeID = params.id;
        const tempIsFavourite = favourites.find(f => parseInt(f) === parseInt(coffeeID));

        setIsFavourite(tempIsFavourite);
    }, [ params.id, favourites ]);

    const addCoffeeToFavourites = (e, coffeeID) => {

        e.preventDefault();
        addToFavourites(coffeeID);
		
		favouriteRef.current.classList.add("animate__tada");

		setTimeout(() => {
			favouriteRef.current.classList.remove("animate__tada");
		}, 700);
    }

	const addCoffeeToCart = (e, coffeeID) => {

        e.preventDefault();
        e.stopPropagation();

        coffeeCartRef.current.style.display = "";
        coffeeCartRef.current.classList.add("animate__fadeOutUp");

        setTimeout(() => {

            addToCart(coffeeID);

            setTimeout(() => {
                
                coffeeCartRef.current.style.display = "none";
            }, 500);
        }, 500);
    }

	return (
		<IonPage>
			<IonHeader translucent>
				<IonToolbar>
					<IonButtons slot="start">
						<div className="button-container" onClick={ () => router.goBack() }>
							<CaretLeft set="bold" className="gray-icon" />
						</div>
					</IonButtons>

					<IonTitle>{ coffee.name }</IonTitle>

					<IonButtons slot="end">
						<div ref={ favouriteRef } className="button-container animate__animated" onClick={ e => addCoffeeToFavourites(e, coffee.id) }>
							<Heart set="bold" className={ isFavourite ? "yellow-icon" : "gray-icon" } />
						</div>
					</IonButtons>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>

				<IonHeader collapse="condense" className="custom-margin-left animate__animated animate__fadeIn">
					<IonToolbar className="inner-toolbar">
						<IonRow className="ion-no-padding ion-no-margin">
							<IonCol size="9" className="ion-no-padding ion-no-margin">
								<h1 className="main-heading">{ coffee.name }</h1>
								<IonCardSubtitle>{ coffee.summary }</IonCardSubtitle>
							</IonCol>
						</IonRow>
					</IonToolbar>
				</IonHeader>

				<IonGrid className="animate__animated animate__fadeIn">
					<IonRow className="search-container">
						<IonCol size="6">

							<IonCard className="coffee-card">
								<img src={ coffee.image } alt="coffee type" />
							</IonCard>
						</IonCol>

						<IonCol size="6" className="ion-margin-top ion-padding-top ion-padding-end">
								<IonCardSubtitle>Description</IonCardSubtitle>
								<p>{ coffee.description }</p>
								<InfoSquare set="bold" className="app-icon" />
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol size="12" className="ion-padding">
							<IonCardSubtitle className="custom-margin-left">Extras included</IonCardSubtitle>

							<IonRow>
								<IonCol size="4">
									{ coffee.extras.map((extra, index) => {

										return (

											<IonBadge key={ `extra_${ index }` } className={ styles.extra } expand="block" color="custom-light">
												{ extra }
											</IonBadge>
										);
									})}
								</IonCol>
							</IonRow>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol size="12" className="ion-padding">
							<IonCardSubtitle className="custom-margin-left">Pick your size</IonCardSubtitle>

							<IonRow>
								{ coffeeSizes.map(size => {

									return (
										<IonCol key={ size.id } size="4">
											<IonButton onClick={ () => setSelectedSize(size.id) } expand="block" color={ size.id === selectedSize ? "main" : "custom-light" } fill={ size.id === selectedSize ? "outline" : "solid" }>
												{ size.name }
											</IonButton>
										</IonCol>
									);
								})}
							</IonRow>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>

			<IonFooter className={ styles.checkout }>
				<div className={ styles.checkoutDetails }>
					<div className={ styles.priceDetails }>
						<IonCardSubtitle>Price</IonCardSubtitle>
						<h4>${ selectedSize ? getPrice() : "0.00" }</h4>
					</div>
					<IonButton onClick={ e => addCoffeeToCart(e, coffee.id) } disabled={ !selectedSize } expand="block" color="main">Add to cart</IonButton>
					
					<div ref={ coffeeCartRef } style={{ position: "absolute", display: "none", fontSize: "3rem" }} className="animate__animated">
						<Bag  set="bold" className="yellow-icon" />
					</div>
				</div>
			</IonFooter>
		</IonPage>
	);
};

export default ViewCoffee;
