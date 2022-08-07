import axios from "axios";

export const getRecords = async () => {

    try {
        const response = await axios({
            baseURL: 'https://the-one-api.dev/v2/character?limit=20',
            headers: {
                'Authorization': 'Bearer 7w7N9AsIfFT6En__mldx'
            }
        });

        const { docs } = response.data;
        const dataCharacter = docs.map((item) => ({
            id : item._id,
            name : item.name,
            race : item.race
        }));

        return dataCharacter

    } catch (error) {
        console.log(error);
    }

}
