import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>
      please press me
    </button>
  );
}

function Hello() {
  return (
    <h1>Hello i am george</h1>
  );
}


export default function myApp() {
  return (
    <div>
      <Hello />
      <MyButton />
    </div>
  );

}
