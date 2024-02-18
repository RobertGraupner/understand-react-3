import { useState } from 'react';
import styles from './App.module.css';
import { recipes } from './data/recipes';
import { List } from './components/List/List';
import { Cookbook } from './components/Cookbook/Cookbook';
import { TopBar } from './components/TopBar/TopBar';
import { Recipe } from './components/Recipe/Recipe';
import { RecipeContext } from './context/RecipeContext';
import { IsLoggedInStateContext } from './context/IsLoggedInStateContext';

function App() {
	const [selectedRecipeId, setSelectedRecipeId] = useState(1);
	const [isLoggedIn, setIsLoggedIn] = useState(true);

	const selectedRecipe = recipes.find(
		(recipe) => recipe.id === selectedRecipeId
	);

	// Do kontekstu przekazujemy tablicę, w której pierwszym elementem jest wartość, a drugim setter tej wartości. Dzięki temu, że przekazujemy tablicę, możemy użyć destrukturyzacji w komponentach, które korzystają z kontekstu.
	return (
		<>
			<IsLoggedInStateContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
				<TopBar />
				<div className={styles.container}>
					<RecipeContext.Provider value={selectedRecipe}>
						<List
							recipes={recipes}
							onSelectRecipe={(id) => setSelectedRecipeId(id)}
						/>
						<Cookbook />
					</RecipeContext.Provider>
				</div>

				<div className={styles.promoted}>
					<h2>Przepis tygodnia</h2>

					{/* context ustawiony na stałe na przepis o id 4 */}
					<RecipeContext.Provider value={recipes[3]}>
						<Recipe />
					</RecipeContext.Provider>
				</div>
			</IsLoggedInStateContext.Provider>
		</>
	);
}

export default App;
