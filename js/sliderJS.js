var image_array;
var image_array_small = 	 		[	'./images/slider/clay_slider_s.jpg',
																'./images/slider/car_slider_s.jpg',
																// './images/slider/rmcm_slider_s.jpg',
																'./images/slider/monotype_slider_s.jpg',
																// './images/slider/zmags_slider_s.jpg',
																'./images/slider/metro_slider_s.jpg',
																'./images/slider/frontier_slider_s.jpg'
											 				];
var image_array_large = 	 		[	'./images/slider/clay_slider_l.jpg',
																'./images/slider/car_slider_l.jpg',
																//  './images/slider/rmcm_slider_l.jpg',
																'./images/slider/monotype_slider_l.jpg',
																// './images/slider/zmags_slider_l.jpg',
																'./images/slider/metro_slider_l.jpg',
																'./images/slider/frontier_slider_l.jpg'
													 		];
var learnMore_array = 				[	'javascript:showCaseStudy(0)',
																'javascript:showCaseStudy(1)',
																// 'javascript:showCaseStudy(2)',
																'javascript:showCaseStudy(2)',
																// 'javascript:showCaseStudy(4)',
																'javascript:showCaseStudy(3)',
																'javascript:showCaseStudy(4)'
													  		];
var banner_mini_slider_array=		[	'./images/case_studies/nissan_banner_slider_image',
																	'./images/case_studies/chevy_banner_slider_image',
																	'./images/case_studies/hyundai_banner_slider_image'
																]
var banner_mini_slider_links=		[	'http://www.bostonglobe.com/sports/2015/02/10/patriots-malcolm-butler-receives-truck-gifted-him-tom-brady/cNQmmW4DOod9MMcwZCvMQM/story.html',
																	'http://www.bostonglobe.com/sports/2015/02/10/patriots-malcolm-butler-receives-truck-gifted-him-tom-brady/cNQmmW4DOod9MMcwZCvMQM/story.html'
														 		]
var social_mini_slider_array=		[	'./images/case_studies/globe_social_slider_image',
																	'./images/case_studies/fb_social_slider_image'
														 		]
var rmquarterly_mini_slider_array=	[	'./images/case_studies/rm_website_1',
																			'./images/case_studies/rm_website_2',
																			'./images/case_studies/rm_mobile_1'
																 		]
var mono_rich_mini_slider_array=	[	'./images/case_studies/mono_rich_slider_img_1',
																 		'./images/case_studies/mono_rich_slider_img_2'
																 	]
var mono_print_mini_slider_array=	[	'./images/case_studies/mono_print_slider_img_1',
																 		'./images/case_studies/mono_print_slider_img_2',
																 		'./images/case_studies/mono_print_slider_img_3'
																 	]
var mono_posters_mini_slider_array=	[	'./images/case_studies/mono_posters_slider_img_1',
																    	'./images/case_studies/mono_posters_slider_img_2',
																    	'./images/case_studies/mono_posters_slider_img_3'
																 	]
var mono_banners_mini_slider_array=	[	'./images/case_studies/mono_banners_slider_img_1',
																    	'./images/case_studies/mono_banners_slider_img_2'
																 	]
var metrobus_mini_slider_array=		[	'./images/case_studies/metro_bus_sider_img_1',
																		'./images/case_studies/metro_bus_sider_img_2',
																		'./images/case_studies/metro_bus_sider_img_3',
																	]

var mono_rich_mini_slider_links=	[	'./Monotype Rich Media/2014 Q2/2014_Q2_sync.html',
																		'./Monotype Rich Media/2014 Q2/2014_Q2_sync.html'
																	]

var mono_banners_mini_slider_links=	[	'./Archive_300x600/300x600_40_mono_archive.html',
																			'./Library_300x250/300x250_40_mono_library.html'
																		]
var frontier_mini_slider_array=		[	'./images/case_studies/frontier_slider_img_1',
																		'./images/case_studies/frontier_slider_img_2',
																		'./images/case_studies/frontier_slider_img_3',
																		'./images/case_studies/frontier_slider_img_4',
																		'./images/case_studies/frontier_slider_img_5'
																	]
