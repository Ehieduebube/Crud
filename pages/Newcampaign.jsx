import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import Modalcreate from '../src/components/Modalcreate';
import DatePicker from 'react-datepicker';
import GlobalStyle from '../src/styles/globalstyles';
import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header2';
import success from '../images/success.png';

import '../css/newcampaign.css';
import '../css/toggleswitch.css';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
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
  const [newCampaign, setNewCampaign] = useState({
    campaignName: '',
    campaignDescription: '',
    startDate: '',
    endDate: '',
    digestCampaign: false, // Toggle should send true/false
    linkedKeywords: '',
    dailyDigest: '' // String for daily digest (dropdown)
  });

  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const navigate = useNavigate();

  const handleCreateCampaign = async (e) => {
    e.preventDefault();

    // Update dailyDigest to selected option before submission
    const payload = {
      ...newCampaign,
      dailyDigest: selectedOption,
      linkedKeywords: newCampaign.linkedKeywords.split(',').map(keyword => keyword.trim()),
    };

    console.log('Submitting new campaign:', payload);
    
    try {
      const response = await axios.post(API_URL, payload);
      setCampaigns([...campaigns, response.data]);
      setNewCampaign({
        campaignName: '',
        campaignDescription: '',
        startDate: '',
        endDate: '',
        digestCampaign: false,
        linkedKeywords: '',
        dailyDigest: '',
      });
      setError(null);
      setShow(true);
    } catch (error) {
      setError(error.response?.data || 'An unexpected error occurred');
      console.error('Error creating new campaign:', error.response?.data);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewCampaign(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleDateChange = (date, name) => {
    setNewCampaign(prevState => ({
      ...prevState,
      [name]: date,
    }));
  };

  const handleToggleChange = () => {
    setNewCampaign(prevState => ({
      ...prevState,
      digestCampaign: !prevState.digestCampaign, // Toggle between true/false
    }));
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option
  };

  const navigateToOverview = () => {
    navigate('/Overview');
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Sidebar />
        <ContentContainer>
          <Header />
          <Main style={{ marginLeft: '280px' }}>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: '900', padding: '30px 2px 2px 2px' }}>
                <b>Create New Campaign</b>
              </h1>
            </div>
          </Main>

          <div className="campaign-form-container">
            <form onSubmit={handleCreateCampaign}>
              <div className="form-group">
                <label>Campaign Name<span style={{ color: '#EF2D2B' }}> *</span></label>
                <input
                  type="text"
                  name="campaignName"
                  value={newCampaign.campaignName}
                  onChange={handleInputChange}
                  placeholder="e.g The Future is now"
                  required
                />
              </div>

              <div className="form-group">
                <label>Campaign Description</label>
                <textarea
                  type="text"
                  name="campaignDescription"
                  value={newCampaign.campaignDescription}
                  onChange={handleInputChange}
                  placeholder="Please add a description to your campaign"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Start Date <span style={{ color: '#EF2D2B' }}> *</span></label>
                  <DatePicker
                    selected={newCampaign.startDate}
                    onChange={(date) => handleDateChange(date, 'startDate')}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="dd/mm/yyyy"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>End Date</label>
                  <DatePicker
                    selected={newCampaign.endDate}
                    onChange={(date) => handleDateChange(date, 'endDate')}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="dd/mm/yyyy"
                    required
                  />
                </div>
              </div>

              <div className="form-groupp">
              <div className='na'>
                <span className="label-text">Want to receive daily digest about the campaign?</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    name="digestCampaign"
                    checked={newCampaign.digestCampaign}
                    onChange={handleToggleChange} // Toggle digestCampaign
                  />
                  <span className="slider"></span>
                </label>
                </div>
              </div>

              <div className="form-group">
                <label>Linked Keywords <span style={{ color: '#EF2D2B' }}> *</span></label>
                <input
                  type="text"
                  name="linkedKeywords"
                  value={newCampaign.linkedKeywords}
                  onChange={handleInputChange}
                  placeholder="To add keywords, type your keyword and press enter"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="dailyDigest">Kindly select how often you want to receive daily digest</label>
                <select style={{width: '150px', height:'40px'}}
                  id="dailyDigest"
                  name="dailyDigest"
                  value={selectedOption} // Select controlled by selectedOption
                  onChange={handleSelectChange}
                  required
                  placeholder="Select"
                >
                  <option value=""></option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div className="form-buttons">
                <button type="button" onClick={navigateToOverview}>
                  Cancel
                </button>
                <button type="submit">
                  Create Campaign
                </button>

                <Modalcreate
                  isVisible={isModalVisible}
                  show={show}
                  handleClose={() => setShow(false)}
                  title={<img src={success} alt="Success" style={{ padding: '80px 180px 30px 175px' }} />}
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
