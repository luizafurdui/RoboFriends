import React from 'react';
const SearchBox = ({searchChange}) =>{
    return (
        <div className='SearchBar'>
             <input type = 'search' paceholder='search robots'  onChange= {searchChange} />
            

        </div>
    );
   


}

export default SearchBox; 