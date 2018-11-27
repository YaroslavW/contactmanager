import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header'
import Contacts from './components/Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Contacts />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
