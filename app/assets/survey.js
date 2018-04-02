console.log("test");

function fillModal(data) {
  $("#friendName").text(data.name);
  $("#winnerPic").attr("src", data.photo);
  $("#myModal").show();
}

$("#submit").on("click", function(event ) {
  event.preventDefault();
  console.log("test");

  var userData = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ]
  };

  $.post("/api/friends", userData, function(data) {
    fillModal(data);
  });
});