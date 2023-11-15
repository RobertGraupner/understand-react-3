import styles from './Recipe.module.css';
import { useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext';

export function Recipe() {
	const { name, ingredients, description, img, country, time } =
		useContext(RecipeContext);

	return (
		<>
			<h2>{name}</h2>
			<h3>Kraj pochodzenia: {country}</h3>
			<img src={img} alt='' className={styles.img} />
			<span>Składniki:</span>
			<ul className={styles.list}>
				{ingredients.map((ingredient) => (
					<li key={ingredient}>{ingredient}</li>
				))}
			</ul>
			<p className={styles.description}>{description}</p>
		</>
	);
}
