import styled from 'styled-components';

export const StyledFooter = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 40px 20px;

    & > div:nth-child(1){
      display: flex;
      flex-direction: column;

      & > span{
        font-size: 10px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
      }

      & > h5{
        font-weight: bolder;
        font-size: 25px;
      }
    }

    & > div:nth-child(2){
      display: flex;
      flex-direction: column;

      
      & > span{
        font-size: 11px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
      }

      & > h6{
        font-weight: bolder;
        font-size: 12px;
        color: rgba(0, 0, 0);
        align-self: flex-end;
      }
    }
`;
