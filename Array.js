//add dr to even elements and er to odd elements

let names=["amal","arun","akash","ram","ravi","venkat"]

    const newarray=names.map((ele,idx)=>{
        if(idx%2==0){
            return(`Dr.${ele}`);
    }
    else{
        return(`Er.${ele}`);
    }

    });
    console.log(newarray);
  
    


