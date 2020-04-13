
function addChannel(){
    //channel
var name = document.getElementById('Cname').value;
var para = document.createElement("iframe");
var paraChat = document.createElement("iframe");

//repeat
var numberRepeat = document.getElementById('repeat').value;
var repeat = document.getElementById('CheckRepeat');

//checkboxes video/chat
var video = document.getElementById('video');
var chat = document.getElementById('chat');

//height
var heightValue = document.getElementById('height').value;
para.style.height = heightValue+"px";
paraChat.style.height = heightValue+"px";

//width
var widthValue = document.getElementById('width').value;
para.style.width = widthValue+"px";
paraChat.style.width =widthValue+"px";

para.src="https://player.twitch.tv/?channel="+name+"";
paraChat.src="https://www.twitch.tv/embed/"+name+"/chat";
if(name.length == 0){
    alert("enter name")
}else{
    if(repeat.checked == true){
        console.log("true");
        if(numberRepeat <= 20){
            if(video.checked == true){
                for (let i=0; i<numberRepeat; i++){
                    document.getElementById('output').appendChild(para.cloneNode(true));
                }
            }
            if(chat.checked == true){
                for (let i=0; i<numberRepeat; i++){
                    document.getElementById('output').appendChild(paraChat.cloneNode(true));
                }
            }
            if(chat.checked == false && video.checked == false){
                alert("you must check Video/Chat or both");
            }
        }
        else{
            alert("max 20");
        }
    }
    else if(repeat.checked == false){
        if(video.checked == true){
            document.getElementById('output').appendChild(para);
        }
        if(chat.checked == true){
            document.getElementById('output').appendChild(paraChat);
        }
        if(chat.checked == false && video.checked == false){
            alert("you must check Video/Chat or both");
        }
    }
}
} 
function clearChannels(){
    while (document.getElementById('output')){
        document.getElementById('output').removeChild(document.getElementById('output').lastElementChild);
    }
    }
function deleteChannel(){
            document.getElementById('output').removeChild(document.getElementById('output').lastElementChild);
        }
function blackTheme(){
    document.body.style.backgroundColor = "#3D3D3D";
}