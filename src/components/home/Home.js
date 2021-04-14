import { Movies, Banner } from '../../components';
import styled from 'styled-components';
import ReactHelmet from '../../util/ReactHelmet';

function Home() {
  return (
    <Wrapper>
      <ReactHelmet title="Home" />;
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
