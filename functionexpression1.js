const calculateVotes = function(candidateName, votes, region) {
    return `Candidate: ${candidateName}, Votes: ${votes}, Region: ${region}`;
};
const result = calculateVotes('Pawan Kalyan', 5000, 'Pitapuram');
console.log(result);
