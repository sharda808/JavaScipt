// // console.log('checking callback Hell');
// function getDataFromInternet(successCallback){
//     console.log('Getting data from internet');
// setTimeout(() => {

//     successCallback('KG Coding')
   
// }, 3000);
// }

// function setDataToDB(successCallback){
//     console.log('sending Data to DB');
// setTimeout(() => {

//     successCallback('db_row_25');
// }, 2000);

// }
// function sendResponseToUser(successCallback){
//     console.log('sending Response to user');
//     setTimeout(() => {
//         successCallback('person');
//     },5000);
// }
// // callback hell
// getDataFromInternet((data) => {
//     console.log(`Data is fetched ${data}`);
//     setDataToDB((id) => {
// console.log(`Data is saved in DB with id ${id}`); 
// sendResponseToUser((id) => {
//     console.log(`Response is sent to user ${id}`);
// }) ;  
//     })
// });
// function getDataFromInternet(successCallback) {
//     console.log('Getting data from internet');
//     successCallback('KG Coding');
// }
// getDataFromInternet((data) => {
//     console.log(`Data is fetched ${data}`);
// });
function getDataFromInternetUsingPromise() {
   return new Promise ((resolve,reject) => {
    console.log('Getting data from internet using promise');
    for(let i=0; i<5; i++) // console.log(i);
    
       resolve('KG Coding');
       //reject('Internet Timeout');
    
    });

}
getDataFromInternetUsingPromise()
.then((data) => {
   console.log (`Data is fetched ${data}`);
});
// .catch((error) => {
// console.log(`Error:${error}`);
// });
