var vovels = [];
var consunent = [];
function product() {
    var get = document.getElementById("poor").value;
    for (let i = 0; i < get.length; i++) {



        if (get.slice(i, i + 1) === 'a' || get.slice(i, i + 1) === 'e' || get.slice(i, i + 1) === 'i' || get.slice(i, i + 1) === 'o' || get.slice(i, i + 1) === 'u') {

            vovels.push(get)

        }
        else {
            consunent.push(get)
        }
        console.log("vovels:", vovels);
        console.log("consunent:", consunent);
        return;
    }

}
