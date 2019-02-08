function callName(name) {
  if (name === '') return name
  console.log(name + '-')
  callName(name.substring(1))
}

callName('HAIDAR')
