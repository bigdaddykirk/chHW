function chunkArrayInGroups(arr, size){
var groups = []
while (add. length > 0){
groups.push(arr.slice(0, size));
arr = arr.slice(size)
}
return groups;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 3);


var letters = ['a', 'b', 'c', 'd'];
console.log(letters.splice(0, 2))

console.log("leters is : ", letters);