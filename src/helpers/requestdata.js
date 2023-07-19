import MONK_DATA from "../data/MOCK_DATA.json"

export const requestData = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(MONK_DATA)
        },300)
    })
  }