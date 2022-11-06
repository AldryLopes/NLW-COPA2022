const isLocal = window.location.origin.startsWith('http://127')
const projectName = '/Nlw-Copa2022'
const imgPath = isLocal ? '' : projectName;

function createGame(player1, title1, hour, player2, title2) {
  return `
  <li>
        <img src="${imgPath}/assets/icon-${player1}.svg" alt="Bandeira ${title1}" title="${title1}"/>
        <strong>${hour}</strong>
        <img src="${imgPath}/assets/icon-${player2}.svg" alt="Bandeira ${title1}" title="${title2}" />
  </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date}<span>${day}</span></h2>
          <ul>
            ${games}

          </ul>
        </div>
  `
}
document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "Brasil", "16:00", "serbia", "Sérvia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "Brasil", "13:00", "switzerland", "Suíça")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("cameroon", "Camarões", "16:00", "brazil", "Brasil")
  ) +
  createCard(
    "03/12",
    "sábado",
    createGame("country", "A Confirmar", "12:00", "country", "A Confirmar")
  )+

  createCard(
    "03/12",
    "sábado",
    createGame("country", "A Confirmar", "12:00", "country", "A Confirmar")
  )