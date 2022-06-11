function clipboardCopy(containerId) {
    const range = document.createRange();
    range.selectNode(containerId); //changed here
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  
    // $(".js_active_alert").addClass('active');
    // $(".comments__item button").addClass('disabled');
  
    // /* SHOW ALERT  */ 
    // setTimeout(function() {
    //   $(".js_active_alert").removeClass('active');
    // }, 3000);
  
    // /* DISABLE COPY BUTTON IF ALLERT ACTIVE  */ 
    // setTimeout(function() {
    //   $(".comments__item button").removeClass('disabled');
    // }, 3000);
  }

export { 
    clipboardCopy,
}