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
}
popDateTime();

$(document).ready(function() {
  cardBody.click(function() {
    // event.preventDefault();
    form.append(formContents);
    form.click(function(event) {
      event.stopPropagation();
    });
    $(this).append(form);
  });

  save.click(function(event) {
    event.stopPropagation();
    storeTodos($(this).data("time"));
    form.empty();
    populateTodos();
  });
  

  save.click(function(event) {
    event.stopPropagation();
    var timeArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    $(".card").each(function(index) {
    var emptyCard = $(this).find(`#${timeArray[index]}`);
    if (emptyCard.text() =="Click to add appointment"){
      emptyCard.empty();}
    });
  });

  function storeTodos(id) {
    localStorage.setItem(
      id,
      $("input")
      .val()
      .trim()
      );
    }
console.log(save);
    function populateTodos() {
      var timeArray = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
      for (var i = 0; i < timeArray.length; i++) {
        var li = $("<li>").text(localStorage.getItem(`${timeArray[i]}`));
          $(`#${timeArray[i]}`).append(li);
      // var li = $("<li>").text(localStorage.getItem(timeArray[index]));
      // $(timeArray[index]).append(li);
        }
      //   $(".card").each(function(index) {
      //   // var popTodos = $(this).find(".card-body");
      //   // popTodos.text(timeArray[index]);
      // })
    }
    populateTodos();
    storeTodos();
  });
