import accountsData from './data.js'

const wrapper = document.getElementById('wrapper');
const spendingsCol = document.getElementById('spendings-col');
// update: combine listeners under single parent element
wrapper.addEventListener('click', (e) => {
  const selectedAccount = e.target.closest('.account')
  if (e.target.tagName === 'BUTTON') {
    spendingsCol.classList.add('hidden');
    wrapper.classList.remove('two-cols'); 
    deselectAccounts();
  } else if (selectedAccount) {
    deselectAccounts();
    selectedAccount.classList.add('selected');
    renderSpendings(Number(selectedAccount.id));
  }
});

// listen for clicks on accounts
// document.getElementById('accounts-container').addEventListener('click', (e) => {
//   const selectedAccount = e.target.closest('.account')

//   if (selectedAccount) {
//     deselectAccounts();
//     selectedAccount.classList.add('selected');
//     renderSpendings(Number(selectedAccount.id));
//   }


// });

// remove selected styling from accounts
function deselectAccounts() {
  const allAccounts = document.querySelectorAll('.account');
  allAccounts.forEach(account => {
    account.classList.remove('selected');
  });
}

// render account data
function renderAccounts() {
  const accounts = document.getElementById('accounts');
  let accountsHtml = '';

  accountsData.forEach(account => { // iterate through accounts data
    const {id, title, balance } = account;
    accountsHtml += `
      <div id="${id}" class="account">
        <h3>${title}</h3>
        <span>$ ${balance.toLocaleString()}</span>
      </div>
    `
  });
  accounts.innerHTML = accountsHtml;
}

function renderSpendings(targetId) { // html id of clicked account
  wrapper.classList.add('two-cols'); // make layout two columns
  spendingsCol.classList.remove('hidden'); // show the spendingsCol div
  // get a match for the clicked account id and corresponding id in accountsData
  const targetAccountObj = accountsData.filter(account => { // filter through accountsData
    return account.id === targetId; // match passed in id with accountsData obj id
  })[0];

  const spendings = document.getElementById('spendings') // get spendings parent div
  let spendingsHtml = ''; // initialize empty html
  // check if there is spending data available
  if (!targetAccountObj.spendings.length) { // if not, display appropriate messaging
    spendingsHtml = `
    <div>
      <span class='info'>No spending data available.</span>
    </div>`
  }

  let barWidth = 100; // set initial spending bar width
  targetAccountObj.spendings.forEach(account => {   // get the right index for the accounts data
    spendingsHtml += `
    <div class="spend-row" style="width: ${barWidth}%">
      <span>${account.category}</span><span>$ ${account.spent.toLocaleString()}</span>
    </div>
    `
    barWidth -= 15; //decrement spending bar width for subsequent iterations
  });
  spendings.innerHTML = spendingsHtml;
}

renderAccounts(); // render accounts on page load
