import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-2ad7d-default-rtdb.firebaseio.com/'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance;