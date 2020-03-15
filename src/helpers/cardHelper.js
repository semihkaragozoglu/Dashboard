import { cardService } from '../services';
import { cardActions } from '../actions';

export const cardHelper = { 
    getList
};

function getList(startIndex, count ) {
    return dispatch => {
        dispatch(cardActions.cardItemListRequest()); 
        cardService.getList() 
            .then(
                cards => {
                    dispatch(cardActions.cardItemListSuccess(cards.slice(startIndex,startIndex + count),startIndex + count));
                },
                error => {
                    dispatch(cardActions.cardItemListFailure(error)); 
                }
            );
    };
}
 

 