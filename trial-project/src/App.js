import Expenses from './components/Expenses/Expenses'

const App = () => {
  const expenses = [
    {
      id: "e1",
      date: new Date(),
      title: "new car",
      amount: "RS 4cr",
      location: "delhi",
    },
    {
      id: "e2",
      date: new Date(),
      title: "decoratives",
      amount: "RS 1000",
      location: "delhi",
    },
    {
      id: "e3",
      date: new Date(),
      title: "electricity bill",
      amount: "RS 8000",
      location: "delhi",
    },
    {
      id: "e4",
      date: new Date(),
      title: "domestic props",
      amount: "RS 10000",
      location: "delhi",
    }
  ];

  return (
    <div>
      <Expenses items = {expenses} />
    </div>
  );
}

export default App;
