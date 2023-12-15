import axios from 'axios';

export async function signup(username, email, password) {
    const apiUrl = 'https://parseapi.back4app.com/users';

    try {
        const response = await axios.post(
            apiUrl,
            {
                username,
                email,
                password,
            },
            {
                headers: {
                    'X-Parse-Application-Id': 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr',
                    'X-Parse-REST-API-Key': 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE',
                    'X-Parse-Revocable-Session': '1',
                    'Content-Type': 'application/json',
                },
            },
        );
        console.log('response: ', response);

        //         this.user = response.body; // objectId, createdAt and sessionToken

        //         this.currentSessionToken = response.body.sessionToken;

        return response;
    }
    catch (error) {
        console.error('Error while signing user up: ', error);

        // return error;
        return null;
    }
}

export async function login(username, password) {
    const encodedUsername = encodeURIComponent(username);
    const encodedPassword = encodeURIComponent(password);
    const apiUrl = `https://parseapi.back4app.com/login?username=${encodedUsername}&password=${encodedPassword}`;
    // Pass the username and password in URL parameters. It should be encoded JSON.

    try {
        const response = await axios.get(
            apiUrl,
            {
                headers: {
                    'X-Parse-Application-Id': 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr',
                    'X-Parse-REST-API-Key': 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE',
                    'X-Parse-Revocable-Session': '1',
                },
            },
        );
        console.log('response: ', response);

        console.log('response: ', response.data);
        // this.user = response.user;

        // this.user = response.body; // objectId, createdAt and sessionToken
        // this.currentSessionToken = response.body.sessionToken;
        // save the token in localStorage

        return response;
    }
    catch (e) {
        // display the error
        console.error('Error: ', e);

        //  return error;
        return null;
    }
}

export async function logout(currentSessionToken) {
    const apiUrl = 'https://parseapi.back4app.com/logout';

    try {
        const response = await axios.post(
            apiUrl,
            {},
            {
                headers: {
                    'X-Parse-Application-Id': 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr',
                    'X-Parse-REST-API-Key': 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE',
                    'X-Parse-Session-Token': currentSessionToken,
                },
            },
        );
        console.log('response: ', response);

        return response;
    }
    catch (error) {
        console.error('Error while logging user out: ', error);
        return null;
    }
}
