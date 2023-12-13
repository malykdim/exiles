import axios from 'axios';

const BASE_URL = 'https://parseapi.back4app.com';
const API_ENDPOINT = 'classes/Guides';

export async function getAllGuides() {
    const url = `${BASE_URL}/${API_ENDPOINT}`;

    try {
        const response = await axios.get(
            url,
            {
                headers: {
                    'X-Parse-Application-Id': 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr',
                    'X-Parse-REST-API-Key': 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE',
                },
            },
        );
        console.log(response.data.results);

        return response.data.results;
    }
    catch (error) {
        console.error(error.message);
        return {
            guides: [],
        };
    }

    /*
                                                Request
                                                    URL: https://parseapi.back4app.com/classes/Guides
                                                    Method: GET
                                                    Headers:
                                                    X-Parse-Application-Id: Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr
                                                    X-Parse-REST-API-Key: O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE
                                                    Parameters: A where URL parameter constraining the value for keys. It should be encoded JSON.
  
                                                Success Response
                                                    Status: 200 OK
                                                    Headers: content-type: application/json;
                                                    Body: a JSON object that contains a results field with a JSON array that lists the objects:
  
                                            {
                                                "results": [
                                                    {
                                                        "objectId": "WwmLrWYc1u",
                                                        "createdAt": "2023-12-10T11:56:05.895Z",
                                                        "updatedAt": "2023-12-10T15:50:33.307Z",
                                                        "title": "World Bosses",
                                                        "summary": "Locations and fighting mechanics",
                                                        "thumbnail": "https://steamuserimages-a.akamaihd.net/ugc/942831990284595022/1EA4186A9E41049CFCD62EDB5BBC624CA0A484E8/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
                                                        "author": "Veniamine",
                                                        "year": "2020",
                                                        "type": "article",
                                                        "map": "The Exiled Lands",
                                                        "category": "encounters",
                                                        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                                        "terms": true
                                                    },
                                                ]
                                            }
                                        */
};

export async function getSingleGuide(id) {
    const url = `${BASE_URL}/${API_ENDPOINT}/${id}`;
    try {
        const response = await axios.get(
            url,
            {
                headers: {
                    'X-Parse-Application-Id': 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr',
                    'X-Parse-REST-API-Key': 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE',
                },
            },
        );

        console.log(response.data); // ok
        return response.data;
    }
    catch (error) {
        console.error(error.message);
        return null;
    }
}
