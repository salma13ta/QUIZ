const Question =[
    {
        Question:"Can you give bees to cats?",
        answers:[
                {text :" Occasionally " , correct :true},
                {text :" No " , correct :false},
                {text :" Yes " , correct :false},
        ]    
    } ,
    {
        Question:"Can you give milk to cats?",
        answers:[
                {text :" I don't know " , correct :false},
                {text :" Most cats are lactose intolerant " , correct :true},
                {text :" Most cats are lactose tolerant " , correct :false},
        ]    
    } ,
    {
        Question:"Do cats really require a lot of meat?",
        answers:[
                {text :" Occasionally " , correct :true},
                {text :" No " , correct :false},
                {text :" Yes " , correct :false},
        ]    
    } ,
    {
        Question:"Are cats loyal?",
        answers:[
            {text :" No " , correct :false},
            {text :" Yes " , correct :true},
            {text :" I don't know " , correct :false},
        ]    
    } ,
    {
        Question:"Do cats have a menstrual cycle?",
        answers:[
            {text :" No " , correct :false},
            {text :" Yes " , correct :true},
            {text :" I don't know " , correct :false},
        ]    
    } ,
    {
        Question:"Do cats see jinn? ",
        answers:[
            {text :" occasionally " , correct :false},
            {text :" The answer is unknown yet " , correct :true},
            {text :" The answer is known  " , correct :false},
        ]    
    } ,
    {
        Question:"Do cats eat eggs?",
        answers:[
            {text :" Yes " , correct :true},
            {text :" No " , correct :false},
            {text :" I don't know " , correct :false},
        ]    
    } ,
    {
        Question:"Do cats have seven lives?",
        answers:[
                {text :" Yes " , correct :false},
                {text :" No " , correct :true},
                {text :" Occasionally " , correct :false},
        ]    
    } ,
    {
        Question:"Do cats miscarry?",
        answers:[
                {text :" Occasionally " , correct :true},
                {text :" No " , correct :false},
                {text :" Yes " , correct :false},

        ]    
    } ,
    {
        Question:"Do cats expel negative energy?",
        answers:[
                {text :" Yes " , correct :true},
                {text :" No " , correct :false},
                {text :" Occasionally " , correct :false},
        ]    
    } ,
]
const QuestionElement = document.getElementById("Question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-qq");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next";
    showQuestion();
}
function showQuestion(){
    resetState();
        let currentQuestion = Question[currentQuestionIndex];
        let QuestionNo = currentQuestionIndex +1 ;
        QuestionElement.innerHTML = QuestionNo + "." + currentQuestion;
        Question ;
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("buttom");
        button.innerHTML=answer.text;
        button.classList.add("qq");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click" , SelectAnswer)
    }) ;
}
function resetState(){
    nextButton.style.display="none" ;
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showScore(){
    resetState();
    QuestionElement.innerHTML=`You scored ${score} out of ${Question.length}!`;
    nextButton.innerHTML= "play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex <Question.length){
        showQuestion();
    }else{
        showScore();
    }
    function SelectAnswer(e){
        const SelectedBtn = e.target;
        const iscorrect = SelectedBtn.dataset.correct ==="true" ;
        if(iscorrect){
            SelectedBtn.classList.add("correct");
            score++;
        }else{
            SelectedBtn.classList.add("incorrect");
    
        }
        Array.from(answerButtons.children).forEach(Button =>{
            if(Button.dataset.correct ==="ture"){
                Button.classList.add("correct");
            }
            nextButton.style.display="block";
        })
    }
}
    nextButton.addEventsListener ("click",()=> {
        if(currentQuestionIndex < Question.length){
            handleNextButton();
        }else{
            startQuiz();
        }
}) ;
