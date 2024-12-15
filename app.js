// var htmlQuiz = [
//     {
//         question: 'HTML Stands for ?' ,
//         option1: 'Hypertext' ,
//         option2: 'Markup' , 
//         option3: 'HyperSuperText' , 
//         option4: 'HyperText Markup Language' , 
//         answer: 'HyperText Markup Language'
//     },
//     {
//         question: 'Which Element used to bold text in HTML?' ,
//         option1: 'img' ,
//         option2: 'h1' , 
//         option3: 'strong' , 
//         option4: 'p' , 
//         answer: 'strong'
//     },
//     {
//         question: 'Which Element used for Image in HTML?' ,
//         option1: 'span' ,
//         option2: 'div' , 
//         option3: 'image' , 
//         option4: 'img' , 
//         answer: 'img'
//     },
//     {
//         question: "What is the correct syntax to create a JavaScript array?" ,
//         option1: "var arr = [1, 2, 3]" ,
//         option2: "var arr = (1, 2, 3) " ,
//         option3: "var arr = {1, 2, 3}" ,
//         option4: "var arr = <1, 2, 3>" ,
//         answer: "var arr = [1, 2, 3]"
//     },
//     {
//         question: "Which method is used to convert a string to a number in JavaScript?" ,
//         option1: "parseInt()" ,
//         option2: "toNumber()" ,
//         option3: "stringToNumber()" ,
//         option4: "parseFloat()" ,
//         answer: "parseInt()"
//     },
//     {
//         question: "What does the `this` keyword refer to in JavaScript?",
//         option1: "The current function",
//         option2: "The current object",
//         option3: "The current window or global object",
//         option4: "A specific variable",
//         answer: "The current object"
//     },
//     {
//         question: "How can you add a comment in JavaScript?",
//         option1: "// This is a comment",
//         option2: "/* This is a comment */",
//         option3: "<-- This is a comment -->",
//         option4: "Both A and B",
//         answer: "Both A and B"
//     },
//     {
//         question: "Which of the following is used to declare a block-scoped variable in JavaScript?",
//         option1: "var",
//         option2: "let",
//         option3: "const",
//         option4: "Both B and C",
//         answer: "Both B and C"
//     },
//     {
//         question: "What does the `Array.prototype.push()` method do?",
//         option1: "Adds an element to the beginning of an array",
//         option2: "Adds an element to the end of an array",
//         option3: "Removes the last element of an array",
//         option4: "Removes the first element of an array",
//         answer: "Adds an element to the end of an array"
//     },
//     {
//         question: "Which operator is used to check if two values are equal in both value and type?",
//         option1: "==",
//         option2: "===",
//         option3: "=",
//         option4: "!==",
//         answer: "==="
//     }
   

// ]

