import { Movies, Banner } from '../../components';
import styled from 'styled-components';

function Home() {
  return (
    <Wrapper>
      <Banner />
      <Movies />
    </Wrapper>
  );
}

export default Home;

export const Wrapper = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
`;
