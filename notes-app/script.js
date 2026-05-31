let notes =
JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

function addNote(){

    let input =
        document.getElementById("noteInput");

    let note =
        input.value.trim();

    if(note === ""){
        alert("Enter a note");
        return;
    }

    notes.push(note);

    saveNotes();

    displayNotes();

    input.value = "";
}

function displayNotes(){

    let noteList =
        document.getElementById("noteList");

    noteList.innerHTML = "";

    notes.forEach((note,index)=>{

        let li =
            document.createElement("li");

        li.innerHTML = `
            <span>${note}</span>

            <div class="actions">

                <button onclick="editNote(${index})">
                    Edit
                </button>

                <button
                    class="delete"
                    onclick="deleteNote(${index})">
                    Delete
                </button>

            </div>
        `;

        noteList.appendChild(li);

    });
}

function deleteNote(index){

    notes.splice(index,1);

    saveNotes();

    displayNotes();
}

function editNote(index){

    let newNote =
        prompt("Edit note",notes[index]);

    if(newNote !== null){

        notes[index] = newNote;
        saveNotes();
        displayNotes();
    }
}
function saveNotes(){

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

}

function searchNotes(){

    let searchText =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let noteItems =
        document.querySelectorAll("#noteList li");

    noteItems.forEach(item => {

        let noteText =
            item.querySelector("span")
            .textContent
            .toLowerCase();

        if(noteText.includes(searchText)){
            item.style.display = "flex";
        }
        else{
            item.style.display = "none";
        }

    });

}