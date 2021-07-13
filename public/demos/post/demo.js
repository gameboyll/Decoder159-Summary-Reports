var send = function () {

    var el = document.getElementById('text'),
    text = el.value;

    axios.post('/',{iwant: text}).then(function(res){

        console.log(res.data);
        document.getElementById('out').innerHTML = res.data;

    });
     

};