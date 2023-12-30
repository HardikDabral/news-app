import React,{useState} from 'react'

export default function Test(props) {
    console.log(props)
    const [childCount, setChildCount] = useState(0)

    const handleChildCountIncrease = ()=>{
        setChildCount(childCount+1)
    }

    return ( 
        <>
            <div >
                <button onClick={handleChildCountIncrease}>Click Me</button>
                <p>Child {childCount}</p>
            </div>
            <div>
                <p>title {props.title}</p>
                <p>Parent {props.parentCount}</p>
            </div> 
        </>
    )
}
