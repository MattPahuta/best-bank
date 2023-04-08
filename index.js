const accountsData = [
  {
    id: 1,
    title: "Main Account",
    balance: 6700.56,
    spendings: [
      {
          category: "Rent",
          spent: 1450
      },
      {
          category: "Groceries",
          spent: 564
      },
      {
          category: "Restaurants",
          spent: 123
      },
      {
          category: "Transport",
          spent: 81
      },
      {
          category: "Internet",
          spent: 50
      }
    ]
  },
  {
    id: 2,
    title: "Expenses",
    balance: 5134.63,
    spendings: [
      {
          category: "Netflix",
          spent: 19.99
      },
      {
          category: "HBO Max",
          spent: 14.99
      },
      {
          category: "Setapp",
          spent: 9.99
      }
    ]
  },
  {
    id: 3,
    title: "Savings",
    balance: 36500.12,
    spendings: []
  }
]

const wrapper = document.getElementById('wrapper');
const spendingsCol = document.getElementById('spendings-col');
const btns = document.querySelectorAll('.btn');

// add listener to buttons
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('clicked')
    spendingsCol.classList.add('hidden');
    wrapper.classList.remove('two-cols'); 
    deselectAccounts();
  })
});

document.getElementById('accounts-container').addEventListener('click', (e) => {
  // get the clicked account based on account ID
  switch (e.target.id) {
    case '1':
      deselectAccounts();
      e.target.classList.add('selected');
      renderSpendings(0);
      break;
    case '2':
      deselectAccounts();
      e.target.classList.add('selected');
      renderSpendings(1);
      break;
    case '3':
      deselectAccounts();
      e.target.classList.add('selected');
      renderSpendings(2);
      break;
  } 

});

// remove selected styling from accounts
function deselectAccounts() {
  const allAccounts = document.querySelectorAll('.account');
  allAccounts.forEach(account => {
    account.classList.remove('selected')
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

// render spending data based on selected account
function renderSpendings(index) {
  wrapper.classList.add('two-cols');
  spendingsCol.classList.remove('hidden');

  const spendings = document.getElementById('spendings')
  let spendingsHtml = '';
  // check if there is spending data available
  if (!accountsData[index].spendings.length) { 
    spendingsHtml = `
    <div>
      <span class='info'>No spending data available.</span>
    </div>`
  }
  // get the right index for the accounts data
  accountsData[index].spendings.forEach(account => {
    spendingsHtml += `
    <div class="spend-row">
      <span>${account.category}</span><span>$ ${account.spent.toLocaleString()}</span>
    </div>
    `
  });
  spendings.innerHTML = spendingsHtml;
}

renderAccounts(); // render accounts on page load
