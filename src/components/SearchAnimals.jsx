import React from 'react';

export const SearchAnimals = ({ search, setSearch }) => {
    const handleInputSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(search);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type={'text'}
                placeholder={'Buscar Animales'}
                value={search}
                onChange={handleInputSearch}
            />
        </form>
    );
};