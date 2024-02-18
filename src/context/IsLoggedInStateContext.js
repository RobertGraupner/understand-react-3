import { createContext } from 'react';

// Ustawiamy domyślną wartość kontekstu na null. Dzięki temu, jeśli zapomnimy o opakowaniu komponentu w Provider, to nie dostaniemy błędu w trakcie renderowania.
export const IsLoggedInStateContext = createContext(null);
