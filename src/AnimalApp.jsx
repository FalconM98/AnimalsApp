import {AnimalsCard} from "./components/AnimalsCard.jsx";
import {AnimalsGrid} from "./components/AnimalsGrid.jsx";

export const AnimalApp = () => {
    return (
        <>
            <h1 id={'title'}>AnimalApp</h1>

            {/* Mostrar las Cards */}
            <AnimalsGrid/>
        </>
    );
}