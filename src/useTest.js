import { useEffect, useState } from "react";

const useTest = (isTest) => {
  const [test, setTest] = useState("");

  useEffect(() => {
    let x = 4;
    setTest(Math.random() * 2);
    console.log("normal---");
    const handler = setTimeout(() => {
      console.log("called");
    }, [1000]);
    return () => {
      x = 0;
      //if we remove clear time out even if cleaner function get called but the setTimeout will execute
      clearTimeout(handler);
      console.log("unmountedd.....");
    };
  }, [isTest]);

  const triggerTest = () => {
    setTest(Math.random() * 2);
  };

  return { test, triggerTest };
};
export default useTest;
