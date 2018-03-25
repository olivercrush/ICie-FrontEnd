// https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-get-started-js-get-intent

$(".chat-form").submit(function (e) {
  e.preventDefault();

  var params = {
    // Paramètres optionnels, ici avec leurs valeurs par défaut
    "timezoneOffset": "0",
    "verbose": "false",
    "spellCheck": "false",
    "staging": "false",
  };

  $.ajax({
    url: "https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/id?q=phrase" + $param(params),
    beforeSend: function(xhrObj) {
      // Headers de la requête
      xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "THE SUBSCRIPTION KEY");
    },
    type: "GET"
  })
  .done(function(data) {
    console.log(data);
  })
  .fail(function() {
    console.error("Failed");
  });
});
