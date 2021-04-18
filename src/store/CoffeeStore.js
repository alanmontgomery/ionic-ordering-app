import { Store } from 'pullstate';

const CoffeeStore = new Store({

	coffees: [
		{
			id: 1,
			name: "Cappuccino",
			summary: "With Milk",
			extras: [ "milk" ],
			description: "This is a beautiful cup of cappuccino, complimented with semi-skimmed milk. Comes in three different sizes.",
			price: "3.20",
			prices: [
				{
					size_id: 1,
					price: "3.20"
				},
				{
					size_id: 2,
					price: "3.90"
				},
				{
					size_id: 3,
					price: "4.20"
				}
			],
			image: "https://images.pexels.com/photos/1170659/pexels-photo-1170659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
		},
		{
			id: 2,
			name: "Lattè",
			summary: "With Caramel",
			extras: [ "caramel" ],
			description: "This is a beautiful cup of lattè, complimented with sweet caramel. Comes in three different sizes.",
			price: "5.10",
			prices: [
				{
					size_id: 1,
					price: "4.35"
				},
				{
					size_id: 2,
					price: "4.85"
				},
				{
					size_id: 3,
					price: "5.10"
				}
			],
			image: "https://images.pexels.com/photos/2067399/pexels-photo-2067399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
		},
		{
			id: 3,
			name: "Espresso",
			summary: "With 2 shots",
			extras: [ "2 shots" ],
			description: "This is a beautiful cup of espresso, complimented with 2 shots. Comes in three different sizes.",
			price: "6.20",
			prices: [
				{
					size_id: 1,
					price: "6.20"
				},
				{
					size_id: 2,
					price: "6.80"
				},
				{
					size_id: 3,
					price: "7.10"
				}
			],
			image: "https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
		},
		{
			id: 4,
			name: "Americano",
			summary: "With Milk",
			extras: [ "Milk" ],
			description: "This is a beautiful cup of Americano, complimented with full fat milk. Comes in three different sizes.",
			price: "5.35",
			prices: [
				{
					size_id: 1,
					price: "5.35"
				},
				{
					size_id: 2,
					price: "5.70"
				},
				{
					size_id: 3,
					price: "6.50"
				}
			],
			image: "https://images.pexels.com/photos/6207297/pexels-photo-6207297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
		}
	]
});

export default CoffeeStore;