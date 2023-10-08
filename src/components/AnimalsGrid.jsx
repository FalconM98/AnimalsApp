import React from 'react';
import { arrayAnimals } from '../helpers/animalsObjet.js';
import { AnimalsCard } from './AnimalsCard.jsx';

export const AnimalsGrid = ({ searchTerm }) => {
    // Filtra las tarjetas de animales basadas en el término de búsqueda
    const animalsFilter = arrayAnimals.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={"card-grid"}>
            {animalsFilter.map((e) => (
                <AnimalsCard
                    key={e.id}
                    name={e.name}
                    image={e.image}
                    race={e.race}
                />
            ))}
        </div>
    );
};