var quiz = {
    HTML: [
        {
            question: 'HTML Stands for ?' ,
            option1: 'Hypertext' ,
            option2: 'Markup' , 
            option3: 'HyperSuperText' , 
            option4: 'HyperText Markup Language' , 
            answer: 'HyperText Markup Language'
        },
        {
            question: 'Which Element used to bold text in HTML?' ,
            option1: 'img' ,
            option2: 'h1' , 
            option3: 'strong' , 
            option4: 'p' , 
            answer: 'strong'
        },
        {
            question: 'Which Element used for Image in HTML?' ,
            option1: 'span' ,
            option2: 'div' , 
            option3: 'image' , 
            option4: 'img' , 
            answer: 'img'
        },
        {
            question: "Which attribute is used to define the source of an image in HTML?",
            option1: "src",
            option2: "href",
            option3: "alt",
            option4: "link",
            answer: "src"
          },
          {
            question: "What is the purpose of the `alt` attribute in an HTML image element?",
            option1: "To provide a link to the image",
            option2: "To specify the image's source",
            option3: "To provide a text alternative for accessibility",
            option4: "To define the image's size",
            answer: "To provide a text alternative for accessibility"
          },
          {
            question: "Which HTML attribute is used to specify the character encoding for the document?",
            option1: "charset",
            option2: "encoding",
            option3: "meta",
            option4: "content-type",
            answer: "charset"
          },
          {
            question: "What is the purpose of the `viewport` meta tag in HTML?",
            option1: "To define the character set",
            option2: "To control the page's layout on mobile devices",
            option3: "To provide the title of the page",
            option4: "To specify the page's background color",
            answer: "To control the page's layout on mobile devices"
          },
          {
            question: "Which HTML element is used to specify metadata for the document?",
            option1: "header",
            option2: "meta",
            option3: "footer",
            option4: "title",
            answer: "meta"
          },
          {
            question: "What is the function of the `rel` attribute in a link element?",
            option1: "Defines the relationship between the document and the linked resource",
            option2: "Specifies the URL of the linked resource",
            option3: "Indicates the type of document",
            option4: "Defines the size of the linked resource",
            answer: "Defines the relationship between the document and the linked resource"
          },
          {
            question: "Which attribute is used to open a link in a new tab or window?",
            option1: "target",
            option2: "new-tab",
            option3: "window",
            option4: "link-target",
            answer: "target"
          },
          {
            question: "Which HTML element is used to define a navigation section in a document?",
            option1: "nav",
            option2: "section",
            option3: "header",
            option4: "article",
            answer: "nav"
          },
          {
            question: "What is the purpose of the `lang` attribute in the HTML `<html>` tag?",
            option1: "Specifies the language of the document's text",
            option2: "Defines the default language of the page",
            option3: "Sets the language for styling purposes",
            option4: "Defines the language of the meta tags",
            answer: "Specifies the language of the document's text"
          },
          {
            question: "Which of the following attributes is used to provide a description for the purpose of a link?",
            option1: "alt",
            option2: "title",
            option3: "description",
            option4: "desc",
            answer: "title"
          }
    ],
    CSS: [
            {
              question: "Which CSS property is used to change the font of text?",
              option1: "font-family",
              option2: "font-size",
              option3: "text-style",
              option4: "text-font",
              answer: "font-family"
            },
            {
              question: "Which of the following properties is used to change the background color of an element?",
              option1: "bg-color",
              option2: "background-color",
              option3: "color",
              option4: "bg-color-code",
              answer: "background-color"
            },
            {
              question: "How do you make a list of items horizontally aligned using CSS?",
              option1: "Set the display property of the list to 'inline'",
              option2: "Set the display property of the list to 'block'",
              option3: "Set the display property of the list to 'flex'",
              option4: "Use 'text-align: left;' on the list",
              answer: "Set the display property of the list to 'inline'"
            },
            {
              question: "Which CSS property controls the space between elements in a flex container?",
              option1: "gap",
              option2: "margin",
              option3: "padding",
              option4: "space-between",
              answer: "gap"
            },
            {
              question: "What is the default value of the 'position' property in CSS?",
              option1: "absolute",
              option2: "relative",
              option3: "static",
              option4: "fixed",
              answer: "static"
            },
            {
              question: "Which property is used to create rounded corners on an element?",
              option1: "border-radius",
              option2: "corner-radius",
              option3: "border-style",
              option4: "border-round",
              answer: "border-radius"
            },
            {
              question: "Which of the following is the correct syntax to center a block element horizontally in CSS?",
              option1: "margin: 0 auto;",
              option2: "text-align: center;",
              option3: "align-items: center;",
              option4: "padding: auto;",
              answer: "margin: 0 auto;"
            },
            {
              question: "Which CSS property is used to control the space between text characters?",
              option1: "line-height",
              option2: "letter-spacing",
              option3: "word-spacing",
              option4: "text-spacing",
              answer: "letter-spacing"
            },
            {
              question: "How do you add a shadow effect to a box in CSS?",
              option1: "box-shadow",
              option2: "text-shadow",
              option3: "shadow-effect",
              option4: "border-shadow",
              answer: "box-shadow"
            },
            {
              question: "Which property is used to specify the width of the space between the content and the border of an element?",
              option1: "margin",
              option2: "padding",
              option3: "border-width",
              option4: "spacing",
              answer: "padding"
            }
          ],
    JavaScript: [
        {
          question: "What does the `typeof` operator do in JavaScript?",
          option1: "Returns the data type of a variable",
          option2: "Checks if a variable is defined",
          option3: "Checks if a variable is null",
          option4: "Converts a variable to a string",
          answer: "Returns the data type of a variable"
        },
        {
          question: "Which of the following is a primitive data type in JavaScript?",
          option1: "Object",
          option2: "Array",
          option3: "String",
          option4: "Function",
          answer: "String"
        },
        {
          question: "What is the output of `console.log(2 + '2')` in JavaScript?",
          option1: "4",
          option2: "'22'",
          option3: "NaN",
          option4: "Error",
          answer: "'22'"
        },
        {
          question: "Which of the following is a correct way to declare a variable in JavaScript?",
          option1: "var x = 10;",
          option2: "let x = 10;",
          option3: "const x = 10;",
          option4: "All of the above",
          answer: "All of the above"
        },
        {
          question: "What is the purpose of `use strict` in JavaScript?",
          option1: "To enable strict mode, catching common coding mistakes",
          option2: "To enable asynchronous code execution",
          option3: "To allow undeclared variables",
          option4: "To define a class in JavaScript",
          answer: "To enable strict mode, catching common coding mistakes"
        },
        {
          question: "Which method is used to add a new element at the end of an array in JavaScript?",
          option1: "push()",
          option2: "pop()",
          option3: "shift()",
          option4: "unshift()",
          answer: "push()"
        },
        {
          question: "What does the `bind()` method do in JavaScript?",
          option1: "It creates a new function that, when called, has its `this` value set to a specific value",
          option2: "It attaches an event handler to an element",
          option3: "It defines a new class method",
          option4: "It prevents an object from being modified",
          answer: "It creates a new function that, when called, has its `this` value set to a specific value"
        },
        {
          question: "What is the output of the following code: `console.log(0 == '0')`?",
          option1: "true",
          option2: "false",
          option3: "undefined",
          option4: "Error",
          answer: "true"
        },
        {
          question: "Which of the following is not a valid way to create a function in JavaScript?",
          option1: "function myFunction() {}",
          option2: "const myFunction = function() {}",
          option3: "let myFunction = () => {}",
          option4: "var myFunction {}",
          answer: "var myFunction {}"
        },
        {
          question: "What will `console.log([] == [])` output?",
          option1: "true",
          option2: "false",
          option3: "undefined",
          option4: "Error",
          answer: "false"
        }
      ],
} 
var crntquestion = 0
var score = 0
var questions = document.getElementById("question")
var button = document.getElementById("button")
var subjcards= document.getElementById("subj-cards")
var remarksdiv = document.getElementById("remarks")
var welcome = document.getElementById("welcome")
function welcomefunc (){
  var name = localStorage.getItem("name")
  welcome.innerHTML = `<h3>Welcome ${name} <h3>`
}

