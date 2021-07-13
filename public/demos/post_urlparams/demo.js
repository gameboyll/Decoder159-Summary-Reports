
axios({

    method: 'post',
    url: '/',
    params: {

        sort: 'date'

    },
    data: {

        iwant: 'theanwser'

    }

}).then(function (res) {

    console.log(res);

}).catch (function (e) {

    console.log(e);

});
