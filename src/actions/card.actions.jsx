import { cardConstants } from '../constants/card.constant';

export const cardActions = {
    cardChartDataRequest, 
    cardChartDataSuccess,
    cardChartDataFailure,

    cardItemListRequest,
    cardItemListSuccess,
    cardItemListFailure, 

    changeRefreshTime
};

function cardChartDataRequest() {
    return {
        type: cardConstants.GET_CHART_DATA_REQUEST
    };
}

function cardChartDataSuccess(card) {
    return {
        type: cardConstants.GET_CHART_DATA_SUCCESS,
        card
    };
}

function cardChartDataFailure(error) {
    return {
        type: cardConstants.GET_CHART_DATA_FAILURE,
        error
    };
}
function cardItemListRequest() {
    return {
        type: cardConstants.GET_ITEM_LIST_REQUEST
    };
}

function cardItemListSuccess(cards, currentIndex) {
    return {
        type: cardConstants.GET_ITEM_LIST_SUCCESS,
        cards,
        currentIndex,
    };
}

function cardItemListFailure(error) {
    return {
        type: cardConstants.GET_ITEM_LIST_FAILURE,
        error
    };
}


function changeRefreshTime(timeInMS) {
    return {
        type: cardConstants.CHANGE_REFRESH_TIME,
        timeInMS
    };
}
// function changeRefreshTimeRequest() {
//     return {
//         type: cardConstants.CHANGE_REFRESH_TIME_REQUEST
//     };
// }

// function changeRefreshTimeSuccess(timeInMS) {
//     return {
//         type: cardConstants.CHANGE_REFRESH_TIME_SUCCESS,
//         timeInMS
//     };
// }

// function changeRefreshTimeFailure(error) {
//     return {
//         type: cardConstants.CHANGE_REFRESH_TIME_FAILURE,
//         error
//     };
// }