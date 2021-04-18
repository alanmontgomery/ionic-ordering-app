import { Store } from 'pullstate';

const CoffeeSizeStore = new Store({

	sizes: [
		{
            id: 1,
            name: "Small"
        },
        {
            id: 2,
            name: "Medium",
        },
        {
            id: 3,
            name: "Large"
        }
	]
});

export default CoffeeSizeStore;