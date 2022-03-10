var startTime = performance.now()

students = 1000000
year = 18
semester = 3
chapters = 10 // per semester
assignments = 100 // per chapter
population = (students * year * semester * chapters * assignments)

// Number with Commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Population is 300,000,000,000
sample_size = 1000000
data_size = sample_size 
y = numberWithCommas(population)
z = numberWithCommas(data_size)
size = data_size

// Generate Data
function range(start, end) {
    return Array(end - start + 1). fill(). map((_, idx) => start + idx)}
    var sorted_array = range(1, size);
//    console.log(sorted_array)

// Shuffle Data
 function shuffle(array1) {
        let currentIndex = array1.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array1[currentIndex], array1[randomIndex]] = [
            array1[randomIndex], array1[currentIndex]];}
        return array1;}

shuffle(sorted_array);
unsorted_array = sorted_array
// console.log(unsorted_array);

var endTime1 = performance.now()
processTime1 = (endTime1 - startTime)/1000

// Check Index
const arr = unsorted_array
checkValue = arr.indexOf(5)
var endTime3 = performance.now()
processTime3 = (endTime3 - startTime)/1000

//console.log(unsorted_array)
//output as unsorted_array

// QUICKSORT
function quickSort(array) {
    if (array.length === 1) {
        return array;}
    const pivot = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < array.length - 1; i++) {
        if(array[i] < pivot) {
            leftArr.push(array[i]);
        } else {
            rightArr.push(array[i]);
        }}

        if (leftArr.length > 0 && rightArr.length > 0) {
            return [ ...quickSort(leftArr), pivot, ...quickSort(rightArr)];
        } else if (leftArr.length > 0) {
                    return [ ...quickSort(leftArr), pivot];
                } else {
                    return [pivot, ...quickSort(rightArr)];
                }}

final_array = quickSort(unsorted_array);
var endTime2 = performance.now()
processTime2 = (endTime2 - startTime)/1000
console.log(`Final Sorted array process time is ${processTime2} seconds`)

document.getElementById("demo1").innerHTML = y
document.getElementById("demo2").innerHTML = z
document.getElementById("demo3").innerHTML = processTime1
document.getElementById("demo4").innerHTML = processTime2
document.getElementById("demo5").innerHTML = checkValue
document.getElementById("demo6").innerHTML = processTime3