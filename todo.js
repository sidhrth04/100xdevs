<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <script>
        let globalId = 1;
        
        function markAsDone(todoId){
            const parent = document.getElementById(todoId);
            parent.children[2].innerHTML = "Done!"
        }

        function createChild(title, description, id){
            const child = document.createElement("div");
            const firstgrandchild = document.createElement("div");
            firstgrandchild.innerHTML = title;
            const secondgrandchild = document.createElement("div");
            secondgrandchild.innerHTML = description;
            const thirdgrandchild = document.createElement("button");
            thirdgrandchild.innerHTML = "Mark as Done";
            thirdgrandchild.setAttribute("onclick", `markAsDone(${id})`);
            child.appendChild(firstgrandchild);
            child.appendChild(secondgrandchild);
            child.appendChild(thirdgrandchild);
            child.setAttribute("id", id);
            return child; 
        }

        function addTodo(){
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const parent = document.getElementById("todos");

            parent.appendChild(createChild(title, description, globalId++));

            // document.getElementById("todos").innerHTML = originalhtml + `<div>
            //     <div>${title}</div>
            //     <div>${description}</div>
            //     <button>Mark as done</button>
            //     </div>`  //this is the ugly way
        }
        //the better way to do this will document.createElement
    </script>
    <input id="title" type="text" placeholder="title"></input> <br></br>
    <input id="description" type="text" placeholder="description"></input> <br></br>
    <button onclick="addTodo()">Add todo</button>
    <div id="todos">

    </div>
</html>
