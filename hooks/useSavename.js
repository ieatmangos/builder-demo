import React from 'react'

export default function useSavename() {
    const [savename, set] = React.useState('Select to load')
    React.useEffect(()=>{
        if (typeof window !== "undefined") {
            const local = JSON.parse(localStorage.getItem("savename"))
            if(local !== savename){
                set(local)
            }
        }
    })
    return savename
}
