/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";
//console.log(axios);
axios
.get('https://api.github.com/users/JulsIII')



  .then((res) => {
  
  console.log('data', res.data);

  const ftnResult = gitCardMaker(res.data);

  console.log('ftn result', ftnResult);
  // console.log('b4 git card', gitCard);
  gitCards.appendChild(ftnResult);
  // console.log('afr gitcard', gitCard);

   })

    .catch((err) => {
    console.log('err1 log', err)

});

//console.log(gData);



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
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
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
const gitCards = document.querySelector('.cards');

function gitCardMaker(data) {
  // instantiating the elements
  const gitCard = document.createElement('div');
  const gitImage = document.createElement('img');
  const gitCardInfo = document.createElement('div');
  const gitName = document.createElement('h3');
  const gitUserName = document.createElement('p');
  const gitUserLoction = document.createElement('p');
  const gitProfileLink = document.createElement('p');
  const gitURLLink = document.createElement('a');
  const gitUserFollowers = document.createElement('p');
  const gitUserFollowing = document.createElement('p');
  const gitUserBio = document.createElement('p');
  
  // setting class names, attributes and text
  gitCard.classList.add('card') ;
  gitImage.src = data.avatar_url;
  gitCardInfo.classList.add('card-info');
  gitName.classList.add('name');
  gitName.textContent = `Name: ${data.name}`;
  gitUserName.textContent = `User Name: ${data.login}`;
  gitUserName.classList.add('username');
  gitUserLoction.textContent = `Location: ${data.location}`;
  gitProfileLink.textContent = `Profile: ${data.html_url}`;
  gitURLLink.textContent = data.url;
  gitURLLink.href = data.url;
  gitUserFollowers.textContent = `Followers: ${data.followers}`;
  gitUserFollowing.textContent = `Following: ${data.following}`;
  gitUserBio.textContent = `Bio: ${data.bio}`;

  // creating the hierarchy
  gitCard.appendChild(gitImage);
  gitCard.appendChild(gitCardInfo);
  gitCardInfo.appendChild(gitName);
  gitCardInfo.appendChild(gitUserName);
  gitCardInfo.appendChild(gitUserLoction);
  gitCardInfo.appendChild(gitProfileLink);
  gitCardInfo.appendChild(gitUserFollowers);
  gitCardInfo.appendChild(gitUserFollowing);
  gitCardInfo.appendChild(gitUserBio);
  gitProfileLink.appendChild(gitURLLink);

  //console.log('asdf', gitImage); 
  // adding some interactivity
  // gitCard.addEventListener('click', () => {
  //   gitCard.classList.toggle('selected')
  // })

  // never forget to return!
  return gitCard;
}

// axios
// .get('https://api.github.com/users/JulsIII')
//   .then((res) => {  //whatevr the get gets us is avilble to use here! setups callback for next 'res' ex. 
//   console.log(res.data); //to check what 'res' looks like. shoudld be an obj, data contains and obj, anotrher propertty called 'message' cosaintg the end array. Array means end.
//   const resGData = res.data; //end array we found from above being declared
//      // loop over the array
//      followersArray.forEach(follower => { //takes callback that had array items
//       // create card
//     const newGitUserCard = gitCardMaker(follower) //for each image use dogCardmaker, making cards. Dog Name can be changed!
//       // console log done
//     console.log('done') //confirm done making cards
//       // append
//     gitCard.appendChild(newGitUserCard); //append the entry point area of website, and add the cards
//   });
// })
// .catch((err) => {
//   debugger;
// });

 followersArray.forEach(follower => {
   
axios
.get(`https://api.github.com/users/${follower}`)
  .then((res) => {  //whatevr the get gets us is avilble to use here! setups callback for next 'res' ex. 
  console.log(res.data); //to check what 'res' looks like. shoudld be an obj, data contains and obj, anotrher propertty called 'message' cosaintg the end array. Array means end.
  const resGData = res.data; //end array we found from above being declared
     // loop over the array
     //takes callback that had array items
      // create card
    const newGitUserCard = gitCardMaker(resGData) //for each image use dogCardmaker, making cards. Dog Name can be changed!
      // console log done
    console.log('done') //confirm done making cards
      // append
    gitCards.appendChild(newGitUserCard); //append the entry point area of website, and add the cards
  
  })
  .catch((err) => {
  //debugger;
  });

});
//followersArray