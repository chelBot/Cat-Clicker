window.onload = function(){

    /* ======= Model ======= */
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

    /* ======= Octopus ======= */
    var octopus = {
        init: function(){
            listView.init();
            catView.init();
            adminView.init();
        },

        setCurrentCat: function(cat){
            model.currentCat = cat;
        },
        getCurrentCat: function(){
            return model.currentCat;
        },
        getAllCats: function(){
            return model.cats;
        }

    };

    /* ======= Views ======= */
    var listView = {
        init : function(){
            this.catList = document.getElementById("catNames");
            this.render();
        },
        render : function() {
            this.catList.textContent = '';
            var cats = octopus.getAllCats(), i, elem, cat;
            octopus.setCurrentCat(cats[0]);
            for(i in cats){
                elem = document.createElement('li');
                cat = cats[i];
                elem.style.fontFamily = "Courier";
                elem.textContent = cat.name;
                elem.addEventListener('click', this.eventListenerFct(cat));
                this.catList.appendChild(elem);
            }
        },
        //is it really necessary to separate this out? 
        eventListenerFct : function(catCopy) {
            return function() {
                octopus.setCurrentCat(catCopy);  
                catView.render();
            };
        } 
    };
    var catView = {
        init: function(){
            this.name = document.getElementById("name");
            this.timer = document.getElementById("timer");
            this.pic = document.getElementById('pic');
            this.pic.addEventListener('click', this.eventListenerFct);
            this.render();
        },
        eventListenerFct : function() {
            octopus.getCurrentCat().clicker++;
            catView.render();
        },
        render: function(){
            var currentCat = octopus.getCurrentCat();
            this.name.textContent = currentCat.name;
            this.timer.textContent = currentCat.clicker;
            this.pic.src = currentCat.pic;
        },
    };

    var adminView = {
        init: function(){
            this.adminBtn = document.getElementById("admin");
            this.cancelBtn = document.getElementById("cancel");
            this.saveBtn = document.getElementById("save");
            this.adminArea = document.getElementsByClassName("adminArea");
            this.name = document.getElementById("name");

            this.currentCat = octopus.getCurrentCat();

            this.render();
        },
        render: function(){
            this.adminBtn.addEventListener('click', this.adminEventListener); 
            this.cancelBtn.addEventListener('click', this.cancelEventListener);
            this.saveBtn.addEventListener('click', this.saveEventListener);
            console.log(this.newName);

        },
         adminEventListener : function() {
            for(var i = 0; i < adminView.adminArea.length; i++){
                adminView.adminArea[i].style.display= 'flex';
            }
        },
        cancelEventListener : function() {
            for(var i = 0; i < adminView.adminArea.length; i++){
                adminView.adminArea[i].style.display = 'none';
            }

        },
        saveEventListener : function(){

            var newName = document.getElementById("newName").value;
            var url = document.getElementById("url").value;
            var clicks = document.getElementById("clicks").value;

            if(newName){
                adminView.currentCat.name = newName;
            }
            if(url){
                adminView.currentCat.pic = url;
            }
            if(clicks){
                adminView.currentCat.clicker = clicks;
            }
            if(clicks || url || newName){

                catView.render();
                listView.render();
            }

        }
    }

    octopus.init();
};