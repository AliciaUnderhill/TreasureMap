import {
  RECEIVE_CITIES,
  RECEIVE_CITY,
  RECEIVE_TOP_CITIES
} from "../../actions/city_actions";
import {
  RECEIVE_ARTICLE,
  RECEIVE_RANDOM_ARTICLES
} from "../../actions/article_actions";
import { RECEIVE_COUNTRY } from "../../actions/country_actions";
import { merge } from "lodash";

const citiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CITIES:
    case RECEIVE_TOP_CITIES:
      let newState = merge({}, state, action.citiesPayload);
      return newState;

    case RECEIVE_CITY:
      newState = merge({}, state, {
        [action.cityPayload.city.id]: action.cityPayload.city
      });
      return newState;

    case RECEIVE_ARTICLE:
      newState = merge({}, state, {
        [action.articlePayload.city.id]: action.articlePayload.city
      });
      return newState;

    case RECEIVE_RANDOM_ARTICLES:
      newState = merge({}, state, action.articlesPayload.cities);
      return newState;

    case RECEIVE_COUNTRY:
      newState = merge({}, state, action.countryPayload.cities);
      return newState;

    default:
      return state;
  }
};

export default citiesReducer;
