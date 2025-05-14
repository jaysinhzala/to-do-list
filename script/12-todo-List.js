const todoArray = [];
const todoArray1 = [];
const todoArray2 = [];

document.querySelector('.js-add1-button').
addEventListener('click',function(){
    ToDoList1();
});

document.querySelector('.js-add2-button').
addEventListener('click',function(){
    ToDoList2();
});

document.querySelector('.js-add3-button').
addEventListener('click',function(){
    ToDoList3();
});

function ToDoList1(){
    const inputElement = document.querySelector('.js-input');
    const name = inputElement.value;
    todoArray.push(name);
    console.log(todoArray);
}

function ToDoList2(){
    let todoListHTML = '';
    const inputElement = document.querySelector('.js-input2');
    const name = inputElement.value;
    todoArray1.push(name);

    for(let i=0; i<todoArray1.length; i++){
        let todo = todoArray1[i];
        let html = `<p>${todo}</p>`;
        todoListHTML = todoListHTML + html;
    }
    document.querySelector('.js-todo-List').innerHTML = todoListHTML;
}

function ToDoList3(){
    const inputElement1 = document.querySelector('.js-input3');
    const inputElement2 = document.querySelector('.js-duedate');
    const name = inputElement1.value;
    const duedate = inputElement2.value;
    todoArray2.push({
        name:name,
        duedate:duedate});
    rendorTodoList3();
}
function rendorTodoList3(){
    let todoListHTML = '';
    todoArray2.forEach(function(todoObject,index){
        const name = todoObject.name;
        const duedate = todoObject.duedate;
        let html = `
            <div class="todo-row">
                <div>${name}</div>
                <div>${duedate}</div>
                <button class="delete-button" onclick = "
                    todoArray2.splice(${index},1);
                    rendorTodoList3();
                ">Delete</button>
            </div>
        `;
        todoListHTML = todoListHTML + html;
    })
    /*
    for(let i=0; i<todoArray2.length; i++){
        let todoObject = todoArray2[i];
        const name = todoObject.name;
        const duedate = todoObject.duedate;
        let html = `
            <div class="todo-row">
                <div>${name}</div>
                <div>${duedate}</div>
                <button class="delete-button" onclick = "
                    todoArray2.splice(${i},1);
                    rendorTodoList3();
                ">Delete</button>
            </div>
        `;
        todoListHTML = todoListHTML + html;
    }
    */
    document.querySelector('.js-todo-List3').innerHTML = todoListHTML;
}

