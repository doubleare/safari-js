export const Dots = (arr, itemCount, loc,newArr) => {
    const countOfpages = Math.ceil(arr.length / itemCount);

    for (let i = 1; i <= countOfpages; i++) {
      const li = document.createElement("li");
      li.className = "product__num";
      li.innerHTML = i;
      loc.append(li);
      newArr.push(li)
    };
};