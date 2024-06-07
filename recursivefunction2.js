const verifyVotes = function(voteCounts) {
    if (voteCounts.length === 0) {
        return 0;
    }
    return voteCounts[0] + verifyVotes(voteCounts.slice(1));
};
const votesArray = [100, 200, 150, 50];
const totalVotes = verifyVotes(votesArray);
console.log(totalVotes);
