/** функция сортирует объект по указанным свойствам
 *
 * @param {object} obj - объект, который нужно отсортировать
 * @param {Array} arrProp - массив свойств для сортировки
 *
 * @throws {Error} если для сортировки передан не объект
 * @throws {Error} если передан не массив свойств
 *
 * @return {Array} форматированный массив объектов, отсортированный по указанным свойствам
 */
export default function orderByProps(obj, arrProps = []) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new Error("ожидается объект для сортировки");
  }

  if (!Array.isArray(arrProps)) {
    throw new Error("ожидается массив ключей");
  }

  let result = arrProps.length
    ? sortByProps(obj, arrProps)
    : sortByAlphabet(obj);

  return getFormateArray(result);
}

/** функция сортирует объект по указанным свойствам
 *
 * @param {object} obj - объект, который нужно отсортировать
 * @param {Array} arrProp - массив свойств для сортировки
 *
 * @return {Array} массив, отсортированный по указанным свойствам
 */
const sortByProps = (obj, arrProps) => {
  let restObj;

  let result = arrProps.reduce((acc, item) => {
    let { [item]: propName, ...rest } = restObj ?? obj;
    restObj = rest;

    return propName ? [...acc, [item, propName]] : acc;
  }, []);
  return [...result, ...sortByAlphabet(restObj)];
};

/** функция преобразует объект в массив
 *
 * @param {object} obj - объект, который нужно преобразовать
 *
 * @return {Array} полученный массив
 */
const getArrFromObj = (obj) => {
  return [...Object.entries(obj)];
};

/** функция сортирует объект по алфавиту
 *
 * @param {object} obj - объект, который нужно отсортировать
 *
 * @return {Array} массив, отсортированный по алфавиту
 */
const sortByAlphabet = (obj) => {
  return getArrFromObj(obj).sort();
};

/** функция форматирует массив к виду
 *  [{key: arr[index][0], value: arr[index][1]}, ...]
 *
 * @param {Array} arrProp - массив для форматирования
 *
 * @return {Array} отформатированный массив
 */
const getFormateArray = (arr) => {
  return arr.reduce((acc, item) => {
    let [title, value] = item;
    return [...acc, { key: title, value }];
  }, []);
};
