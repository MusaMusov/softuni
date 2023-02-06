function library(input) {
    let index = 0;
    let searchedBook = input[index];
    index++;

    let books = input[index];
    index++;
    let booksChecked = 0;    

    while(books !== "No More Books") {
        if(books === searchedBook) {
            console.log(`You checked ${booksChecked} books and found it.`);
            break;
        }
        books = input[index];
        booksChecked++
        index++
    }

    if(books === "No More Books"){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksChecked} books.`);

    }
}

library
([
"Troy",
"Stronger",
"Life Style",
"Troy"
]) 