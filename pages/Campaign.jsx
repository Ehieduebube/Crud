import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import GlobalStyle from '../src/styles/globalstyles';
import Sidebar from '../src/components/Sidebar';
import Header from '../src/components/Header2';
import Search from '../images/smallsearch.png';
import Arrowdown from '../images/arrowdown.png';
import Trash from '../images/trash.png';
import Eye from '../images/eye.png';
import Pen from '../images/pen.png';
import { Link } from 'react-router-dom';


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
  margin-left: 280px;
  padding: 100px 100px 10px 100px;
  color: #247B7BC9;
  font-family: Nunito;
  line-height: 28px;
  text-align: left;
  width: 1000px;
`;

const Main2 = styled.div`
  margin-left: 280px;
  width: 1300px;
  height: 44px;
  gap: 40px;
  padding: 5px 10px 100px 100px;
  color: #247B7BC9;
  display: flex;
  font-family: Nunito;
`;

const TableContainer = styled.div`
  margin-left: 280px;
  background-color: #fff;
  padding: 2px 29px 100px 100px;
  width:1125px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Thead = styled.thead`
  background-color: #f1f5f9;
`;

const Th = styled.th`
  padding: 10px 90px 10px 10px;
  text-align: left;
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  color: #666666;
  font-family: Nunito;
  font-size: 12px;
  gap: 118px;
  padding-right: 1000px;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
`;

const Td = styled.td`
  padding: 16px 10px;
  font-size: 14px;
  font-family: Nunito;
  font-weight: 500;
  color: ${props => (props.active ? '#666666' : '#666666')};
`;

const Status = styled.span`
  color: ${props => (props.status === 'ACTIVE' ? '#009918' : '#990000')};
`;

const Actions = styled.div`
  display: flex;
  gap: 20px;
`;


const Campaign = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://infinion-test-int-test.azurewebsites.net/api/Campaign');
        const campaigns = response.data; 
        setData(campaigns);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
 
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://infinion-test-int-test.azurewebsites.net/api/Campaign/${id}`);
      setData(prevData => prevData.filter(item => item.id !== id));
    } catch (error) {
      console.error("There was an error deleting the item!", error);
    }
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Sidebar 
          background_color={true}
        />
        <ContentContainer>  
        <Header/>
        <Main>
          <div>
            <h1 style={{fontSize: '20px', fontWeight: '700', paddingTop:'20px'}}>All Campaigns</h1>
          </div>
        </Main>

        <Main2>
          <div>
            <p style={{border: '1px solid #2A9D8FD1', padding: '10px', borderRadius: '4px'}}>All (90)</p>
          </div>

          <div>
            <p style={{border: '1px solid #2A9D8FD1', padding: '10px', borderRadius: '4px'}}>Inactive (90)</p>
          </div>

          <div style={{paddingRight: '120px',}}>
            <p style={{border: '1px solid #2A9D8FD1', padding: '10px', borderRadius: '4px'}}>Active (90)</p>
          </div>

          <div>
          <p style={{border: '0.2px solid #999999', padding: '10px', borderRadius: '4px', color: '#666666'
            }}>Search..<img src={Search} style={{ paddingLeft: '110px',}}/></p>
          </div>

          <div>
          <p style={{border: '0.2px solid #999999', padding: '10px', borderRadius: '4px', color: '#999999'
            }}>Filter by date<img src={Arrowdown} style={{ paddingLeft: '110px',}}/></p>
          </div>
        </Main2>

        <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th style={{paddingRight:'60px'}}>S/N</Th>
            <Th>Campaign Name</Th>
            <Th>Start Date</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((campaign, index) => (
            <Tr key={campaign.id}>
              <Td>{index + 1}.</Td>
              <Td>
              {campaign.campaignName}
              </Td>
              <Td>{campaign.startDate}</Td>
              <Td><Status status={campaign.campaignStatus}>{campaign.campaignStatus}</Status></Td>
              <Td>
                <Actions>
                <Link to={`/campaign/${campaign.id}`}>
                <img src={Eye} style={{ height:'19px', width:'14px',cursor:'pointer'}}/>
                </Link>
                <Link to={`/campaign/${campaign.id}`}>
                <img src={Pen} style={{ height:'16px', width:'14px', cursor:'pointer'}}/>
                </Link>
                <img src={Trash} style={{ height:'15px', width:'14px', cursor:'pointer'}} onClick={() => handleDelete(campaign?.id)}/>
                </Actions>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>        
        </ContentContainer>
        
      </AppContainer>
    </>
  );
};

export default Campaign;
