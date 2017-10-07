$(document).ready(() => {
  console.log('script loaded');

  // listener for submitting the new pokemon form
  $('.new-quote-form').on('submit', e => {
    e.preventDefault(); // stops default behavior of page refresh

    // grab values from form
    const quote = $('.quote-input').val(),
          author = $('.quote-author-input').val(),
          link = $('.quote-url-input').val(),
          user_id = $('.quote-user_id-input').val();
         

    // create new object to send form data in
    const quoteData = {quote: quote, author: author, link: link, user_id: user_id};

    // console.log(quoteData);
    // send ajax request to make new quotes
    $.ajax({
      method: 'POST',
      url: '/quotes',
      data: quoteData,
      success: response => {
        console.log(response);
        window.location.replace('/quotes/show');
      }, error: msg => {
        console.log(msg);
      }
    }); // ends ajax method
  }); // ends submit function for new quote form

  $('.edit-quote-form').on('submit', e => {
    e.preventDefault(); // stops default behavior of page refresh

    // grab values from form
    const quote = $('.quote-change-input').val(),
          author = $('.quote-changeauthor-input').val(),
          link = $('.quote-changeurl-input').val(),
          user_id = $('.quote-changeuser_id-input').val();
         

    // create new object to send form data in
    const editedQuoteData = {quote: quote, author: author, link: link, user_id: user_id};

    // console.log(quoteData);
    // send ajax request to make new quotes
    $.ajax({
      method: 'PUT',
      url: '/quotes',
      data: editedQuoteData,
      success: response => {
        console.log(response);
        window.location.replace('/quotes/show');
      }, error: msg => {
        console.log(msg);
      }
    }); // ends ajax method
  }); // ends submit function for edit quote form

}); // ends document.ready


  