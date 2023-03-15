import React, { useState, useEffect } from "react";

function Datafetching() {
  const [data, setdata] = useState({});
  const [id, setid] = useState(null);

  const fetchdata = async (id) => {
    const file = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const dat = await file.json();
    setdata(dat);
  };

 const buttonfetch=()=>{

    fetchdata(id);

 }
    
 

  return (
    <>
      <input
        type="number"
        placeholder="enter id"
        onChange={(e) => setid(e.target.value)}
      />
      <button onClick={buttonfetch}>fetch</button>
      {id==null ? <h2>Load..</h2>:<div>{data.title}</div>}

    
    </>
  );
}

export default Datafetching;
