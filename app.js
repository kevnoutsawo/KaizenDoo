const createTaskForm = document.getElementById('createTask');
const addButton = document.getElementById('addButton');

var taskIndex = 0;

createTaskForm.addEventListener('submit', event => event.preventDefault());
addButton.addEventListener('click', addTask);

function addTask(){
    taskIndex = taskIndex + 1; //Update global task index
    // Create text node with task label
    let taskText = document.createTextNode(document.getElementById('newTask').value);
    // Create task's checkbox
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.name = 'task' + taskIndex;
    check.id = 'checktask' + taskIndex;
    check.addEventListener('change', event => {
        if (check.checked) {
            document.getElementById('donelist').appendChild(document.getElementById(check.name));
        } else {
            document.getElementById('dolist').appendChild(document.getElementById(check.name));
        }
    })
    //Create enclosing label
    let label = document.createElement('label');
    label.for = 'task' + taskIndex;
    // Create list item
    let li = document.createElement('li');
    li.id = 'task' + taskIndex;
    //Append everything in the right order to the list
    label.appendChild(check);
    label.appendChild(taskText);
    li.appendChild(label);
    document.getElementById('dolist').appendChild(li);
}