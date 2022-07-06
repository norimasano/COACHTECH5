//問題①

const array = [2, 4, 7, 5, 4, 3, 8];


const new_array = array.filter(function(val, i, array){
	return (array.indexOf(val) === i);
});

console.log(new_array); 

//問題②


function isLeapYear(year){
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let checkYear = 2021;
if(isLeapYear(checkYear)){
  console.log(checkYear + '年はうるう年です');
}else{
  console.log(checkYear + '年はうるう年ではありません');
}