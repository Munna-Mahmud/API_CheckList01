//১. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 
const laodcomment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data))

}
//২. যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 

const displayComment = comments => {
    // console.log(comments)
    const commentElement = document.getElementById('comment-btn')
    for (const comment of comments) {
        const commentDiv = document.createElement('div')
        commentDiv.innerHTML = `<div  onclick="laodCommentDetail(${comment.id})"class="bg-success p-5 m-3 border border-primary">
        <h4>postId: ${comment.postId} </h4>
        <h4>Id: ${comment.id}</h4>
        <h4>name : <p> ${comment.name} </p></h4>
        <h4>email : <p> ${comment.email} </p></h4>
        <h4>body: <p> ${comment.body} </p></h4> 
    </div>`;
        commentElement.appendChild(commentDiv)
    }

};

//৫. ডাইনামিক ডাটা লোড। কোন একটা কমেন্ট এ ক্লিক করলে (কমেন্ট এর div এ বা কোন একটা বাটন এ )সেই কমেন্ট এর আইডি নিয়ে সেটা api এর url এ বসিয়ে (ডাইনামিকভাবে টেমপ্লেট স্ট্রিং দিয়ে) সেই ডাটা লোড করে। সেই ডাটা ওয়েবসাইট এ দেখাতে পারতেছো কিনা। 

// const laodCommentDetail = id => {
//     const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayCommentsDetail(data[0]))
// }


// const displayCommentsDetail = comment => {
//     // console.log(idd)
//     const commentDetail = document.getElementById('commentsDetail');
//     const div = document.createElement('div');
//     div.classList.add('card')
//     div.innerHTML = `<div  class="card text-center w-50 mx-auto text-center bg-info">
//      <div class="card-header">
//      <h4>Name :<p>${comment.name} </p></h4>
    
//     </div>
//      <div class="card-body">
//      <h4>ID: ${comment.id}</h4>
//      <h4>PostId: ${comment.postId} </h4>
//     <h5 class="card-title"> Body: <p> ${comment.body} </p> </h5>
//     <p class="card-text"> Email: ${comment.email}</p>

//       </div>

//        </div>`;
//     commentDetail.appendChild(div)
  
// }














