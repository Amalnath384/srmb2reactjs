//Appand san to names starting with Dr

let names=["amal","arun","akash","ram","ravi","venkat"]


    const newarray=names.map((ele,idx)=>{
        if(idx%2==0){
            console.log(`Dr.${names[idx]} ${"san"}`);
    }
    else{
        console.log(`Er.${names[idx]}`);
    }

    });
  
    