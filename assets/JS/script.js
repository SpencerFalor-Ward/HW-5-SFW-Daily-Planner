var cardInput = $(".card");
var form = $("<form>");
var formContents = $("<input>", {
  type: "text",
  id: "input",
  placeholder: "What's going down?"
});
var input = $("#input");
var save = $(".btn");
var dateTime = $(".dateTime");
var todos = [];

// var m = moment (); = date and time now
var m = moment();
var mDate = m.format("DD-MM-YYYY");
var mHour = m.format("HH");
var timeSlot = $("<h3>");
timeSlot.text(`${mDate} ${mHour}`);
dateTime.append(timeSlot);
console.log(timeSlot);

$(document).ready(function() {
  cardInput.click(function() {
    // event.preventDefault();
    form.append(formContents);
    form.click(function(event) {
      event.stopPropagation();
    });
    $(this).append(form);
  });

  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    var li = $("<li>");
    li.text(todo);
    li.attr("data-index", i);
  }
  //below is similar to renderTodos on class activity
  save.click(function(event) {
    event.stopPropagation();
    // $(this).append(
    // for (var i = 0; i < todos.length; i++) {
    //   var todo = todos[i];
    //   var li = $("<li>");
    //   li.text(todo);
    //   li.attr("data-index", i);
    // }
    // var li = $("<li>");
    // var list = $(this).before(li);
    // $("card-body").wrap(list);
    // )
    storeTodos($(this).data("time"));
    populateTodos();
  });

  function storeTodos(id) {
    // Stringify and set "todos" key in localStorage to todos array
    localStorage.setItem(
      id,
      $("input")
        .val()
        .trim()
    );
  }

  function populateTodos() {
    var timeArray = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6];
    for (var i = 0; i < timeArray.length; i++) {
      var p = $("<p>").text(localStorage.getItem(`${timeArray[i]}am`));
      $(`#${timeArray[i]}am`).prepend(p);
    }
  }

  populateTodos();
  // save.click(function(event) {
  //   event.preventDefault();

  //   var todoText = input.val().trim();

  //   // Return from function early if submitted todoText is blank
  //   if (todoText === "") {
  //     return;
  //   }
  //   // Add new todoText to todos array, clear the input
  //   todos.push(todoText);
  //   input.val() = "";

  //   // Store updated todos in localStorage, re-render the list
  //   storeTodos();
  //   renderTodos();
  // });
});

// need to set item with local storage and then get item with local storage
// add bombs and explosion emojis
