
$(function() {
  
    describe('RSS Feeds', function() {   //test for RSS feeds
      
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('have url',function(){
            for(let i of allFeeds){
                expect(i.url).toBeDefined();
                expect(i.url.length).not.toBe(0);
            }
        })

        it('have name',function(){
            for(let i of allFeeds){
                expect(i.name).toBeDefined();
                expect(i.name.length).not.toBe(0);
            }
        })
    });

  
    describe('The menu',function(){ //teset for menu function
        it('is hidden by default',function(){
            
            expect($('.menu-hidden')).not.toBe(null);
        })
      
        it('changes correctly',function(){
            
            $(".menu-icon-link").click();  
        
            expect($('body').hasClass("menu-hidden")).toBe(false); 
            $(".menu-icon-link").click();  
            
            expect($('body').hasClass("menu-hidden")).toBe(true); 

        })        
    })
    
    describe('Initial Entries',function(){ //test for if the page could get entries
        
        beforeEach(function(done){
            loadFeed(0,done)
        })
        it('loadFeed() is called and completes its work',function(done){
            expect($('.feed .entry').length).not.toBe(0);
            done();
        })
    })
   
    describe('New Feed Selection',function(){ //test if the feed is changed when user click new topic

        var prev,current;
        beforeEach(function(done){
            $('.feed').empty();
            loadFeed(0, function () {
                prev = $('.feed .entry');
                $('.feed').empty();
                loadFeed(1, function () {
                    current= $('.feed .entry');
                    done();
                });
            });
          
        })
        it('change the feed',function(done){
            expect(prev[0].innerText.trim()).not.toBe(current[0].innerText.trim()); //using trim() to remove the space
            done();
        })
    })
}());
