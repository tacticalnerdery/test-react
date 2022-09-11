import { React , useState } from 'react';
import './App.css';
import Refresh from './Refresh.js';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  //serviceWorkerRegistration.register();
  serviceWorkerRegistration.register({
    onUpdate: registration => {
      console.log("update!")
      setShowAlert(true);
    }
  });

  return (
    <>
    <Container fluid>
      <div className="border d-flex align-items-center justify-content-center vh-100">
      <Card style={{ width: '18rem' }}>
        <Card.Header>
          TEST
        </Card.Header>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </Container>
    <Refresh showAlert={showAlert} />
    </>
  );
}

export default App;
