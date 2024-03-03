var timeDisplayDate = $('#currentDay');

function displayTime(){
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayDate.text(rightNow);
}

$(".saveBtn").on('click',function(){
  console.log($(this))
  console.log($(this).siblings(".description").val())
  var blockText= $(this).siblings(".description").val()
  var blockId= $(this).parent().attr('id')
  localStorage.setItem(blockId,blockText);

})

var currentHour = dayjs().hour();
$(".time-block").each(function() {
  var blockHour = parseInt($(this).attr("id").split("-")[1]);
  if (blockHour < currentHour) {
    $(this).removeClass('present future').addClass("past");
  } else if (blockHour === currentHour) {
    $(this).removeClass('past future').addClass("present");
  } else {
    $(this).removeClass('past present').addClass("future");
  }
});

$(".time-block").each(function() {
  var blockId = $(this).attr('id');
  var saveText = localStorage.getItem(blockId); // Corregido aquí, cambió de localStorage.getId() a localStorage.getItem()
  if (saveText) {
    $(this).find(".description").val(saveText);
  }
});



displayTime();
