import { pluralize } from 'numeralize-ru';

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `${counter} ${pluralize(counter, 'раз', 'раза', 'раз')}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
