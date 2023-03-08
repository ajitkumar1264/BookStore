import React, { useState } from "react";

const Hoc = (Wrapdedcomponent) => {
  function Hoc(props) {
    const [counter, setcounter] = useState(0);

    const increment = () => {
      setcounter(counter + 1);
    };

    return (
      <>
        <Wrapdedcomponent counter={counter} increment={increment} />
      </>
    );
  }

  return Hoc;
}
export default Hoc;
