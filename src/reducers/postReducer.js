import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            //console.log('reducer')
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}

//line 14 comes with items that have beem fetched and go to the post component to get the new item from the state
                // you get the new items in Posts component by mapStateToProps()