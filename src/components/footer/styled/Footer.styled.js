import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  padding: 70px 2rem 30px;
  margin: auto;
  max-width: 100%;
  width: 100%;
  flex-direction: column;
  background-color: #000000;
  color: #f0dcdc;

  @media (max-width: 1000px) {
    padding: 70px 2rem 20px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #f2494d;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Social = styled.div`
  padding: 4px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #91a599;
  font-size: 20px;
  width: 200px;
  transition: all 0.3s ease-in-out;
  & div {
    margin-right: 10px;
  }
  & div:hover {
    transform: scale(1.1);
    color: #79e7d8;
    cursor: pointer;
  }
`;
