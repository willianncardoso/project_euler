var sum = 0;
for (i = 0;i<1000 ;i++){
  c=i%3;
  k=i%5;
  if (c===0){sum = sum + i;}
  else{if(k===0){ sum = sum + i}}
}
console.log(sum)
