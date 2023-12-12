import axios from 'axios';

export async function login(userData) {
    const apiUrl = 'https://parseapi.back4app.com/login';

    try {
        const response = await axios.get(
            apiUrl,
            {
                username: userData.username,
                password: userData.password,
            },
            {
                headers: {
                    'X-Parse-Application-Id': 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr',
                    'X-Parse-REST-API-Key': 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE',
                    'X-Parse-Revocable-Session': '1',
                },
            },
        );
        console.log('response: ', response);
        // this.user = response.user;
        return response;
    }
    catch (e) {
        console.error('Error: ', e);
        return null;
    }
}

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
        return response;
    }
    catch (error) {
        console.error('Error while signing user up: ', error);
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
        // this.user = response.user; ??? null?
        return response;
    }
    catch (error) {
        console.error('Error while logging user out: ', error);
        return null;
    }
}
