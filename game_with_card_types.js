import * as pairs from 'hexlet-pairs';
import { cons, l, random, head, reverse } from 'hexlet-pairs-data';
import * as simpleCard from './simpleCard.js';
import * as percentCard from './percentCard.js';
import { typeTag } from './type.js';

const isSimpleCard = (card) => typeTag(card) === 'SimpleCard';
const isPercentCard = (card) => typeTag(card) === 'PercentCard';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0) {
      const logItem = cons(cons(health2, health1), `Игра окончена. Победил ${name2}.`);
      return cons(logItem, log);
    }
    const card = customRandom(cards);
    let damage;
    let name;
    if (isPercentCard(card)) {
      damage = percentCard.damage(card, health2);
      name = percentCard.getName(card);
    }
    else {
      damage = simpleCard.damage(card);
      name = simpleCard.getName(card);
    }
    const newHealth2 = health2 - damage;
    const msg = `Игрок '${name1}' применил '${name}' против '${name2}' и нанес урон '${damage}'`;
    let newOrder;
    let newLogItem;
    if (order === 1) {
      newLogItem = cons(cons(health1, newHealth2), msg);
      newOrder = 2;
    }
    if (order === 2) {
      newLogItem = cons(cons(newHealth2, health1), msg);
      newOrder = 1;
    }
    const newLog = cons(newLogItem, log);
    return iter(newHealth2, name2, health1, name1, newOrder, newLog);
    // END
  };

  const startHealth = 10;
  const logItem = pairs.cons(pairs.cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);
