import { IonButtons, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar, useIonRouter, useIonViewDidEnter } from '@ionic/react';
import { searchSharp } from 'ionicons/icons';
import { useRef, useState } from 'react';
import { Bag, CaretLeft } from "react-iconly";
import { useParams } from 'react-router';
import ViewCoffeeCard from '../components/ViewCoffeeCard';
import { CartStore, CoffeeStore } from '../store';
import { getCoffees, getCartCoffees } from '../store/Selectors';
import './Home.css';

const ViewCoffees = props => {

    const router = useIonRouter();
	const params = useParams();
	const coffees = CoffeeStore.useState(getCoffees);
    const cart = CartStore.useState(getCartCoffees);
    const [ results, setResults ] = useState(coffees);
    
    const cartRef = useRef();
    const searchRef = useRef();

    useIonViewDidEnter(() => {

        if (params.from_search) {
            
            setTimeout(() => {
                searchRef.current.setFocus();
            }, 500);
        }
    });

    const search = (e) => {

		const searchTerm = e.currentTarget.value;

		if (searchTerm !== "") {

			const searchTermLower = searchTerm.toLowerCase();

			const newResults = coffees.filter(e => e.name.toLowerCase().includes(searchTermLower));
			setResults(newResults);
		} else {

			setResults(coffees);
		}
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

					<IonTitle>Full Range</IonTitle>

					<IonButtons slot="end">
						<div ref={ cartRef } className="button-container animate__animated" onClick={ () => router.push("/tabs/cart") }>
							<Bag set="bold" className={ (cart && cart.length > 0) ? "yellow-icon" : "gray-icon" } />
						</div>
					</IonButtons>
				</IonToolbar>
			</IonHeader>

			<IonContent fullscreen>

				<IonHeader collapse="condense" className="custom-margin-left animate__animated animate__fadeIn">
					<IonToolbar className="inner-toolbar">
						<IonRow className="ion-no-padding ion-no-margin">
							<IonCol size="9" className="ion-no-padding ion-no-margin">
								<h1 className="main-heading">View Full Range</h1>
								<IonCardSubtitle>Our range of succulent coffee</IonCardSubtitle>
							</IonCol>
						</IonRow>
					</IonToolbar>
				</IonHeader>

				<IonGrid>
					<IonRow className="search-container animate__animated animate__fadeIn">
						<IonCol size="12">
							<IonSearchbar onKeyDown={ e => search(e) } id="searchbar" ref={ searchRef } searchIcon={ searchSharp } placeholder="Try 'Cappuccino'" />
						</IonCol>
					</IonRow>


                    { results.map(coffee => {

                        return <ViewCoffeeCard key={ coffee.id } coffee={ coffee } cartRef={ cartRef } />
                    })}
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default ViewCoffees;
