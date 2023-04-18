

   
    
    let make = ["studying", "working","doing nothing"]

    let makeNumber = Math.floor(Math.random() * make.length);
    let random = make[makeNumber];
    let randomMake= random;
    document.getElementById("make").innerHTML="Fine now I am " +randomMake;    

let live = ()=>{
    let con = ["with my girlfriend", "with a lot of cats", "with my boyfriend", "with Pikachu"];
    let conNumber =Math.floor(Math.random() * con.length);
    let randomCon = con[conNumber];
    let sentenceCon= "And living with "+randomCon;
    
    document.getElementById("con").innerHTML =sentenceCon;
    return sentenceCon;

}  

    let where =()=>{
    let donde = ["In Westeros", "nowhere", "in the space"];
    let dondeNumber= Math.floor(Math.random() * donde.length);
    let randomDonde = donde[dondeNumber];

    document.getElementById("where").innerHTML = randomDonde;
    return randomDonde;
}

let total = () =>{
    document.getElementById("total").innerHTML ="Now I am " + randomMake + " "+ live() +" "+ where() ;
}



  