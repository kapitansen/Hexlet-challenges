import { table, tr, td } from './tags';

// BEGIN (write your solution here)
const buildHtml = () => {
  return table(
    tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions')),
  );
} 

export default buildHtml;
// END