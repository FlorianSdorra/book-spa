import React from 'react';
import Book from './Book'



class Category extends React.Component{
    render(){
        const { display_name, list_image, books} = this.props.data;

        console.log(books)

        const bookItems = this.props.data.books.map(el=>{
            return <Book data={el} key={el.book_uri}></Book>
        })
        
        return(
                <div className="category">
                    <div className="header">
                        <div className="title"><h3 className="outline">{display_name}</h3></div>
                        <div className="image">
                            <img src={list_image} alt={display_name}></img>
                        </div>
                    </div>
                    <div className="books-container">{bookItems}</div>
                </div>
        )
        
    }
}

export default Category;