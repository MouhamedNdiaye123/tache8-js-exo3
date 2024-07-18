// Utilisez la méthode .reduce() pour résumer tous les nombres dans un tableau de nombres. 

let tabNum = [9, 4, 3, 6, 0, 1,5]
alert('Avant reduce () --> '+ tabNum)

reduceTab = tabNum.reduce((a, b)=> a+b);

alert('Apres reduce () --> ' + reduceTab);