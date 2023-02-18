


 let promise1 = new Promise((resolve)=>{
    setTimeout(() => resolve(console.log('c')), 3000)
 })
let promise2 = new Promise((resolve )=>{
    setTimeout(() => resolve(console.log('d')), 0)
})




async function printInorder(){
    console.log('a');

    console.log('b');
    await promise1;
    await promise2
    
    console.log('e');
}
printInorder()














