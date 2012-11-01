#pragma strict

function Start () {

}


static var cameraDirection = 1; //1 = left, 2 = right
var lastButton = 2;

function Update () {

 processInput();    


}


function processInput(){



    if(Input.GetButtonDown('e') && lastButton != 1)
	    {
	     Debug.Log("working");
	     transform.position = Vector3(transform.parent.transform.position.x,transform.parent.transform.position.y,transform.parent.transform.position.z - 10);
	     transform.Rotate(0,180,0);
	     
	     lastButton = 1;
	     cameraDirection = 1;
	    
	    }
    
    if(Input.GetButtonDown('q') && lastButton != 2)
	    {
	     Debug.Log("working");
	     transform.position = Vector3(transform.parent.transform.position.x,transform.parent.transform.position.y,transform.parent.transform.position.z + 10);
	     transform.Rotate(0,180,0);
	     
	     lastButton = 2;
	     cameraDirection = 2;
	    
	    }

	if(Input.GetButtonDown('2'))
	    {
	     Debug.Log("working");
	     transform.position = Vector3(transform.parent.transform.position.x,transform.parent.transform.position.y + 10,transform.parent.transform.position.z);
	     transform.Rotate(90,0,0);
	     
	    
	    }
	

}

