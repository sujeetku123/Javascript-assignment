function usingWhile() {
    var arr = [12, 22, 1, 6, 18, 9];
    const len = arr.length;
    var i = 0;
    var sum = 0;
    while (i < len) {
        sum += arr[i];
        i++;
    }
    document.write("The sum of array using While is :" + sum);
}

function usingDoWhile() {
    var arr = [12, 22, 1, 6, 18, 9];
    const len = arr.length;
    var i = 0;
    var sum = 0;
    do {
        sum += arr[i];
        i++;
    } while (i < len)
    document.write("The sum of array using do While is :" + sum);
}

function usingFor() {
    var arr = [12, 22, 1, 6, 18, 9];
    const len = arr.length;
    var i = 0;
    var sum = 0;
    for (i = 0; i < len; i++) {
        sum += arr[i];
    }
    document.write("The sum of array using For is :" + sum);
}
