const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];
function getRandomUser(){

  fetch('https://randomuser.me//api')
  .then(res => res.json())
  .then(data => {
    const user = {Name : `${data.results[0].name.first} ${data.results[0].name.last}`,
                  Money : Math.floor(Math.random() * 1000000)};
                  store(user);});

}

function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

function store(user){
  data.push(user);

  updateDom();
}
function updateDom(providedData = data){
main.innerHTML = "<h2><strong>Person</strong>Wealth</h2>"

providedData.forEach(item => {
  const div = document.createElement('div');
  div.classList.add('person');
  div.innerHTML = `<strong>${item.Name}</strong>$${thousands_separators(item.Money)}.00`;
  main.appendChild(div);
})
}
function doubleMoney(){
  data.forEach(item => {
    item.Money *= 2;
  });
  updateDom();
}
function million(){
  data = data.filter(item => item.Money > 1000000);
  updateDom();
}
function sortFun(){
  data.sort((a,b) => {
    return b.Money - a.Money;
  });
  updateDom();
}
function totalWelth(){
  var total = 0;
  data.forEach(item => {
    total += parseInt(item.Money);
  });
  const div = document.createElement('div');
  div.classList.add('total');
  div.innerHTML = `<strong>TOTAL</strong>$${thousands_separators(total)}.00`;
  main.appendChild(div);
}
getRandomUser();
getRandomUser();
getRandomUser();
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', million);
sortBtn.addEventListener('click', sortFun);
calculateWealthBtn.addEventListener('click', totalWelth);