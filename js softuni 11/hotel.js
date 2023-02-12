function hotel(input) {
    let storeys = Number(input[0]);
    let rooms = Number(input[1]);
    for(let i = storeys; i > 0; i--) {
        let buff = "";                      //между двата цикъла за да пренася всяка нова итерация на външния цикъл на нов ред.
        for(let j = 0; j < rooms; j++) {
            if(i === storeys) {
                buff += ("L" + i + j + " ")
            }else if(i % 2 === 0) {
                buff += ("O" + i + j + " ")
            } else {
                buff += ("A" + i + j + " ")
            }
        }
        console.log(buff);
    }
    

}

hotel(["6","4"]) 