import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 800px;
  flex-wrap: wrap;
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  h1 {
    color: #f1f1f1;
    text-transform: uppercase;
    font-size: 70px;
  }
`;

export const Person = styled.div`
  background-color: #3c3e44;
  height: 120px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
  padding: 8px;

  img {
    margin: 10px;
    height: 80px;
    width: 80px;
    border-radius: 10px;
  }

  h1 {
    font-size: 9px;
    color: #f1f1f1;
    text-align: center;
    margin-bottom: 14px;
  }
`;