import { DepartmentsForm } from '../../components/departments/Form';
import { DepartmentsListResult } from '../../components/departments/List';
import { Loader } from '../../components/loader/Loader';
import { useSelector } from 'react-redux';

import { selectIsLoading } from '../../redux/selectors';

export default function DepartmentList() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <DepartmentsForm />
      {isLoading ? <Loader /> : <DepartmentsListResult />}
    </>
  );
}