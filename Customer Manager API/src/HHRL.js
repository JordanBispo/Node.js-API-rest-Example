class HigherHealthRiskList { // HHRL -> Higher Health Risk List store the 10 customers with the highest health risk 
    
    constructor(){
        this.scoreList = []  
    }

    setScoreList(customersList){
        customersList.forEach(customer => {

            if(this.scoreList.length<10){  //if the list length is less than 10, it just adds customerScore in scoreList
                const update = this.scoreList.findIndex(item=>{ 
                    return item.customerId.toString() === customer._id.toString()
                })
                
                if(!(update<0)){
                    console.log('update ', update)
                    this.scoreList[update] = {customerId: customer._id, score: this.calculateScore(customer.healthProblems)}
                }else{
                    this.scoreList.push({customerId: customer._id, score: this.calculateScore(customer.healthProblems)})
                }
            }else{  // if the list size is greater than 10, it checks whether this score is greater than the lowest score in the list
                
                let customerScore = {customerId: customer._id, score: this.calculateScore(customer.healthProblems)}
                let smallerScore = {}
                
                for(let i=0;i<this.scoreList.length;i++){  // adds the new score and removes the lowest score from the list
                    if(customerScore.customerId === this.scoreList[i]){
                        this.scoreList[i] = customerScore
                        i = this.scoreList.length
                    }else if(customerScore.score>this.scoreList[i]){
                        smallerScore = this.scoreList[i]
                        this.scoreList[i] = customerScore
                    }
                }
            }
        });
        //console.log("SCORE LIST HAS UPDATE: ",this.scoreList)
    }

    get(){ // Returns the ID's of the 10 clients with the highest health risk
        const list = []
        this.scoreList.forEach(item=>{
            list.push(item.customerId)
        })
        return list
    }

    calculateScore(list){ // list -> customer.healthProblems // List of customer health problems
        var sd = 0
        list.forEach(item => {
            sd +=  item.degree
        });
        return (1 / (1 + Math.pow(Math.E, -(-2.8 + sd )))) * 100
    }

}

module.exports = HigherHealthRiskList