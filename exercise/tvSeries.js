function series (input) {
    let movies = Number(input[0]);
    let maxRating = 0;
    let maxRatingMovie = "";
    let lowestRating = 200000;
    let lowestRatingMovie = "";
    let totalRating = 0;

    for(let i = 1; i < input.length; i+=2) {
        let currentMovie = input[i];
        let currentRating = Number(input[i + 1]);
        totalRating += currentRating;

        if(currentRating > maxRating) {
            maxRating = currentRating;
            maxRatingMovie = currentMovie;
        }

        if(currentRating < lowestRating) {
            lowestRating = currentRating;
            lowestRatingMovie = currentMovie;
        }
        

    }
    let averageRating = totalRating / movies;
    console.log(`${maxRatingMovie} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${lowestRatingMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

series
(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])