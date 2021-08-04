export default {
    methods: {
        login(params, callBackHandler) {
            axios({
                method: 'post',
                url: '/login',
                data: params,
            }).then(function (response) {
                callBackHandler(response.data);
            }.bind(this)).catch(function (error) {
                if (error.response) {
                    callBackHandler(error.response);
                }
            })
        }
    }
}