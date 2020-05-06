const addSugar = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
      resolve('add sugar')
      },2000)
    })
  }
  
  const isTeaSweet = async () => {
    let resolvedValue = await addSugar()
    console.log(`Tea is not sweet enough, so ${resolvedValue}`)
  }
  
  isTeaSweet()