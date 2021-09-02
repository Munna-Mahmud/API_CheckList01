
const loadedUser = () =>{
    fetch('https://api.randomuser.me/')
    .then(res => res.json())
    .then (data => displayUser(data.results))
 
}

const displayUser = users =>{
  console.log(users)
  const userElement =document.getElementById('userDetail');
  for (const user of users) {
    const userDiv = document.createElement('div')
    userDiv.innerHTML = `<div class="bg-success p-5 m-3 border border-primary">
    <h4>cell: ${user.cell} </h4>
    <h4>gender: ${user.gender}</h4>
    <h4>name : <p> ${user.name.title.first} </p></h4>
    <h4>email : <p> ${user.email} </p></h4>
    <h4>location: <p> ${user.location.street.city }</p></h4> 
</div>`;
   userElement.appendChild(userDiv)
}


};


























///৬. randomuser এর ওয়েবসাইট এ গিয়ে (randomuser.me) এ গিয়ে সেখান থেকে ডাটা লোড করবে। তারপর ইউজারের ছবি দেখাবে। শুধু সেটাও না। ইউজারের location এর মধ্যে যত কিছু আছে। সব দেখাবে ওয়েবসাইট এ। অর্থাৎ street, city, coordinates, timezone যেকোন একভাবে দেখলেই হবে। তবে দেখাতে হবে। 