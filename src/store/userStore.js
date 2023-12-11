import axios from 'axios';
import { defineStore } from 'pinia';

// const api = 'https://parseapi.back4app.com';

export const useUserStore = defineStore(
    'user',
    {
        state: () => ({
            isAuthenticated: false,
            user: null,
            currentSessionToken: null,
        }),
        actions: {
            async signUp(username, email, password) {
                try {
                    const response = await axios.post(
                        'https://parseapi.back4app.com/users',
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

                    console.log(response);

                    this.user = response.body; // objectId, createdAt and sessionToken

                    this.currentSessionToken = response.body.sessionToken;

                    // save the token in localStorage
                    // redirect to Hub page or Profile page
                }
                catch (error) {
                    // display the error
                    return error;
                }
            },
            async logIn(username, password) {
                try {
                    const encodedUsername = encodeURIComponent(username);
                    const encodedPassword = encodeURIComponent(password);

                    const response = await axios.get(
                        `https://parseapi.back4app.com/login?username=${encodedUsername}&password=${encodedPassword}`, // Pass the username and password in URL parameters. It should be encoded JSON.
                        {
                            headers: {
                                'X-Parse-Application-Id': 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr',
                                'X-Parse-REST-API-Key': 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE',
                                'X-Parse-Revocable-Session': '1',
                            },
                        },
                    );
                    console.log(response);
                    this.user = response.body; // objectId, createdAt and sessionToken
                    this.currentSessionToken = response.body.sessionToken;
                    // save the token in localStorage
                    // redirect to Hub page or Profile page
                }
                catch (error) {
                    // display the error
                    return error;
                }
            },
            setProfile(profileData) {
                this.profile = profileData;
                this.isAuthenticated = true;
            },
            async logOut() {
                try {
                    const response = await axios.post(
                        'https://parseapi.back4app.com/logout',
                        {},
                        {
                            headers: {
                                'X-Parse-Application-Id': 'Zm8xJaH8lMQOAsMPd5VTtDh53EBtPNFE62MdeHVr',
                                'X-Parse-REST-API-Key': 'O0LlHeH48pTytyyBz2NFEFGMwjKfSmukFbkjSVdE',
                                'X-Parse-Session-Token': this.currentSessionToken,
                            },
                        },
                    );
                    console.log(response);
                    this.user = null; // objectId, createdAt and sessionToken
                    this.currentSessionToken = null;
                    // clear the token from localStorage
                    // redirect to Home page
                }
                catch (error) {
                    // display the error
                    return error;
                }
            },
        },
    },
);
