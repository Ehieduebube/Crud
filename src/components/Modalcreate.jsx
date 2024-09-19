import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Modalcreate = ({ show, title, body }) => {
    let navigate = useNavigate();
    const navigateToCampaign = () => {
        navigate('/Campaign');
      };

    
  return (
    <Modal show={show} style={{paddingTop:'200px'}}>
      <Modal.Header style={{display:'block'}}>
        <Modal.Title >{title}</Modal.Title>
      
      <Modal.Body style={{paddingLeft:'110px'}}>{body}</Modal.Body>
      
        <div style={{padding:'30px 10px 70px 110px'}}>
        <Button  onClick={navigateToCampaign} style={{backgroundColor:'#247B7B', padding:'12px 30px 16px 30px', width:'240px'}}>
          Go back to campaign list
        </Button>
        </div>
        </Modal.Header>
    </Modal>
  );
};

export default Modalcreate;
