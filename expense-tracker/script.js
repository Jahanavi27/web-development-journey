let expenses = [];

function addExpense(){

    let description =
        document.getElementById("description").value;

    let amount =
        document.getElementById("amount").value;

    if(description === "" || amount === ""){

        alert("Please fill all fields");
        return;
    }

    expenses.push({
        description: description,
        amount: Number(amount)
    });

    displayExpenses();

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}

function displayExpenses(){

    let expenseList =
        document.getElementById("expenseList");

    expenseList.innerHTML = "";

    let total = 0;

    expenses.forEach((expense,index)=>{

        total += expense.amount;

        let li =
            document.createElement("li");

        li.innerHTML = `
            <span>
                ${expense.description}
                - ₹${expense.amount}
            </span>

            <button
                class="delete"
                onclick="deleteExpense(${index})">
                Delete
            </button>
        `;

        expenseList.appendChild(li);

    });

    document.getElementById("total")
        .innerText =
        `Total: ₹${total}`;
}

function deleteExpense(index){

    expenses.splice(index,1);

    displayExpenses();
}