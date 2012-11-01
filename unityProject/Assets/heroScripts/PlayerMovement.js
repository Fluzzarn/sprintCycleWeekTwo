#pragma strict

var cameraChild;
var jumpTime = Time.time;

function Awake () {


 cameraChild = this.GetComponentInChildren(CameraControl);


}

function Update () {

    processInput();

}


function processInput(){

	if(Input.GetButton('d'))
	{	
	   if(CameraControl.cameraDirection == 1)
	   {
	     transform.position.x += .1;
	   
	   
	   }
	   else
	   {
	    transform.position.x -= .1;
	   
	   }

    }
    
    
    
    if(Input.GetButton('a'))
	{	
	   if(CameraControl.cameraDirection == 2)
	   {
	     transform.position.x += .1;
	   
	   
	   }
	   else
	   {
	    transform.position.x -= .1;
	   
	   }

    }
    
    if(Input.GetButtonDown('space'))
	{
	  jump();
	  jumpTime = Time.time;
	
	}
}

function jump(){


 rigidbody.AddForce(Vector3.up * 250);
 
 
/* 
 if(Time.time - jumpTime  < 1)
 {
 
   transform.position.y += .1;
 
 }
 else
 {
  transform.position.y -= .1;
 }
 
 if( Time.time - jumpTime  >= 2)
 {
  return;
 }
 
 */



}