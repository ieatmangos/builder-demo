import React from 'react'

export function useBouncer (fn, delay = 0) {
  const ref = React.useRef({})
  ref.current.fn = fn
  const bouncer = React.useCallback(() => {
    if(ref.current.timeout){
      clearTimeout(ref.current.timeout)
    }
    ref.current.timeout = setTimeout(()=> {
      ref.current.fn()
      ref.current.timeout = undefined
    }, [delay])
  },[delay])

  return bouncer
}

