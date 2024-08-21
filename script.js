const question = [
    {
        'que' : 'Which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JAVASCRIPT',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que' : 'Who is president of bangladesh',
        'a':'Shahabuddin Ahmed',
        'b':'Mohammad Abdul Hamid',
        'c':'Mohammed Shahabuddin',
        'd':'Muhammad Jamiruddin Sircar',
        'correct':'c'
    },
    {
        'que' : 'Who is the Chief Adviser of Bangladesh Now?',
        'a':'Asif Nazrul',
        'b':'Dr. Muhammad Yunus',
        'c':'Fazlul Haque',
        'd':'Fakhruddin Ahmad',
        'correct':'b'
    },
    {
        'que' : 'Who is the Chief Adviser of Bangladesh Now?',
        'a':'Asif Nazrul',
        'b':'Dr. Muhammad Yunus',
        'c':'Fazlul Haque',
        'd':'Fakhruddin Ahmad',
        'correct':'b'
    }

]
let index = 0;
let totalquestion=question.length;
let right = 0,
    worng = 0;
const quebox = document.getElementById("quebox");
const optioninputs = document.querySelectorAll(".option");
const loadquestion = () =>{
    if (index==totalquestion){
        return endquiz();
    }
    reset();
    const data = question [index];
    quebox.innerText = `${index+1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerHTML=data.a;
    optioninputs[1].nextElementSibling.innerHTML=data.b;
    optioninputs[2].nextElementSibling.innerHTML=data.c;
    optioninputs[3].nextElementSibling.innerHTML=data.d;
}
const submitquiz = () => {
    const data = question [index];
    const ans = getanswer();
    if(ans == data.correct){
         right++;
    }else{
       worng++;
    }
    index++;
    loadquestion();
    return;

}
const getanswer = () =>{
    let answer;
    optioninputs.forEach(
        (input)=>{
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}
const reset = () =>{
    optioninputs.forEach(
        (input)=>{
          input.checked = false;
        }
    )

}
const endquiz = () =>{
    document.getElementById("box").innerHTML = `
    <h3>Thank you for palaying the quiz</h3>
    <h2>${right} / ${totalquestion} are correct</h2>
    `
} 

loadquestion()

