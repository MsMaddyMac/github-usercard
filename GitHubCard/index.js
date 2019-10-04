/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/MsMaddyMac')
  .then(response => {
    userCard(response);
    })
  
  .catch(error => {
    console.log("No information found.", error);
  });



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function userCard(info) {
// defines new elements 
  const
  card = document.createElement('div'),
  cardImage = document.createElement('img'),
  cardInfo = document.createElement('div'),
  cardTitle = document.createElement('h3'),
  cardUsername = document.createElement('p'),
  userLocation = document.createElement('p'),
  userProfileLink = document.createElement('p'),
  userProfileUrl = document.createElement('a'),
  userFollowers = document.createElement('p'),
  userFollowing = document.createElement('p'),
  userBio = document.createElement('p');

  // set class names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardTitle.classList.add('name');
  cardUsername.classList.add('username');

  // set element context
  cardImage.src = info.data.avatar_url;
  cardTitle.textContent = info.data.name;
  cardUsername.textContent = info.data.login;
  userLocation.textContent = info.data.location;
  userProfileLink.textContent = 'Profile:';
  userProfileUrl.href = info.data.html_url;
  userProfileUrl.textContent = `${info.data.html_url}`;
  userFollowers.textContent = `Followers: ${info.data.followers}`;
  userFollowing.textContent = `Following: ${info.data.following}`;
  userBio.textContent = info.data.bio;

// append each element where it belongs
  card.appendChild(cardImage);
  card.appendChild(cardInfo);
  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardUsername);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(userProfileLink);
  userProfileLink.appendChild(userProfileUrl);
  cardInfo.appendChild(userFollowers);
  cardInfo.appendChild(userFollowing);
  cardInfo.appendChild(userBio);

return document.querySelector('.cards').appendChild(card);
};

const followersArray = [
  'BlueImport',
  'zac-higgins',
  'J2Macwilliams',
  'TinySquid',
  'ndacode',
  'EricFerguson76',
  'Lfritze',
  'VivaCode'
];

followersArray.forEach((user) => {
  axios.get(`https://api.github.com/users/${user}`)
  .then(res => {
    userCard(res);
  })
  .catch(error => {
    console.log('Not a GitHub user', error);
  });
});







/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
