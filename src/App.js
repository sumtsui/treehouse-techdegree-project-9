import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Gallery from './components/Gallery/';
import NotFound from './components/NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true,
      value: ''
    }
  }

  getData = (apiKey ,tag) => {
    this.setState({
      photos: [],
      loading: true
    });
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1&extras=url_m%2c+url_c`)
      .then()
      .then(res => res.json())
      .then(data => this.setState({
        photos: data.photos.photo,
        loading: false
      }))
      .catch(e => console.log(e));
  }

  onInput = e => {
    this.setState({ value: e.target.value });
  }

  onSearch = (e, location, history) => {
    e.preventDefault();
    location.pathname = '/';
    let path = `search/${this.state.value}/`;
    history.push(path);
  }

  render() {
    const extraProps = {
      getData: this.getData,
      photos: this.state.photos,
      loading: this.state.loading,
      onInput: this.onInput,
      onSearch: this.onSearch
    };
    return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/tag/hulk' />} />
          <Route exact path="/search" render={(props) => <Gallery 
            {...props}
            {...extraProps}
          />} />
          <Route exact path="/tag/:tag" render={(props) => <Gallery 
            {...props}
            {...extraProps}
          />} />
          <Route exact path="/search/:tag" render={(props) => <Gallery 
            {...props}
            {...extraProps}
          />} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;
