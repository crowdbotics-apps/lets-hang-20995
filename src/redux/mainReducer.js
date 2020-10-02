import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard11123006Reducer from '../features/Dashboard11123006/redux/reducers'
import CalendarView10122997Reducer from '../features/CalendarView10122997/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard11123006: Dashboard11123006Reducer,
CalendarView10122997: CalendarView10122997Reducer,

});