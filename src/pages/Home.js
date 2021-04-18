import { IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonSearchbar, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { searchSharp } from 'ionicons/icons';
import { Category, Filter } from "react-iconly";
import CoffeeCard from '../components/CoffeeCard';
import CoffeeCardOffer from '../components/CoffeeCardOffer';

import { CoffeeStore, CoffeeOfferStore } from "../store";
import { getCoffees, getOffers } from '../store/Selectors';
import './Home.css';

const Homepage = () => {

	const router = useIonRouter();
	const coffees = CoffeeStore.useState(getCoffees);
	const offers = CoffeeOfferStore.useState(getOffers);

	return (
		<IonPage>
			<IonHeader translucent>
				<IonToolbar>
					<IonButtons slot="start">
						<div className="button-container">
							<Category set="bold" className="gray-icon" />
						</div>
					</IonButtons>

					<IonTitle>Ionic Coffee</IonTitle>

					<IonButtons slot="end">
						<div className="button-container-img">
							<img src="https://pbs.twimg.com/profile_images/1383061489469292548/5dhsPd4j_400x400.jpg" alt="avatar" />
						</div>
					</IonButtons>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>

				<IonHeader collapse="condense">
					<IonToolbar className="inner-toolbar">
						<IonRow className="ion-no-padding ion-no-margin">
							<IonCol size="9" className="ion-no-padding ion-no-margin">
								<h1 className="main-heading">Find the best coffee near you</h1>
							</IonCol>
						</IonRow>
					</IonToolbar>
				</IonHeader>

				<IonGrid>
					<IonRow className="search-container">
						<IonCol size="12">
							<IonSearchbar onClick={ () => router.push("/coffees/true") } searchIcon={ searchSharp } placeholder="Try 'Caramel Latte'" />
						</IonCol>
					</IonRow>

					<IonRow className="outer-heading ion-justify-content-between ion-align-items-center">
						<h4 className="heading">Popular</h4>
						
						<IonRouterLink color="main" routerLink="/coffees">
							<Filter />
						</IonRouterLink>
					</IonRow>

					<IonRow>
						{ coffees.map(coffee => {

							if (coffee.id <= 2) {
								return <CoffeeCard key={ coffee.id } coffee={ coffee } />;
							}
						})}
					</IonRow>

					<IonRow className="outer-heading">
						<IonCol size="12">
							<h4 className="heading">Special Offers</h4>
						</IonCol>
					</IonRow>

					{ offers.map(offer => {

						return <CoffeeCardOffer key={ offer.id } offer={ offer } />;
					})}
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Homepage;