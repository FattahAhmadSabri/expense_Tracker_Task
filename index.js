const handleSubmit = (event) => {
  event.preventDefault();
  const expenseamount = event.target.expenseamount.value;
  const Choose_a_category = event.target.Choose_a_category.value;
  const description = event.target.description.value;
  const obj = {
    expenseamount,
    description,
    Choose_a_category,
  };
  console.log(obj);
  const data = JSON.parse(localStorage.getItem("expenses")) || [];
  data.push(obj);
  localStorage.setItem("expenses", JSON.stringify(data));
  displayData(obj);
};

const display = () => {
  let datas = JSON.parse(localStorage.getItem("expenses")) || [];
  datas.forEach((data) => displayData(data));
};

const displayData = (obj) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  li.textContent =
    obj.expenseamount + "-" + obj.Choose_a_category + "-" + obj.description;
  li.appendChild(deleteButton);
  li.appendChild(editButton);
  ul.appendChild(li);
};
window.onload = display;
