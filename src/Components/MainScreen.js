import React from 'react';

import NavyNav from './Navbar';
import ProjetsCard from './Projet';
import Footer from './Footer';
import Jumbo from './Jumbotron';
import Attention from './Alert';

import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';

// import {connect} from 'react-redux';

export default class MainScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projets: [],
    };
  }

  componentWillMount(){

    var ctx = this;

    fetch('http://localhost:3000')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      ctx.setState({projets: data.projets});
      console.log("Projets reçu par l'API de la route '/' en GET" ,data.projets);
    })
    .catch(function(error) {
      console.log('Request failed', error)
    });
  }


  render() {

    var projetsList = this.state.projets.map((projet, i) => {

      return <ProjetsCard
                projetsImg={projet.pic_url}
                projetsTitle={projet.name}
                projetsId={projet.idproject}
                projetsDesc={projet.desc}
                projetsDaysSpent={projet.days_spent}
                projetsStackBack={projet.stack_back}
                projetsStackFront={projet.stack_front}
                key={i}
              />;
    });

    return (
      <div style={styles.container}>
        <NavyNav />
        <Attention />
        <Jumbo />
        <br />
        <div>
          <Container>
            <Row>
              {projetsList}
            </Row>
          </Container>
        </div>
        <br />
        <Footer />
      </div>
    )
  }

  // componentDidMount(){
  //   AsyncStorage.getItem('user', (err, data)=>{
  //     var userJSON = JSON.parse(data);
  //     console.log(userJSON);
  //     this.props.signin(userJSON);
  //   })
  // }

  // _handlePressAsync = async () => {
  //    var redirectUrl = AuthSession.getRedirectUrl();
  //    console.log(redirectUrl);
  //
  //    var result = await AuthSession.startAsync({
  //      authUrl:
  //        'https://immense-cliffs-33805.herokuapp.com/auth/facebook?redirectUrl='+redirectUrl
  //    });
  //
  //
  //    var userString = JSON.stringify(result.params);
  //    AsyncStorage.setItem('user', userString);
  //   this.props.signin(result.params);
  //   if(result.type == "success"){
  //
  //      this.props.navigation.navigate('PageA');
  //   }
  // }

}


const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};


// function mapDispatchToProps(dispatch) {
//   return {
//     signin: function(user) {
//         dispatch( {type: 'signin', user} );
//     }
//   }
// }
//
// function mapStateToProps(state) {
//   return { user: state.user }
// }
//
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(MainScreen);
