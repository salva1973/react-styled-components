export const colors = {
  secondary: '#ff4455',
}

// we could have also default types (e.g. for the color)
// using an object we can ignore the order of args
export const setupBorder = ({ width, type = 'solid', color = 'red' }) => {
  return `${width}px ${type} ${color}`
}
