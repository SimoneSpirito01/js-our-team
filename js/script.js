
// creo l'array di oggetti con le info sui vari componenti del team
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

// stampo le card
createTeam(team);

// al click su "Add"
const addMember = document.getElementById('addMemberButton');
addMember.addEventListener('click', function(){
    // prendo le info sul nuovo membro del team dai vari input e le aggiungo all'array di oggetti
    addCard(team);
    // pulisco il team-container, ristampo tutte le card compresa quella del nuovo membro
    createTeam(team);
})

function createTeam(array){
    document.querySelector('.team-container').innerHTML = '';
    let cards = '';
    for (let i = 0; i < array.length; i++){
        cards +=
        `
        <div class="team-card">
            <div class="card-image">
            <img
                src='${array[i].foto}'
                alt='${array[i].nome}'
            />
            </div>
            <div class="card-text">
            <h3>${array[i].nome}</h3>
            <p>${array[i].ruolo}</p>
            </div>
        </div>
        `;
        
    }
    console.log(cards);
    document.querySelector('.team-container').innerHTML = cards;
}

function addCard(array){
    const newName = document.getElementById('name');
    const newRole = document.getElementById('role');
    const newImage = document.getElementById('image');
    array.push({
        'nome': newName.value,
        'ruolo': newRole.value,
        'foto': newImage.value
    });
    console.log(array);

}