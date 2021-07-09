const grandPrixs = ['Australian','Spanish', 'Monaco', 'French', 'Canadian', 'Austrian', 'British', 'German', 'Dutch', 'Belgian', 'Italian', 'Japanese', 'American', 'Brazilian'];
const drivers = [
    {
        name: 'Max Verstappen',
        team: 'Red Bull Racing',
        nationality: 'Dutch',
        principal: 'Christian Horner',
    },
    {
        name: 'Lewis Hamilton',
        team: 'Mercedes',
        nationality: 'British',
        principal: 'Toto Wolff',
    },
    {
        name: 'Sergio Perez',
        team: 'Red Bull Racing',
        nationality: 'Mexican',
        principal: 'Christian Horner',
    },
    {
        name: 'Lando Norris',
        team: 'McLaren',
        nationality: 'British',
        principal: 'Andreas Seidl',
    },
    {
        name: 'Valterri Bottas',
        team: 'Mercedes',
        nationality: 'Finnish',
        principal: 'Toto Wolff',
    },
    {
        name: 'Charles Leclerc',
        team: 'Ferrari',
        nationality: 'Monaco',
        principal: 'Mattia Binotto',
    },
    {
        name: 'Carlos Sainz',
        team: 'Ferrari',
        nationality: 'Spanish',
        principal: 'Mattia Binotto',
    },
    {
        name: 'Daniel Ricciardo',
        team: 'McLaren',
        nationality: 'Australian',
        principal: 'Andreas Seidl',
    },
    {
        name: 'Pierre Gasly',
        team: 'AlphaTauri',
        nationality: 'French',
        principal: 'Franz Tost',
    },
    {
        name: 'Sebastian Vettel',
        team: 'Aston Martin',
        nationality: 'German',
        principal: 'Otmar Szafnauer',
    },
    {
        name: 'Fernando Alonso',
        team: 'Alpine',
        nationality: 'Spanish',
        principal: 'Davide Brivio',
    },
    {
        name: 'Lance Stroll',
        team: 'Aston Martin',
        nationality: 'Canadian',
        principal: 'Otmar Szafnauer',
    },
    {
        name: 'Esteban Ocon',
        team: 'Alpine',
        nationality: 'French',
        principal: 'Davide Brivio',
    },
    {
        name: 'Yuki Tsunoda',
        team: 'AlphaTauri',
        nationality: 'Japanese',
        principal: 'Franz Tost',
    },
    {
        name: 'Kimi Raikkonen',
        team: 'Alfa Romeo',
        nationality: 'Finnish',
        principal: 'Frederic Vasseur',
    },
    {
        name: 'Antonio Giovinazzi',
        team: 'Alfa Romeo',
        nationality: 'Italian',
        principal: 'Frederic Vasseur',
    },
    {
        name: 'George Russell',
        team: 'Williams',
        nationality: 'British',
        principal: 'Jost Capito',
    },
    {
        name: 'Mick Schumacher',
        team: 'Haas',
        nationality: 'German',
        principal: 'Guenther Steiner',
    },
    {
        name: 'Nikita Mazepin',
        team: 'Haas',
        nationality: 'Russian',
        principal: 'Guenther Steiner',
    },
    {
        name: 'Nicholas Latifi',
        team: 'Williams',
        nationality: 'Canadian',
        principal: 'Jost Capito',
    },

];
const randArrayIndex = arr => {
    let randIndex = arr[Math.floor(Math.random()*arr.length)];
    return randIndex;
};
const randGrandPrix = randArrayIndex(grandPrixs);
const randDriverInfo = randArrayIndex(drivers);

if (randDriverInfo.nationality === randGrandPrix) {
    console.log(`${randDriverInfo.name} has won his home grand prix with ${randDriverInfo.team}! Team principal ${randDriverInfo.principal} must be so proud.`)
} else {
    console.log(`${randDriverInfo.nationality} driver ${randDriverInfo.name} has won the ${randGrandPrix} grand prix with ${randDriverInfo.team}! Team principal ${randDriverInfo.principal} must be so proud.`)
};