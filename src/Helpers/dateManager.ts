export const transformDate = (date?:string) :any => {
    if (date) {
        return date.substring(0, 10)
    }
    return
}

// export const calcTimeToEndTask = (taskDate) => {
//     let now = new Date()

//     // now.substring(0, 10)

// }

export const selectComplexityColor = (complexity:any) => {
    if (complexity === 'medio') {
      return 'warning'
    } else if (complexity === 'dificil') {
      return 'danger'
    } else {
      return 'success'
    }
}