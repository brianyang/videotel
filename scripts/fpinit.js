
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
      $('body').append('<video src=' + uploadImg + '></video>')
    },
    function(FPError){
      console.log(FPError.toString());
    }
  );

}


$('input').focus(function(){
    picker()
})
