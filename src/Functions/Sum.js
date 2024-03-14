import React, { useEffect } from "react"

const Sum = () => {
    const sum = (a, b) => {
        let c = a + b
        return c
    }
    useEffect(() => {
        console.log(sum(5, 4))
    }, [])
    return (
        <div>Sum</div>
    )
}

export default Sum