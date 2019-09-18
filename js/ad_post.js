$('document').ready(function(){
    $('#upload_post').click(function(){
        event.preventDefault();
        let brand_name = $("#brand").val();
        let model_bname = $('#model').val();
        let condition = $('#condition').val();
        let images = $('#image_files').val();
        let price = $('#price').val();
        let location = $("#location").val();

        create_post = {
            brand: brand_name,
            model: model_bname,
            condition: condition,
            image: images,
            price: price,
            location: location
        }

        $.ajax({
            method: "POST",
            url: 'http://localhost:3000/users',
            data: create_post,
            success: alert('Submitted!'),
            // dataType: dataType
        });


    })

})