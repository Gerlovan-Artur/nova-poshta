import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo } from '../../redux/operations';
import { selectInfo, selectNumbersList } from '../../redux/selectors';

import { updateSelectedNumber } from '../../redux/slice';

import {
  InfoWrapper,
  InfoEl,
  InfoElContent,
} from './Card.styled';

export const InfoCard = () => {
  const { Status, WarehouseRecipient, WarehouseSender } =
    useSelector(selectInfo);
  const requestHistory = useSelector(selectNumbersList);

  const dispatch = useDispatch();

  const handleClick = clickedNumber => {
    dispatch(updateSelectedNumber(clickedNumber));

    dispatch(fetchInfo(clickedNumber));
  };
  return (
    <InfoWrapper>
      <InfoEl>
        Статус доставки:
<<<<<<< Updated upstream
        {Status}
      </div>
      <div>
        Відправлено:
        {WarehouseSender}
      </div>
      <div>
        Отримано:
        {WarehouseRecipient}
      </div>
      <ul>
        Історія
        {requestHistory.map(item => {
          return (
            <li
              key={item}
              onClick={() => {
                handleClick(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};
=======
        {StatusCode === '3' ? (
          <InfoEl>
            Номер ТТН не знайдено. Перевірте номер та спробуйте ще раз
          </InfoEl>
        ) : (
          <InfoElContent>{Status}</InfoElContent>
        )}
      </InfoEl>
      <InfoEl>
        Відправлено:
        <InfoElContent>
          {WarehouseSender}
          <br />
          Населений пункт: {CitySender}
        </InfoElContent>
      </InfoEl>
      <InfoEl>
        Отримано:
        <InfoElContent>
          {WarehouseRecipient}
          <br />
          Населений пункт: {CityRecipient}
        </InfoElContent>
      </InfoEl>
    </InfoWrapper>
  );
};
>>>>>>> Stashed changes
