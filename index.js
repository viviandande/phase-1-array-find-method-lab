// code your solution here
function superbowlWin(record) {
    let score = record.find((score)=>{
        if (score.result==='W'){
            return true;
        }
    })
        if (score){
            return score.year
        }
}