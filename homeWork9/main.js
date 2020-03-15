for (let i = 0 ; i < 100; i++) {
    setTimeout (function () {
        var newDate = new Date()
        console.log(newDate.getHours()+':'+newDate.getMinutes()+':'+newDate.getSeconds())
    },i*1000)
}