function forLoop(array) {
  for (let n = 0; n < 2; n++) {
    if (n === 1) {
      array.push('I am 1 strange loop.')
    }else {
        array.push('I am ${n} strange loops.')
    }
  } return array
}
