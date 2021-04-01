export const pagePro = (arr, pageNum, itemsCount) => {
    let start = (pageNum - 1) * itemsCount ;
    let end = start + itemsCount;
    let newArr = arr.slice(start,end)
    return newArr
}

