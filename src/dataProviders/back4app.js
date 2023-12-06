import axios from 'axios';

const BASE_URL = 'https://parseapi.back4app.com';
// const PARSE_APP_ID = 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr';
// const PARSE_JS_KEY = 'lcLnTPRGhnzAtGSoMoo3j4IqbpXk46HRgGXVuyr7';
// const MY_REST_API_Key = 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE';
const API_ENDPOINT = 'classes/Categories';

export async function getAllCategories() {
    const url = `${BASE_URL}/${API_ENDPOINT}`;

    try {
        const response = await axios.get(url);
        console.log(response);

        return response.data;
        // return response.data.filter(...);
        // return response.data.map(...);
    }
    catch (error) {
        console.error(error);
        return [];
    }
}

// export function getSingleCategory() {
//     const url = `${BASE_URL}/${API_ENDPOINT}/id`;
// }
