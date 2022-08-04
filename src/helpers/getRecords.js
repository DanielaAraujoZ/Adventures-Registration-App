import axios from "axios";

export const getRecords = async () => {
    try {
        const response = await axios({
            baseURL: 'https://the-one-api.dev/v2/chapter?limit=2',
            headers: {
                'Authorization': 'Bearer 7w7N9AsIfFT6En__mldx'
            }

            //Capitulo - Libro
        })
        const { docs } = response.data;
        console.log(docs);
        return docs;
    } catch (error) {
        console.log(error);
    }
}
