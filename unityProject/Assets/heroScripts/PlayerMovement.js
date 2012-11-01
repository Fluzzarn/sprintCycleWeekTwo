#pragma strict

var cameraChild;
var jumpTime = Time.time;
var facingLeft = true;


function Awake () {


 cameraChild = this.GetComponentInChildren(CameraControl);


}

function Update () {

    processInput();

}


function processInput(){

	if(Input.GetButton('d'))
	{	
	   
	    if(!facingLeft)
	    {
	     transform.rotation.y = 0;
	     facingLeft = true;
	    }
	     transform.position.x += .1;
	   
	   
	   

    }
    
    
    
    if(Input.GetButton('a'))
	{	
	   
	   
	     if(facingLeft)
	     {
	      transform.rotation.y += 180;
	      facingLeft = false;
	     }
	     transform.position.x -= .1;
	   
	   
	  

    }
    
    if(Input.GetButtonDown('space'))
	{
	  jump();
	  jumpTime = Time.time;
	
	}
	
	
	if(Input.GetButtonDown('q'))
	{
	 transform.Rotate(0,90,0);
	}
	
	if(Input.GetButtonDown('e'))
	{
	 transform.Rotate(0,-90,0);
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