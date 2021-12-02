

$(document).ready(function(){
    function aj(){
        $.ajax({
            type:"GET",
            URL:"https://jsonplaceholder.typicode.com/todos",
            success:function(data){
                var output='<ul class="list-group list-group-flush" >';
                for(var i in data){
                    output+='<li class="list-group-item"> <div class="custom-control">';
                    if(data[i].completed==true)
                    output+= '<input type="checkbox" class="custome-control-input" id ="customeCheck'+data[i].id+'" value="'+data[i].id+'" checked disabled >'
                    else
                    output+= '<input type="checkbox" class="custome-control-input" id ="customeCheck'+data[i].id+'" value="'+data[i].id+'" >'
                    output+='<lable  class="custom-control-label" for="customeCheck'+data[i].id+'">'+data[i].title+'</label></div></li>';

                }
                output+='</ul>';
                $('.result').html(output);
                var todopromise=new Promise((resolve,reject)=>{
                    var counter = 0;
                    $('input[type="checkbox"]').change(function(){
                        if($(this).prop("checked")==true){
                            counter+=1;
                            if (counter==5) resolve("congrats, 5 tasks completed")
                        }
                        else counter-=1;
                        console.log(counter);
                    })

                });
                todopromise.then((msg)=>{
                    alert(msg);
                })
            }
        });
    }

    aj();

    $("#ul1 li").click(function(){
        var typ=$(this).text();
        console.log(typ);
        if(typ=="Log Out") window.location.href='index.html';
        else if(typ=='To Do List') aj();
    });
});