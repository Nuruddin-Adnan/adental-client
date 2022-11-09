import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 1000000);
    return number;
}

const useRating = (rating) => {

    // Round to nearest half
    rating = Math.round(rating * 2) / 2;
    const output = [];

    // Append all the filled whole stars
    for (var i = rating; i >= 1; i--)
        output.push(<BsStarFill key={generateRandomNumber()} style={{ color: 'gold', margin: '2px' }} />);

    // If there is a half a star, append it
    if (i === .5) output.push(<BsStarHalf key={generateRandomNumber()} style={{ color: 'gold', margin: '2px' }} />);

    // Fill the empty stars
    for (let i = (5 - rating); i >= 1; i--)
        output.push(<BsStar key={generateRandomNumber()} style={{ color: 'gold', margin: '2px' }} />);

    return output;
}

export default useRating;