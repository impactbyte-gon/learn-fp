const data = [
  {
    id: 1,
    text: 'Sleeping'
  },
  {
    id: 2,
    text: 'Flying'
  },
  {
    id: 3,
    text: 'Running'
  }
]

const sortedAlphabetically = data.map(item => {
  return item.text
})

console.log(sortedAlphabetically)
