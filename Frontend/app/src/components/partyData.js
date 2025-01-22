// partyData.js

const parties = [
    { name: 'RDPC', color: 'green' },
    { name: 'UPC', color: 'red' },
    { name: 'UDC', color: 'orange' },
    { name: 'BDC', color: 'yellow' },
    { name: 'SDF', color: 'grey' },
];

const generateRandomPercentages = (parties) => {
    const percentages = parties.map(() => Math.random());
    const total = percentages.reduce((acc, curr) => acc + curr, 0);
    const normalizedPercentages = percentages.map(p => Math.round((p / total) * 100));

    const dominantIndex = Math.floor(Math.random() * parties.length);
    normalizedPercentages[dominantIndex] = Math.max(30, normalizedPercentages[dominantIndex]);
    
    const sum = normalizedPercentages.reduce((acc, curr) => acc + curr, 0);
    const adjustment = 100 - sum;

    for (let i = 0; i < normalizedPercentages.length; i++) {
        if (i !== dominantIndex) {
            normalizedPercentages[i] = Math.max(0, normalizedPercentages[i] + Math.floor(adjustment / (parties.length - 1)));
        }
    }

    const finalSum = normalizedPercentages.reduce((acc, curr) => acc + curr, 0);
    const finalAdjustment = 100 - finalSum;

    normalizedPercentages[dominantIndex] += finalAdjustment;

    return normalizedPercentages;
};

export const getPartyDataForFeatures = (featureId) => {
    const percentages = generateRandomPercentages(parties);
    const partyData = parties.map((party, index) => ({
        name: party.name,
        color: party.color,
        percentage: percentages[index]
    }));

    return {
        featureId: featureId,
        parties: partyData
    };
};

