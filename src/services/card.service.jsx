import { fetchHelper, authHeader } from '../helpers';

export const cardService = {
     getList,
     getChartData
};

function getList() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: "same-origin"
    }; 
    return fetch('/data/cards.json' , requestOptions).then(fetchHelper.handleResponse, fetchHelper.handleError);
}

function getChartData(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        credentials: "same-origin"
    }; 
    return fetch('/data/chartDetail.json' , requestOptions).then(fetchHelper.handleResponse, fetchHelper.handleError);
}