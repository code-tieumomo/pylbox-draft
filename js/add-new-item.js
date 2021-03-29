// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDHirv0lel40NrnbvQnImYtZ0kJW3jowLQ",
    authDomain: "pylbox-code-tieumomo.firebaseapp.com",
    projectId: "pylbox-code-tieumomo",
    storageBucket: "pylbox-code-tieumomo.appspot.com",
    messagingSenderId: "1001316735922",
    appId: "1:1001316735922:web:2fc10f48038d8c7b63a2ab",
    measurementId: "G-5EPZRH8EH4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var defaultDatabase = firebase.database();

$("#btn-add").on('click', function(event) {
    event.preventDefault();
    $("#btn-add").html('Adding');
    $("#btn-add").prop('disabled', true);
    var title = $("#title").val();
    var box = $("#box").val();
    var image = $("#imageConverted").val();
    var source = $("#source").val();
    var sourceLink = $("#sourceLink").val();
    var sumary = $("#sumary").val();
    var detail = $("#summernote").val();
    var key = Math.ceil(Date.now()/1000);

    defaultDatabase.ref('items/' + key).set({
        title: title,
        box: box,
        image: image,
        source: source,
        sourceLink: sourceLink,
        sumary: sumary,
        detail: detail
    }).then(function() {
        new Toast({
            message: '✔ Added new item !',
            type: 'success',
            customButtons: [
                {
                    text: 'View item detail',
                    onClick: function() {
                        window.open('detail.html?key=' + key);
                    }
                }
            ]
        });
        $("#btn-add").prop('disabled', false);
        $("#btn-add").html('Add');
        $("#form-add").trigger('reset');
        $("#summernote").summernote("reset");
    }).catch(function(error) {
        new Toast({
            message: '❌ Something went wrong, please try again !',
            type: 'danger',
            customButtons: [
                {
                    text: 'View error detail',
                    onClick: function() {
                        alert(error);
                    }
                }
            ]
        });
        $("#btn-add").prop('disabled', false);
        $("#btn-add").html('Add');
    });
});
