let Student = [];

Student[0] = { id: "a001", name: "guna", marks: 45, city: "Chennai", pin:600023 };
Student[1] = { id: "a002", name: "amal", marks: 30, city: "Madurai",pin:600024 };
Student[2] = { id: "a003", name: "varsha", marks: 28, city: "Karur",pin:600027 };
Student[3] = { id: "a004", name: "mahesh", marks: 65, city: "Chennai",pin:600025 };
Student[4] = { id: "a005", name: "ashwin", marks: 75, city: "Chennai",pin:600023 };
Student[5] = { id: "a006", name: "Abul", marks: 45, city: "Banglore",pin:600021 };


let addmarks = Student.map(addmarks => {
    let mar = addmarks.marks + 20;
    if(addmarks.pin==600023){
        mar=mar+15;
    }


    console.log(`NAME: ${addmarks.name} Stuednt id: ${addmarks.id} Mark: ${mar} City: ${addmarks.city}`);
});
