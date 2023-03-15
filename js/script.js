const listMarket = [

    'pasta',
    'pesto',
    'verdura',
    'tiramisù',
    'formaggio'


];

const list = document.querySelector('ul');


// for (let i = 0; i < listMarket.length; i++) {
//     const listItem = document.createElement('li');
//     listItem.innerHTML = listMarket[i];
//     list.appendChild(listItem);
    
// }

let i = 0;
while (i < listMarket.length) {
    const listItem = document.createElement('li');
    listItem.innerHTML = listMarket[i];
    list.appendChild(listItem);
    
    i++;
}