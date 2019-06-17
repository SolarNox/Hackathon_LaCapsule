import React from 'react';
import { Alert } from 'reactstrap';

export default class Attention extends React.Component {
  render() {
    return (
      <div>
        <Alert color="secondary" style={styles.alert}>
          Le projet a été supprimé de votre TOP 3!
        </Alert>
        <Alert color="success" style={styles.alert}>
          Le projet a été ajouté avec succès à votre TOP 3!
        </Alert>
        <Alert color="danger" style={styles.alert}>
          Impossible d'ajouter plus de 3 projets
        </Alert>
      </div>
    );
  }
}

const styles = {
  alert: {
    marginBottom: 0,
    fontWeight: 500,
    display: 'none'
  }
};
