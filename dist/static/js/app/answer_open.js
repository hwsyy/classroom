require.config({
    baseUrl: '/js',
    paths:{
        config:'config',
        jquery:'lib/jquery',
        AV:'lib/av',
        AVpush:'lib/AV.push',
        request:'widget/request',
        checkin:'widget/checkin'
    }
});

require(['config'],function(conf){
    $(function(){
        AV.initialize(conf.leancloud.appId, conf.leancloud.appKey);
        var Question = AV.Object.extend('Question');

        var $answerSubmitBtn = $('#answerSubmitBtn')
        var answers = []
        var query = new AV.Query('Question')
        var qObjectId = $('#qObjectId').val()
        var from = $('#uname').val()
        var stuid = $('#stuid').val()
        var qTitle = $('#qTitle').val()
        var Answer = AV.Object.extend('Answer')
        var qType = $('#qType').val()
        

        $answerSubmitBtn.click(function(){
            if(qType == 0){
                var data = {
                    from: from,
                    content: $('#answerContent').val(),
                    stuid:stuid,
                    qObjectId:qObjectId,
                    qTitle:qTitle
                }
            }
            if(qType == 1){
                var data = {
                    from: from,
                    content: 'A',
                    stuid:stuid,
                    qObjectId:qObjectId,
                    qTitle:qTitle
                }
                console.log(data)
            }else if(qType == 2){
                var data = {
                    from: from,
                    content: $('#answerContent').val(),
                    stuid:stuid,
                    qObjectId:qObjectId,
                    qTitle:qTitle
                }
            }else if(qType == 3){
                var data = {
                    from: from,
                    content: $('#answerContent').val(),
                    stuid:stuid,
                    qObjectId:qObjectId,
                    qTitle:qTitle
                }
            }

            var oAnswer = new Answer()
            oAnswer.set(data)
            
            oAnswer.save().then(() => {
                alert('已收到你的答案')
                console.log('success');
            }).catch((err) => {
                alert('提交失败，请检查你的网络...')
                console.log(err);
            });
            
        })
    })
})
