let studentsname=["ali","ahmad","essa","yazan"];
let studentsmarks=[40,70,60,30];
function markCalculate(params) {

  for(let i =0;i<studentsname.length;i++){
        // let name=studentsname[i]
        // let mark= studentsmarks[i]
        if(studentsmarks[i]<50){
          console.log("sorry you fail"+ " " + studentsname[i] + " " + "your score is"+ " "+studentsmarks[i])
        }
        else if(studentsmarks[i]>=50){
          console.log("conrag you pass" + " "+studentsname[i] + " "+"your score is"+ " " +studentsmarks[i])
        }
        else {
          console.log("there is no result to show ")
        }
    }
  }  

markCalculate();
