function nums1to100(input) {
    let num = Number(input[0])
    for(i = 2; i <=100; i++) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}

nums1to100(["4"])