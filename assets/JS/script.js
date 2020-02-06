var cardInput = $(".card");
var cardBody = $(".card-body");
var form = $("<form>");
var formContents = $("<input>", {
  type: "text",
  id: "input",

  placeholder: "What's going down?"
});
var headerDateTime = $(".lead");
var input = $("#input");
var save = $(".btn");
var dateTime = $(".dateTime");
var todos = [];

// var m = moment (); = date and time now
var m = moment();
var mDate = m.format("MM-DD-YYYY");
var mDay = m.format("dddd");
var mHour = m.format("HH");
// var timeSlot = $("<h3>");
// timeSlot.text(`${mHour}`);
// dateTime.append(timeSlot);
headerDateTime.text(`Heres whats happenings: ${mDay} ${mDate}`);

function popDateTime() {
  var timeArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  $(".card").each(function(index) {
    var h3InCard = $(this).find(".dateTime");
    h3InCard.text(timeArray[index]);
    var mHourInt = parseInt(mHour);
    if (timeArray[index] < mHourInt) {
      $(this).css("background-color", "red");
    } else if (timeArray[index] == mHourInt) {
      $(this).css("background-color", "gray");
    } else {
      $(this).css("background-color", "green");
    }
  });

  function cardColor() {
    var test = parseInt(timeSlot.text());
    console.log(test);
    var mHourInt = parseInt(mHour);
    console.log(mHourInt);
    if (test < mHourInt) {
      cardInput.css("background-color", "red");
    } else if (test == mHourInt) {
      cardInput.css("background-color", "gray");
    } else {
      cardInput.css("background-color", "green");
    }
  }
  // cardColor();
}
popDateTime();

$(document).ready(function() {
  cardInput.click(function() {
    // event.preventDefault();
    form.append(formContents);
    form.click(function(event) {
      event.stopPropagation();
    });
    $(this).append(form);
    var idArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    for (var i = 0; i < idArray.length; i++) {
      var idTarget = `id = ${idArray[i]}`;
      var cardClear = cardBody.attr(idTarget);
      $(cardClear).empty();
      console.log(idTarget);
    }
  });

  // for (var i = 0; i < todos.length; i++) {
  //   var todo = todos[i];
  //   var li = $("<li>");
  //   li.text(todo);
  //   li.attr("data-index", i);
  // }
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
    form.empty();
    populateTodos();
  });

  function storeTodos(id) {
    localStorage.setItem(
      id,
      $("input")
        .val()
        .trim()
    );
  }
  function populateTodos() {
    var timeArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    for (var i = 0; i < timeArray.length; i++) {
      var li = $("<li>").text(localStorage.getItem(`${timeArray[i]}`));
      $(`#${timeArray[i]}`).append(li);
    }
  }

  populateTodos();
  // storeTodos();
});

//   save.click(function(event) {
//     event.preventDefault();

//     var todoText = input.val().trim();

//     // Return from function early if submitted todoText is blank
//     if (todoText === "") {
//       return;
//     }
//     // Add new todoText to todos array, clear the input
//     todos.push(todoText);
//     input.val() = "";

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   });

// need to set item with local storage and then get item with local storage
// add bombs and explosion emojis
