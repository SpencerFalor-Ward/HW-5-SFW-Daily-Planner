var cardInput = $(".card");
var form = $("<form>");
var formContents = $("<input>", {
  type: "text",
  id: "input",
  placeholder: "What's going down?"
});
var save = $(".btn");
var todos = [];

$(document).ready(function() {
  cardInput.click(function(event) {
    // event.preventDefault();
    $(this).append(form);
    form.append(formContents);
  });

for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    var li = $("<li>");
  li.text(todo);
  li.attr("data-index", i);
}
  save.click(function(event) {
      event.stopPropagation();
      // $(this).append(
          for (var i = 0; i < todos.length; i++) {
              var todo = todos[i];
              var li = $("<li>");
              li.text(todo);
              li.attr("data-index", i);
            }
            var li = $("<li>");
            var list = $(this).before(li);
            $("card-body").wrap(list);
            // )
        });
    });


//possible code to target specific click
    // function handler (event) {
    //     var target = $(event.target);
    //     if (target.is("li")) {
    //         target.children().toggle();
    //     }
    // }
    // $("ul").click(handler).find("ul").hide();
//   cardInput.on("click", function() {
//     $(".cardTest").append(
//       // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
//       $("<h3/>").text("Contact Form"),
//       $("<p/>").text("This is my form. Please fill it out. It's awesome!"),
//       $("<form/>", {
//         action: "#",
//         method: "#"
//       }).append(
//         // Create <form> Tag and Appending in HTML Div form1.
//         $("<input/>", {
//           type: "text",
//           id: "vname",
//           name: "name",
//           placeholder: "Your Name"
//         }), // Creating Input Element With Attribute.
//         $("<input/>", {
//           type: "text",
//           id: "vemail",
//           name: "email",
//           placeholder: "Your Email"
//         }),
//         $("<textarea/>", {
//           rows: "5px",
//           cols: "27px",
//           type: "text",
//           id: "vmsg",
//           name: "msg",
//           placeholder: "Message"
//         }),
//         $("<br/>"),
//         $("<input/>", {
//           type: "submit",
//           id: "submit",
//           value: "Submit"
//         })
//       )
//     );
//   });
// });
