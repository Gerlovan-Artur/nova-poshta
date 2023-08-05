<<<<<<< Updated upstream
=======
import {
  updateSelectedNumber,
  clearRequestHistory,
} from '../../redux/slice';
import { selectNumbersList } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from '../../redux/operations';
import { nanoid } from 'nanoid';

export const RequestHistory = () => {
  const requestHistory = useSelector(selectNumbersList);

  const dispatch = useDispatch();

  const clearHistory = () => {
    dispatch(clearRequestHistory());
  };

  const handleClick = clickedNumber => {
    dispatch(updateSelectedNumber(clickedNumber));

    dispatch(fetchInfo(clickedNumber));
  };
  return (
    <ul>
      Історія
      {requestHistory.map(item => {
        return (
          <li key={nanoid()}>
            <div
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </div>
          </li>
        );
      })}
      {requestHistory.length !== 0 && (
        <button
          type="button"
          onClick={() => {
            clearHistory();
          }}
        >
          clear
        </button>
      )}
    </ul>
  );
};
>>>>>>> Stashed changes
