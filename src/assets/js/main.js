(function() {
    renderTodoList = todoList => {
        const todoListDOM = document.getElementById('todoList');
        const html = todoList.map((item, index) => `<div class="list" data-id=${item.id} onclick="toggleItem(this)">
        <span class="${item.isComplete ? 'icon-finsih' : 'icon-unchecked'}" data-id=${item.id}></span>
        <span class="desc" data-id=${item.id}>
            ${item.desc}
        </span>
        <span class="icon-bin" data-id=${item.id}></span>
        </div>`).join('')
        todoListDOM.innerHTML = html;
    }
    let todoList = [];
    // 取得待辦事項清單（GET）
    fetch('http://localhost:3000/todolist')
        .then(res => res.json())
        .then(json => {
            todoList = todoList.concat(json);
            renderTodoList(todoList); // render todoList
        })
        .catch(err => {
            console.log(err);
        })

    todoInput = item => {
        const todoInputDOM = document.getElementById('todoInput');
        let data = {
            desc: todoInputDOM.value,
            isComplete: false
        }
        addTodoList(data);
        todoInputDOM.value = '';
    }
    addTodoList = item => {
        fetch('http://localhost:3000/todolist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            })
            .then(res => res.json())
            .then(json => {
                todoList.push(json);
                renderTodoList(todoList);
            })
    }
    toggleItem = item => {
        const currentTarget = item.dataset
        console.log(currentTarget.matches('span.icon-unchecked'))
        // const todoListDOM = document.getElementById('todoList');
        // console.log(todoListDOM)
    }

}())