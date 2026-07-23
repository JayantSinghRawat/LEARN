// // let url = "https://catfact.ninja/fact";
// // // fetch(url)
// // //     .then((response) =>{
// // //         return response.json();
// // //     })
// // //     .then((data) => {
// // //         console.log(data.fact);
// // //         return fetch(url);
// // //     })
// // //     .then((response) =>{
// // //         return response.json();
// // //     })
// // //     .then((data2) => {
// // //         console.log(data2.fact);
// // //     })
// // //     .catch((error) => {
// // //         console.log(error);
// // //     })
// //
// //
// //
// //
// // // async function getFetch() {
// // //     try{
// // //             let res = await fetch(url);
// // //             let data = await res.json();
// // //             console.log(data.fact);
// // //     }catch(err){
// // //         console.log(err);
// // //     }
// // // // console.log("bye");
// // // }
// //
// //
// //
// //
// // let url2 = "https://dog.ceo/api/breeds/image/random"
// //
// // async function getfacts(){
// //     try{
// //         // let res = await axios.get(url);
// //         let res2 = await axios.get(url2);
// //         // console.log(res.data.fact);
// //         console.log(res2.data.message);
// //         return res2.data.message;
// //
// //     }catch(err){
// //         return "no image found";
// //     }
// //
// // }
// //
// // let button = document.querySelector('button');
// //
// // button.addEventListener('click', async ()=>{
// //     console.log("button was clicked");
// //     let result = await getfacts();
// //     let img = document.querySelector('img');
// //     img.src = result;
// // });
// //
// //
// //
// //
// //
//
//
//
//
// const url3 = "https://icanhazdadjoke.com";
//
// async function getjokes(){
//     try{
//         const config ={headers:{Accept:"application/json"}};
//         let res = await axios.get(url3,config);
//         console.log(res.data);
//     }catch(err){
//         console.log(err);
//     }
//
// }






let url = "http://universities.hipolabs.com/search?name=";

let country = "india";

async function getuni(){
    let res = await axios.get(url+country);
    console.log(res.data);
}
















