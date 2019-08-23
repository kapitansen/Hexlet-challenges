import { identity } from 'lodash';

const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)

const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
    process: (children, f) => {
    	return children.map(f)},
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
    process: identity,
  },
];

const getPropertyAction = arg => propertyActions.find(({ check }) => check(arg));

const parse = (data) => {
  const [first, ...rest] = data;
  const root = { name: first, attributes: {}, body: '', children: [] };
  const res = rest.reduce((acc, arg) => {
    const { name, process } = getPropertyAction(arg);
    return { ...acc, [name]: process(arg, parse) };
  }, root);
  return res;
};

const render = data => {
  const buildAttrString = attrs => Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

  const result = node => {
    return [`<${node.name}${buildAttrString(node.attributes)}>`,
      (singleTagsList.has(node.name) ? '' : `${node.body}${node.children.map(render).join('')}</${node.name}>`)
    ].join('');
  }

  return result(data);
}

export {render, parse};

// END