var theme = document.getElementById("flexSwitchCheckChecked")
console.log(theme)
function themecheck(){
  if(theme.checked){
    localStorage.setItem("theme" , "dark")
    console.log("Theme is checked")
    seltheme()
  } else{
    localStorage.setItem("theme" , "light")
    console.log("Theme is not checked")
    seltheme()
  }
}
function seltheme(){
  var last = localStorage.getItem("theme")
  if(last === "dark"){
    document.body.style.backgroundColor = "black"
    theme.checked = "true"
    document.body.style.color = "white"
    welcome.style.borderBottom = "1px solid white"
  } else {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    welcome.style.borderBottom = "1px solid black"
  }
}
seltheme()


window.onload = welcomefunc()


for (var subj in quiz){
    subjcards.innerHTML += `
           <div class="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center my-3">
                    <div class="card " style="width: max-content;  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      margin: 0px auto; " >
                        <h4 class="px-2 my-4 " style="color: rgba(1,46,113,255);">${subj}</h4>
                        <div class="info text-start my-2">
                            <b class="mt-2 mx-3">Total Questions: ${quiz[subj].length}</b><br>
                            <b class="my-2 mx-3">Passing Percentage: 70%</b>
                        </div>
                        <div class=" my-4">
                        <b>
                            <button class="start-btn  text-white" style="background-color:rgba(1,46,113,255) ;" onclick="questFunc()">
                               Start Quiz
                            </button>
                        </b>
                        </div>

                    </div>
                </div> 
    `
}
var quizname ;
function questFunc(){
    welcome.classList.add("d-none")
    
    subjcards.classList.add("d-none")
    quizname = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.innerHTML
    var a = 
    console.log(quizname)
    var attempted = localStorage.getItem(quizname+" score")
    var attemptedperc = localStorage.getItem(quizname+" perc")
    if(attempted){
      remarksdiv.innerHTML = `<div  class = "text-center my-3"><h3 class="">You Have already attempted the quiz<br></h3></div>`
      questions.innerHTML = `
        <div class="container my-5">
             <div class="row" style="display: flex; justify-content: space-between; padding: 10px 0px; width: 300px; margin: 0px auto; border-bottom: 2px solid rgba(1,46,113,255);">
        <div class="col col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 text-start">Total Questions</div>
        <div class="col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-end">${quiz[quizname].length}</div>
    </div>
    <div class="row" style="display: flex; justify-content: space-between; padding: 10px 0px; width: 300px; margin: 0px auto; border-bottom: 2px solid rgba(1,46,113,255);">
        <div class="col col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 text-start">Correct Questions</div>
        <div class="col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-end">${attempted}</div>
    </div>
    <div class="row" style="display: flex; justify-content: space-between; padding: 10px 0px; width: 300px; margin: 0px auto; border-bottom: 2px solid rgba(1,46,113,255);">
        <div class="col col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 text-start">Passing Percentage</div>
        <div class="col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-end">70%</div>
    </div>
    <div class="row" style="display: flex; justify-content: space-between;padding: 10px 0px;  width: 300px; margin: 0px auto; border-bottom: 2px solid rgba(1,46,113,255);">
        <div class="col col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 text-start">Obtained Percentage</div>
        <div class="col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-end">${attemptedperc}%</div>
    </div>
      </div>
      <div class="container mt-4">
            <div style="margin: 0px auto; height: 130px; width: 130px; border-radius:100%;display:flex; align-items:center; border: 2px solid rgba(1,46,113,255); text-align:center;">
                <div style="margin:0px auto;  width:max-content; height:max-content;">${attemptedperc}%</div>
            </div>
      </div>
      <div class="container text-center my-5" >
            <button onclick="homepage()" style="background-color: rgba(1,46,113,255); color: white; padding: 5px 20px;">
              Continue
            </button>
      </div>
      `
    } else{
      renderquest()
    }
}
        
