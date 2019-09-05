import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

// BEGIN (write your solution here)
const buildNode = (name, attributes, body, children) => {
  const singleTagsList = new Set(['hr', 'img', 'br']);
  return singleTagsList.has(name) ? new SingleTag(name, attributes) : new PairedTag(name, attributes, body, children);
}

export default buildNode;
// END