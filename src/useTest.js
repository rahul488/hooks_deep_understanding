import { useEffect, useState } from "react";

const useTest = (isTest) => {
  const [test, setTest] = useState("");

  useEffect(() => {
    let x = 4;
    setTest(Math.random() * 2);
    return () => {
      x = 0;
      console.log("unmountedd.....");
    };
  }, [isTest]);

  const triggerTest = () => {
    setTest(Math.random() * 2);
  };

  return { test, triggerTest };
};
export default useTest;
