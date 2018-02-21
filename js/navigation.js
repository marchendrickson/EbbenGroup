
var menuStatus = false
var case_study_header_text =[	'clay cars',
															'zmags',
															// 'reynders, mcveigh',
															'monotype',
															// 'carGurus',
															'metro </br>credit union',
															'frontier </br>communications'
														]
var case_study_sub_text =[		'What does a Nissan minivan soccer mom have in common with a Chevy Silverado construction worker? That\'s what we set out to find for this multi-brand auto group located throughout Greater Boston.',
															'An entirely new digital publishing company can’t change the face of retail with an empty sales pipeline.',
															// 'When some of the best minds on Wall Street were ready to raise their voices, they needed a brand that spoke to their credibility.',
															'Helvetica. Gil Sans. Frutiger. Monotype has played a major role in designing and distributing many of the world’s most beloved fonts. How will the company stay on top as type moves from paper to pixel?',
															// 'There’s no shortage of cars for sale, or sites to sell them. What’s lacking: an objective voice to tell you what’s really a great deal.',
															'BEFORE: “I don’t love my bank, but I don’t know much about credit unions – or Metro.”</br>AFTER:',
															'This digital referral program turns customers into salespeople, lowering acquisition costs in the process. '
														]
var about_headline		=[ 		'<h1>WHAT WE <span class="color-white">BELIEVE:</span></h1>',
														'<h1>WE <span class="color-white">DO:</span></h1>',
														'<h1 style="padding-left:30px; padding-right:30px">HOW WE <span class="color-white">DO IT:</span></h1>'
												 ]
var about_subheadline	=[ 		'<p style="font-family:Gotham; font-size:14px; font-weight:bold"><span class="box"></span>The game has changed.</br><span class="box"></span>In today’s always-on world, clients </br>and customers must be </br>engaged wherever they are.</br>On their phones. On social media. </br>In their homes, their cars and in the press.</p>',
														'<p style="font-family:Gotham; font-size:14px; font-weight:bold"><span class="box"></span>The impossible. Sometimes. </br>(Ask our clients)</br><span class="box"></span>Whatever it takes, whenever it takes to </br>spark conversations for our clients.</br><span class="box"></span>Work that proves there’s no match </br>for insatiable curiosity and a fresh </br>perspective.</p>',
														'<p style="font-family:Gotham; font-size:14px; font-weight:bold"><span class="box"></span>By listening closely to clients </br>and their customers. To what they say. </br>And especially what they dont.</br><span class="box"></span>Through every relevant medium, from PR </br>to social to advertising and direct.</p>'
												 ]

var about_subheadline_desktop=[ '<p style="font-family:Gotham; font-size:17px; font-weight:bold"><span class="box"></span>By listening closely to clients and their customers. To what they say. </br>And especially what they don’t.</br><span class="box"></span>Through every relevant medium, from PR to social to advertising and direct.</p>',
																'<p style="font-family:Gotham; font-size:17px; font-weight:bold"><span class="box"></span>The impossible. Sometimes. (Ask our clients)</br><span class="box"></span>Whatever it takes, whenever it takes to spark conversations for our clients.</br><span class="box"></span>Work that proves there’s no match for insatiable curiosity and a fresh perspective.</p>',
																'<p style="font-family:Gotham; font-size:17px; font-weight:bold"><span class="box"></span>The game has changed. </br><span class="box"></span>In today’s always-on world, clients and customers must be engaged wherever they are. </br>On their phones. On social media. In their homes, their cars and in the press.</p>'
														 ]

var audioFiles			=[		'./audio/Condo_30R.mp3',
													'./audio/Math_30R.mp3',
													'./audio/Tuition_30R.mp3'

											]
var current_case_study = undefined;
var selectedVisible = false;

var selected = false;
var current_page = 'index'

