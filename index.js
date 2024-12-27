// let ip="blue";
// switch(ip){
//     case "green":console.log("color is green");break;
//     case "orange":console.log("color is orange");break;
//     case "green":console.log("color is green");break;
//     case "blue":console.log("color is blue");break;
//     case "black":console.log("color is black");break;
//     default:console.log("color is unavailable");break;
// }


// let num=125;
// switch(num){
//     case "100":console.log("enter num is 100");break;
//     case "50":console.log("enter num is 50");break;
//     case 125:console.log("enter num is 125");break;
//     case "85":console.log("enter num is 85");break;
//     default:console.log("num is unavailable");break;
// }



// let num=95;
// switch(true){
//     case num<100 && num>80:
//         console.log("first class");break;
//     case num< 80&& num>60:
//         console.log("second class");break;
//     case num<60 && num>40:
//         console.log("third class");break;
    
//     default:
//         console.log("fail");break;
// }


// let arr=[1,5,10];
// console.log(arr.length)

// let arr=[]
// for(i=10;i<=50;i=i+5)
// {
//     arr[arr.length]=i
// }
// console.log(arr)

let str="JAVASCRIPT"
let arr=[]
for(i=0;i<=str.length-1;i++)
    {
    arr[arr.length]=str[i]
    // console.log(i)
}
console.log(arr)

let arr1=[]
for(i=str.length-1;i>=0;i--){
    arr1[arr1.length]=`${str[i]} at index ${i}`;
    }
    console.log(arr1)

let arr2=["hello","welcome","to","the","javascript"]
for(i=0;i<arr2.length;i++){
    let str=""
    for(j=arr2[i].length-1;j>=0;j--){
        str+=arr2[i][j];
    }
    console.log(str)
}




