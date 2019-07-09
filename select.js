import { l, isList, isEmpty, head, tail, append } from 'hexlet-pairs-data';
import { is, toString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const select = (query, dom) => {
  const GetChildren = list => reduce((element, acc) => {
    if (hasChildren(element)) {
      return append(acc, children(element));
    }
    return acc;
  }, l(), list);
  if (isEmpty(tail(query))) {
    const FlatList = filter(element => is(head(query), element), dom);
    const Children = GetChildren(dom);
    if (!isEmpty(Children)) {
      return append(FlatList, select(query, Children));
    }
  }
  if (!isEmpty(tail(query))) {
    const result = filter(element => is(head(query), element) && hasChildren(element), dom);
    const Children = GetChildren(result);
    return select(tail(query), Children);
  }
  return filter(element => is(head(query), element), dom);
};
// END

export const countLeaves = (tree) => {
  if (!isList(tree)) {
    return 1;
  }
  if (isEmpty(tree)) {
    return 0;
  }

  return countLeaves(head(tree)) + countLeaves(tail(tree));
};