
function classifyNumbers(){
let vals = [1, 3, 2, 14, 6, 99, 200, 6, 100, 56, 776, 31, 12, 333,4239, 3000];


  let even = [];
  let odd = [];
  let unit = [];
  let tens = [];
  let hundreds = [];
  let others = []; 

  Objects = {
      even : even,
      odd : odd,
      unit : unit,
      tens : tens,
      hundreds : hundreds,
      others : others
  }

  for (let i = 0; i<vals.length; i++){
     if (vals[i] %2 === 0){
         Objects.even.push(vals[i])  
  }else if (vals[i] % 2 === 1){
      Objects. odd . push(vals[i])
  }if(vals[i] >=1 && vals [i] < 9){
     Objects.unit.push(vals[i])
  }else if(vals[i] >=10 && vals[i] < 99){
      Objects.tens.push(vals[i])
  }else if(vals[i] >= 100 && vals[i]<999){
      Objects.hundreds.push(vals[i])
  }else if(vals[i] === 0 || vals[i] >=1000){
      Objects.others.push([i])
  }
}
  return Objects;
}

console.log(classifyNumbers())