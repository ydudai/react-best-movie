export function getMovieList() {
    return (
        [
            {
                "id": 1,
                "title": "The Shawshank Redemption",
                "rating": 4.65,
                "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                "fileName": "Showshank-redemption.jpg"
            },
            {
                "id": 2,
                "title": "The Godfather",
                "rating": 4.60,
                "description": "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
                "fileName": "godfather.jpg"
            },
            {
                "id": 3,
                "title": "The Dark Knight",
                "rating": 4.50,
                "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                "fileName": "darkKnight.jpg"
            },
            {
                "id": 4,
                "title": "The Godfather II",
                "rating": 4.48,
                "description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
                "fileName": "godfather-2.jpg"
            },
            {
                "id": 5,
                "title": "12 Angry Men",
                "rating": 4.46,
                "description": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
                "fileName": "angryMan.jpg"
            },
            {
                "id": 6,
                "title": "Schindler's List",
                "rating": 4.45,
                "description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
                "fileName": "shindlerList.jpg"
            },
            {
                "id": 7,
                "title": "Lord of the Rings 1",
                "rating": 4.35,
                "description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
                "fileName": "lordOfTherings.jpg"
            },
            {
                "id": 8,
                "title": "Pulp Fiction",
                "rating": 4.25,
                "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                "fileName": "pulpFiction.jpg"
            },
            {
                "id": 9,
                "title": "Lord of the Rings 2",
                "rating": 4.20,
                "description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
                "fileName": "lordOfTherings-TheFellowshipOfTheRing.jpg"
            },
            {
                "id": 10,
                "title": "The Good, the Bad and the Ugly",
                "rating": 4.10,
                "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
                "fileName": "Goodbadugly.jpg"
            }
        ]
    )
}


export function getSortedMovieList() {
    let mList = getMovieList();
    mList.sort((a, b) => b.rating - a.rating);
    return mList;
}


/**
 * 
 * @param {*} n index of top movie
 * @returns 
 */
export function getTopMovies(n) {
    let mSortedList = getSortedMovieList()
    return (mSortedList.slice(0, n))
}


export const randomIntArrayInRange = (min, max, n = 1) =>
    Array.from(
        { length: n },
        () => Math.floor(Math.random() * (max - min + 1)) + min
    );


export const randomUniqueIntArrayInRange = (max, min, n) => {
    let arr = []
    while (arr.length < n) {
        let num = Math.floor(Math.random() * (max - min) + min);
        if (!arr.includes(num)) {
            arr.push(num)
        }
    }
    return arr;
}


const ListService = {
    getMovieList,
    getSortedMovieList,
    getTopMovies,
    randomIntArrayInRange,
    randomUniqueIntArrayInRange
}
  

export default ListService