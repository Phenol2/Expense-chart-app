import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 400px;
    padding: 25px 15px;
    background-color: #ed5126;
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 576px) {
      width: 300px;
      }

    @media (min-width: 768px) and (max-width: 992px)  {
        width: 350px;
        }
`;

export const Balance = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.22rem;

    & > span{
      font-size: 12px;
    }

    & > div{
      font-weight: bold;
    }
`;

export const Logo = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div{
      width: 25px;
      height: 25px;
      background-color: #000;
      border-radius: 50%;
      border: 2px solid #000;
    }

    & > div:before{
      content: "";
      width: 23px;
      height: 23px;
      border: 2px solid rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      z-index: 1000;
      position: absolute;
      left: -15px;
      bottom: -1px;
    }
`;
