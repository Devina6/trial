import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const expenses = [
    {
      id: "e1",
      date: new Date(),
      title: "car",
      amount: "4cr",
      location: "delhi",
    },
    {
      id: "e2",
      date: new Date(),
      title: "decoratives",
      amount: "1000",
      location: "delhi",
    },
    {
      id: "e3",
      date: new Date(),
      title: "electricity bill",
      amount: "8000",
      location: "delhi",
    },
    {
      id: "e4",
      date: new Date(),
      title: "domestic props",
      amount: "10000",
      location: "delhi",
    }
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
