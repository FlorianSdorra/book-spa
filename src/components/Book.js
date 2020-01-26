import React from 'react';

class Book extends React.Component{
    render(){

        const {book_image, author, title, description} = this.props.data;

        return(
            <div className="book">
                <div className="left">
                    <img src={book_image} alt={book_image}></img>
                    
                </div>
                <div className="right">
                    <h2>{title}</h2>
                    <h3>by:{author}</h3>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default Book;