//TODO:  can implement extras here, to deal with team members or other stuff... 
var cards=[
  {
      title : "test1",
      description : "description for test 1 this is a test card that will be replaced with real data at a later date",
      link : "www.google.com",
      extra : {
          team : "member 1, member 2 "
      }
  },
  {
      title : "test2",
      description : "description for test 1 this is a test card that will be replaced with real data at a later date",
      link : "www.google.com"
  },
  {
      title : "test3",
      description : "description for test 1 this is a test card that will be replaced with real data at a later date",
      link : "www.google.com"
  },
  {
      title : "test4",
      description : "description for test 1 this is a test card that will be replaced with real data at a later date",
      link : "www.google.com"
  }
]


// TODO: extend this functionality... 

function displayCards(cards) {
  const projectCards = document.getElementById('project-cards-container');

  // Clear existing cards
  projectCards.innerHTML = '';

  // Create and append new cards
  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('project-card');
    cardElement.innerHTML = `
      <h3>${card.title}</h3>
      <p>${card.description}</p>
      <a href="${card.link}">Learn More</a>
    `;
    projectCards.appendChild(cardElement);
  });
}

displayCards(cards)