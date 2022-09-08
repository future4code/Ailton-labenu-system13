
export const BRtoUS = (data:string):string => {
    const dates = data.split("/")
    return `${dates[2]}-${dates[1]}-${dates[0]}`
}
