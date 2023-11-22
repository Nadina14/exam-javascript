// Esercizio 6: Clonazione di Oggetti

// Nell'espressione sottostante vi sono 8 oggetti: 'devTeam', 'lead', al cui interno é presente 'skills'(oggetto di tipo lista, ovvero l'array) e 'testers'(altro array, ovvero oggetto di tipo lista), che a sua volta contiene 2 oggetti contententi altri 2 array 'skills'.

const devTeam = {
    lead: {
        name: "Alice",
        skills: ["JavaScript", "React", "Node.js"]
    },
    testers: [
        { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
        { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] }
    ],
    projectName: "WebApp"
};

const teamLead = devTeam.lead;
teamLead.skills += "GraphQL";
const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
devTeamCopy.projectName = "MobileApp";

const creaTester = (name) => {
    const tester = {name};
    tester.skills = [];
    const randomSkills = ["JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django", "PostgreSQL"];
    for (let i = 0; i < 3; i++) {
        const randomSkill = Math.floor(Math.random() * randomSkills.length);
        tester.skills.push(randomSkills[randomSkill]);
    }
    return tester;
};

const nuovoTester = creaTester("Gianni");
devTeamCopy.testers.push(nuovoTester);

// In memoria sono stati aggiunti 2 oggetti, un 'tester' che al suo interno presenta un altro oggetto di tipo lista 'skills'