import React from 'react';
import styled from 'styled-components';
import Bell from '../../images/bell.png';
import Pic from '../../images/pic.png';
import Arrow from '../../images/arrowdown.png';


const HeaderContainer = styled.div`
  display: flex;
  width: 1096px;
  height: 92px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: #fff;
  border-bottom: 1px solid rgba(243, 243, 243, 1);
  position: fixed;
  margin-left: 292px;
`;

const In = styled.div`
  padding: 12px 10px 12px 10px;
  width: 391px;
  height: 44px;
  justify: space-between;
  font-family: Nunito;
  padding: 10px;
  border: 1px solid #dfe3e8;
  border-radius: 4px;
`;

const Header = () => {
  return (
    <HeaderContainer>
    <div style={{paddingLeft:'80px'}}>
      <In><p>Search for anything...</p></In>
      </div>

      <div style={{ width:'171px', height:'35px'}}> 
      <img src={Bell}  style={{ paddingRight: '5px', borderRight: '1px solid rgba(243, 243, 243, 1)'}}/>   
      <img src={Pic}  style={{ paddingRight: '1px', paddingLeft: '1px'}}/>
        <span>BigTech</span>
        <img src={Arrow}  style={{ paddingRight: '1px', borderRight: '4px'}}/>
      </div>


    </HeaderContainer>
  );
};

export default Header;
