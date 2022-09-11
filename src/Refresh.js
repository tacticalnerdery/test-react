import React from 'react';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const handleClick = () => alert("TEST");

function Refresh(props) {
    if (props.showAlert) {
    return (
      <div className="fixed-bottom">
      <Alert variant="primary">
      This is is a "primary" alert—check it out!
      <Button onClick={handleClick}>CLICK ME</Button>
      </Alert>
      </div>
    );
    }
}

export default Refresh;
