window.onload = function(){

    /* ======= Model ======= */
    var model = {
        cats : [
            {
                "name" : "Julie",
                "pic" : "img/julie.jpg",
                "clicker" : 0 
            },
            {
                "name" : "Jimmy",
                "pic" : "img/jimmy.jpeg",
                "clicker" : 0
            },
            {
                "name": "Jinx",
                "pic" : "img/jinx.jpg",
                "clicker" : 0
            },
            {
                "name": "Orange",
                "pic" : "img/orange.jpg",
                "clicker": 0

            },
            {
                "name": "Magic",
                "pic" : "img/magic.jpg",
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

            this.render();
        },
        render: function(){
            this.adminBtn.addEventListener('click', this.adminEventListener); 
            this.cancelBtn.addEventListener('click', this.cancelEventListener);
            this.saveBtn.addEventListener('click', this.saveEventListener);
        
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
            this.currentCat = octopus.getCurrentCat();
            if(newName){
                this.currentCat.name = newName;
            }
            if(url){
                this.currentCat.pic = url;
            }
            if(clicks){
                this.currentCat.clicker = clicks;
            }
            if(clicks || url || newName){
                catView.render();
                listView.render();
            } 
        }
    }
    octopus.init();
};