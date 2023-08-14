import { connect } from "react-redux";
import Card from "../Card/Card";
import {  filterCards, orderCards } from '../../redux/actions'
import { useDispatch } from "react-redux";
import { useState } from "react";
import style from './Favorites.module.css'

const Favorites = ({ myFavorites })=> {
    const [aux, setAux ] = useState(false)
    const dispatch = useDispatch()

    const handleOrder = (e)=> {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter =(e)=> {
        dispatch(filterCards(e.target.value))
    }


    return (
        <>
            <h1 className={style.title}> My Favorites</h1>
            <div className={style.filter}>
                <select onChange={handleOrder} className={style.select}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
            
                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
           
        <div className={style.card}>
            {
                myFavorites?.map((character) => {
                    return (
                            <Card 
                                key={character.id}
                                id= {character.id}
                                name={character.name}
                                species={character.species}
                                gender={character.gender}
                                origin = {character.origin}
                                status ={character.status}
                                image={character.image}     
                            /> 
                    )
                })
            }   
        </div>
        </>
        )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps, 
    null)
    (Favorites);