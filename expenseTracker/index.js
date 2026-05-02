let expenses = [];

function addExpense(amount, category) {
  expenses.push({ amount: amount, category: category });
  console.log("New expense added!");
}

function viewExpenses() {
  expenses.forEach((expense) => {
    console.log("Amount: " + expense.amount + " Category: " + expense.category);
  });
}

function totalExpenses() {
  let totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );
  console.log(totalExpense);
}

function filterCategory(category) {
  let filteredExpenses = expenses.filter(
    (expense) => expense.category === category,
  );
  filteredExpenses.forEach((expense) => {
    console.log("Amount: " + expense.amount);
  });
}
addExpense(100, "Food");
addExpense(200, "Clothes");
addExpense(100, "Furniture");
addExpense(250, "Food");

viewExpenses();

totalExpenses();

filterCategory("Food");
