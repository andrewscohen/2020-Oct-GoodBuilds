window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

})

//show and hide edit review form
$(document).ready(function(){
    $('button[id^=review-btn]').click(function(){
     let reviewId = parseInt(this.id.slice(-1))
     $(`form[id^=review-form-${reviewId}]`).toggleClass("form-hide")
    });
  });

  // delete review
  $(document).ready(function(){
    $('button[id^=delete-btn]').click(function(){
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
