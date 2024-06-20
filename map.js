
let arr = [1,2,3,4,5,6,7,8,9,10];

function fn(n){
  return n*2;
}

const map = (arr, fn)=>{
  const transformArr = [];
  for(let i =0; i< arr.length; i++){
    transformArr.push(fn(arr[i]));
  }
  return transformArr;
}

console.log(map(arr, fn));




