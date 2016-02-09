
window.onload = function(){

    //model  
    var feline = {
        "cats" : [
            {
                "name" : "Julie",
                "pic" : "http://tranquilmonkey.com/wp-content/uploads/2014/06/venus-two-faced-chimera-cat-1.jpg",
                "clicker" : 0 
            },
            {
                "name" : "Jimmy",
                "pic" : "https://imgflip.com/s/meme/Cute-Cat.jpg",
                "clicker" : 0
            },
            {
                "name": "Jinx",
                "pic" : "http://www.maine-coon-cat-nation.com/image-files/maine-coon-classic-silver.jpg",
                "clicker" : 0
            },
            {
                "name": "Orange",
                "pic" : "https://s-media-cache-ak0.pinimg.com/736x/60/e1/e3/60e1e3467a52292d1a08a87649cc9aca.jpg",
                "clicker": 0

            },
            {
                "name": "Magic",
                "pic" : "https://s-media-cache-ak0.pinimg.com/236x/c9/77/c1/c977c1ccfc34259fa3811c8839e0f6e3.jpg",
                "clicker": 0

            }
        ]
    };

    // Let's loop over the cats in our array
    for (var i in feline.cats) {

        // This is the cat we're on...
        var cat = feline.cats[i];

        //***********listView******************
        // We're creating a DOM element for the cats
        var elem = document.createElement('LI');
        var text = document.createTextNode(feline.cats[i].name);
        elem.style.fontFamily = "Courier";
        elem.appendChild(text);
       

        // ... and when we click, increment clicker and display info
        elem.addEventListener('click', (function(catCopy) {
            return function() {
                var pic = document.getElementById('pic');
                pic.src = catCopy.pic;
                document.getElementById("name").innerHTML = catCopy.name;
                document.getElementById("timer").innerHTML = catCopy.clicker;
            };
        })(cat));

        document.getElementById("catNames").appendChild(elem);
    };

    //*****************catView********************
    document.getElementById('pic').addEventListener('click', function() {
        var pic = document.getElementById('pic');

        for(var i in feline.cats){
            if(pic.src === feline.cats[i].pic){
                feline.cats[i].clicker++;
                document.getElementById("timer").innerHTML = feline.cats[i].clicker;
                break;
            
            }
        }
    });
};