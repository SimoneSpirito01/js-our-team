
const team = [
    {
        'nome': 'Wayne Barnett',
        'ruolo': 'Founder & CEO',
        'foto': 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela Caroll',
        'ruolo': 'Chief Editor',
        'foto': 'img/angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter Gordon',
        'ruolo': 'Office Manager',
        'foto': 'img/walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela Lopez',
        'ruolo': 'Social Media Manager',
        'foto': 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott Estrada',
        'ruolo': 'Developer',
        'foto': 'img/scott-estrada-developer.jpg'
    },
    {
        'nome': 'Barbara Ramos',
        'ruolo': 'Graphic Designer',
        'foto': 'img/barbara-ramos-graphic-designer.jpg'
    }
];

let cards = '';
for (let i = 0; i < team.length; i++){
    cards +=
    `
    <div class="team-card">
        <div class="card-image">
        <img
            src='${team[i].foto}'
            alt='${team[i].nome}'
        />
        </div>
        <div class="card-text">
        <h3>${team[i].nome}</h3>
        <p>${team[i].ruolo}</p>
        </div>
    </div>
    `;
    
}
console.log(cards);
document.querySelector('.team-container').innerHTML = cards;