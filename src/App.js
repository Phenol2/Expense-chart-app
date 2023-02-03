import React, { useState } from 'react';
import './style.css';
import Header from './components/Header/Header';
import { Data } from './data';
import { Barchart } from './components/chart/Barchart';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

const Container = styled.main`
    width: 80vw;
    height: 90vh;
    background-color: bisque;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    @media (max-width: 576px) {
      width: 100vw;
      height: 100vh;
      }

      
`;

const Wrapper = styled.main`
    width: 400px;
    padding-block: 10px;
    padding-inline: 15px;
    margin-block: 10px;
    background-color: #faf4f0;
    border-radius: 10px;
    
    
    
    @media (max-width: 576px ) {
      width: 300px;
      }

      @media (min-width: 768px) and (max-width: 992px)  {
        width: 350px;
        }
`;

export default function App() {
  let styles = {
    paddingBlock: '10px',
    paddingInline: '15px',
    marginBlock: '10px',
    backgroundColor: '#faf4f0',
    borderRadius: '10px',
  };

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label: 'amount',
        data: Data.map((data) => data.amount),
        backgroundColor: [
          '#ed5126',
          '#ed5126',
          '#7cbfc2',
          '#ed5126',
          '#ed5126',
          '#ed5126',
          '#ed5126',
        ],
        borderWidth: 0,
        borderRadius: 5,
      },
    ],
  });

  return (
    <Container>
      <div style={{ width: '400px', placeItems: 'center', display: 'grid' }}>
        <Header />
        <Wrapper>
          <h4 style={{ marginBottom: '20px' }}>Spending - Last 7 Days</h4>
          <Barchart chartData={chartData} />
          <Footer />
        </Wrapper>
      </div>
    </Container>
  );
}
