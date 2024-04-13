import { firstName, lastName } from "./App";

function ComponentC() {
  return (
    <>
      <firstName.Consumer>
        {(fname) => {
          return (
            <>
              <lastName.Consumer>
                {(lname) => {
                  return (
                    <>
                      <h1>
                        Welcome developer {fname} {lname}
                      </h1>
                    </>
                  );
                }}
              </lastName.Consumer>
            </>
          );
        }}
      </firstName.Consumer>
    </>
  );
}

export default ComponentC;
