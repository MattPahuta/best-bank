const accounts = [
  {
    id: 1,
    title: "Main Account",
    balance: "6700.56",
    spendings: [
      {
          category: "Rent",
          spent: "1450"
      },
      {
          category: "Groceries",
          spent: "564"
      },
      {
          category: "Restaurants",
          spent: "123"
      },
      {
          category: "Transport",
          spent: "81"
      },
      {
          category: "Internet",
          spent: "50"
      }
    ]
  },
  {
    id: 2,
    title: "Expenses",
    balance: "5134.63",
    spendings: [
      {
          category: "Netflix",
          spent: "19.99"
      },
      {
          category: "HBO Max",
          spent: "14.99"
      },
      {
          category: "Setapp",
          spent: "9.99"
      }
    ]
  },
  {
    id: 3,
    title: "Savings",
    balance: "36500.12",
    spendings: []
  }
]


document.getElementById('accounts-inner').addEventListener('click', (e) => {
  if (e.target.id === 'main-account') {
    console.log('main account clicked')
  } else if (e.target.id === 'expenses-account') {
    console.log('expenses account clicked')
  } else if (e.target.id === 'savings-account') {
    console.log('savings account clicked')
  }
});

// update wrapper max-width to 1096px 