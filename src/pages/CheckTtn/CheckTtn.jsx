import { InfoCard } from '../../components/card/Card';
import { RequestHistory } from '../../components/history/History';
import { SearchForm } from '../../components/form/Form';

import { InfoWrapper } from './CheckTtn.styled';
import { Loader } from '../../components/loader/Loader';

import { selectIsLoading } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export default function CheckTtn() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <SearchForm />
      {isLoading ? (
        <Loader />
      ) : (
        <InfoWrapper>
          <InfoCard />
          <RequestHistory />
        </InfoWrapper>
      )}
    </>
  );
}