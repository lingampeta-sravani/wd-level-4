const todoList = () => {
  let all = [];
  const formattedDate = (d) => {
    return d.toISOString().split("T")[0];
  };

  var dtod = new Date();
  const tod = formattedDate(dtod);

  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let overdue_lt = all.filter((item) => item.dueDate < tod);
    return overdue_lt;
  };

  const dueToday = () => {
    let dueToday_lt = all.filter((item) => item.dueDate === tod);
    return dueToday_lt;
  };

  const dueLater = () => {
    let dueLater_lt = all.filter((item) => item.dueDate > tod);
    return dueLater_lt;
  };

  const toDisplayableList = (list) => {
    let display_list = list.map((item) => {
      let completionStatus = item.completed ? "[x]": "[ ]";
      let displayedDate = item.dueDate === tod ? "" : item.dueDate;
      return `${completionStatus} ${item.title} ${displayedDate}`.trim();
    });
    let output_string = display_list.join("\n");
    return output_string;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
