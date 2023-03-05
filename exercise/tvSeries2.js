function filmRatings(input){
    let movieNumber = Number(input[0]);
    let movieFinalRating = 0;
    let movieMaxRating = 0;
    let movieMaxRatingName = 0;
    let movieMinRating = 10000;
    let movieMinRatingName = 0;
    
    for (let i = 1; i < input.length; i+=2) {
       let movieName = input[i];
       let movieRating = Number(input[i + 1]);
       movieFinalRating = movieRating + movieFinalRating;
    
    
       if (movieRating > movieMaxRating) {
         movieMaxRating = movieRating;
         movieMaxRatingName = movieName;
    
       } 
       if (movieRating < movieMinRating) {
         movieMinRating = movieRating;
         movieMinRatingName = movieName;
    
       } 
    
    }   
    let movieAverageRating = movieFinalRating/movieNumber;
    console.log(`${movieMaxRatingName} is with highest rating: ${movieMaxRating.toFixed(1)}`);
    console.log(`${movieMinRatingName} is with lowest rating: ${movieMinRating.toFixed(1)}`);
    console.log(`Average rating: ${movieAverageRating.toFixed(1)}`);
   }
   filmRatings (['5','A Star is Born',  '7.8',  'Creed 2',  '7.3', 'Mary Poppins', '7.2', 'Vice', '7.2','Captain Marvel','7.1'])