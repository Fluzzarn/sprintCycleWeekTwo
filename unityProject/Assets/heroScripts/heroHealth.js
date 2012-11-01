#pragma strict


static var heroHealthNumber :float = 0.0;
static var deathGUI = false;

function Start () {
deathGUI = false;
heroHealthNumber = 100.00;

}

function Update () {

  if(heroHealthNumber <= 0)
  {
    
    Destroy(this.gameObject);
    deathGUI = true;
  
  }
  
  
   Debug.Log(heroHealthNumber);
  

}


function OnCollisionEnter(collision : Collision)
{
  


   if(collision.collider.tag == "enemy")
   {
     heroHealthNumber -= 25;
   
   }
 

}
