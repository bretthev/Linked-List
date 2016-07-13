// var $nameField = $('.bookmark-name')
// var $urlField = $('.url-address')
var $nameInput = $('.bookmark-name');
var $urlInput = $('.url-address');
var $bookmarkButton = $('.bookmark-button')
var $removeButton = $('.remove-button')

function makeArticle(string1, string2){
  $('.bookmark-list').html('<article class="list-item"><p>' + string1 + '</p><p>' + '<a href="' + string2 + '">' + string2 + '</a>' + '</p><button class="read-button">READ</button><button class="remove-button">REMOVE</button></article>')}

  $('.bookmark-button').on('click', function() {
    if ($nameInput.val() ==='' || $urlInput.val() === '')
    {alert("Please enter a name AND a URL")}
    else {
      makeArticle($nameInput.val(), $urlInput.val());
    }
  })

  function removeParentArticle() {
    $(this).parent().remove();
  }

  $('.remove-button').on('click', function() {
    debugger;
    removeParentArticle();
  });
