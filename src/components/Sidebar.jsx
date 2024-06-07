import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Megaphone from '../../images/megaphone.png'
import Setting from '../../images/setting.png';
import Bulb from '../../images/bulb.png';
import Speedometer from '../../images/speedometer.png';
import Question from '../../images/question.png';
import Message from '../../images/message.png';


const SidebarContainer = styled.div`
  width: 292px;
  background-color: #F0F4F4;
  height: 888px;
  padding: 20px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
`;

const Logo = styled.div`
  font-size: 32px;
  font-family: Work Sans;
  left: 104px;
  height: 32px;
  font-weight: 700;
  margin-bottom: 80px;
  color:  #008c8c;
  margin-right: 50px;
`;

const StyledImage = styled.img`
  padding-right: 10px;
`;

const MenuItem = styled.div`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  text-align: center;
  font-family: Nunito;
  fpnt-weight: 600; 
  text-align: left;
  padding-right: 24px;
  size: 14px;
  color: black;
  cursor: pointer;
  background-color: ${props => props.backgroundColor ? 'white' : 'none'};
  background-color: ${props => props.background_color ? 'white' : 'none'};
`;

const Items = styled.button`
  text-align: left;
  border-style: none!important;
  background-color: #F0F4F4;
  margin-bottom: 70px;
`;

const Button = styled.button`
  padding: 10px 30px;
  font-family: Nunito;
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

const HelpContainer = styled.div`
  background-color: #ffffff;
  padding: 30px 41px 30px 41px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 250px;
  margin: 0 auto;
  width: 228px;
  height: 220px;
`;

const Icon = styled.div`
  font-size: 24px;
  color: #008c8c;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 14px;
  color: linear-gradient(96.87deg, #247B7B 13.61%, #3B247B 68.44%);
  margin: 0;
  margin-bottom: 10px;
  font-family: Nunito;
`;

const Description = styled.p`
  font-size: 12px;
  color: #6c757d;
  margin: 0;
  margin-bottom: 20px;
  font-family: Nunito;
`;

const HelpButton = styled.button`
  padding: 8px 10px 8px 10px;
  background-color: #ffffff;
  color: #008c8c;
  radius: 4px;
  border: 1px;
  weight: 600;
  width: 80px;
  height: 32px;
  line-height: 16px;
  font-family: Nunito;
  font-size: 12px;
  border: 2px solid #008c8c;
  border-radius: 4px;
  cursor: pointer;
`;

const Sidebar = ({ title1, title2, backgroundColor, background_color}) => {
  let navigate = useNavigate();
  
  const navigateToOverview = () => {
    navigate('/Overview');
  };

  const navigateToCampaign = () => {
    navigate('/Campaign');
  };

  const navigateToNewCampaign = () => {
    navigate('/Newcampaign');
  };

  return (
    <SidebarContainer>
      <Logo><StyledImage src={Message}/>Scrutz</Logo>
      <Items>

      <Button onClick={navigateToNewCampaign}>+ New Campaign</Button>

      <MenuItem onClick={navigateToOverview} backgroundColor={backgroundColor}><StyledImage src={Speedometer}/>Overview{title1}</MenuItem>

      <MenuItem onClick={navigateToCampaign} background_color={background_color}><StyledImage src={Megaphone} />Campaign{title2}</MenuItem>

      <MenuItem><StyledImage src={Bulb}/>Market Intelligence</MenuItem> 

      <MenuItem><StyledImage src={Setting}/>Account Settings</MenuItem>
      </Items>

     <HelpContainer>
      <Icon><img src={Question}/></Icon>

      <Title>Need help?</Title>

      <Description>We're readily available to provide help</Description>
      
      <HelpButton>Get help</HelpButton>
    </HelpContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
