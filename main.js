var gmail;


function refresh(f) {
  if( (/in/.test(document.readyState)) || (undefined === Gmail) ) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}


var main = function(){
  // NOTE: Always use the latest version of gmail.js from
  // https://github.com/KartikTalwar/gmail.js
  gmail = new Gmail();
  console.log('Hello,', gmail.get.user_email());
  gmail.observe.after("open_email", function(id, url, body, xhr) {
  	var data = gmail.get.selected_emails_data();
  	var id = data[0].thread_id;
  	console.log(data[0].threads[id].content_plain);
  });
}

refresh(main);
