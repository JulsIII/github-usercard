/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
console.log(axios);
const gData = axios.get('https://api.github.com/users/JulsIII');
console.log(gData);

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'
];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
function gitCardMaker(gData) {
  // instantiating the elements
  const gitCard = document.createElement('div');
  const gitImage = document.createElement('img');
  const gitCardInfo = document.createElement('h3');
  const gitUserName = document.createElement('p');
  const gitUserLoction = document.createElement('p');
  const gitProfileLink = document.createElement('p');
  const gitUserFollowers = document.createElement('p');
  const gitUserFollowing = document.createElement('p');
  const gitUserBio = document.createElement('p');
  
  // setting class names, attributes and text
  gitCard.classList.add('card') ;
  gitImage.src = gData.avatar_url;
  gitCardInfo.classList.add('card-info') ;
  gitUserName.textContent = `User Name: ${gData.login}`;
  gitUserLoction.textContent = `Location: ${gData.location}`;
  gitProfileLink.textContent = `Profile: ${gData.html_url}`;
  gitUserFollowers.textContent = `Followers: ${gData.followers}`;
  gitUserFollowing.textContent = `Following: ${gData.following}`;
  gitUserBio.textContent = `Bio:: ${gData.bio}`;
  // creating the hierarchy
  gitCard.appendChild(gitImage);
  gitCard.appendChild(gitCardInfo);
  gitCard.appendChild(gitUserName);
  gitCard.appendChild(gitUserLoction);
  gitCard.appendChild(gitProfileLink);
  gitCard.appendChild(gitUserFollowers);
  gitCard.appendChild(gitUserFollowing);
  gitCard.appendChild(gitUserBio);
  // adding some interactivity
  // gitCard.addEventListener('click', () => {
  //   gitCard.classList.toggle('selected')
  // })

  // never forget to return!
  return gitCard;
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

axios
.get('https://api.github.com/users/JulsIII')
.then((res) => {  //whatevr the get gets us is avilble to use here! setups callback for next 'res' ex. 
  console.log(res.data); //to check what 'res' looks like. shoudld be an obj, data contains and obj, anotrher propertty called 'message' cosaintg the end array. Array means end.
  const resGData = res.data.message; //end array we found from above being declared
     // loop over the array of images 
    resGData.forEach(gData => { //takes callback that had array images
      // create dog card
    const newGitUserCard = gitCardMaker(gData) //for each image use dogCardmaker, making cards. Dog Name can be changed!
      // console log done
    console.log('done') //confirm done making cards
      // append to entry point
    gitCard.appendChild(newGitUserCard); //append the entry point area of website, and add the cards
  });
})
.catch((err) => {
  debugger;
});

//followersArray