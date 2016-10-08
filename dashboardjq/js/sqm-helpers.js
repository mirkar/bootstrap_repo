function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function render(tmpl_name, tmpl_data) {
    if ( !render.tmpl_cache ) { 
        render.tmpl_cache = {};
        console.log('point #1: render.tmpl_cach does not exist');
    }

    if ( ! render.tmpl_cache[tmpl_name] ) {
        var tmpl_dir = 'assets/templates';
        var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';

        console.log('point #2: render.tmpl_cache[tmpl_name] does not exist');

        var tmpl_string;
        $.ajax({
            url: tmpl_url,
            method: 'GET',
            async: false,
            success: function(data) {
                tmpl_string = data;
                console.log('AJAX request has been completed');
            }
        });
        render.tmpl_cache[tmpl_name] = Handlebars.compile(tmpl_string);
       
    }

    return render.tmpl_cache[tmpl_name](tmpl_data);
}