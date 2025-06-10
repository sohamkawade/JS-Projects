let cel = document.getElementById("cel");
let feh = document.getElementById("feh");

cel.addEventListener('input', () => {
    // console.log("working")
    let celvalue = parseFloat(cel.value)
    let f = (celvalue * 9 / 5) + 32;
    if (!Number.isInteger(f)) {
        f = f.toFixed(4)
    }
    feh.value = f;
})
feh.addEventListener('input', () => {
    // console.log("working")
    let fehvalue = parseFloat(feh.value)
    let c = (fehvalue - 32) * 5 / 9
    if (!Number.isInteger(c)) {
        c = c.toFixed(4)
    }
    cel.value = c;
})