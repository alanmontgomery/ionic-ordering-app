import { Store } from 'pullstate';

const CoffeeOfferStore = new Store({

	offers: [
		{
			id: 1,
			title: "Buy one get one free!",
			description: "Any time you buy a coffee using your loyalty card scheme, you can get one free",
			image: "https://images.pexels.com/photos/861090/pexels-photo-861090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
		}
	]
});

export default CoffeeOfferStore;