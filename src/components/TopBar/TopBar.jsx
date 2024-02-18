import { useContext } from 'react';
import { Button } from '../Button/Button';
import styles from './TopBar.module.css';
import { IsLoggedInStateContext } from '../../context/IsLoggedInStateContext';

export function TopBar() {
	// pobieramy dane o zalogowaniu z kontekstu
	const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInStateContext);

	return (
		<div className={styles.wrapper}>
			<span className={styles.title}>Reactowe przepisy</span>
			{isLoggedIn ? (
				<>
					<span>Zalogowany</span>
					<Button onClick={() => setIsLoggedIn(false)}>Wyloguj</Button>
				</>
			) : (
				<Button onClick={() => setIsLoggedIn(true)}>Zaloguj</Button>
			)}
		</div>
	);
}
