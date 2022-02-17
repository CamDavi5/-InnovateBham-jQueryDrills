const submitBtn = $('#btnSubmit');
//console.log(input);

/*$("body").append('<div></div>');
const newDiv = $('div')*/
$('body').append('<ul></ul>');
const newUl = $('ul');

$(submitBtn).click(function(e) {
    let input = $('input[type=text]').val();
    console.log(input);
    if (input != "") {
        /*let h2 = $('<h2></h2>');
        h2.append(input);
        newDiv.append(h2);
        $(h2).mouseover(function() {
            $(h2).css({
                'background-color': 'green',
                'border-radius': '30px'
            })
        })*/

        let newList = $('<li></li>');
        newList.append(input);
        $('body').append(newList)
        $(newList).click(function() {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            $(newList).css('color', '#'+randomColor);
        })
        $(newList).dblclick(function() {
            newList.remove();
        })
        //alert(input);
    } 
    e.preventDefault();
})



