function validateTaskInput() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;
    console.log(title, description, dueDate);
    
    if( title === '' && description === '' && dueDate === '') {
        alert('Please fill in all required fields: Title, Description, and Due Date.');
        return false;
    }
    else {
        alert('Task saved successfully!');
        return true ;
    }
}
