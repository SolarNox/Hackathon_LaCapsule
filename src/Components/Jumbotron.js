import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export default class Jumbo extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron style={styles.mainImage}>
          <h1 className="display-3"><strong>My Tech World</strong></h1>
          <p className="lead">10 weeks to change my life</p>
          <br className="my-2" />
          <p>8 Fullstack projects to learn how to code</p>
          <p className="lead">
            <Button color="secondary">Discover my projects</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

const styles = {
  mainImage: {
    backgroundImage: "url(./jumbotron.png)",
    height: "85vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};
