import React from 'react';



class Category extends React.Component{
    render(){
        
        return(
                <div className="category">
                    <div className="header">
                        <div className="title"><h3 className="outline">{this.props.data.display_name}</h3></div>
                        <div className="image">
                            <img src={this.props.data.list_image} alt={this.props.data.display_name}></img>
                        </div>
                    </div>
                    <div className="books-container"></div>
                </div>
        )
        
    }
}

export default Category;