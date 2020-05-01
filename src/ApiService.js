
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

export const url = 'https://35cead21-e647-4a26-88ac-a58af01452ad.mock.pstmn.io';

axios.defaults.host = url;
axios.defaults.adapter = httpAdapter;


export const instance = axios.create({
    baseURL: url,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json'
    },
});

export const loginUser = async (data, history, setLoading) => {
    await instance.post('/login', data).then(response => {
        setLoading(false);
        window.localStorage.setItem('name', response.data.name);
        return history.push('/compare');
    });
}

export const checkAuth = async (history) => {
    const check = await window.localStorage.getItem('name');
    if (!check) {
        return history.push('login');
    }
    return;
}

export const compareText = async (data, history, setLoading) => {
    await instance.post('/compare', data).then(response => {
        setLoading(false);
        return history.push('/history');
    });
}
export const getHistory = async (setLoading) => {
    await instance.get('/history').then(response => {
        setLoading(false);
        const data = JSON.parse(JSON.stringify(response.data));
        return data;
    });
} 