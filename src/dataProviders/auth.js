import axios from 'axios';

export async function login(userData) {
    try {
        const res = await axios.get('https://parseapi.back4app.com/login', userData);

        /* ParseUser { _objCount: 0, className: '_User', id: 'M2Uln6C4vk' } */
        return res.data;
    }
    catch (e) {
        console.error('Error: ', e);
        return null;
    }
}
