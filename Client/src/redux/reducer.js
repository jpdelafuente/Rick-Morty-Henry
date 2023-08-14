import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types"

const initialState = {
    myFavorites: [],
    allCharacter: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            case 'ADD_FAV':
                 return { 
                    ...state, 
                    myFavorites: action.payload, 
                    allCharacter: action.payload 
                };
        case FILTER:
            let characterFilter =  state.allCharacter.filter((character) => character.gender === action.payload)

            return {
                ...state,
                myFavorites: characterFilter,
            }
        case ORDER:
            const orderCharacter = state.allCharacter.sort((a, b)=> {
                if(action.payload === "A") {
                    if(a.id < b.id ) return -1;
                    if(b.id < a.id) return 1
                    return 0
                }
                // DESCENDENTE
                else {
                    if(a.id < b.id) return 1
                    if(b.id < a.id) return - 1
                    return 0
                }
            
            })
          return {
            ...state,
            myFavorites: [...orderCharacter]
          }

        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: action.payload 
            }

        default:
            return {
                ...state
            }
    }

}

export default reducer