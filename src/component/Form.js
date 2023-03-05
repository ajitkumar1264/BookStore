import React,{useState} from 'react'

function Form() {


const [data, setdata] = useState(
    {
        name:"",
        no:"",
        car:""
    }
)


    let formstyle={
        alignItems:'center',
        marginLeft: '75px',
        marginTop: '75px'
    }

    let labelstyle={

        marginLeft:'20px',
        marginRight: '10px'

    }

  
    const showdata=(e)=>{

        if(!data.car || !data.name || !data.no)  
        {
            alert("fill all the details")
        }
        else{
            alert(data.car)
        }
       e.preventDefault();
        
    }

  return (
    <>
    
    <form action="" onSubmit={showdata} style={formstyle}>
    <label style={labelstyle} htmlFor="name">enter name</label>
    <input type="text" placeholder='name' onChange={(e)=>setdata({...data,name:e.target.value})} name='name' />
    <label style={labelstyle} htmlFor="mobile">enter Mobile</label>
    <input type="Number" placeholder='mobileno'  onChange={(e)=>setdata({...data,no:e.target.value})} name='mobile' />
    <label style={labelstyle} htmlFor="cars">Select car</label>
    <select name="cars" onChange={(e)=>setdata({...data,car:e.target.value})} id="">
    <option value="GLS">M.GLS</option>
    <option value="x5">A.x5</option>
    <option value="q8">A.q8</option>
    </select>
    <button>submit here</button>
    </form>
   

    </>
  )
}

export default Form