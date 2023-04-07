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
const spendingsCol = document.getElementById('spendings-col')
const payBtn = document.getElementById('pay-btn')

payBtn.addEventListener('click', () => {
  console.log('clicked')
})


document.getElementById('accounts-container').addEventListener('click', (e) => {

  if (e.target.id === 'account-1') {
    renderSpendings(0)
  } else if (e.target.id === 'account-2') {
    renderSpendings(1)
  } else if (e.target.id === 'account-3') {
    renderSpendings(2)
  } 


  // if (spendingsCol.classList.contains('hidden')) {

  // }

  else {
    spendingsCol.classList.add('hidden');
    wrapper.classList.remove('two-cols'); 
  }
});

// page load - render account data

function renderAccounts() {
  const accounts = document.getElementById('accounts');
  let accountsHtml = '';
  // use destructuring for account properties

  accountsData.forEach(account => { // iterate through accounts data
    console.log(account.id)
    console.log(account.title)
    console.log(account.balance)

    accountsHtml += `
      <div id="account-${account.id}" class="account">
        <h3>${account.title}</h3>
        <span>$ ${account.balance.toLocaleString()}</span>
      </div>
    `

  })

  accounts.innerHTML = accountsHtml;
}

// render spending data based on selected account
function renderSpendings(index) {
  wrapper.classList.add('two-cols');
  spendingsCol.classList.remove('hidden');

  const spendings = document.getElementById('spendings')
  let spendingsHtml = '';

  if (!accountsData[index].spendings.length) {
    console.log('no spending data')
    // add 'info' class, 
    spendingsHtml = `
    <div>
      <span>No spending data available.</span>
    </div>`
  }

  // the the right index for the accounts data
  accountsData[index].spendings.forEach(account => {
    spendingsHtml += `
    <div class="spend-row">
      <span>${account.category}</span><span>$ ${account.spent.toLocaleString()}</span>
    </div>
    `
  })

  spendings.innerHTML = spendingsHtml;

}


renderAccounts(); // render accounts on page load
