export const transformDate = (date?:string) :any => {
    if (date) {
        return date.substring(0, 10)
    }
    return
}
