
const addBtn = document.querySelector('.add-btn');
var inputValue = document.querySelector('.todo-inp');
const container = document.querySelector('.todo-container');
let counter = document.querySelector('#task-status');
let count = 0;
class item{
    constructor(itemName){
        this.createLi(itemName);
    }
    createLi(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item-inp');
        input.type ='text';

        let itembox = document.createElement('li');
        itembox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML =`<i class="fas fa-edit"></i>`;
        editButton.classList.add('edit-btn');

        let btnContainer = document.createElement('span');
        btnContainer.classList.add('btn-holder');

        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.innerHTML =`<i class="fas fa-trash"></i>`;


        container.appendChild(itembox);

        
        itembox.appendChild(input);
        itembox.appendChild(btnContainer);


        btnContainer.appendChild(editButton);
        btnContainer.appendChild(removeBtn);

        editButton.addEventListener('click', ()=> this.edit(input));
        removeBtn.addEventListener('click', ()=> this.remove(itembox));


    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
        count = count-1;
        counter.textContent = count;
    }
}

addBtn.addEventListener('click',function(){
    if(inputValue.value != ""){
        new item(inputValue.value);
        count = count+1;
        counter.textContent = count;
        inputValue.value="";
    }
});





















// let editbtn;
// let removeBtn;
// const addBtn = document.querySelector('#add-btn');
// const todoContainer = document.querySelector('#todo-container');
// const inputTodo = document.getElementById('todo-inp');
// const taskStatus = document.querySelector('#task-status');
// let count = 0;
// addBtn.addEventListener('click',function(){
//     const todo = inputTodo.value;
//     if(todo){
//         count++;
//         const html =` <li class="item"> 
//         <input type="radio">
//         <input type="text" disabled class="item-inp" value="${todo}">
//         <span class="btn-holder">
//             <button class="edit-btn"><i class="fas fa-edit"></i></button>
//             <button class="remove-btn"><i class="fas fa-trash"></i></button>
//         </span>
//         <div class="clear"></div>
//         </li>`;
//         const str = `${count}`
//         todoContainer.insertAdjacentHTML('beforeend', html);
//         taskStatus.textContent = str
//         inputTodo.value= "";
//      }
//      else{
//          alert("Please Enter Todo");
//      }
//      editbtn = document.querySelectorAll('.edit-btn');
//      removeBtn = document.querySelectorAll('.remove-btn');
// });

