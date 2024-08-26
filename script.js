const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const numberOutput = document.getElementById("output");

const conversion = (num) => {
  const ref = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];
  const res = [];

  ref.forEach(([roman, value]) => {
    while (num >= value) {
      res.push(roman);
      num -= value;
    };
  });
  numberOutput.textContent = res.join("");
};

const clearInput = () => {
  numberInput.value = "";
};

const redBox = () => {
    numberOutput.classList.remove("hidden");
    numberOutput.classList.remove("result");
    numberOutput.classList.add("error");
};

const greenBox = () => {
    numberOutput.classList.remove("hidden");
    numberOutput.classList.remove("error");
    numberOutput.classList.add("result");
};

convertBtn.addEventListener("click", () => {
  if (!numberInput.value) {
    redBox();
    numberOutput.textContent = "Please enter a valid number.";
    clearInput();
  } else if (numberInput.value >= 4000) {
    redBox();
    numberOutput.textContent = "Please enter a number less than or equal to 3999.";
    clearInput();
  } else if (numberInput.value <= 0) {
    redBox();
    numberOutput.textContent = "Please enter a number greater than or equal to 1.";
    clearInput();
  } else {
    greenBox();
    conversion(numberInput.value);
    clearInput();
  };
});