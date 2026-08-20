import {useState} from "react";

function ExpenseTracker () {

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");
    const [expenses, setExpenses] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const addExpense = () => {
        if (description.trim() ==="" || amount === ""){
            alert("please enter description and amount");
            return;
        }
        if(Number(amount) <= 0) {
            alert("Amount must be greater than 0");
            return;
        }
        if (editingId !== null) {
    setExpenses(
        expenses.map((expense) =>
            expense.id === editingId
                ? {
                      ...expense,
                      description: description,
                      amount: Number(amount),
                      category: category
                  }
                : expense
        )
    );

    setEditingId(null);
    setDescription("");
    setAmount("");
    setCategory("Food");

    return;
}
        const newExpense = {
            id: Date.now(),
            description: description,
            amount: Number(amount),
            category: category
        };
        setExpenses([...expenses, newExpense]);
        setDescription("");
        setAmount("");
        setCategory("Food");
    };
    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !==id));
    };
    const editExpense = (expense) => {
    setDescription(expense.description);
    setAmount(expense.amount);
    setCategory(expense.category);
    setEditingId(expense.id);
};
    
    const totalExpense = expenses.reduce((total, expense) => {
        return total + expense.amount;
    }, 0);
    return (
        <div className = "expense-container">
            <h1>Expense Tracker</h1>
            <h2>Total Expense: ₹{totalExpense}</h2>
            <label>Description:</label>
            <input
            type = "text"
            value = {description}
            onChange = {(e) => setDescription(e.target.value)}
            />
            <label>Amount:</label>
            <input
            type = "number"
            value = {amount}
            onChange = {(e) => setAmount(e.target.value)}
            />
            <label>Category:</label>
            <select
            value = {category}
            onChange = {(e) => setCategory(e.target.value)}
            >
                <option value = "Food">Food</option>
                <option value = "Travel">Travel</option>
                <option value = "Shopping">Shopping</option>
                <option value = "Bills">Bills</option>
                <option value = "Others">Others</option>

            </select>
            <br />
            <button onClick={addExpense}>
    {editingId !== null ? "Update Expense" : "Add Expense"}
</button>
{editingId !== null && (
    <button onClick={() => {
        setEditingId(null);
        setDescription("");
        setAmount("");
        setCategory("Food");
    }}>
        Cancel
    </button>
)}
            <h2>Expenses</h2>
            <table>
    <thead>
        <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Action</th>
        </tr>
    </thead>

    <tbody>
    {expenses.length === 0 ? (
        <tr>
            <td colSpan="4">
                No expenses added yet.
            </td>
        </tr>
    ) : (
        expenses.map((expense) => (
            <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>₹{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                    <button onClick={() => editExpense(expense)}>
                        Edit
                    </button>

                    <button onClick={() => deleteExpense(expense.id)}>
                        Delete
                    </button>
                </td>
            </tr>
        ))
    )}
</tbody>
</table>
        </div>
    );
}
export default ExpenseTracker;