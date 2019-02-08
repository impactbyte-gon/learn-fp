function createFunction() {
  console.log('.............')

  function newFunction(name) {
    console.log(name)
  }

  return newFunction
}

const newFunction = createFunction()

newFunction('Haidar')
