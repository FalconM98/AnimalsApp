import {useState} from "react";

export const SearchAnimals = () => {
    //Se crea un hook para buscar los datos
    const [search, setSearch] = useState("");

    const handleInputSearch = (event) => {
        setSearch(event.target.value);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(search);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type={'text'}
                   placeholder={'Buscar Animales'}
                   value={search}
                   onChange={handleInputSearch}
            />
        </form>
    );
}