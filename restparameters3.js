const totalVotes = function(...votes) {
    return votes.reduce((total, vote) => total + vote, 0);
};
const total = totalVotes(700, 500, 100, 60);
console.log(total);
