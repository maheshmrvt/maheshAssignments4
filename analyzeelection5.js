const analyzeElection = (threshold, ...candidates) => {
    const filterCandidates = (candidates, threshold) => {
        return candidates.filter(candidate => candidate.votes > threshold);
    };
    const calculateTotalVotes = (candidates) => {
        if (candidates.length === 0) {
            return 0;
        }
        return candidates[0].votes + calculateTotalVotes(candidates.slice(1));
    };
    const filteredCandidates = filterCandidates(candidates, threshold);
    const totalVotes = calculateTotalVotes(filteredCandidates);
    const candidateNames = filteredCandidates.map(candidate => candidate.name);
    return {
        candidateNames,
        totalVotes
    };
};
const candidates = [
    { name: 'pawan kalyan', votes: 50000 },
    { name: 'balayya', votes: 30000 },
    { name: 'jaganmohan reddy', votes: 70000 },
    { name: 'lokesh', votes: 90000 }
];
const threshold = 4000;
const result = analyzeElection(threshold, ...candidates);
console.log(result);  
