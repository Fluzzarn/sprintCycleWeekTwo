#pragma strict

var direction = Vector3(-1,0,0);
 var startTime : int;
var hero : GameObject;


function Update () {


    if(isHeroClose())
    {
     
    transform.position.x = Mathf.Lerp( transform.position.x, hero.transform.position.x, Time.deltaTime);
    
    Debug.Log("Moving To hero");
    }
    else
    {
        moveBackAndForth();
    }

}



function isHeroClose()
{
   if(Vector3.Distance(transform.position,hero.transform.position) <= 3)
   {
     return true;
   }
   else
   {
     return false;
   }
 

}

function moveBackAndForth()
{
		if(isHeroClose())
	      {
	      transform.position.x = Mathf.Lerp( transform.position.x, hero.transform.position.x, Time.deltaTime);
	      
	      }    
		else
		{
		
	    transform.Translate(direction * Time.deltaTime,Space.World);
		if((Time.time - startTime) >= 3)
		{
		 direction = -direction;
		 startTime = Time.time;
		}

      }

}