function createButton(value) {
  console.log(value)

  function createButtonColor(color) {
    console.log(`${value} and ${color} button`)
  }

  return createButtonColor
}

const myButton = createButton('Click Me')

myButton('red')