var resizing = false;
var timer;
var _current_img = 0;
var _curr_width;
var _curr_height;
var _slider;
var	_list;
var _yellowHeadlineArray = 			[	'conversations',
																	'ongoing chats',
																	// 'a boutique firm',
																	'changing the conversation ',
																	// 'media buzz powers ',
																	'credit union',
																	'friends spread'
																];
var _whiteHeadlineArray = 			[	'</br>drive BUSINESS </br>traffic.',
																	'</br>fill catalogs & </br>carts.',
																	// '</br>gets a national </br>voice. ',
																	'</br>about type.',
																	// 'car shopping site.',
																	'</br>breaks the ice.',
																	'</br>the word.'
																];
var manualNav = false;
var transitionEvent;
var subTextArray 	=				[	'Integrated program reaches buyers at every turn.',
														'Digital work helps online publisher attract catalog retailers.',
														// 'PR and branding help investment advisor earn national prominence.',
														'Rebranding helps legendary type house make the move to mobile.',
														'Campaigns help local client expand, reach new customers.',
														// 'Campaigns help local client expand, reach new customers.',
														'Digital referral program turns customers into advocates.'
													]
var banner_cur_image 		=0;
var social_cur_image 		=0;
var rmquarterly_cur_image 	=0;
var mono_rich_cur_image 	=0;
var mono_print_cur_image 	=0;
var mono_posters_cur_image 	=0;
var mono_banners_cur_image 	=0;
var metrobus_cur_image 		=0;
var frontier_cur_image 		=0;

var firsttime = true;
var initSliderBuild = true;

