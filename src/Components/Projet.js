import React from 'react';

import { Badge, Button, Progress, Card, CardImg, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Col } from 'reactstrap';

export default class ProjetsCard extends React.Component {
  render() {

    var stackBackList = this.props.projetsStackBack.map((stack, i) => {
      return <Badge style={{marginRight: 10}} color="secondary" key={i} >{stack}</Badge>
    });

    var stackFrontList = this.props.projetsStackFront.map((stack, i) => {
      return <Badge style={{marginRight: 10}} color="secondary" key={i} >{stack}</Badge>
    });

    return (
      <Col xs="6" sm="4">
        <div>
          <Card style={style.card}>
            <CardHeader style={{backgroundColor: "#ee5253", padding: "25%"}}>
              <CardImg top width="100%" src={this.props.projetsImg} alt="Card image cap" />
            </CardHeader>
            <CardBody>
              <CardTitle><strong>{this.props.projetsTitle}</strong></CardTitle>
              <CardText>{this.props.projetsDesc}</CardText>
              <CardSubtitle><strong>Stack Front</strong></CardSubtitle>
              <div>
                {stackFrontList}
              </div>
              <br />
              <CardSubtitle><strong>Stack Back</strong></CardSubtitle>
              <div>
                {stackBackList}
              </div>
              <br />
              <CardSubtitle><strong>{this.props.projetsDaysSpent}/5 days spent</strong></CardSubtitle>
              <Progress value={(this.props.projetsDaysSpent/5)*100} color="secondary" />
              <br />
              <Button outline color="secondary"><strong>+ Favorite</strong></Button>
            </CardBody>
          </Card>
        </div>
      </Col>
    );
  }
}

// Style des composants
var style = {
  card: {
    marginBottom: 15,
    // height: 700
  },
};
