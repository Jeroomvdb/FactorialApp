function factorial() {
    let inputElement = document.getElementById("input");
    inputV = inputElement.value;
    let factResult = 1;
    Array.from({ length: inputV }).forEach(_ => {
        factResult *= inputV;
        inputV--;
    });
    document.getElementById("result").innerHTML = `Result: ${factResult}`
}