import {useState} from 'react';

const CallMemo =()=>{
    const [state,setState] = useState(0)
    return(
        <div className="m-4 p-2 w-96 h-96 border border-black">
            use Memo Usage...
            <p>{state}</p>
            <input type='number' onChange={(e)=>setState(e.target.value)} className='border-2 border-black'value={state}/>
        </div> 
    )
}
export default CallMemo;