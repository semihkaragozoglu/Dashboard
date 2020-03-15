import { cardConstants } from '../constants/card.constant';
  
export default function cardReducer(state = {currentIndex: 0, loading: false, cards: [], refreshTimeInMS: 10000}, action) {
    switch (action.type) {
        case cardConstants.GET_CHART_DATA_REQUEST:
            return {
                ...state,
                loading: true
            };

        case cardConstants.GET_CHART_DATA_SUCCESS:
            debugger;
            return {
                ...state,
                loading: false,
                
            };

        case cardConstants.GET_CHART_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        case cardConstants.GET_ITEM_LIST_REQUEST:
            return {
                ...state,
                loading: true
            };

        case cardConstants.GET_ITEM_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                cards: [...state.cards, ...action.cards],
                currentIndex: action.currentIndex
            };

        case cardConstants.CHANGE_REFRESH_TIME:
        return {
                ...state,
                refreshTimeInMS: action.timeInMS
            }; 
        case cardConstants.GET_ITEM_LIST_FAILURE:
            return {
                ...state,
                loading: false
            };
 
        default:
            return state;
    }
}