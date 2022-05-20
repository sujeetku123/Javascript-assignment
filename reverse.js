function ReverseArray() {
    var a = [3, 5, 7, 8]
    const len = a.length;
    var revArr = new Array;
    var k = 0;
    for (var i = len - 1; i >= 0; i--) {
        revArr.push(a[i]);
        // console.log(revArr[k]) 
        document.write(revArr[k] + " ");
        k++;

    }
}
