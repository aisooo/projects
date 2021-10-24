let numInpt = document.getElementById("inp_part");
let solve = document.getElementById("button");

solve.addEventListener("click", function () {
  let value = numInpt.value;
  let end = document.querySelector(".end");

  end.innerHTML = `Это будет: ${eval(value)}`;
});
