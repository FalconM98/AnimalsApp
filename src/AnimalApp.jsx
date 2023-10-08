import { SearchAnimals } from "./components/SearchAnimals.jsx";
import { AnimalsGrid } from "./components/AnimalsGrid.jsx";
import { useState } from "react";


export const AnimalApp = () => {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <h1 id={'title'}>Animal App</h1>
            <SearchAnimals search={searchTerm} setSearch={setSearchTerm} />
            <AnimalsGrid searchTerm={searchTerm} />
        </div>
    );
}