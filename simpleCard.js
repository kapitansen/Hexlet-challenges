import { cons, car, cdr } from 'hexlet-pairs';
import { attach, contents } from './type';

// BEGIN (write your solution here)
export const make = (name, damage) =>
  attach('simpleCard', cons(name, damage));

export const getName = (self) => car(contents(self));
export const damage = (self) => cdr(contents(self));

// END
