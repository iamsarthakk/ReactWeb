import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  RenderDish(dish) {
            return(
              <Card>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
            );
      }

       RenderComments(comments) {
           if (comments != null) {
               const cmnts = comments.map((commnts) => {
                   return (
                       <ul key={commnts.id} className="list-unstyled">
                           <li>
                               <p> {commnts.comment} </p>
                               <p> -- {commnts.author},
                                   &nbsp;
                                   {new Intl.DateTimeFormat('en-US', {
                                       year: 'numeric',
                                       month: 'short',
                                       day: '2-digit'
                                   }).format(new Date(Date.parse(commnts.date)))}
                               </p>
                           </li>
                       </ul>
                   );
               });

               return (
                   <div >
                       <h4> Comments </h4>
                       {cmnts}
                   </div>
               );
           // if comments is empty
           } else {
               return (
                   <div></div>
               );
           }
       }


       render() {
               if (this.props.dish != null) {
                   return (
                  <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                           {this.RenderDish(this.props.dish) }
                        </div>
                        <div className="col-12 col-md-5 m-1">
                           {this.RenderComments(this.props.dish.comments)}
                        </div>
                    </div>
                  </div>

                   );
               } else {
                   return (
                       <div></div>
                   );
               }
             }

}

export default DishDetail;
