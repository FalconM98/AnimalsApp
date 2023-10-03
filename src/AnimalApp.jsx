import {SearchAnimals} from "./components/SearchAnimals.jsx";
import {AnimalsGrid} from "./components/AnimalsGrid.jsx";


export const AnimalApp = () => {
    return (
        <>
            <h1 id={'title'}>AnimalApp</h1>
            {/* Input para buscar */}
            <SearchAnimals/>
            {/* Mostrar las Cards */}
            <AnimalsGrid/>
        </>
    );
}