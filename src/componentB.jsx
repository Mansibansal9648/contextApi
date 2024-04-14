import ComponentC from "./componentC";
import { firstName, lastName } from "./App";
import { useContext } from "react";

function ComponentB() {
  const fname = useContext(firstName);
  const lname = useContext(lastName);
  return (
    <>
      <h1>
        Welcome developer {fname} {lname}
      </h1>
      <ComponentC />
    </>
  );
}

export default ComponentB;