function buildStage()
{
	//console.log('IN BUILD STAGE FUNC');

	//BUILD MAIN SLIDER
	buildMainSlider();

	buildMiniSliders();

}
function buildMiniSliders()
{

	//console.log(initSliderBuild)

	if(window.innerWidth < 768)
	{

		addMiniImages('banner', 257);
		addMiniImages('social', 260);
		// addMiniImages('rmquarterly', 256);
		addMiniImages('mono_rich', 262);
		addMiniImages('mono_print', 265 );
		addMiniImages('mono_posters', 173);
		/*addMiniImages('mono_banners', 152);*/
		addMiniImages('metrobus', 264);
		addMiniImages('frontier', 285);

	}else if(window.innerWidth >= 768 && window.innerWidth < 1000 ){


		addMiniImages('banner', 642);
		addMiniImages('social', 642);
		// addMiniImages('rmquarterly', 628);
		addMiniImages('mono_rich', 642);
		addMiniImages('mono_print', 642);
		addMiniImages('mono_posters', 377);
		/*addMiniImages('mono_banners', 245);*/
		addMiniImages('metrobus', 642);
		addMiniImages('frontier', 686);

	}else{
		//console.log('-------------------------> ELSE')
		addMiniImages('banner', 788);
		addMiniImages('social', 642);
		// addMiniImages('rmquarterly', 628);
		addMiniImages('mono_rich', 642);
		addMiniImages('mono_print', 642);
		addMiniImages('mono_posters', 377);
		/*addMiniImages('mono_banners', 245);*/
		addMiniImages('metrobus', 642);
		addMiniImages('frontier', 1039);
	}



	//addMiniImages('mono_rich', 262, 'video');
	//addMiniImages('mono_banners', 152, 'video');

}
function positionImgs()
{
	console.log('IN POSITION IMGs, THE CURRENT CASE NUM = '+current_case_study);
	document.getElementById('img-stack').className = '';
	for(i = 0; i < image_array.length; i++) {

		document.getElementById('main-slider-img-'+i).style.left = (_curr_width * i)+'px';
	}
	console.log('POSITION IMAGES = '+ -(current_case_study * window.innerWidth) +'px');
	document.getElementById('img-stack').style.left = -(current_case_study * window.innerWidth) +'px';

}
function resizeSliderImages(s)
{
	var length = this[s+'_mini_slider_array'].length;
	var ul = document.getElementById(s+'-mini-slider');
	var w;
    _curr_width = document.body.offsetWidth;

   for(i = 0; i < length; i++)
   {
   		_listItem = ul.getElementsByTagName('LI')[i];



   		if(window.innerWidth < 768)
		{
			//console.log('SMALL')
			if(s ==  'banner')
			{
				_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_s.jpg)';
			}else if (s == 'frontier'){
				_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_s.png)';
			}


		}else if(window.innerWidth >= 768 && window.innerWidth < 1000 ){
			//console.log('MEDIUM')

			if(s == 'banner')
			{
				_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_m.jpg)';
				_listItem.style.height = '262px';
				_listItem.style.width = (w = 642)+'px';
			}else if (s == 'frontier'){
				_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_m.png)';
				_listItem.style.height = '404px';
				_listItem.style.width = (w = 686)+'px';
			}


		}else{
			//console.log('LARGE')

			if(s == 'banner')
			{
				_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_l.jpg)';
				_listItem.style.height = '322px'
				_listItem.style.width = (w=788)+'px';
			}else if (s == 'frontier'){
				_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_l.png)';
				_listItem.style.height = '612px'
				_listItem.style.width = (w=1039)+'px';
			}
		}

		_listItem.style.left = (w * i)+'px';

   }
}
function addMiniImages(s,w,v)
{

	//VARs
	var length = this[s+'_mini_slider_array'].length;
	var ul = document.getElementById(s+'-mini-slider');
    _curr_width = document.body.offsetWidth;



   for(i = 0; i < length; i++)
   {

   		 var _listItem = document.createElement("li");

		_listItem.style.width = w+'px'
		//_listItem.style.width = '100%';
		_listItem.style.height = '100%'
		_listItem.style.position = 'absolute';
		_listItem.style.left = (w * i)+'px';
		_listItem.style.backgroundSize = 'cover';
		_listItem.style.backgroundRepeat = 'no-repeat';

		if(v=='video')
		{
			var div = document.createElement("img");
			div.className ="image holder"

			var a = document.createElement("a");
			a.href = '#';


			var img = document.createElement("img");
			img.src = this[s+'_mini_slider_array'][i];
			img.className = 'image-display'
			img.style.border = 'none';
			var span = document.createElement("span");
			span.className = 'play';

			div.appendChild(a);
			a.appendChild(span);
			a.appendChild(img);
			_listItem.appendChild(div);


		}else{

			if(s == 'banner'){


				if(window.innerWidth < 768)
				{
					//console.log('SMALL')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_s.jpg)';

				}else if(window.innerWidth >= 768 && window.innerWidth < 1000 ){
					//console.log('MEDIUM')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_m.jpg)';
					_listItem.style.height = '262px'

				}else{
					//console.log('LARGE')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_l.jpg)';
					_listItem.style.height = '322px'
				}


			}else if(s == 'social'){

				var div = document.createElement("img");
				div.className ="image holder";
				div.id = 'img_'+i;

				var a = document.createElement("a");
				a.href = banner_mini_slider_links[i];
				a.target ='_blank'

				if(window.innerWidth < 768)
				{
					//console.log('SMALL')
					div.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_s.jpg)';

					if(i==0)
					{
						_listItem.style.height = '51px';
						_listItem.style.width = '260px';

						div.style.height = '51px';
						div.style.width = '260px';
					}else{

						_listItem.style.width = '246px';
						_listItem.style.height = '405px';

						div.style.width = '246px';
						div.style.height = '405px';
					}

				}else{
					//console.log('----------------------> SOCIAL LARGE')
					div.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_l.jpg)';

					if(i == 0)
					{
						_listItem.style.height = '135px';
						_listItem.style.width = '642px';

						div.style.height = '135px';
						div.style.width = '642px';
					}else{
						//console.log(i)

						_listItem.style.height = '850px';
						_listItem.style.width = '519px';

						div.style.height = '850px';
						div.style.width = '519px';
					}

				}

				a.appendChild(div);
				_listItem.appendChild(a);

			}else if(s == 'rmquarterly'){

				if(window.innerWidth < 768)
				{
					//console.log('SMALL')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_s.jpg)';
					_listItem.style.height = '237px';
				}else{
					//console.log('----------------------> RM LARGE')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_l.jpg)';

					_listItem.style.height = '564px';
				}

			}else if(s == 'mono_rich'){

				if(window.innerWidth < 768)
				{
					//console.log('SMALL')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_s.jpg)';
					_listItem.style.height = '177px';
				}else{
					//console.log('----------------------> MONO_RICH LARGE')
					var div = document.createElement("img");
					div.className ="image holder";
					div.id = 'img_'+i;
					div.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_l.jpg)';
					div.style.height = '436px';
					div.style.width =  '642px';

					var a = document.createElement("a");
					a.href = mono_rich_mini_slider_links[i];
					a.target ='_blank'

					a.appendChild(div);
					_listItem.appendChild(a);
				}
			}else if(s == 'mono_print'){

				if(window.innerWidth < 768)
				{
					//console.log('SMALL')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_s.jpg)';
					_listItem.style.height = '173px';
				}else{
					//console.log('----------------------> RICH_PRINT LARGE')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_l.jpg)';

					_listItem.style.height = '419px';
				}
			}else if(s == 'mono_posters'){

				if(window.innerWidth < 768)
				{
					//console.log('SMALL')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_s.jpg)';
					_listItem.style.height = '310px';
				}else{
					//console.log('----------------------> MONO_POSTERS LARGE')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_l.jpg)';

					_listItem.style.height = '670px';
				}
			}else if(s == 'mono_banners'){

				if(window.innerWidth < 768)
				{
					//console.log('SMALL')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_s.jpg)';
					_listItem.style.height = '304px';
				}else{
					//console.log('----------------------> MONO_POSTERS LARGE');
					var div = document.createElement("img");
					div.className ="image holder";
					div.id = 'img_'+i;
					div.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_l.jpg)';

					if(i == 0)
					{
						_listItem.style.height = '488px';
						_listItem.style.width = '245px';

						div.style.height = '488px';
						div.style.width = '245px';
					}else{
						_listItem.style.height = '345px';
						_listItem.style.width = '414px';

						div.style.height = '345px';
						div.style.width = '414px';
					}

					var a = document.createElement("a");
					a.href = mono_banners_mini_slider_links[i];
					a.target ='_blank'

					a.appendChild(div);
					_listItem.appendChild(a);
				}
			}else if(s == 'metrobus'){

				if(window.innerWidth < 768)
				{
					//console.log('SMALL')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_s.jpg)';
					_listItem.style.height = '98px';
				}else{
					//console.log('----------------------> METROBUS LARGE')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_l.jpg)';
					_listItem.style.height = '304px';
					if(i == 0)
					{
						_listItem.style.height = '240px';
						_listItem.style.width = '642px';
					}else{
						_listItem.style.height = '134px';
						_listItem.style.width = '642px';
					}
				}
			} else if(s == 'frontier'){


				if(window.innerWidth < 768)
				{
					//console.log('SMALL')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_s.png)';

				}else if(window.innerWidth >= 768 && window.innerWidth < 1000 ){
					//console.log('MEDIUM')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_m.png)';
					//_listItem.style.height = '262px'

				}else{
					//console.log('LARGE')
					_listItem.style.backgroundImage  = 'url('+this[s+'_mini_slider_array'][i]+'_l.png)';
					//_listItem.style.height = '322px'
					/*
					document.getElementById('mini-slider-forward-nav').style.top = '180px';
					document.getElementById('mini-slider-backward-nav').style.top = '180px';
					*/
				}
			}
		}
		//ADD it
		ul.appendChild(_listItem);

   }
   		initSliderBuild = false
}
function buildMainSlider()
{
	//console.log('SLIDERJS.JS: ----------------------------------> buildMainSlider()')
	defineImgSize();

	//ADD IMAGES
	addImgs();

	/* Listen for a transition! */
	 initListeners();

	//UPDATE
	updateHeadline();

	updateSubheadline();

	//SET HREF
	updateHref();

	initInverval();
}
function defineImgSize()
{
	_slider = document.getElementById("slider");

	//console.log('******** '+_slider.offsetWidth);

	if(window.innerWidth >= 768)
	{
		image_array = image_array_large;
		//console.log('SLIDERJS.JS: ----------------------------------> IMAGE ARRAY LARGE')
	}else{

		image_array = image_array_small;
	}
}
function initListeners()
{
	//console.log('INITING LISTENERS')
	transitionEvent = whichTransitionEvent();
	transitionEvent && _list.addEventListener(transitionEvent, function() {
		//console.log('Transition complete!  This is the callback, no library needed!');
		//console.log('ON COMPLETE = '+ _current_img)

		if(_current_img ==0 && manualNav==false)
		{
			clearInterval( timer );
			_list.className = 'sliderStopAnimate';
			_list.style.left  = 0;


			setTimeout(initInverval,1000);

		}
	});
	//ON RESIZE
	window.onresize = function()
	{
	    if(resizing) return;
	   	//console.log('-------------------------------------> ON WINDOW RESIZE...')
	    resizing = true;

	    setTimeout(function()
	    {
	    	resizing = false;

	    	var stk = document.getElementById('img-stack');
	    	var sldr = document.getElementById('slider');
	    	var par = document.getElementById("slider-wrapper");

			//REMOVE IMGs
			sldr.removeChild(stk);

	   		//ADD IMAGES
			addImgs();

			//UPDATE POSITION
			updatePos();

			//UPDATE
			//updateHeadline();
			updateProgress();
			//
			 resizeSliderImages('banner');

			 //resizeSliderImages('frontier');

	    }, 250);
	};

}
function updatePos()
{
	//MOVE IT
	_list.style.left = -(_current_img *  _curr_width) + 'px';
}
function initInverval()
{
	//console.log('IN INIT INTERVAL...')
	_list.className = 'sliderAnimate';

	timer = setInterval(function() {


		_current_img++;

		//console.log('SET INTERVAL...'+_current_img );

		_list.style.left = - (_current_img *  _curr_width) + 'px';


		// clear the timer at 400px to stop the animation
		if ( _current_img == image_array.length )
		{

			//console.log('KILL TIMER!')

			_current_img = 0;


		}

		//UPDATE PROGRESS
		 updateProgress();


	}, 5000);
}
function addImgs()
{
	//console.log('IN ADD IMGS')
	//_slider = document.getElementById("slider");
    _curr_width = _slider.offsetWidth;
    _curr_height = _slider.offsetHeight;
    _list = document.createElement("ul");
    var _listItem;

    _list.id = 'img-stack';
    _list.className = 'sliderAnimate'
	_slider.appendChild(_list)

	for(i = 0; i < image_array.length; i++) {


		 _listItem = document.createElement("li");
		 _listItem.id ='main-slider-img-'+(i)
		//console.log(image_array[i])
		_listItem.style.backgroundImage = 'url('+image_array[i]+')';
		_listItem.style.backgroundRepeat = 'no-repeat';
		_listItem.style.backgroundPosition = '50% top';
		_listItem.style.width = '100%'
		_listItem.style.height = '100%'
		_listItem.className = 'cover';
		_listItem.style.left = (_curr_width * i)+'px';


		_list.appendChild(_listItem);
  	}

  	_listItem = document.createElement("li");
	_listItem.style.backgroundImage = 'url('+image_array[0]+')';
	_listItem.style.width = '100%'
	_listItem.style.height = '100%'
	_listItem.className = 'cover';
	_listItem.style.left = (_curr_width * image_array.length)+'px';
	_list.appendChild(_listItem);

	//console.log((_curr_width * image_array.length)+'px');

}
function updateHeadline()
{
	var sp =  document.createElement("span");

	/* if( _current_img == 2)
	{
		sp.id ='headline-yellow';
		document.getElementById('slider-headline').style.color = '#fff';
	}else{

		sp.id ='headline-white';
		document.getElementById('slider-headline').style.color = '#e24301';
	}*/
	sp.id ='headline-white';
	document.getElementById('slider-headline').style.color = '#e24301';


	//POP TEXT
	document.getElementById('slider-headline').innerHTML = _yellowHeadlineArray[_current_img];
	sp.innerHTML =  _whiteHeadlineArray[_current_img];

	//APPEND
	document.getElementById('slider-headline').appendChild(sp);

	if(window.innerWidth >= 768)
	{
		//REMOVE <A> TAG...
		if(firsttime)
		{
			var elem = document.getElementById('learn-more-a');
			//console.log(navigator.appName);
			//console.log(navigator.userAgent);
			//console.log(window.navigator.userAgent);

			/*if (navigator.appName == 'Microsoft Internet Explorer')
			{
				//console.log('USING IE')

				elem.parentNode.removeChild(elem);
			}else{
				//console.log('!USING IE')
				elem.remove();
			}*/

 			elem.parentNode.removeChild(elem);


			firsttime = false;

		}


		//ADD IT BACK
		var a = document.createElement("a");
		a.id ='learn-more-a'
		a.innerHTML = 'learn more';

		sp.appendChild(a);
	}

}
function updateSubheadline()
{

	document.getElementById('slider-subheadline').innerHTML = subTextArray[_current_img];


}
function updateProgress()
{

	//UPDATE
	updateHeadline();

	updateSubheadline();

	//UPDATE...
	updateHref()
}
function updateHref()
{

	var a = document.getElementById('learn-more-a'); //or grab it by tagname etc
	if(a != null)
	{
		a.href = learnMore_array[_current_img];
		//a.target = '_blank';
	}



}
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}
function updateArrows()
{
	if(_current_img == 0)
	{
		document.getElementById('left-nav').style.visibility = 'hidden';
	}else{
		document.getElementById('left-nav').style.visibility = 'visible';
	}

	if( _current_img == image_array.length-1)
	{
		document.getElementById('right-nav').style.visibility = 'hidden';
	}else{

		document.getElementById('right-nav').style.visibility = 'visible';
	}

}
function navigateFoward(n)
{
	//console.log('N = '+n);
	clearInterval( timer );
	if(n == undefined)
	{


		if(_current_img != image_array.length-1)
		{

			//INC
			_current_img++;

			//console.log('_CURRENTIMAGE = '+_current_img)

			//MOVE IT
			_list.style.left = - (_current_img *  _curr_width) + 'px';

			//UPDATE DOT
			updateProgress();

			//document.getElementById('right-nav').style.visibility = 'visible';
		}

		updateArrows();

	}else{
		 //console.log('IN ELSE')

		if(this[n+'_cur_image'] != this[n+'_mini_slider_array'].length -1)
		{
			this[n+'_cur_image']++;

			//UPDATE
			updateMiniNav(n, this[n+'_cur_image']);

			//console.log('----------------------> IF');

			//MOVE IT
			document.getElementById(n+'-mini-slider').style.left = -(document.getElementById(n+'-mini-slider-wrapper').offsetWidth * this[n+'_cur_image']) + 'px'

			//console.log(document.getElementById(n+'-mini-slider').style.left);
			//console.log(-(document.getElementById(n+'-mini-slider-wrapper').offsetWidth));
			//console.log(Number(this[n+'_cur_image']));

			if(	n=='social')
			{
				if(this['social_cur_image']==1)
				{
					if(window.innerWidth < 768)
					{
						//console.log('SOCIAL ENLARGE IT')
						document.getElementById(n+'-mini-slider').style.height = '100%';
						document.getElementById(n+'-mini-slider-wrapper').style.height = '405px';
						document.getElementById(n+'-mini-slider-wrapper').style.width = '246px';

						document.getElementById(n+'-mini-slider').getElementsByTagName('LI')[1].style.height = '405px';
						document.getElementById(n+'-mini-slider').getElementsByTagName('LI')[1].style.width = '246px';

						document.getElementById('img_1').style.width = '246px';
						document.getElementById('img_1').style.height = '405px';
						//document.getElementById(n+'-mini-slider').getElementsByTagName('LI')[1].style.width = '246px';
					}else{

						//console.log('>768... ENLARGE IT')
						document.getElementById(n+'-mini-slider').style.height = '853px';
						document.getElementById(n+'-mini-slider-wrapper').style.height = '850px';
						document.getElementById(n+'-mini-slider-wrapper').style.width = '521px';

					}

				}else{
					//console.log('CLOSE IT UP')
					document.getElementById(n+'-mini-slider-wrapper').style.height = 'auto';
					document.getElementById(n+'-mini-slider-wrapper').style.width = '260px'

				}
			}
			if(	n=='mono_banners')
			{
				if(this['mono_banners_cur_image']==1)
				{
					if(window.innerWidth < 768)
					{
						//console.log('ENLARGE IT')
						document.getElementById(n+'-mini-slider').style.height = '100%';
						document.getElementById(n+'-mini-slider-wrapper').style.height = '212px';
						document.getElementById(n+'-mini-slider-wrapper').style.width = '257px';

						document.getElementById('mono_banners-mini-slider').getElementsByTagName('LI')[1].style.width = '257px'

						document.getElementById('mono_banners-slider-nav-forward').style.marginTop = '106px';
						document.getElementById('mono_banners-slider-nav-backward').style.marginTop = '106px';
					}else{

						document.getElementById(n+'-mini-slider').style.height = '100%';
						document.getElementById(n+'-mini-slider-wrapper').style.height = '345px';
						document.getElementById(n+'-mini-slider-wrapper').style.width = '414px';

						document.getElementById('mono_banners-mini-slider').getElementsByTagName('LI')[1].style.width = '414px'

						document.getElementById('mono_banners-slider-nav-forward').style.marginTop = '106px';
						document.getElementById('mono_banners-slider-nav-backward').style.marginTop = '106px';

					}

				}else{
					//console.log('CLOSE IT UP')
					document.getElementById(n+'-mini-slider-wrapper').style.height = '304px';
					document.getElementById(n+'-mini-slider-wrapper').style.width = '152px'

					document.getElementById('mono_banners-slider-nav-forward').style.marginTop = '152px';
					document.getElementById('mono_banners-slider-nav-backward').style.marginTop = '152px';
				}
			}
			if(	n=='metrobus')
			{
				//console.log(this['metrobus_cur_image']);

				if(this['metrobus_cur_image']!=0)
				{
					if(window.innerWidth < 768)
					{
						//console.log('METRO BUS...ENLARGE IT')
						document.getElementById(n+'-mini-slider').style.height = '100%';
						document.getElementById(n+'-mini-slider-wrapper').style.height = '55px';

						document.getElementById('metrobus-slider-nav-forward').style.marginTop = '22px';
						document.getElementById('metrobus-slider-nav-backward').style.marginTop = '22px';

						document.getElementById(n+'-mini-slider').getElementsByTagName('LI')[this['metrobus_cur_image']].style.height = '55px';

					}else{
						document.getElementById(n+'-mini-slider').style.height = '100%';
						document.getElementById(n+'-mini-slider-wrapper').style.height = '134px';

						document.getElementById('metrobus-slider-nav-forward').style.marginTop = '35px';
						document.getElementById('metrobus-slider-nav-backward').style.marginTop = '35px';
					}
				}else{
					//console.log('CLOSE IT UP')
					document.getElementById(n+'-mini-slider-wrapper').style.height = '98px';

					document.getElementById('metrobus-slider-nav-forward').style.marginTop = '45px';
					document.getElementById('metrobus-slider-nav-backward').style.marginTop = '45px';
				}
			}
			if(n=='rmquarterly')
			{
				//console.log('IN RMQUARTERLY!!!!');

				for(var j=1; j<4; j++)
				{
					document.getElementById('idLight_'+j).className = 'light';
				}
				document.getElementById('idLight_'+(rmquarterly_cur_image+1)).className = 'dark';
			}
		}
	}
}
function updateMiniNav(n, num)
{
	//console.log(n,num)
	if(num == 0)
	{
		document.getElementById(n+'-slider-nav-backward').style.visibility  = 'hidden';
	}else{
		document.getElementById(n+'-slider-nav-backward').style.visibility = 'visible';
	}

	if(num == this[n+'_mini_slider_array'].length-1)
	{
		document.getElementById(n+'-slider-nav-forward').style.visibility = 'hidden';
	}else{
		document.getElementById(n+'-slider-nav-forward').style.visibility = 'visible';
	}
}
function navigateBackward(n)
{
	clearInterval( timer );

	if(n == undefined)
	{

		//console.log('NAV BACKWARD----> '+_current_img);

		if(_current_img != 0)
		{

			//INC
			_current_img--;

			//MOVE IT
			_list.style.left = -(_current_img *  _curr_width) + 'px';

			//UPDATE PROGRESS
			updateProgress();


		}

		updateArrows();


	}else{



		if(this[n+'_cur_image'] != 0)
		{
			this[n+'_cur_image']--;

			//UPDATE
			updateMiniNav(n, this[n+'_cur_image']);

			//MOVE IT
			document.getElementById(n+'-mini-slider').style.left = -(document.getElementById(n+'-mini-slider-wrapper').offsetWidth * this[n+'_cur_image']) + 'px'

			//console.log('N = '+n)

			if(	n=='social')
			{
				if(this['social_cur_image']==0)
				{

					if(window.innerWidth < 768)
					{
						//console.log('CLOSE IT UP');
						document.getElementById(n+'-mini-slider-wrapper').style.height = '52px';
						document.getElementById(n+'-mini-slider-wrapper').style.width = '260px';
					}else{
						document.getElementById(n+'-mini-slider-wrapper').style.height = '135px';
						document.getElementById(n+'-mini-slider-wrapper').style.width = '642px';
					}



				}else{

					//console.log('ENLARGE IT')
					document.getElementById(n+'-mini-slider').style.height = '100%';
					document.getElementById(n+'-mini-slider-wrapper').style.height = '405px';
					document.getElementById(n+'-mini-slider-wrapper').style.width = '250px';



				}
			}
			if(	n=='mono_banners')
			{
				if(this['mono_banners_cur_image']==0)
				{
					if(window.innerWidth < 768)
					{
						//console.log('CLOSE IT UP')
						document.getElementById(n+'-mini-slider-wrapper').style.height = '304px';
						document.getElementById(n+'-mini-slider-wrapper').style.width = '152px'

						document.getElementById('mono_banners-slider-nav-forward').style.marginTop = '152px';
						document.getElementById('mono_banners-slider-nav-backward').style.marginTop = '152px';
					}else{
						document.getElementById(n+'-mini-slider-wrapper').style.height = '488px';
						document.getElementById(n+'-mini-slider-wrapper').style.width = '245px'

						document.getElementById('mono_banners-slider-nav-forward').style.marginTop = '152px';
						document.getElementById('mono_banners-slider-nav-backward').style.marginTop = '152px';
					}
				}else{

					//console.log('ENLARGE IT')
					document.getElementById(n+'-mini-slider').style.height = '100%';
					document.getElementById(n+'-mini-slider-wrapper').style.height = '212px';
					document.getElementById(n+'-mini-slider-wrapper').style.width = '257px';

					document.getElementById('mono_banners-slider-nav-forward').style.marginTop = '106px';
					document.getElementById('mono_banners-slider-nav-backward').style.marginTop = '106px';
				}
			}
			if(	n=='metrobus')
			{
				if(this['metrobus_cur_image']==0)
				{
					if(window.innerWidth < 768)
					{
						//console.log('CLOSE IT UP')
						document.getElementById(n+'-mini-slider-wrapper').style.height = '98px';

						document.getElementById('metrobus-slider-nav-forward').style.marginTop = '45px';
						document.getElementById('metrobus-slider-nav-backward').style.marginTop = '45px';

					}else{
						document.getElementById(n+'-mini-slider').style.height = '100%';
						document.getElementById(n+'-mini-slider-wrapper').style.height = '240px';

						document.getElementById('metrobus-slider-nav-forward').style.marginTop = '80px';
						document.getElementById('metrobus-slider-nav-backward').style.marginTop = '80px';
					}
				}else{
					if(window.innerWidth < 768)
					{
						//console.log('ENLARGE IT')
						document.getElementById(n+'-mini-slider').style.height = '100%';
						document.getElementById(n+'-mini-slider-wrapper').style.height = '55px';

						document.getElementById('metrobus-slider-nav-forward').style.marginTop = '22px';
						document.getElementById('metrobus-slider-nav-backward').style.marginTop = '22px';
					}else{
						document.getElementById(n+'-mini-slider').style.height = '100%';
						document.getElementById(n+'-mini-slider-wrapper').style.height = '134px';

						document.getElementById('metrobus-slider-nav-forward').style.marginTop = '35px';
						document.getElementById('metrobus-slider-nav-backward').style.marginTop = '35px';
					}
				}
			}
			if(n=='rmquarterly')
			{
				//console.log('IN RMQUARTERLY!!!!');

				for(var j=1; j<4; j++)
				{
					document.getElementById('idLight_'+j).className = 'light';
				}
				document.getElementById('idLight_'+(rmquarterly_cur_image+1)).className = 'dark';
			}
		}
	}
}


/*
	The "whichTransitionEvent" can be swapped for "animation" instead of "transition" texts, as can the usage :)
*/
