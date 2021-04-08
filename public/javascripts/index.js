window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

})

//show and hide edit review form
//in progress
$(document).ready(function(){
    // let buttonClicked = false
    $('button[id^=review-btn]').click(function(){
     console.log('clicked the edit button')
     let reviewId = parseInt(this.id.slice(-1))
     console.log(`${reviewId}`)
    //  if (buttonClicked === true) {
    //     buttonClicked = false
    // } else {
    //     buttonClicked = true;
    // }
     $(`form[id^=review-form-${reviewId}]`).toggleClass("form-hide")
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
