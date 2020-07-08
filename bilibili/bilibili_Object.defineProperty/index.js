// function Father(name){
//     this.name = name;
// }
let Father = {
    name:'mario'
}
Object.defineProperty(Father,'age',{
    value:1000
});
console.log(Father);