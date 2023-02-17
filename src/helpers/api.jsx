import Cookies from 'js-cookie';

const BASE = 'https://api.b7web.com.br/devsfood/api';

const apiFetchGet = async (endpoint, body = []) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }

    const res = await fetch(BASE + endpoint);
    const json = await res.json();
    return json;
}

export default {
    getCategories: async () => {
        const json = await apiFetchGet('/categories');
        return json;
    },

    getProducts: async (category, page, search) => {
        let fields = {};
        if (category !== 0) {
            fields.category = category;
        }
        if (page > 0) {
            fields.page = page;
        }
        if (search != '') {
            fields.search = search;
        }

        let queryString = new URLSearchParams(fields).toString();
        const json = await apiFetchGet('/products?' + queryString);
        return json;
    }
}