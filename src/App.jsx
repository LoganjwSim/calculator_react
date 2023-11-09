import { useState } from "react";
import CalInput from "./components/CalInput";
import CalNumberBtn from "./components/CalNumberBtn";
import CalDelBtn from "./components/CalDelBtn";
import CalOperatorBtn from "./components/CalOperatorBtn";
import CalEnterBtn from "./components/CalEnterBtn";

const App = () => {
  const [result, setResult] = useState("0");
  const [temp, setTemp] = useState();
  const [operator, setOperator] = useState();

  return (
    <main className="bg-black min-h-screen flex justify-center items-center">
      <div className="bg-red-500 px-8 py-12 rounded-lg shadow-md">
        <CalInput result={result} setResult={setResult} />
        <div className="grid grid-cols-4 mt-8 gap-4">
          <CalNumberBtn result={result} setResult={setResult} number="1" />
          <CalNumberBtn result={result} setResult={setResult} number="2" />
          <CalNumberBtn result={result} setResult={setResult} number="3" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="+"
            bgColor="bg-black active:bg-pink-400"
          />
          <CalNumberBtn result={result} setResult={setResult} number="4" />
          <CalNumberBtn result={result} setResult={setResult} number="5" />
          <CalNumberBtn result={result} setResult={setResult} number="6" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="-"
            bgColor="bg-black active:bg-blue-700"
          />
          <CalNumberBtn result={result} setResult={setResult} number="7" />
          <CalNumberBtn result={result} setResult={setResult} number="8" />
          <CalNumberBtn result={result} setResult={setResult} number="9" />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="*"
            bgColor="bg-black active:bg-green-700"
          />
          <CalEnterBtn
            result={result}
            setResult={setResult}
            temp={temp}
            setTemp={setTemp}
            operator={operator}
            setOperator={setOperator}
          />
          <CalNumberBtn result={result} setResult={setResult} number="0" />
          <CalDelBtn result={result} setResult={setResult} />
          <CalOperatorBtn
            result={result}
            setResult={setResult}
            setTemp={setTemp}
            setOperator={setOperator}
            inputOperator="/"
            bgColor="bg-black active:bg-red-700"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
