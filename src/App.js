import HomePage from "./Components/Homepage/HomePage";

function App() {
  // const [count, setCount] = useState("");

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setCount(data);
  //     });
  // }, []);

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
