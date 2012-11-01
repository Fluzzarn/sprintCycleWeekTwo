#pragma strict
 
 var startDistance : Vector3;
 var direction = Vector3(-1,0,0);
 var startTime : int;
static var cameraDirection = 1; //1 = left, 2 = right
var lastButton = 0;

function Awake() {

    startDistance = transform.position;
    startTime = Time.time; 

}

function Update () {

	/*if(Vector3.Distance(startDistance,transform.position) >= 1)
	{
	    transform.Translate(Vector3(-1,0,0) * Time.deltaTime,Space.Self);
	
	}
	else //if(transform.position == startDistance)
	{
	    transform.Translate(Vector3.right * Time.deltaTime,Space.Self);
	   
	
	}*/
	
	transform.Translate(direction * Time.deltaTime,Space.World);
	
	
	if((Time.time - startTime) >= 1)
	{
	 direction = -direction;
	 startTime = Time.time;
	}
	
	processInput();
	
	light.intensity = .5 * (GetComponent(heroHealth).heroHealthNumber / 100);

  
}

function processInput(){



if(Input.GetButtonDown('e') && lastButton != 1)
    {
     Debug.Log("working");
     transform.position = Vector3(transform.parent.transform.position.x,transform.parent.transform.position.y + 1,transform.parent.transform.position.z - 1);
     transform.Rotate(0,180,0);
     
     lastButton = 1;
     cameraDirection = 1;
    
    }
    
    if(Input.GetButtonDown('q') && lastButton != 2)
    {
     Debug.Log("working");
     transform.position = Vector3(transform.parent.transform.position.x,transform.parent.transform.position.y + 1,transform.parent.transform.position.z + 1);
     transform.Rotate(0,180,0);
     
     lastButton = 2;
     cameraDirection = 2;
    
    }

	if(Input.GetButtonDown('2'))
	    {
	     Debug.Log("working");
	     transform.position = Vector3(transform.parent.transform.position.x,transform.parent.transform.position.y + 1,transform.parent.transform.position.z);
	     transform.Rotate(90,0,0);
	     
	    
	    }

}