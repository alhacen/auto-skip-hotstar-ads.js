function __(a){return document.getElementsByClassName(a);}
prev_playback_speed=1;
__("nav-logo")[0].innerHTML=prev_playback_speed;
	console.log("started");
	setInterval(function(){
		prev_playback_speed=document.getElementsByTagName("video")[0].playbackRate;
	    if(__("video-resume-container").length!=0){//if ad
	        document.getElementsByTagName("video")[1].playbackRate = 16;//play video on 16x speed
	    }else{
	        document.getElementsByTagName("video")[0].playbackRate = prev_playback_speed;//play video on normal speed
	    }
	    if(__("video-resume-container")[0]!=undefined){//if skip button is enabled
	        document.getElementsByTagName("video")[1].playbackRate=16
	    }else{
	    }
	},100)
function speedController_(e){

    if(e.keyCode==107 || e.keyCode==187){document.getElementsByTagName("video")[0].playbackRate += .25;}else if(e.keyCode==109 || e.keyCode==189){document.getElementsByTagName("video")[0].playbackRate -= .25;}
__("nav-logo")[0].innerHTML=prev_playback_speed+" x"
}
document.addEventListener('keydown', speedController_);