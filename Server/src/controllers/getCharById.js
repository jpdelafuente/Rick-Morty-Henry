const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios');

const getCharById = async(req, res)=> {
    try {
        const { id } = req.params;

        const { name, gender, image, status, origin, species } = (await axios(URL + id)).data
        const character = {
            id,
            name, 
            gender,
            image,
            status,
            origin,
            species
        }

        return character ? res.status(200).json(character)
        : res.status(404).send("Character not found")

    } 
    catch (error) {
        return res.status(500).json({error: error.message})
    }

}


module.exports = {
    getCharById
}