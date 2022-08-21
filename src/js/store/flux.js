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

			},

			// add to favourites
			addToFavorites: (obj, id) => {
				const store = getStore()
				const storedFavorites = store.favorites;
			 	setStore({
					favorites: [...store.favorites, obj]
				});
				console.log(storedFavorites, "current favorites");
				
			},

			// remove from favorites
			removeFavorite: (e, id) => {
				const store = getStore();

				const newFavorites = store.favorites.filter((obj)=>{
					return e.target.id !== obj.id
				})

				setStore({favorites: newFavorites})
			},
		
			
		}
	};
};

export default getState;