//console.log('NAV LOADED!')
function toggleMenu()
{

	//console.log(menuStatus)

	if(!menuStatus)
	{

		//HIDE
		document.getElementById('content').style.display = 'none';

		//SHOW
		document.getElementById('top-navigation-main').style.display = 'block';

		//CHANGE BG COLOR TO BLACK
		document.getElementById('bottom-navigation-wrapper').className = 'black';

		//CHANGE TO WHITE
		document.getElementById('bottom-navigation-social').className = 'navigation white'

		//
		document.getElementById('top-logo').className = 'logoMark shown';

		//console.log('ON CONTACT OUTSIDE')
		//console.log(current_page);

		if(current_page == 'contact')
		{
			//console.log('ON CONTACT');

			document.getElementById('bottom-navigation-wrapper').style.display = 'block';

			document.getElementById('contact-bottom-navigation-wrapper').style.display = 'none';

			document.getElementById('contact-copyright').style.display = 'none';

		}

		menuStatus = true;

	}else{

		//SHOW
		document.getElementById('content').style.display = 'block';

		//HIDE
		document.getElementById('top-navigation-main').style.display = 'none';

		//CHANGE BG COLOR TO WHITE
		document.getElementById('bottom-navigation-wrapper').className = 'white';

		//CHANGE TO BLACK
		document.getElementById('bottom-navigation-social').className = 'navigation black';

		document.getElementById('top-logo').className= 'logoMark hidden';

		if(current_page == 'contact')
		{
			//console.log('ON CONTACT');
			///*
			document.getElementById('bottom-navigation-wrapper').style.display = 'none';
			document.getElementById('contact-bottom-navigation-wrapper').style.display = 'block';
			document.getElementById('contact-copyright').style.display = 'block';
			//*/
		}

		menuStatus = false;
	}

	toggleMenuIcon(menuStatus)
}
function toggleMenuIcon(status)
{

	if(status)
	{

		document.getElementById('mobile-icon').src = './images/icons/white/top_nav_icon-mobile-closed.jpg'

	}else{

		document.getElementById('mobile-icon').src = './images/icons/white/top_nav_icon-mobile.jpg'
	}


}
function returnToTop()
{
	//console.log('IN RETURN TO TOP')
	 window.scrollTo(0, 0);
}
function showCaseStudy(n)
{
	//SET VAR
	current_case_study = n;

	// CLEAR FROM SLIDER.JS
	clearInterval(timer);

	console.log('CURRENT_CASE_STUDY = '+current_case_study)

	updateSubArrows();

	toggleFooterMenu()

	//console.log('CASE STUDY N = '+current_case_study );

	var name =  document.getElementById('bottom-navigation-wrapper').className;
	document.getElementById('bottom-navigation-wrapper').className = name +' '+'casestudy';
	//console.log('-------------> '+name +' '+'casestudy');
	//HIDE ALL()
	hideAllCaseStudies();

	// if(n == 3)
	// {
	// 		if(window.innerWidth < 768)
	// 		{
	// 			document.getElementById('mono-banners').style.display = 'none';
	// 		}else{
	// 			document.getElementById('mono-banners').style.display = 'block';
	// 		}
	// }

	//
	if(document.getElementById('work-menu')!= undefined)
	{
		document.getElementById('work-menu').style.display = 'none';
	}

	if(document.getElementById('slider-wrapper').style.display == 'none');
	{
		document.getElementById('slider-wrapper').style.display = 'block';
		positionImgs();
	}

	//HIDE
	document.getElementById('slider-overlay').style.display = 'none';
	document.getElementById('slider-nav').style.display = 'none';

	//SHOW
	document.getElementById('selected-overlay').style.display = 'block'
	document.getElementById('case-studies').style.display = 'block';
	document.getElementById('case-study-'+(n+1)).style.display = 'block';

	//console.log('SHOW THIS CASE ------------> case-study-'+(n+1));
	//MOVE
	//console.log('SLIDE TO HERE = '+ (n* window.innerWidth))
	//document.getElementById('img-stack').style.left -= (n* window.innerWidth);
	//console.log('N -------------> '+ case_study_header_text[n],case_study_sub_text[n]);
	if(selectedVisible)
	{

		//POP
		document.getElementById('selected-h1').innerHTML = case_study_header_text[n];
		document.getElementById('selected-p').innerHTML = case_study_sub_text[n];

		// //console.log('N -------------> '+ case_study_header_text[n],case_study_sub_text[n]);

	}else{

		//VARS
		var h1 =  document.createElement("h1");
		var p  =  document.createElement("p");

		h1.id='selected-h1';
		p.id='selected-p';

		//POP
		h1.innerHTML = case_study_header_text[n]
		p.innerHTML = case_study_sub_text[n]

		//APPEND
		document.getElementById('selected-overlay-text').appendChild(h1);
		document.getElementById('selected-overlay-text').appendChild(p);
	}


	selectedVisible = true;

	document.getElementById('img-stack').className = '';
}
function hideAllCaseStudies()
{
	//console.log('HIDE ALL CASE STUDIES...')
	var n=0;
	while(document.getElementById('case-study-'+(n+1))!= undefined)
	{
		document.getElementById('case-study-'+(n+1)).style.display = 'none';
		n++;
	}
}
function updateSubArrows()
{
	if(current_case_study == 0)
	{
		document.getElementById('selected-nav-backward').style.visibility = 'hidden';
	}else{
		document.getElementById('selected-nav-backward').style.visibility = 'visible';
	}

	if( current_case_study == case_study_header_text.length-1)
	{
		document.getElementById('selected-nav-forward').style.visibility = 'hidden';
	}else{

		document.getElementById('selected-nav-forward').style.visibility = 'visible';
	}

}
function subNavCaseStudyForward()
{
	if(current_case_study != case_study_header_text.length-1)
	{
		_current_img = current_case_study;
		current_case_study++;

		//console.log('CASE STUDY N = '+current_case_study);
		showCaseStudy(current_case_study);
		navigateFoward();

	}
	updateSubArrows();
}
function subNavCaseStudyBackward()
{
	if(current_case_study != 0)
	{
		//console.log('CASE STUDY N = '+current_case_study);
		_current_img = current_case_study;
		current_case_study--;

		showCaseStudy(current_case_study);
		navigateBackward();

	}
	updateSubArrows();
}
function navigateAboutTo_Desktop(n)
{
	document.getElementById('desktop-text-holder').innerHTML = about_subheadline_desktop[n];

}
function navigateAboutTo(n)
{
	document.getElementById('about-main-image').innerHTML = about_headline[n] + about_subheadline[n];

}
function showBioOverlay(n)
{
	//console.log("IN SHOW BIO OVERLAY")
	if(window.innerWidth >= 768)
	{
		var theStyle = document.getElementById(n+'-bio-overlay').style.display
		//console.log(theStyle);

		if(theStyle !='block')
		{
			document.getElementById(n+'-bio-overlay').style.display = 'block';

		}else{
			document.getElementById(n+'-bio-overlay').style.display = 'none';
		}
	}
}
function hideBio(n)
{

	document.getElementById(n+'-bio').style.display = 'none';

	if(window.innerWidth < 768)
	{
		document.getElementById('team-navigation').style.display = 'block';
	}else{
		document.getElementById('bio-overlay').style.display = 'none';
	}
}
function showBio(n)
{
	//console.log('IN SHOWBIO')
	document.getElementById('ebben-bio').style.display = 'none';
	// document.getElementById('zall-bio').style.display = 'none';
	document.getElementById('rosenberg-bio').style.display = 'none';
	document.getElementById('owens-bio').style.display = 'none';

	document.getElementById(n+'-bio').style.display = 'block';
	if(window.innerWidth >= 768)
	{
		document.getElementById('bio-overlay').style.display = 'block';
	}else{
		document.getElementById('team-navigation').style.display = 'none';
	}
}
function changeFooter()
{
	if(current_page == 'clients' || current_page == 'news' )
	{
		document.getElementById('bottom-navigation-social').className = 'navigation white';
		document.getElementById('bottom-navigation-wrapper').className = 'mobile-pattern';
	}
}
function playAudio(n)
{

	var ply = document.getElementById('audiotag');

	var oldSrc = ply.src;// just to remember the old source

	ply.src = audioFiles[n]

	ply.play();
}
function setMainMenu(str)
{
	if(document.getElementById(str) != null)
	{
		document.getElementById(str).className = 'active';
	}
	if(str != 'index' )
	{
		//console.log('! HOME')
		var name =  document.getElementById('bottom-navigation-wrapper').className;
		document.getElementById('bottom-navigation-wrapper').className = name +' '+'casestudy';
	}
}
function toggleFooterMenu()
{
	if(window.innerWidth >= 768 )
	{
		if(current_page == 'index' && current_case_study == undefined)
		{
			document.getElementById('bottom-navigation-social').style.display = 'none';
			document.getElementById('bottom-navigation-main').style.display = 'none';
		}else{
			document.getElementById('bottom-navigation-social').style.display = 'table';
			document.getElementById('bottom-navigation-main').style.display = 'table';
		}
	}
}
