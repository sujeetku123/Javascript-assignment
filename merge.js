function AlterMerge() {
    let arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
    let n1 = arr1.length;

    let arr2 = [2, 4, 6, 8];
    let n2 = arr2.length;

    let arr3 = new Array(n1 + n2)

    let i = 0, j = 0, k = 0;

    // Traverse both array
    while (i < n1 && j < n2) {
        arr3[k++] = arr1[i++];
        arr3[k++] = arr2[j++];
    }

    // Store remaining elements of first array
    while (i < n1)
        arr3[k++] = arr1[i++];

    // Store remaining elements of second array
    while (j < n2)
        arr3[k++] = arr2[j++];

    document.write("Array after merging" + "<br>");
    for (let i = 0; i < n1 + n2; i++)
        document.write(arr3[i] + " ");
}
