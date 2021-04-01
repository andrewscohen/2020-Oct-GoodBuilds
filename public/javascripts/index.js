window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

})

//show and hide edit review form
//in progress
$(document).ready(function(){
    $("#review-btn").click(function(){
     console.log('clicked the edit button')
     $("#review-form").toggleClass("form-hide")
    });
  });

  // delete review
  $(document).ready(function(){
    $('button[id^=delete-btn]').click(function(){
        console.log('delete button clicked')
        let reviewId = parseInt(this.id.slice(-1))
        $.ajax({
            url: '/projects/reviews/delete',
            type: 'DELETE',
            data: {"reviewId": reviewId},
            success: function(result) {
                console.log('deleted successfully')
            }
        });
    });
  });
