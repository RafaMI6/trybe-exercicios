let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
groceryList.push('maça');
groceryList.unshift('melão');
for (let i = 0; i < groceryList.length; i += 1) {
  console.log(groceryList[i]);
}