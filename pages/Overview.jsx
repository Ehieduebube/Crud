import React,{ useNavigate } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../src/styles/globalstyles';
import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header';
import MainContent from '../src/components/Maincontent';

const AppContainer = styled.div`
  display: flex;
  height: 95vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Overview = () => {

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Sidebar
          backgroundColor={true}
        />
        <ContentContainer>
          <Header />
          <MainContent/>
        </ContentContainer>
      </AppContainer>
    </>
  );
};

export default Overview;
