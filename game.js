import { cons, car, cdr, toString } from 'hexlet-pairs';
import { cons as consList, l, random, head, reverse, length } from 'hexlet-pairs-data';

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0) {
      console.log('('+health2+', '+health1+')');
      console.log(`Игра окончена. Победил ${name2}.`);
      const logItem = cons(cons(health2, health1), `Игра окончена. Победил ${name2}.`);
      
      console.log(toString(consList(logItem, log)));
      return consList(logItem, log);
    }
    const card = random(cards);
    const ur = cdr(card)();
    const new_health2 = health2 - ur;
    const msg = `Игрок '${name1}' применил '${car(card)}' против '${name2}' и нанес урон '${ur}'`;
    console.log(msg);
    const new_order = order;
    let new_logItem;
    if (order === 1 ) {
      console.log('после удара: ('+health1+', '+new_health2+')');
      new_logItem = cons(cons(health1, new_health2), msg);
      console.log('Лог хода > ' + toString(new_logItem));
      const new_order = 2;
    }
    if (order === 2 ) {
      console.log('после удара: ('+new_health2+', '+health1+')');
      new_logItem = cons(cons(new_health2, health1), msg);
      console.log('Лог хода > ' + toString(new_logItem));
      const new_order = 1;
    }
    console.log('Лог хода снаружи блока > ' + toString(new_logItem));
    const newLog = consList(new_logItem, log);
    return iter(new_health2, name2, health1, name1, new_order, newLog);
    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);