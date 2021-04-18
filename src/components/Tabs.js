import React from "react";
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";

import { Home, Bag, Heart2, Notification } from "react-iconly";
import Homepage from '../pages/Home';
import Favourites from '../pages/Favourites';
import Cart from "../pages/Cart";

const Tabs = (props) => {

	return (
		<IonTabs>
			<IonRouterOutlet>
                <Route exact path="/tabs/home" render={ (props) => <Homepage { ...props } /> } />
                <Route exact path="/tabs/cart" render={ (props) => <Cart { ...props } /> } />
                <Route exact path="/tabs/favourites" render={ (props) => <Favourites { ...props } /> } />
			</IonRouterOutlet>

			<IonTabBar slot="bottom">
                
                <IonTabButton tab="tab1" href="/tabs/home">
                    <Home set="bold" />
                </IonTabButton>
                
                <IonTabButton tab="tab2" href="/tabs/cart">
                    <Bag set="bold" />
                </IonTabButton>
                
                <IonTabButton tab="tab3" href="/tabs/favourites">
                    <Heart2 set="bold" />
                </IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
}

export default Tabs;