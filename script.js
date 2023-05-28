for(let i = 0; i < 100; i++ ){
    console.log(i)
}

let WhileNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
         26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
let index = 0;
while(index < WhileNumber.length){
    console.log(WhileNumber[index])
    index++;
}

let Names = ["Saba", "Lizi", "Mariami", "Nika", "Gio"]
Names.unshift("Tika");
console.log(Names);

let Names2 = ["Saba", "Lizi", "Mariami", "Nika", "Gio"]
Names2.push("Tekla");
console.log(Names2);

let Names3 = ["Saba", "Lizi", "Mariami", "Nika", "Gio"]
Names3.shift("Saba");
console.log(Names3);

let Names4 = ["Saba", "Lizi", "Mariami", "Nika", "Gio"]
Names.pop("Gio");
console.log(Names4);


let Numbers = []
for(let i = 0; i < 1000; i++){
    console.log(i*i);
}


