import React from 'react';
import Book from './Book'


class Category extends React.Component{
    render(){
        const { books } = this.props.data;

        const booksList = books.map(el => (
          <Book data={el} key={el.book_uri}></Book>
        ));
        return(
                <div className="category">
                    <div className="header">
                        <div className="title"><h1 className="outline">{this.props.data.display_name}</h1></div>
                        <div className="image">
                            <img src={this.props.data.list_image} alt={this.props.data.display_name}></img>
                        </div>
                    </div>
                    <div className="books-container">{booksList}</div>
                </div>
        )
        
    }
}

export default Category;