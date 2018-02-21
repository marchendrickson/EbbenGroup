var resizing = false;
var timer;

function updateDesktop()
{
	//console.log('OFFSET WIDTH = '+ window.innerWidth);


	if(window.innerWidth > 319 && window.innerWidth < 768)
	{
		//console.log('IN MOBILE SITE');
		if(current_page !='index')
		{
			toggleLogoMark();
		}
		//REMOVE CERTAIN PLAY BTNS
		removePlayIcon();

		//console.log('CURRENT PAGE = '+current_page)

	}else if(window.innerWidth >= 768){

		//console.log('IN DESKTOP SITE');
		//UPDATE FOOTER
		updatefooter();

		//UPDATE OVERLAY TEXT HEIRARCHY
		//updateOverlayText();
		updateCaseStudies();

		//
		updateTopMainMenu()
	}
}
function removePlayIcon()
{
	if(document.getElementById('clay-screen-grab-play-icon') != null)
	{
		document.getElementById('clay-screen-grab-play-icon').style.display = 'none';
	}

}
function toggleLogoMark()
{
	//console.log('TOGGLE LOGO MARK');
	if(document.getElementById('logoMark') != null)
	{
		document.getElementById('logoMark').className= 'logoMark hidden';

	}

}
function updatefooter()
{

	//console.log('IN UPDATE FOOTER');
	if(document.getElementById('bottom-navigation-social') != null)
	{
		document.getElementById('bottom-navigation-social').className = 'navigation white';

	}
}
function updateCaseStudies()
{
	var img_hldr = document.getElementsByClassName("image holder");
}
function updateTopMainMenu()
{
	var isIE11 = !!navigator.userAgent.match(/Trident.*rv[ :]*11\./);
	//console.log('IS IE11 = '+isIE11)
	if(isIE11)
	{
		document.getElementById('top-navigation-main').className += ' IETopNavPosFix';
	}
}
