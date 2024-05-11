import { Container, ExchangeForm, Heading, Section } from 'components';
import { useSelector } from 'react-redux';
import { selectExchangeInfo } from '../redux/selectors';

const Home = () => {
  const isError = false;

  const exchangeInfo = useSelector(selectExchangeInfo);
  console.log(exchangeInfo);

  return (
    <Section>
      <Container>
        <ExchangeForm />
        <Heading info title="What currencies do you want to exchange?🙂" />

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
