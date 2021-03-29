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

var params = new URLSearchParams(location.search);
var key = params.get("key");

if (key !== null) {
    var defaultDatabase = firebase.database();
    var itemsRef = firebase.database().ref('items/' + key);
    itemsRef.on('value', (snapshot) => {
        const item = snapshot.val();
        if (item) {
            window.document.title = item['title'] + " | Pylbox";
            $("#item-title").html(item["title"]);
            $("#item-sumary").html(item["sumary"]);
            $("#item-box").html(item["box"]);
            $("#item-time").html(new Date(key * 1000));
            $("#item-source").html(item["source"]);
            $("#item-source").attr('href', item['sourceLink']);
            $("#image").attr('src', item["image"]);
            $("#item-detail").html(item["detail"]);
        } else {
            $("#item-title").html("Sorry! We can't found this item in box 😥");
            $("#item-status").html("We can't found item with this key, maybe you have a wrong key 🥴, please change the key or go back to home page and search for the item you want. If you still stuck in this page, read the <a href=\"documents.html\">docs</a> for more infomation !")
            $("#item-info").remove();
            $("#item-relate").remove();
            $("#h2-relate").remove();
        }
    });
} else {
    $("#item-title").html("Sorry! We can't found this item in box 😥");
    $("#item-status").html("We can't found the item's key, maybe you click too fast at home page 🥴, go back to <a href=\"index.html\">homepage</a> and wait until we loaded all item. If you still stuck in this page, read the <a href=\"documents.html\">docs</a> for more infomation !")
    $("#item-info").remove();
    $("#item-relate").remove();
    $("#h2-relate").remove();
}
