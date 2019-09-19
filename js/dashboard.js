$('document').ready(function(){
    //to output data on dashboard
    $.ajax({
        url: 'http://localhost:3000/users',
        dataType: "json",
        method: "GET",
        success: function(data){
            // console.log(data)
            for (x of data){
                $('.inner-containement').append(`
                <div class="card" id="card-${x.id}">
                    <a class="single_ad" href="single_ad.html?id=${x.id}"><img src="img/ads/car-ad-2.jpg" alt="Avatar" style="width:100%"><a>
                    <div class="car-info">
                        <h4><strong>${x.brand}</strong></h4>
                        <h5>${x.model}<span id="${x.condition}"><i id="condition">${x.condition}</i></span></h5>
                        <h6><strong>Location:</strong> ${x.location}</h6>
                        <p><span>$</span>${x.price}</p>
                        <div id="del-edi">
                            <p><button class='del' id="del-${x.id}" value="${x.id}">DEL</button>
                            <a href="edit_product.html?id=${x.id}">
                            <button class="edit">EDIT</button></a>
                            </p>
                        </div>
                    </div>
                </div>`);
            }
            //to delete an item
            $('button.del').click(function(event){
                event.preventDefault();
                const id = $(this).val();
                $.ajax({
                    url: `http://localhost:3000/users/${id}`,
                    method: 'DELETE',
                    success: function(){
                        alert('Deleted!')

                    },
                    error: function(){
                        alert('Failed!')
                    }

                })
                // console.log($(this).val())
            })

            // //to edit an item
            // $('button.edit').click(function(event){
            //     event.preventDefault();
            //     console.log($(this).val())
            // })
        

        }   
    })


    //to delete item 

    // let x = $('button').click(function(){
    //     //on click delete
    //     alert(`Del was clicked`);

    // })


    // //to edit item
    // $("#edit").click(function(){
    //     //on click edit
    //     let b = $(".card").val();
    //     console.log(b);
    //     // alert('Edit was clicked')

    // });

})