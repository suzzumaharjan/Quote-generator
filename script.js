let fontSize=14;
function IncreaseFont()
{
    fontSize +=1;
    document.getElementById('quote').style.fontSize=fontSize + "px";
   
}
function DecreaseFont()
{
    fontSize -=1;
    document.getElementById('quote').style.fontSize=fontSize + "px";
}