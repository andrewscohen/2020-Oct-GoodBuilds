window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

})

//show and hide edit review form
//in progress
$(document).ready(function(){
    let buttonClicked = false
    $("#review-btn").click(function(){
     console.log('clicked the edit button')
     if (buttonClicked === true) {
        buttonClicked = false
    } else {
        buttonClicked = true;
    }
     $("#review-form").toggleClass("form-hide")
    });
  });

  // delete review
  $(document).ready(function(){
    $('button[id^=delete-btn]').click(function(){
        console.log('delete button clicked')
        let reviewId = parseInt(this.id.slice(-1))
        $.ajax({
            url: '/project/reviews/delete',
            type: 'DELETE',
            data: {"reviewId": reviewId},
            success: function(result) {
                console.log('deleted successfully')
            }
        });
    });
  });
