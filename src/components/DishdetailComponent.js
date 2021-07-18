import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component {

   renderDish(dish) {
    if (dish != null)
        return(
           <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <CardImg top src={dish.image} alt={dish.name}/>
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </div>
                <div className="col-12 col-md-5 m-1" >
                    <h4>Comments</h4>
                    {this.renderComments(dish.comments)}
                </div>
            </div>
            
        );
    else
        return(
            <div></div>
        );
}
renderComments(comments) {
    if (comments!=null)
    {
        const com = comments.map(co=>{

                return(
                    <div key={co.id}>
                    <Media tag="li">
                      <Media body>
                        <div>{co.comment}</div>
                        <br/>
                        <div>--{co.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(co.date)))} </div>
                        <br/>
                      </Media>
                    </Media>
                  </div>
            )

            }
            );
        return(
            <ul className="list-unstyled">
            {com}
            </ul>
        )
    }
    else{
        return(<div></div>)
    }
}


   render(){
    
       return(
                <div className='container'>
                    {this.renderDish(this.props.dish)}
                </div>
       );

       }
    
}


export default DishDetail;