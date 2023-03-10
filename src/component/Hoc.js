import React, { useState } from "react";

const Hoc = (Wrapdedcomponent,num) => {
  function Hoc(props) {
    const [counter, setcounter] = useState(0);

    const increment = () => {
      setcounter(counter + num);
    };

    return (
      <>
        <Wrapdedcomponent counter={counter} increment={increment} {...props} />
      </>
    );
  }

  return Hoc;
}
export default Hoc;
