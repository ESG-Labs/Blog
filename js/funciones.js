
var postView=[]
var posts={
    titulo:"",
    portada:"",
    descripcion:"",
    contenido:"",
}

function guardarPost() {
    $('#editor').froalaEditor('codeView.toggle');
    
    var titulo=$("#tituloPost").val(),
        descripcion=$("#description").val(),
        contenido=$('#editor').froalaEditor('codeView.get');
    
        $('#editor').froalaEditor('codeView.toggle');
    posts={
        titulo:titulo,
        titulo:titulo,
        descripcion:descripcion,
        contenido:contenido,
    }
    postView=[...postView,posts];
    clear();
    
}

function clear(){
    posts={
        titulo:"",
        portada:"",
        descripcion:"",
        contenido:"",
    }
}
function ver(){
    let posts='';
    $(postView).each(function(key,val){
       posts    += '<div><div><h1>'+val.titulo+'</h1></div><div><label>'+val.descripcion+'</label></div><div><button type="submit" class="verpos" data-ver="'+key+'">ver</button></div></div>'

    });
    $("#verpost").html(posts);
}
function verpost(i){
    $("#postss").html(postView[i].contenido);
}

$(document).on('click','#okPost',()=>{
    guardarPost();
    ver();
    $("#editorrr").hide();
    $("#verpost").show();
    $("#postss").hide();
    //window.location.href = "index.html";
});
$(document).on('click','#Npost',()=>{
    
    $("#editorrr").show();
    $("#verpost").hide();
    $("#postss").hide();;
    //window.location.href = "index.html";
});
$(document).on('click','.verpos',(e,a,b)=>{
    var pa = $(this).attr("data");

    $("#editorrr").hide();
    $("#verpost").hide();
    $("#postss").show();
    
    debugger
    verpost(pa);
    //window.location.href = "index.html";
});