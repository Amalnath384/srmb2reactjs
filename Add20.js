let Student = [];

Student[0] = { id: "a001", name: "guna", marks: 45, city: "Chennai" };
Student[1] = { id: "a002", name: "amal", marks: 30, city: "Madurai" };
Student[2] = { id: "a003", name: "varsha", marks: 28, city: "Karur" };
Student[3] = { id: "a004", name: "mahesh", marks: 65, city: "Chennai" };
Student[4] = { id: "a005", name: "ashwin", marks: 75, city: "Chennai" };
Student[5] = { id: "a006", name: "Abul", marks: 45, city: "Banglore" };


let addmarks = Student.map(addmarks => {
    let mar = addmarks.marks + 20;

    console.log(`NAME: ${addmarks.name} Stuednt id: ${addmarks.id} Mark: ${mar} City: ${addmarks.city}`);

}); 