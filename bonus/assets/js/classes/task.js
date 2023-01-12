class Task{
    
    #texte;
    
    constructor(texte){
        
        this.#texte = texte;
    }
    
    get texte () {
        
        return this.#texte;
    }
    
    set texte (texte) {
        
        this.#texte = texte;
    }
        
    addNewTask(){
        
        if(this.#texte !== ""){
            
            let toDoList = document.querySelector("body > main > section:first-of-type > ul");
            let toDoListLi = document.createElement("li"); 
            let toDoListLiContent = document.createTextNode(this.#texte);
            
            toDoListLi.appendChild(toDoListLiContent);
            toDoList.appendChild(toDoListLi);
            
        }
    }
    
    askForTask(){
    
        let addTaskBtn = document.getElementById("add-task-button");
        
        let that = this;
        
        addTaskBtn.addEventListener("click", function(){
            
            let newTask = window.prompt("Quelle tâche souhaitez-vous ajouter au tableau ?");
            
            that.#texte = newTask;
            
            that.addNewTask();
            
        });
    }
}

export { Task };