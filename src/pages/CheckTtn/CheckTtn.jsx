<<<<<<< Updated upstream
export default function Home() {
  return <div>Home</div>;
=======
import { InfoCard } from '../../components/card/Card';
import { RequestHistory } from '../../components/history/History';
import { SearchForm } from '../../components/form/Form';

export default function CheckTtn() {
  return (
    <>
      <SearchForm />
      <InfoCard />
      <RequestHistory />
    </>
  );
>>>>>>> Stashed changes
}