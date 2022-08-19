const getState = ({ getStore, getActions, setStore}) => {
	return {
		store: {
				favorites: [],
				people: [],
				planets: [],
				starships: [],
				peopleDetails: [],
				planetsDetails: [],
				starshipsDetails: [],
		},


		actions: {
			// Use getActions to call a function within a fuction

			loadPeople: () =>{
				const store = getStore();

				fetch(`https://www.swapi.tech/api/people/`)
				.then(response => response.json())
				.then(data => setStore({people: data.results}))
				.then(()=> console.log(store, "from the loadpeople in flux"))
				.catch(err => console.error(err.message))
			},

			loadPlanets: () => {
				const store = getStore();

				fetch(`https://www.swapi.tech/api/planets/`)
				.then(response => response.json())
				.then(data => setStore({planets: data.results}))
				.then(()=> console.log(store))
				.catch(err => console.error(err.message))

			},
			
			loadStarships: () => {
			
			const store = getStore();

			fetch(`https://www.swapi.tech/api/starships/`)
			.then(response => response.json())
			.then(data => setStore({starships: data.results}))
			.then(()=> console.log(store))
			.catch(err => console.error(err.message))

			console.log(store, "starships");
			},

			// add to favourites
			addToFavorite: (obj) => {
				const store = getStore()
				
			 	setStore({favorites: [...store.favorites, obj]})
				
			},

			// remove from favorites
			removeFavorite: (e) => {
				const store = getStore();

				const newFavorites = store.favorites.filter((x)=>{
					return e.target.id !== x.id
				})

				setStore({favorites: newFavorites})
			},
		
			
		}
	};
};

export default getState;
