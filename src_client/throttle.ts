type OnTimeout = (value: number) => void

export default (time: number = 200, onTimeout: OnTimeout) => {
  let prev = 0
  let f: OnTimeout = onTimeout
  let timeout: any
  return {
    onChange: (value: number) => {
      if (value !== prev) {
        prev = value
        if (timeout) {
          clearTimeout(timeout)
        }
        timeout = setTimeout(() => f(Math.round(value)), time)
      }
    }
  }
}
