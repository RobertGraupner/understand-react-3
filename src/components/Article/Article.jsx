import { Recipe } from '../Recipe/Recipe';
import { Button } from '../Button/Button';
import { useContext } from 'react';
import { IsLoggedInStateContext } from '../../context/IsLoggedInStateContext';

export function Article() {
	const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInStateContext);

	return (
		<article>
			<Recipe />
			{isLoggedIn ? (
				<Button onClick={() => alert('Przepis polubiony!')}>Lubię to!</Button>
			) : (
				<>
					<div style={{ marginBottom: '10px' }}>
						Zaloguj się, aby polubić przepis:{' '}
					</div>
					<Button onClick={() => setIsLoggedIn(true)}>Zaloguj</Button>
				</>
			)}
		</article>
	);
}