function renderquest(){    
             
            console.log(quiz[quizname][crntquestion].question)
            console.log("Answer: " + quiz[quizname][crntquestion].answer)
            questions.innerHTML = `
            <div class="container" style="margin: 0px auto;  ">
            <div style="border: 1px solid rgba(1,46,113,255)" class="mb-5">    
            <h5 class= "py-3 px-3 mb-0 question theme">${crntquestion+1}- ${quiz[quizname][crntquestion].question}</h5>
            </div>
            <div style="border: 1px solid rgba(1,46,113,255); display: flex; " class="my-3 ">
            <input type="radio" value="${quiz[quizname][crntquestion].option1}" name="options" id="opt1" class="my-2 mx-2 theme">
            <label class="my-2 options " for="opt1">${quiz[quizname][crntquestion].option1}</label><br>
            </div>
            <div style="border: 1px solid rgba(1,46,113,255); display:flex;" class="my-3">
            <input type="radio" value="${quiz[quizname][crntquestion].option2}" name="options" id="opt2" class="my-2 mx-2 theme">
            <label class="my-2 options" for="opt2">${quiz[quizname][crntquestion].option2}</label><br>
            </div>
            <div style="border: 1px solid rgba(1,46,113,255); display:flex;" class="my-3">
            <input type="radio" value="${quiz[quizname][crntquestion].option3}" name="options" id="opt3" class="my-2 mx-2 theme">
            <label class="my-2 options" for="opt3">${quiz[quizname][crntquestion].option3}</label><br>
            </div>
            <div style="border: 1px solid rgba(1,46,113,255); display:flex" class="my-3">
            <input type="radio" value="${quiz[quizname][crntquestion].option4}" name="options" id="opt4" class="my-2 mx-2 theme">
            <label class="my-2 options" for="opt4">${quiz[quizname][crntquestion].option4}</label>
            </div>
            <div id="button" class="button my-5  text-start">
            <button onclick="btnFunc()" class="text-white" style="background-color: rgba(1,46,113,255); margin: 0px auto; font-family: "Roboto Condensed", serif;">
                Next Question
            </button>
        </div>
            </div>
            
    `  
            
   
}

