
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const getCurrentTimestamp = () => {
  return parseInt((Date.now() - process.env.NEXT_PUBLIC_APP_BIRTH) / 1000)
}

export { wait, getCurrentTimestamp }