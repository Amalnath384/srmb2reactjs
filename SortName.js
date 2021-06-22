let Student = [];

Student[0] = { id: "a001", name: "guna", marks: 45, city: "Chennai" };
Student[1] = { id: "a002", name: "amal", marks: 30, city: "Madurai" };
Student[2] = { id: "a003", name: "amal", marks: 28, city: "Karur" };
Student[3] = { id: "a004", name: "mahesh", marks: 65, city: "Chennai" };
Student[4] = { id: "a005", name: "ashwin", marks: 75, city: "Chennai" };
Student[5] = { id: "a006", name: "Abul", marks: 45, city: "Banglore" };

Student.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    //return 0;
  });
 
    console.log(Student);
