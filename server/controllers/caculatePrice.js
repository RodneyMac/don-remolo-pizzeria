
const calculatePrice = (orden)=>{
    let finalPrice = 0;
    for (const i in orden) {
     finalPrice += orden[i].price
    }
    return finalPrice
  }

  export default calculatePrice
