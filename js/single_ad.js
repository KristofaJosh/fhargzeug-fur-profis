$('document').ready(function(){
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    }

    $.ajax({
        url: `http://localhost:3000/users/${$.urlParam('id')}`,
        dataType: "json",
        method: "GET",
        success: function(data){
            $('#product-description').append(
                `<div>
                    <p>${data.brand}</p>
                    <p>${data.model}</p>
                    <p>${data.price}</p>
                    <p>${data.location}</p>
                    </div>`
            )

            console.log(data);
        }
    })

})