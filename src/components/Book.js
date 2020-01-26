import React from 'react';

class Book extends React.Component{
    handleClick = url =>{
        window.open(url, '_blank')
    }

    render(){

        const {book_image, author, title, description, buy_links} = this.props.data;

        

        return(
            <div className="book">
                <div className="left">
                    <img src={book_image} alt={book_image}></img>
                </div>
                <div className="right">
                    <h2>{title}</h2>
                    <h3>by:{author}</h3>
                    <p>{description}</p>
                    <button onClick={()=>this.handleClick(buy_links[3].url)}>Buy from local Book Store</button>

                </div>
            </div>
        )
    }
}

export default Book;