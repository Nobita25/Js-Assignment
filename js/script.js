window.addEventListener('DOMContentLoaded' , event => {
    
        div_fetch = document.querySelector('#fetchApi')

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(fetch => {
            fetch.forEach(fetch => {
                div_fetch.innerHTML += `<input type="checkbox" value="${fetch.id} id="${fetch.id}" ${ fetch.completed ? "checked" : ''} />
                <label for="${fetch.id}">${fetch.title}</label><br>`
            });
            getSelected()

            
            
        })
        .catch(err => console.log(err));
            
        
    }
)

function getSelected(){
    selected = []

    checked = document.querySelectorAll('input[type="checkbox"]:checked')

    checked.forEach(chk => selected.push(chk.value))

    console.log(selected)
}

function CheckAll()
{

    chk = document.querySelectorAll('input[type="checkbox"]')
    for (i = 0; i < chk.length; i++)
	chk[i].checked = true ;

}

function UnCheckAll()
{

    chk = document.querySelectorAll('input[type="checkbox"]')
    for (i = 0; i < chk.length; i++)
	chk[i].checked = false ;

}

document.querySelector('button').addEventListener('click', (e)=>{
    
    getSelected()
})

document.getElementById("chkAll").addEventListener('click', (e)=>{
    
    CheckAll()
})
document.getElementById("unChkAll").addEventListener('click', (e)=>{
    
    UnCheckAll()
})




