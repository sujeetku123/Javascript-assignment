function LargeSmall() {
    var Myarray = new Array;
    var k = 0;
    for (i = 0; i < 100; i++) {
        var randNum = Math.floor((Math.random() * 10000) + 1); //generates random numbers between 1 to 10000
        Myarray[k] = randNum;
        k++;
    }
    const max = Math.max(...Myarray);
    // console.log("maximum number is :"+max);
    document.write("max num is : " + max);
}

function HighCount() {
    var Myarray = new Array;
    var k = 0;
    for (i = 0; i < 100; i++) {
        var randNum = Math.floor((Math.random() * 10000) + 1); //generates random numbers between 1 to 10000
        Myarray[k] = randNum;
        k++;
    }
    var evenCount = 0;
    var oddCount = 0;
    var n = 0, m = 1;
    while (n < 100) {
        oddCount += Myarray[n]
        n = n + 2;
    }
    while (m < 100) {
        evenCount += Myarray[m]
        m = m + 2;
    }
    if (evenCount > oddCount) {
        document.write("Even count is higher and it is : " + evenCount);
    }
    else {
        cument.write("Odd count is higher and it is : " + oddCount);
    }
}

function BubbleSort() {
    const inputArr = [55, 20, 1, 34, 66, 55, 81, 60, 99, 11, 10, 30, 50, 44, 23, 14, 17, 29, 68, 100]

    let len = 20;
    for (let i = 0; i < len; i++) {     //resposible for all passes
        for (let j = 0; j < len; j++) {     //executes for each pass means puts largest number at last
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    console.log(inputArr);
    document.write(inputArr);

}

function CreateTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="("+r+","+c+")"; 
    }
   }
}
