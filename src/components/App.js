import React from 'react';
import '../scss/App.scss';
import Category from './Category';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          categories: [],
        };
      }

    async componentDidMount(){
        let api_key = "9ThZ2oFtbvO9pja26eA8Ze7TZ9QYYWcE";
        let today = new Date().toISOString().split('T')[0];
        let url = `https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${today}&api-key=${api_key}`;

        const response = await fetch(url);
        const data = await response.json();
        this.setState({ categories: data.results.lists});
        
        
        
    }
    

    render(){
        
        const categoryItems = this.state.categories.map(el=>{
            return <Category data={el} key={el.list_id}></Category>
        })


        return (
            <div className="app">
                {categoryItems}
            </div>
        )
    }
}

export default App