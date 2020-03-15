import { store } from '../helpers';

function handleResponse(response) {
    return new Promise((resolve, reject) => {
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                response.json().then(json => resolve(json));
            } else {
                resolve();
            }
        } else {
            response.text().then(text => reject("Hata olustu"));
            // return error message from response 
        }
    });
}

function handleError(error) {
    return Promise.reject(error && error.message);
}

export const fetchHelper = {
    handleResponse,
    handleError
};