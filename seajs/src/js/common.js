seajs.config({
    base: '/@@CONTEXT_PATHdist/',
    paths: {
        'app': 'js/app',
        'mod': 'js/mod',
        'lib': 'js/lib',
        'deps': 'js/deps'
    },
    alias: {
        'jquery': 'lib/jquery.js?v=20160518',
        'bootstrap': 'lib/bootstrap.js?v=20160518',
        'jquery.validate': 'lib/jquery.validate.js?v=20160518'
    }
});