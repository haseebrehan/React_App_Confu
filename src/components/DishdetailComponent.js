import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component {

   renderDish(dish) {
    if (dish != null)
        return(
           <div className="row flex-row">
            <Card className="col-12 col-md-5 m-1">
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
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
                        <div>--{co.author}, {this.formatDate(co.date)} </div>
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
formatDate(date)
{
    const option = {year: 'numeric', month: 'short', day: 'numeric' };
    const date1 = new Date(date)
    const newdate = date1.toLocaleDateString("en-US", option)
    return newdate;

}


   render(){
       return(
                <div>
                    {this.renderDish(this.props.DISH)}
                </div>
       );

       }
    
}


export default DishDetail;