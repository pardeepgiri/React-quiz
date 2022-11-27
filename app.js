const questions=[
    {
        'que':'What is the way to avoid passing props through intermediate elements in the component tree?',
        'a':'React.fragment();',
        'b':'React.Component();',
        'c':'React.createContext();',
        'd':'React.createRef();',
        'correct':'c',

    },
    {
        'que':'What are the arguments of ReactDOM.createPortal()?',
        'a':'component, domNode',
        'b':'domNode,component',
        'c':'component, parentComponent',
        'd':'childComponent, component',
        'correct':'a',
        
    },
    {
        'que':'How to avoid div soup in React?',
        'a':'By removing div tags',
        'b':'By using react Fragments',
        'c':'By using react Providers',
        'd':'By using special react div components',
        'correct':'b',
    },
    {
        'que':'why do we use react fragments?',
        'a':'It makes the execution of code faster as compared to the div tag.',
        'b':'It takes more memory but less time',
        'c':'It takes less memory',
        'd':'Both A and C',
        'correct':'d',
    },
    {
        'que':'How is Fragment shorthand syntax used?',
        'a':'<>',
        'b':'()',
        'c':'[]',
        'd':'None of the above',
        'correct':'a',
    }
]
let index=0;
let total=questions.length;
let score=0;
let wrong =0;
const questionvalue=document.getElementById("questionvalue");
const optionvalue=document.querySelectorAll(".options");

const  loadquestion=()=>{
     if(index===total){
        return endquiz();
     }
     reset();
    const data=questions[index];
    console.log(data)
    questionvalue.innerText=`${index+1}) ${data.que}`;
    optionvalue[0].nextElementSibling.innerText=data.a;
    optionvalue[1].nextElementSibling.innerText=data.b;
    optionvalue[2].nextElementSibling.innerText=data.c;
    optionvalue[3].nextElementSibling.innerText=data.d;

}


const submitquiz=()=>{
  const data=questions[index];
  const ans=getanswer();
  if(ans === data.correct){
    score++;
  }else{
    wrong++;
  }
  index++;
  loadquestion();
  return;
}

 const getanswer=()=>{
    let answer;
    optionvalue.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
                
            }
        }
    )
    return answer;
 }

 const reset=()=>{
    optionvalue.forEach(
        (input)=>{
           input.checked = false;
        }
    )

 }

 const endquiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3> Thank you for playing the quiz</h3>
     <h2>${score}/ ${total} are correct </h2>
    `
 }
loadquestion();



