
const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const arr2 = [["laptop", "desktop", "notebook"], ["tablet", "smartphone",  "airpod"],
["smartwatch", "earbuds", "neckband"], ["smart speaker", "VR headset", "smart glasses"]];        

arr.forEach((subArr, index) => {
    subArr.forEach((item, subIndex) => {
        console.log(`Item at [${index}][${subIndex}] is ${item}`);
    });
}
);
document.write("Hello"); // For better readability in HTML output
