import React from 'react';
import { Link } from 'react-router-dom';
import ArticleThumb from '../article_thumb';
import { connect } from 'react-redux';
import { fetchCity } from '../../actions/city_actions';

class CityDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchCity(this.props.match.params.cityId);
    window.scrollTo(0,0);
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.match.params.articleId !== prevProps.match.params.articleId) {
      this.props.fetchCity(this.props.match.params.cityId);
    }
  }

  render(){
    const articleCount = this.props.articles.length;
    let thing = "things";
    if (articleCount === 1) {thing = "thing";}

    const articleThumbs = this.props.articles.map(article => {
      return <ArticleThumb key={article.id} article={article} image={this.props.images[article.image_ids.first]}/>;
    });

    return (
      <main>
        <Link to={`/countries/${this.props.country.id}`}>{this.props.country.name}</Link>

        <section className="city-show-header">
          <h1>Hidden {this.props.city.name}</h1>
          <p>Discover {articleCount} cool and unusual {thing} to do in {this.props.city.name}</p>
        </section>

        <section className="city-show-article-thumbs">
          {articleThumbs}
        </section>

        <section className="city-show-google-map">
          <h2>Explore {this.props.city.name}</h2>
          <div>Google Maps goes here
          </div>
        </section>

      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //TODO: comment back in countries when add in countries reducer
  const defaultCity = {id: 17, name: "Beijing", country_id: 3 };
  const defaultCountry = {id: 3, name: "China"};

  const cityId = ownProps.match.params.cityId;
  let city = defaultCity;
  if (state.entities.cities.length > 0) {
    city = state.entities.cities.cityId || defaultCity;
  }
  let country = defaultCountry;
  // if (state.entities.countries.length > 0) {
  //   country = state.entities.countries[city.country_id] || defaultCountry;
  // }

  let articles = [];
  if (city.article_ids) {
    articles = city.article_ids.map(article_id => {
      return state.entities.articles[article_id];
    });
  }

  let images = {};
  if (city.article_ids){
    city.article_ids.forEach(article_id => {
      let firstImage = state.entities.images[state.entities.articles.article_id.image_ids.first];
      images.firstImage.id = firstImage;
    });
  }

  return {
    city,
    country,
    articles,
    images
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCity: (id) => dispatch(fetchCity(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityDetail);


//send down country (id, name)
//send down city name
//send down article count
