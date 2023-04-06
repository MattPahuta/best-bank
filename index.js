const accounts = [
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

document.getElementById('accounts').addEventListener('click', (e) => {

  wrapper.classList.toggle('two-cols'); // update layout for two col view (1096px max-width)
  spendingsCol.classList.toggle('hidden'); // show the spendings column

  if (e.target.id === 'main-account') {
    console.log('main account clicked')
  } else if (e.target.id === 'expenses-account') {
    console.log('expenses account clicked')
  } else if (e.target.id === 'savings-account') {
    console.log('savings account clicked')
  }
});

// page load - render account data

function renderAccounts() {
  const accountsCol = document.getElementById('accounts');
  let accountsHtml = '';

  accounts.forEach(account => {
    console.log(account.id)
    console.log(account.title)
    console.log(account.balance)

    accountsHtml += `
      <div id="account-${account.id}" class="account selected">
        <h3>${account.title}</h3>
        <span>$ ${account.balance.toLocaleString()}</span>
      </div>
    `

  })

  accountsCol.innerHTML = accountsHtml;
}

renderAccounts(); // render accounts on page load

// get correct spendings data 
// accounts[i].spendings = array of objects