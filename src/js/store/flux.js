const getState = ({ getStore, getActions, setStore}) => {
	return {
		store: {
			favorite: [
				{
					name: "Something",
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction

			addToFavorite: (name) => {
				const data = this.people.find(item => item.name === name);
				this.setState({
				  favorite: [...this.state.name, data]
				});
			  },

			deleteFavorite: (name) => {
				if (window.confirm("Are you sure you want to delete this favorite?")) {
					setFavorite(favorite.filter(item => item.name !== name ))
				}
			},
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ favorite: favorite });
				
			},
			
		}
	};
};

export default getState;
