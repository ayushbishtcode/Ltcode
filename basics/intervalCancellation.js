var cancellable = function (fn, args, t) {
    fn(...args)
    setInterval()( =>
    {
        fn(...args)
    }, t)
    

};