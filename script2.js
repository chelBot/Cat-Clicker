window.onload = function(){
    var model = {
        cats : [
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
        ],
        currentCat: null
        
    };

    var octopus = {
        listViewRender : function(callbackObj){

            for(var i in model.cats){
                listView.render(model.cats[i]);
            }
            //catView.render(model.currentCat);
        },
        catViewRender: function(){
            catView.render(model.currentCat);
        },

        setCurrentCat: function(cat){
            model.currentCat = cat;
        },
        getCurrentCat: function(){
            return model.currentCat;
        }

    };

    var listView = {
        render : function(cat) {
            var elem = document.createElement('LI');
            var text = document.createTextNode(cat.name);
            console.log(cat.name);
            elem.style.fontFamily = "Courier";
            elem.appendChild(text);
            elem.addEventListener('click', this.eventListenerFct(cat));
            document.getElementById("catNames").appendChild(elem);
        },
        //is it really necessary to separate this out? 
        eventListenerFct : function(catCopy) {
            return function() {
                octopus.setCurrentCat(catCopy);  
                octopus.catViewRender();
                
            };
        } 
    };

   // var pic = document.getElementById('pic');
    var catView = {
        render: function(cat){
            document.getElementById("name").innerHTML = cat.name;
            document.getElementById("timer").innerHTML = cat.clicker;
            var element = document.getElementById("pic");
            element.parentNode.removeChild(element);

            var img = document.createElement("img");
            img.src = cat.pic;
            img.id = "pic";
            document.getElementById("cat").appendChild(img);

            pic.addEventListener('click', this.eventListenerFct(cat));

        },
        eventListenerFct : function(cat) {
            return function(){
                cat.clicker++;
                document.getElementById("timer").innerHTML = cat.clicker;
            }
        }
    };
    octopus.listViewRender();
 
    // console.log(window.clicker);
    // console.log(model.currentCat.clicker);

};