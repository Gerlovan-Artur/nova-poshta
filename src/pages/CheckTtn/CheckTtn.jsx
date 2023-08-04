import { SearchForm } from '../../components/form/Form';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from '../../redux/operations';
import { selectInfo, selectTtnNumber } from '../../redux/selectors';

export default function CheckTtn() {
  return <SearchForm />;
}