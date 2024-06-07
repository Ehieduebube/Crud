import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import Arrow from '../images/longbackarrow.png'
import  Modalstop  from '../src/components/Modalstop';
import  Modalcreate  from '../src/components/Modalcreate';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header2';
import GlobalStyle from '../src/styles/globalstyles';
import success from '../images/success.png'
import '../css/campaigninfo.css'

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1
`;

const API_URL = 'https://infinion-test-int-test.azurewebsites.net/api/Campaign';

const Campaigninfo = () => {
   
    const navigate = useNavigate();
    const { id } = useParams();
    const navigateToCampaign = () => {
      navigate('/Campaign');
    };

    const [campaign, setCampaign] = useState({
      
      campaignName: '',
      campaignDescription: '',
      startDate: new Date(),
      endDate: new Date(),
      digestCampaign: false,
      linkedKeywords: '',
      dailyDigest: ''
    });
    const [error, setError] = useState(null);

    useEffect(() => {
      console.log(`Fetching data for campaign ID: ${id}`);
      axios.get(`${API_URL}/${id}`)
        .then(response => {
          console.log('Fetched campaign data:', response.data);
          setCampaign({
            ...response.data,
            campaignName: response.data.campaignName,
            campaignDescription: response.data.campaignDescription,
            startDate: new Date(response.data.startDate),
            endDate: new Date(response.data.endDate),
            digestCampaign: response.data.digestCampaign,
            linkedKeywords: response.data.linkedKeywords.join(', '),
            dailyDigest: response.data.dailyDigest
          });
        })
        .catch(error => {
          console.error('Error fetching campaign data:', error);
          setError('Error fetching campaign data');
        });
    }, [id]);
    

    const handleInputChange = (event) => {
      const { name, value, type, checked } = event.target;
      setCampaign(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value
      }));
    };

    const handleDateChange = (date, name) => {
      setCampaign(prevState => ({
        ...prevState,
        [name]: date
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    
      const payload = {
        id: parseInt(id), 
        campaignName: campaign.campaignName,
        campaignDescription: campaign.campaignDescription,
        startDate: campaign.startDate.toISOString(),
        endDate: campaign.endDate.toISOString(),
        digestCampaign: Boolean(campaign.digestCampaign),
        linkedKeywords: campaign.linkedKeywords.split(',').map(keyword => keyword.trim()),
        dailyDigest: campaign.dailyDigest
      };
    
      console.log('Submitting payload:', payload); 
      console.log('ID in URL:', id); 
    
      axios.put(`${API_URL}/${id}`, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log('Update response:', response.data);
        setCampaign(response.data);
        history.push('/');
      })
      .catch(error => {
       
        setError('Error updating campaign');
      });
    };
    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isModalVisible, setIsModalVisible] = useState(false);

    
    
  return (
    <>
    <GlobalStyle />
        <AppContainer>
          <Sidebar/>
          <ContentContainer>
            <Header />
            <div className="campaign-info-form-container">

            <div className="camp" onClick={navigateToCampaign}>
            <img src={Arrow} style={{paddingRight:'5px'}}/>Back
            </div>

            <h2>Campaign Information</h2>

        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Campaign Name</label>
            <input type="text"
          name="campaignName"
          value={campaign.campaignName}
          onChange={handleInputChange}
          placeholder="Campaign Name"
          required />
            </div>

          <div className="form-group">
            <label>Campaign Description</label>
            <input type="text"
          name="campaignDescription"
          value={campaign.campaignDescription}
          onChange={handleInputChange}
          placeholder="Campaign Description"
          required/>
            </div>

        <div className="form-row">
          <div className="form-group">
            <label>Start Date</label>
            <DatePicker 
              selected={campaign.startDate}
          onChange={(date) => handleDateChange(date, 'startDate')}
          dateFormat="yyyy-MM-dd"
          placeholderText="Start Date"
          required
            />
          </div>

          <div className="form-group">
            <label>End Date</label>
            <DatePicker 
              selected={campaign.endDate}
          onChange={(date) => handleDateChange(date, 'endDate')}
          dateFormat="yyyy-MM-dd"
          placeholderText="End Date"
          required
            />
          </div>
        </div>

        <div className="form-group">
            <label>Linked Keywords</label>
            <input
            type="text"
            name="linkedKeywords"
            value={campaign.linkedKeywords}
            onChange={handleInputChange}
            placeholder="Linked Keywords (comma-separated)"
            required
          />
            </div>

          <div className="form-group">
            <label>Want to receive daily digest about the campaign?</label>
            <input
              type="checkbox"
              name="digestCampaign"
              checked={campaign.digestCampaign}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Kindly select the time you want to receive daily digest</label>
            <input
            type="text"
            name="dailyDigest"
            value={campaign.dailyDigest}
            onChange={handleInputChange}
            placeholder="Enter time"
            required
          />
          </div>

          <div className="form-buttons">
            <button type="button" className="stop-campaign-button" onClick={handleShow}>
              Stop Campaign
            </button>
            <button type="submit" className="edit-info-button" onClick={handleShow}>
              Edit Information
            </button>

            <Modalstop
              show={show}
              handleClose={handleClose}
              title="Stop Campaign" 
              body=<div><p style={{paddingLeft:'43px'}}>Are You sure you want to delete MTN campaign?</p>
                    <p style={{paddingLeft:'110px'}}>This action cannot be undone.</p></div>
            />

            <Modalcreate isVisible={isModalVisible}
            show={show}
            handleClose={handleClose}
            title=<img src ={success} style={{padding:'80px 180px 30px 175px'}}/>
            body="Campaign Successfully Updated!"
            />

          </div>
      </form>
    </div>

          </ContentContainer>
        </AppContainer>
        </>
  )
}

export default Campaigninfo
