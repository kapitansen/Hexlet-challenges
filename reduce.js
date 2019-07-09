import { isEmpty, head, tail } from 'hexlet-pairs-data';
import { value, is, toString } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const reduce = (func, acc, list) => {
  const iter = (Ifunc, Iacc, Ilist) => {
    if(isEmpty(Ilist)) {
      return Iacc;
    }
    const element = head(Ilist);
    const NewAcc = Ifunc(element, Iacc);
    return iter(Ifunc, NewAcc, tail(Ilist));
  };
  return iter(func, acc, list);
};

export const emptyTagsCount = (type, html) => reduce((element, acc) => {
  return is(type, element) && value(element) === '' ? acc + 1 : acc;
}, 0, html);
// END

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};
