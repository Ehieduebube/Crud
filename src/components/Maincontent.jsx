import React from 'react';
import styled from 'styled-components';
import Search from '../../images/search.png';
import Calender from '../../images/calender.png';
import Arrow from '../../images/arrowdown.png';
import Export from '../../images/export.png';
import { useNavigate } from 'react-router-dom';

const MainContentContainer = styled.div`
  flex: 1;
  padding: 100px 20px 20px 20px;
  background-color: #ffffff;
  top: 128px;
  left: 377px;
  gap: 0px;
  justify: space-between;
  opacity: 0px;
  margin-left: 280px;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 728px;
  text-align: center;
`;

const New = styled.h1`
  margin: 10px 90px;
  width: 1000px;
  height: 40px;
  left:337px;
  font-size: 10px;
  justify: space-between;
  display: flex;
`;

const Button = styled.button`
  padding: 10px 30px;
  fpnt-weight: 600; 
  size: 14px;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 40px;
  background-color: #008c8c;
  line-height: 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MainContent = () => {
  let navigate = useNavigate();

const navigateToNewCampaign = () => {
  navigate('/Newcampaign');
};

  return (
    <MainContentContainer>
    <New>
      <h1 style={{ fontSize: '24px', fontWeight: 'bolder', lineHeight: '58px', width: '112px', height: '28px', color: '#008c8c'}}>Overview</h1>

      <div>
      <p style={{marginLeft: '400px', border: '1px solid rgba(243, 243, 243, 1)', fontSize: '15px', lineHeight: '30px', justify: 'space-between', padding:'5px 10px'}}>

      <img src={Calender} className="img-fluid" alt="" style={{ paddingRight: '10px',}}/>Date Range | Nov,1 2022 - Nov 7, 2022.

      <img src={Arrow} className="img-fluid" alt="" style={{ paddingRight: '10px',}}/>

      <button style= {{border: 'none', backgroundColor:'#F0F4F4', borderRadius:'4px', padding:'5px 10px',color: '#008c8c'}}>
      <img src={Export} className="img-fluid" alt="" style={{ paddingRight: '10px',}}/>Export</button>
      
      </p>
      </div>
    </New>
      <EmptyState>
        <img src={Search} alt=" " />
        <p><b>No activity yet. Create a new campaign to get started.</b></p>
        <Button onClick={navigateToNewCampaign}>+ New Campaign</Button>
      </EmptyState>
    </MainContentContainer>
  );
};

export default MainContent;
