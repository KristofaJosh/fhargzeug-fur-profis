$('document').ready(function(){
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        return results[1] || 0;
    };

    console.log($.urlParam('id'));
 

    $.ajax({
        url: `http://localhost:3000/users/${$.urlParam('id')}`,
        dataType: "json",
        method: "GET",
        success: function(data){
            $('#product-edit').append(
            `<div>
                <input type="text" name="" value="${data.model}" id="brand">
                <input type="text" name="" value="${data.brand}" id="model">
                <input type="text" name="" value="${data.price}" id="price">
                <input type="text" name="" value="${data.location}" id="location">
                <input type="text" name="" value="${data.image}" id="image">
                <input type="text" name="" value="${data.condition}" id="condition">
            </div>`
            )
        },
        
    });

    $('button').click(function(){
        event.preventDefault();
        let brand =  $('#brand').val();
        let model = $('#model').val();
        let condition = $('#condition').val();
        let image = $('#image').val();
        let price = $('#price').val();
        let location = $('#location').val();

        data = {
            brand: brand,
            model: model,
            condition: condition,
            image: image,
            price: price,
            location: location
        }

        $.ajax({
            url: `http://localhost:3000/users/${$.urlParam('id')}`,
            method: "PUT",
            data: data,
            success: function(){
                alert('success!')
            }

        })
    })

})