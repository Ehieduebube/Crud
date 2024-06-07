import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import  Modalcreate  from '../src/components/Modalcreate';
import DatePicker from 'react-datepicker';
import GlobalStyle from '../src/styles/globalstyles';
import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header2';
import success from '../images/success.png'
import '../css/newcampaign.css'

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1
`;

const Main = styled.div`
  padding: 100px 100px 10px 100px;
  color: #247B7BC9;
  font-family: Nunito;
  line-height: 28px;
  text-align: left;
  width: 1000px;
`;

const API_URL = 'https://infinion-test-int-test.azurewebsites.net/api/Campaign';

const Newcampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState({
    campaignName: '',
    campaignDescription: '',
    startDate: '',
    endDate: '',
    digestCampaign: false,
    linkedKeywords: '',
    dailyDigest: ''
  });
  
  const navigate = useNavigate();

  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    const payload = {
      ...newCampaign,
      linkedKeywords: newCampaign.linkedKeywords.split(',').map(keyword => keyword.trim())
    };
    console.log('Submitting new campaign:', payload);
    axios.post(API_URL, payload)
      .then(response => {
        setCampaigns([...campaigns, response.data]);
        setNewCampaign({
          campaignName: '',
          campaignDescription: '',
          startDate: '',
          endDate: '',
          digestCampaign: false,
          linkedKeywords: '',
          dailyDigest: ''
        });
        setError(null);
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setError(error.response.data);
        } else {
          setError('An unexpected error occurred');
        }
        console.error('Error creating new campaign:', error.response.data); 
      });
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewCampaign(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDateChange = (date, name) => {
    setNewCampaign(prevState => ({
      ...prevState,
      [name]: date
    }));
  };
  
  const options = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' }
  ];
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigateToOverview = () => {
    navigate('/Overview');}
-0   
    return (
      <>
        <GlobalStyle />
        <AppContainer>
          <Sidebar/>
          <ContentContainer>
            <Header />
            <Main style={{marginLeft: '280px'}}>
              <div>
                <h1 style={{fontSize: '20px', fontWeight: '900', padding:'10px 2px'}}>Create New Campaign</h1>
              </div>
            </Main>

            <div className="campaign-form-container">
      <form onSubmit={handleCreateCampaign}>
        <div className="form-group">
          <label>Campaign Name *</label>
          <input type="text"
          name="campaignName"
          value={newCampaign.campaignName}
          onChange={handleInputChange}
          placeholder="Campaign Name"
          required/>
        </div>

        <div className="form-group">
          <label>Campaign Description</label>
          <textarea type="text"
          name="campaignDescription"
          value={newCampaign.campaignDescription}
          onChange={handleInputChange}
          placeholder="Campaign Description"
          required
            ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Start Date *</label>
            <DatePicker 
              selected={newCampaign.startDate}
          onChange={(date) => handleDateChange(date, 'startDate')}
          dateFormat="yyyy-MM-dd"
          placeholderText="Start Date"
          required
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <DatePicker 
              selected={newCampaign.endDate}
          onChange={(date) => handleDateChange(date, 'endDate')}
          dateFormat="yyyy-MM-dd"
          placeholderText="End Date"
          required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Want to receive daily digest about the campaign?</label>
          <input 
             type="checkbox"
            name="digestCampaign"
            checked={newCampaign.digestCampaign}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Linked Keywords *</label>
          <input 
            type="text"
          name="linkedKeywords"
          value={newCampaign.linkedKeywords}
          onChange={handleInputChange}
          placeholder="Linked Keywords (comma-separated)"
          required
          />
        </div>

        <div className="form-group">
          <label>Kindly select how often you want to receive daily digest</label>
          <input 
            type="text"
          name="dailyDigest"
          value={newCampaign.dailyDigest}
          onChange={handleInputChange}
          placeholder="Enter time"
          required
          />
        </div>

        <div className="form-buttons">
          <button type="button" onClick={navigateToOverview}>
            Cancel
          </button>
          <button type="submit" onClick={handleShow} >
            Create Campaign
          </button>

          <Modalcreate isVisible={isModalVisible}
        show={show}
        handleClose={handleClose}
        title=<img src ={success} style={{padding:'80px 180px 30px 175px'}}/>
        body="Campaign Successfully Created!"
      />
        </div>
      </form>
    </div>

          </ContentContainer>
        </AppContainer>
      </>
    );
  };

export default Newcampaign;