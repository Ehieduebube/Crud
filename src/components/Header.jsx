import React from 'react';
import styled from 'styled-components';
import Search from '../../images/smallsearch.png';
import Bell from '../../images/bell.png';
import Profile from '../../images/profile.png';
import Arrow from '../../images/arrowdown.png';


const HeaderContainer = styled.div`
  display: flex;
  height: 92px;
  width: 1290px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: #fff;
  border-bottom: 1px solid rgba(243, 243, 243, 1);
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
    <div style={{paddingLeft:'90px'}}>
      <In><p>search..<img src={Search}  style={{ paddingLeft: '300px'}}/></p></In>
      </div>

      <div>
      <img src={Bell}  style={{ paddingRight: '10px', borderRight: '1px solid rgba(243, 243, 243, 1)'}}/>   
      <img src={Profile}  style={{ paddingRight: '10px', paddingLeft: '9px'}}/>
        <span>BigTech</span>
        <img src={Arrow}  style={{ paddingRight: '10px',}}/>
      </div>

    </HeaderContainer>
  );
};

export default Header;
