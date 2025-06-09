import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <>
      <div>
        <h1 className="bg-red-500 text-center">Hello Bois</h1>
      </div>
      <Card title={"welcome"} para={"Hello Everyone"} />
      <Card title={"HI"} para={"sfsdsd"} />
      <Card title={"guys"} para={"Hello Evdryone"} />
      <Card title={"luffy"} para={"Hello svxvdfb zEveryone"} />
    </>
  );
};

const Card = (props) => {
  return (
    <>
      <div href="#" className="max-w-md border-[2px] rounded-lg h-[200px]">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          {props.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-center">
          {props["para"]}
        </p>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
