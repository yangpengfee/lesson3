// 链表反转
// function listNode(x) {
//     this.val = x;
//     this.next = null;
// }
// var reverseList = function (h) {
//     let prev = null;
//     let cur = h;
//     while (cur !== null) {
//         let cnext = cur.next;
//         cur.next = prev === null ? null : prev;
//         prev = cur;
//         cur = cnext;
//     }
//     return prev;
// }

// 数组中第K个最大元素
const arr = [3, 2, 4, 1, 7, 5, 6];
let k = 2;
function getMax(arr, k) {
    return arr.sort((a, b) => { b - a })[k - 1]
}
console.log(getMax(arr, k));
function sort1(arr, k) {
    let max = arr[0];
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                max = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = max;
            }
        }
    }
    return arr[arr.length - k]
}
console.log(sort1(arr, k))