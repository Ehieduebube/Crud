import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Modaldelete from '../components/Modaldelete';
import axios from 'axios';

const API_URL = 'https://infinion-test-int-test.azurewebsites.net/api/Campaign';

const Modalcreate = ({ show, title, body, campaign }) => {
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isDeletedModalVisible, setDeletedModalVisible] = useState(false);
  const openDeleteModal = () => setDeleteModalVisible(true);
  const closeDeleteModal = () => setDeleteModalVisible(false);
  const openDeletedModal = () => setDeletedModalVisible(true);
  const closeDeletedModal = () => setDeletedModalVisible(false);
 
    let navigate = useNavigate();
    const navigateToCamp = () => {
        navigate('/Campaign');
      };

      const handleDelete = (id) => {
        axios.delete(`${API_URL}/${id}`)
          .then(response => {
            setCampaigns(campaign.filter(campaign => campaign.id !== id));
          })
          .catch(error => {
            console.error('Error deleting campaign:', error);
            setError('Error deleting campaign');
          });
           
        setTimeout(() => {
        openDeletedModal(); 
        }, 500);
        };

    
  return (
    <div>
    <Modal show={show} style={{paddingTop:'200px', fontFamily:'Nunito'}}>
    <div style={{}}>
      <Modal.Header style={{display:'block'}}>
        <Modal.Title style={{padding:'70px 10px 20px 140px'}} >{title}</Modal.Title>
      
      <Modal.Body style={{paddingLeft:'20px'}}>{body}</Modal.Body>
      
        <div style={{padding:'30px 100px 70px 100px', display:'flex', gap:'10px'}}>
        <Button onClick={navigateToCamp} style={{backgroundColor:'#fff', color:'#000000', padding:'6px 1px 6px 5px', width:'250px', border:'1px solid #000000'}}>
          Cancel
        </Button>


        <Button onClick={() => handleDelete(campaign?.id)} style={{backgroundColor:'#990000', padding:'10px 1px 10px 5px', width:'350px', border:'none'}}>
          Delete Campaign
        </Button>
        </div>
        </Modal.Header>
        </div>
    </Modal>

    {/* Campaign Deleted Modal */}
      

  </div>
  );
};

export default Modalcreate;
