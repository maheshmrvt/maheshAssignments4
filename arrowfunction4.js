const filterCandidates = (candidates, threshold) => {
    return candidates
        .filter(candidate => candidate.votes > threshold)
        .map(candidate => candidate.name);
};
const candidates = [
    { name: 'pawan kalyan', votes: 50000 },
    { name: 'balayya', votes: 30000 },
    { name: 'Jaganmohan reddy', votes: 70000 },
    { name: 'lokesh', votes: 90000 }
];
const threshold = 4000;
const result = filterCandidates(candidates, threshold);
console.log(result);
