/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have url',function(){
            for(let i of allFeeds){
                expect(i.url).toBeDefined();
                expect(i.url.length).not.toBe(0);
            }
        })

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have name',function(){
            for(let i of allFeeds){
                expect(i.name).toBeDefined();
                expect(i.name.length).not.toBe(0);
            }
        })
    });

    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    describe('The menu',function(){
        it('is hidden by default',function(){
            
            expect($('.menu-hidden')).not.toBe(null);
        })
      
        it('changes correctly',function(){
            
            $('.menu-icon-link').trigger('click')
           
            expect($('.menu-hidden')[0]).not.toBeDefined();
            $('.menu-icon-link').trigger('click')
           
            expect($('.menu-hidden')[0]).toBeDefined();

        })        
    })
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    // describe('Initial Entries',function(){
        
    //     beforeEach(function(done){
    //         loadFeed(0,function(){
    //             done();
    //         })
    //     })
    //     it('loadFeed() is called and completes its work',function(done){
    //         var container = $('.feed')
    //        expect(container[0].textContent.length).not.toBe(0);
    //        done();
    //     })
    // })
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    describe('New Feed Selection',function(){
        var prev,current;
        beforeEach(function(done){
            $('.feed').empty();
            loadFeed(0, function () {
                prev = $('.feed').find(allFeeds.url);
                done();
            });
            loadFeed(1, function () {
                current= $('.feed').find(allFeeds.url);
                done();
            });
        })
        it('change the feed',function(done){
            expect(prev).not.toBe(current);
            done();
        })
    })
}());
