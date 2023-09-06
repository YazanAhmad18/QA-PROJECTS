let studentsname=["ali","ahmad","essa","yazan"];
let studentsmarks=[40,70,60,30];
function markCalculate(params) {

  for(let i =0;i<studentsname.length;i++){
        let name=studentsname[i]
        let mark= studentsmarks[i]
        if(mark<50){
          console.log("sorry you fail"+ " " + name + " " + "your score is"+ " "+mark)
        }
        else if(mark>50){
          console.log("sorry you pass" + " "+name + " "+"your score is"+ " " +mark)
        }
    }
  }  



markCalculate();
