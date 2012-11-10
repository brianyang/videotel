$('#play-video').click(function(){
  alert('foo')
  window.picker.play(uploadImg)
})

window.picker = function(){
  filepicker.pick({
      container: 'modal',
      services:['COMPUTER'],
    },
    function(FPFile){
      console.log(JSON.stringify(FPFile));
      // $('body').append(JSON.stringify(FPFile))
      var uploadImg = FPFile.url
      console.log(uploadImg)
      //$('body').append('<video src=' + uploadImg + '></video>')
      //$('#video1>source').attr('src', uploadImg)
      alert(uploadImg)
      _V_("video1").ready(function(){
        var myPlayer = this;
        myPlayer.src(uploadImg);
        myPlayer.play()
      });
    },
    function(FPError){
      console.log(FPError.toString());
    }
  );

}


$('input').focus(function(){
    picker()
})
