//contador de id
let idCounter = 0;
//recogemos y guardamos en una variable el valor del input (tipo texto):
const input = document.querySelector('input[type="text"]')
//detectamos cuando el usuario escriba una tarea
userInput.addEventListener('submit', (event) => {
    event.preventDefault();//para que no se nos borre el mensaje de consola
    console.log('el usuario ha escrito una tarea');
    addTask();
});
//creamos la función addtask() con la función flecha. 
let addTask = () => {
    idCounter++;
    let newvalue = input.value;
    if (input.value != '') {
        console.log('evento desde función flecha addTaask');//log
        //list.innerHTML += '<h2>Nueva tarea</h2>';---->¡prueba!
        //seleccionamos y le añadimos contenido al div con id=list:
        list.innerHTML += `
    <div class="task-container" id='${idCounter}'> 
        <label>
            <input type="checkbox">
            ${newvalue}
        </label>
        <img src="imagen/cubo-de-basura.png" class="close-btn">
    </div> `
        //dejamos el input sin contenido:
        input.value = '';
        actualizarStats();
    }

};
//creo la accion de una tarea/acción primero debo escuchar un evento. 
 
list.addEventListener('click', (event) => {
   
    if (event.srcElement.nodeName == 'INPUT') {
        actualizarStats();
    } else if (event.srcElement.nodeName == 'IMG') {
    
        deleteTarea(event.srcElement.parentNode.id);
    }
});

//Función que actualiza la estadística:
let actualizarStats = () => {
   
    let elementList = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');//m mostrarará todos los elementos input checkbox seleccionados(checked)

    stats.innerHTML = `<p>Tareas pendientes: ${elementList.length} Tareas completadas: ${checkbox.length}<p>`
};

//Función que borra las tareas:
let deleteTarea = (id) => {
    let tareaBorrada = document.getElementById(id);
    list.removeChild(tareaBorrada);
    actualizarStats();
};
