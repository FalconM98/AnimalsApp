import {arrayAnimals} from "../helpers/animalsObjet.js";
import {AnimalsCard} from "./AnimalsCard.jsx";

export const AnimalsGrid = () => {
    return (
        <div className={"card-grid"}>
            {
                //Se manda a llamar el arreglo de objetos
                arrayAnimals.map((e) => (
                    <AnimalsCard
                        key={e.id}
                        name={e.name}
                        image={e.image}
                        race={e.race}
                    />
                ))
            }
        </div>
    );
}