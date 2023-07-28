type Props = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<Props> = ({ onChange }) => {
  return (
    <select onChange={onChange}>
      <option value="">
        Всі технології
      </option>
      <option value="Гідроізоляція">
        Гідроізоляція
      </option>
      <option value="Мікроцемент та декоративне оздоблення">
        Мікроцемент та декоративне оздоблення
      </option>
      <option value="Утеплення та модернізація">
        Утеплення та модернізація
      </option>
      <option value="Очистка, реставрація та захист фасадів">
        Очистка, реставрація та захист фасадів
      </option>
      <option value="Промислові та декоративні підлоги">
        Промислові та декоративні підлоги
      </option>
      <option value="Добавки в бетони та розчини">
        Добавки в бетони та розчини
      </option>
      <option value="Піскоструминне очищення">
        Піскоструминне очищення
      </option>
      <option value="Склеювання тріщин">
        Склеювання тріщин
      </option>
      <option value="Посилення вуглецевими полотнами">
        Посилення вуглецевими полотнами
      </option>
      <option value="Торкетування">
        Торкетування
      </option>
      <option value="Ремонт бетону та залізобетону">
        Ремонт бетону та залізобетону
      </option>
    </select>
  )
}

export default Select
