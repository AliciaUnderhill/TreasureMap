import lastCreatedArticleReducer from "./last_created_article_reducer";
import countryDetailLoadedReducer from "./ui/country_detail_loaded_reducer";
import currentCountryDetailReducer from "./ui/current_country_detail_reducer";
import topCountryReducer from "./ui/top_country_reducer";
import topCityReducer from "./ui/top_city_reducer";
import randomArticlesReducer from "./ui/random_article_reducer";
import searchItemsReducer from "./ui/search/search_items_reducer";
import searchBarStatusReducer from "./ui/search/search_bar_status_reducer";

import { combineReducers } from "redux";

export default combineReducers({
  topCountryIds: topCountryReducer,
  topCityIds: topCityReducer,
  countryDetailLoaded: countryDetailLoadedReducer,
  currentCountryDetailId: currentCountryDetailReducer,
  featuredArticleIds: randomArticlesReducer,
  searchItems: searchItemsReducer,
  searchBarOpen: searchBarStatusReducer
});
