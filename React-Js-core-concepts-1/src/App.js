import logo from "./logo.svg";
import "./App.css";

const number = 5000;
const singers = [
  { name: "Imran", job: "singer1" },
  { name: "Eva Rahman", job: "singer2" },
  { name: "Hero Alam", job: "singer3" },
  { name: "Dr.Mahfuzur", job: "singer4" },
  { name: "Mickel Jackson", job: "singer5" },
];
const singerStyle = {
  color: "purple",
  backgroundColor: "white",
  padding: "14px",
  borderRadius: "10px",
};

function App() {
  const nayoks = [
    "Rubel",
    "Kubel",
    "BappaRaz",
    "sakib khan",
    "jasim",
    "kasim",
    "salman sah",
    "anowar",
  ];
  return (
    <div className="App">
      {nayoks.map((nayok) => (
        <li>{nayok}</li>
      ))}
      {/* {nayoks.map((nayok) => (
        <Person name={nayok}></Person>
      ))} */}
      {singers.map(singer => <Person name={singer.name}></Person>)}
      {/* <Person name ={nayoks[0]} naika = 'mousumi'></Person>
      <Person name = {nayoks[1]} naika = 'cheka'></Person>
      <Person name = {nayoks[2]} naika = 'opu biswas'></Person> */}
      <h2 id="best friend">Hello, Friend!</h2>
      <Friend phone="01934854332" movie="shinhgam"></Friend>
      <Friend phone="01840532466" movie="Raja"></Friend>
    </div>
  );
}
function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1> {props.name}</h1>
      <h2>{props.naika}</h2>
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className="container">
      <h1>Movie : {props.movie}</h1>
      <h3> phone no: {props.phone}</h3>
    </div>
  );
}

export default App;