function btnFunc(){
    var options = document.getElementsByName("options")
    var optionSel = false
    for(var i = 0 ; i < options.length ; i++){
        if(options[i].checked){
            optionSel = true
            if(options[i].value === quiz[quizname][crntquestion].answer){
                score++
            }
        }
    }
    
    if(optionSel){
       if(crntquestion < quiz[quizname].length-1){
            crntquestion++
            console.log( "Score " + score)
            renderquest()
       } else{
        var remarks ;
        var perc = Math.round(score/quiz[quizname].length * 100)
        localStorage.setItem(quizname+" score" , score)
        localStorage.setItem(quizname+" perc" , perc)
            if(perc < 70){   
              remarksdiv.className = "red"         
              remarks = "Sorry! You are Failed. You need to improve."
            } else{
              remarksdiv.className = "green"
              remarks = "Congratulations! You are Passed. Keep it up."
            }

            remarksdiv.innerHTML = `<div  class = "text-center my-3"><h3 class="">${remarks}<br></h3></div>`
        questions.innerHTML = `
       
        
        
      <div class="container my-5">
             <div class="row" style="display: flex; justify-content: space-between; padding: 10px 0px; width: 300px; margin: 0px auto; border-bottom: 2px solid rgba(1,46,113,255);">
        <div class="col col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 text-start">Total Questions</div>
        <div class="col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-end">${quiz[quizname].length}</div>
    </div>
    <div class="row" style="display: flex; justify-content: space-between; padding: 10px 0px; width: 300px; margin: 0px auto; border-bottom: 2px solid rgba(1,46,113,255);">
        <div class="col col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 text-start">Correct Questions</div>
        <div class="col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-end">${score}</div>
    </div>
    <div class="row" style="display: flex; justify-content: space-between; padding: 10px 0px; width: 300px; margin: 0px auto; border-bottom: 2px solid rgba(1,46,113,255);">
        <div class="col col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 text-start">Passing Percentage</div>
        <div class="col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-end">70%</div>
    </div>
    <div class="row" style="display: flex; justify-content: space-between;padding: 10px 0px;  width: 300px; margin: 0px auto; border-bottom: 2px solid rgba(1,46,113,255);">
        <div class="col col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9 text-start">Obtained Percentage</div>
        <div class="col col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-end">${perc}%</div>
    </div>
      </div>
      <div class="container mt-4">
            <div style="margin: 0px auto; height: 130px; width: 130px; border-radius:100%;display:flex; align-items:center; border: 2px solid rgba(1,46,113,255); text-align:center;">
                <div style="margin:0px auto;  width:max-content; height:max-content;">${perc}%</div>
            </div>
      </div>
      <div class="container text-center my-5" >
            <button onclick="homepage()" style="background-color: rgba(1,46,113,255); color: white; padding: 5px 20px;">
              Continue
            </button>
      </div>
        `
       }
    } else{
        Swal.fire({
            title: "Answer?",
            text: "Please select an option",
            icon: "question"
          });
    }
}
    

function homepage(){
  window.location.href = "quiz.html"
}