import style from './SearchBar.module.css';
import imageLogo from '../../image/logoNav.png';
import { useState } from 'react';

export default function SearchBar(props) {
   let [ id, setId ] = useState('');

   const handleEnter = (event) => {
      if (event.key === 'Enter') {
         props.onSearch(id);
         setId("")
      }
   }

   const handleChange = (evento) => {
      setId(evento.target.value)
   }

   return (
      <div className={style.containerSearch}>
         <img 
            src={imageLogo} 
            alt="logo rick and morty" 
            className={style.logo} 
         />
         
         <div className={style.containerInput}>
         <input 
            type='search' 
            placeholder="Search..." 
            className={style.input}
            onKeyUp={handleEnter}
            onChange={handleChange}
            value = {id}
         />
         <button 
            onClick={()=> props.onSearch(id)}
            className={style.btn}
         >
         </button>
         </div>
      </div>
   );
}
