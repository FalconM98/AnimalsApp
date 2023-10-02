// eslint-disable-next-line react/prop-types
export const AnimalsCard = ({name, image, race}) => {
    return (
        //Se crea los datos que van a tener los objetos
        <div className={"card"}>
            <img src={image} alt={name} className={'animals-img'}/>
            <p>{name}</p>
            <p>{race}</p>
        </div>
    );
}