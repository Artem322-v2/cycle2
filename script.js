for (let i = 0; i < 101; i++) {
    console.log(i)
}


let i = 0;
let a = 0;
while (i < 100) {
    a = a + (i + 1);
    i++
}
console.log(a)





let i = 1;
while (i <= 100) {
    if (i % 2) {
        if (i % 3) {
            if (i % 5) {
                if (i % 7) {
                    if (i !== 1) {
                        console.log(i)
                    }
                } else if (i == 7) {
                    console.log(i)
                }
            } else if (i == 5) {
                console.log (i)
            }
        } else if (i == 3) { 
            console.log(i)
        }
    } else if (i == 2) {
        console.log(i)
    }
    i++;
}
