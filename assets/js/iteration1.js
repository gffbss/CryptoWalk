// JavaScript for CryptoInfo

// SLOGAN??? just providing a resource for people interested in getting their feet wet in cryptocurrency


$(document).ready(function(){	

	// placeholder in case our api returns no value
	var btcCoinbase = 'Price Not Available';
	var ltcPrice = '$17.69';
	var dogePrice = '$0.0014';

	// API for BTC
	// $.ajax({
 //    	type: 'GET',
 //    	url: 'https://coinbase.com/api/v1/prices/buy',
 //    	dataType: "JSONP",
 //    	success: function(datums) {
 //        	// console.log(datums);
 //        	var btcPrice = datums;
 //        	console.log(btcPrice.amount);
 //        	// Handles our one off if coinbase does not return a response before the ajax call is made
 //        	if ($('#btcPrice').length) {
 //        		$('#btcPrice').html(btcCoinbase);
 //        	}
 //        	btcCoinbase = 'Coinbase Buy Price: ' + '&#36;' + btcPrice.amount;
 //    	},
 //    	error: function(errr, r, s) {
 //        	console.log(errr, r, s);
 //    	}
	// });

 //    	url: 'https://www.dogeapi.com/wow/?a=get_current_price&convert_to=USD&amount_doge=1',
 //    	url: 'https://btc-e.com/api/2/ltc_usd/ticker',

	
	// Header 1
	var bitData = "Bitcoin",
		dogeData = "DogeCoin",
		liteData = "Litecoin";

	// Descriptions
	var bitDes = "Bitcoin is probably what led you here. The worlds most prolific cryptocurrency, Bitcoin has paved the way for all other cryptocurrencies out there. In fact, if you are interested in purchasing any other altcoins, you need to do so with bitcoin. Not to worry, however because you can get fractions of bitcoins, up to 1/8, if you just want to get your feet wet. Bitcoin (and the altcoins that followed) does not rely on a centralized 'banking' system, it is a peer-to-peer cryptocurrency, secured by complex algorithms, rather than a centralized bank, that derives it's value from those that use it. Today, that is a great deal of people. There are several marketplaces that you can purchase Bitcoin from. I prefer Coinbase, but that does not mean it is the best. Step one is to get a wallet. use the 'Getting Started' link below to do so!",
		dogeDes = "Doge such wow!<br> Doge (Dough-gee) began as a joke and takes its likeness from the famous internet memes that came about courtesy of a Shiba Inu. However Doge is quite serious as far as cryptocurrencies go. It is well loved by the internet community and gaining popularity quite quickly. Doge is used widely to 'tip' users of forums or social media for their time, a public, tangible way to say thanks.<br> Step one is to get a wallet. use the 'Getting Started' link below to do so! Some of the best places for information on how to get started using Doge can be found here:",
		liteDes = "LiteCoin is like silver to BTC's gold. LiteCoin is based on the Bitcoin protocal but unlike Bitcoin it can be mined with consumer-grade hardware like your laptop. LiteCoin is a strong cryptocurrency and has shown stability and growth since its creation. Step one is to get a wallet. use the 'Getting Started' link below to do so! Here are several great resources:";

	// Home Pages
	var bitHome = "https://bitcoin.org/",
		dogeHome = "http://dogecoin.com/",
		liteHome = "https://litecoin.org/";
	
	// Get Started
	var bitStart = "https://bitcoin.org/en/getting-started",
		dogeStart = "http://dogecoin.com/get-started",
		liteStart = "https://litecoin.org/";	

	// The Forums
	var bitForum = "http://www.reddit.com/r/Bitcoin/",
		dogeForum = "http://www.reddit.com/r/dogecoin" ,
		liteForum =  "http://www.reddit.com/r/litecoin";

	// Key resources
	var bitInfo = "https://en.bitcoin.it/wiki/Main_Page",
		dogeInfo = "http://dogecoin.wikia.com/wiki/Beginners_guide_to_Dogecoin",
		liteInfo = "http://weuselitecoins.com/" + "<br>" + "https://litecoin.info/Main_Page"; // DOES NOT WORK FOR 2

	// Header Images In The Modal
	var bitImage = "assets/btc-small.png",
		dogeImage = "assets/doge-small.png",  
		liteImage = "assets/ltc-small.png";

	// Videos for Modal
	var bitVideo = "http://www.youtube.com/embed/Um63OQz3bjo",
		dogeVideo = "http://www.youtube.com/embed/HZkgD9TlZQs",
		liteVideo = "http://www.youtube.com/embed/VOVKowJkk2A";

	// Marketplaces
	var bitMarket = "https://coinbase.com/",
		dogeMarket = "https://www.cryptsy.com/",
		liteMarket = "https://btc-e.com/";

	// Variable for Dev Modal
	var devTitle = "GitHub Repos",
		devBody = " ",
		devInfo = "You will find github repositiories here that should prove interesting to explore. Please feel free to browse: ",
		devImg = "assets/github.png",
		devEtc = " ", // Handles important info
		devVid = " ";

	// Variable for News Modal
	var newsTitle = "Crypto In The News",
		newsBody = " ",
		newsInfo = "The latest news stories regarding cryptocurrencies.",
		newsImg = "assets/web-news-icon.png",
		newsEtc = " ", // Handles important info
		newsVid = " ";

	// Vars for the Title Modal
	var infoTitle = "Welcome To Crypt(o) Walk",
		infoBody = " ",
		infoImg = " ",
		infoVid = " ";


	// Functions that call dispModal and pass the variable parameters to display
	$('#bitcoin').click(function() {
		dispModal(bitData, bitDes, bitImage, bitVideo, bitStart, bitForum, btcCoinbase, bitHome, bitInfo, bitMarket); 
		$('#dogeForDevs, #ltcForDevs').hide();
		$('#dogeNews, #ltcNews').hide();
		$('#btcNews').show();
		$('#btcForDevs').show();
	});

	$('#dogecoin').click(function() {
		dispModal(dogeData, dogeDes, dogeImage, dogeVideo, dogeStart, dogeForum, dogePrice, dogeHome, dogeInfo, dogeMarket); 
		$('#btcForDevs, #ltcForDevs').hide();
		$('#btcNews, #ltcNews').hide();
		$('#dogeNews').show();
		$('#dogeForDevs').show();
	});

	$('#litecoin').click(function() {
		dispModal(liteData, liteDes, liteImage, liteVideo, liteStart, liteForum, ltcPrice, liteHome, liteInfo, liteMarket); 
		$('#btcForDevs, #dogeForDevs').hide();
		$('#dogeNews, #btcNews').hide();
		$('#ltcNews').show();
		$('#ltcForDevs').show();
	});

	// Info modal when we click over the title
	$('#title').click(function() {
		dispModal(infoTitle, infoBody, infoImg, infoVid); 
		$('p.modal-description').remove(); 
		removeInfo();
	});


	// Adding the list of BTC github repos
	$('#btcForDevs').click(function(){
		dispModal(devTitle, devInfo, devImg, devEtc, devBody);
		queryGit('https://api.github.com/search/repositories?q=bitcoin&sort=created');
		removeInfo();
	});

	// Adding the list of Doge github repos
	$('#dogeForDevs').click(function(){
		dispModal(devTitle, devInfo, devImg, devEtc, devBody);
		queryGit('https://api.github.com/search/repositories?q=dogecoin&sort=created');	
		removeInfo();
	});

	// Adding the list of LTC github repos
	$('#ltcForDevs').click(function(){
		dispModal(devTitle, devInfo, devImg, devEtc, devBody);
		queryGit('https://api.github.com/search/repositories?q=litecoin&sort=created');	
		removeInfo();
	});

	// BTC in the news
	$('#btcNews').click(function(){
		dispModal(newsTitle, newsInfo, newsImg, newsEtc, newsBody);
		getNews('https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=bitcoin');
		removeInfo();
	});

	// Doge in the news
	$('#dogeNews').click(function(){
		dispModal(newsTitle, newsInfo, newsImg, newsEtc, newsBody);
		getNews('https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=dogecoin');
		removeInfo();
	});

	// LTC in the news
	$('#ltcNews').click(function(){
		dispModal(newsTitle, newsInfo, newsImg, newsEtc, newsBody);
		getNews('https://ajax.googleapis.com/ajax/services/search/news?v=1.0&q=litecoin');
		removeInfo();
	});


	// trying to get the video playback to stop
	$('#myModal').on('hidden.bs,modal', function(){
		$('iframe.modVid').remove(); // Manually removing video box for dev modal
	});

	// Our Display function for the modal. Takes 8 arguments
	var dispModal = function(theTitle, theDescription, linktoimage, linkToVideo, getStarted, forumLink, buyPrice, currencyHome, keyResource, marketPlace) { 

		// Clears data from our Modals
		$('h4.modal-title').remove(); 
		$('p.modal-description').remove(); 
		$('p.modal-official').remove(); 
		$('p.modal-start').remove(); 
		$('iframe.modVid').remove(); // WARNING - Videos do not stop on click out!
	 	$('div.btcPrice').remove();
	 	// $('iframe.modVid').get(0).stopVideo();

		// Adds data to our Modals
		$('div.modal-header').append('<h4 class="modal-title">' + theTitle + ' ' + '<img class= "modImage" src="' + linktoimage + '">' + '</h4>');
		$('div.modal-body').append('<div class="btcPrice">' + buyPrice + '</div>'); // Our buy price from Coinbase
		$('div.modal-body').append('<p class="modal-description">' + theDescription +'</p>');
		$('div.modal-body').append('<p class="modal-official">' + 'Official page: ' + '<br>' + '<a href="' + currencyHome + '" target="blank">' + currencyHome +  '</a>' + '</p>');
		$('div.modal-body').append('<p class="modal-start"> Getting Started: ' + '<br>' + '<a href="' + getStarted + '" target="blank">' + getStarted + '</a></p>');
		$('div.modal-body').append('<p class="modal-start"> Key Resources: ' + '<br>' + '<a href="' + keyResource + '" target="blank">' + keyResource + '</a>' + '<br>' + '<a href="' + forumLink + '" target="blank">' + forumLink + '</p>');
		$('div.modal-body').append('<p class="modal-start"> Marketplace: ' + '<br>' + '<a href="' + marketPlace + '" target="blank">' + marketPlace + '</a>' + '</p>');
		$('div.modal-body').append('<iframe class="modVid" width="500" height="315" src="' + linkToVideo + '"></iframe>');
	};

	// Function that takes an API url and returns the data we want. Specifically from Github.
	var queryGit = function(urlSearch){
			$.ajax({
	    	type: 'GET',
	    	url: urlSearch,
	    	dataType: "JSONP",
	    	success: function(gitUrls) {
	        	var gitHub = gitUrls;
	        	// console.log(gitHub);
	        	var testing = gitHub.data.items;
	        	
	        	// Returns the urls we are looking for
	        	for (i=0; i<testing.length; i++){
	        		// console.log(testing[i].html_url);
	        		retrivedUrls = testing[i].html_url;
	        	
	        		// Appends the urls to our Developer Modal
	        		$('div.modal-body').append('<p class="modal-description">' + '<a href="'+ retrivedUrls + '" target="blank">' + retrivedUrls +'</a>' +'</p>');
	        	}
	    	},
	    	error: function(err, r, s) {
	        	console.log(err, r, s);
	    	}
		});
	};

	// News for BTC
	var getNews = function(googleSeach) {
		$.ajax({
	    	type: 'GET',
	    	url: googleSeach, 
	    	dataType: "JSONP",
	    	success: function(newsUrls) {
	        	var googleNews = newsUrls;
	        	console.log(googleNews.responseData.results);

	        	var testing = googleNews.responseData.results;

	        	for (i=0; i<testing.length; i++){
	        		theNews = testing[i].unescapedUrl;
	        		theTitle = testing[i].title;
	        		console.log(theTitle, theNews);
	        		
	        		// Appends the urls to our News Modal
	        		$('div.modal-body').append('<p class="modal-description">' + '<a href="'+ theNews + '" target="blank">' + theTitle +'</a>' +'</p>');

	        	}

	        	// Handles our one off if coinbase does not return a response before the ajax call is made
	        	// if ($('#btcPrice').length) {
	        	// 	$('#btcPrice').html(b);
	        	// }
	        	// theNews = 'Google News: ' + '&#36;' + btcPrice.amount;
	    	},
	    	error: function(errr, r, s) {
	        	console.log(errr, r, s);
	    	}
		});
	};

	// Function that handles removing excess info in title and dev modals
	var removeInfo = function(){
		$('iframe.modVid').remove(); 
		$('div.btcPrice').remove();
		$('p.modal-start').remove(); 
		$('p.modal-official').remove(); 

	};

});

