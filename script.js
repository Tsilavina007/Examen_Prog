export default function howManyDuplicateAreEvem(arr) {
    arr = arr.map(x => Math.abs(x)).filter((a) => a%2==0).filter((v, i, arrNow) => arrNow.indexOf(v) !== i).filter((v, i, a) => a.indexOf(v) === i)
    return arr.length
}