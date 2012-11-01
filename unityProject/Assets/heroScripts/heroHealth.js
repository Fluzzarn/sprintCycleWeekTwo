#pragma strict


static var heroHealthNumber = 0;


function Start () {

heroHealthNumber = 100;

}

function Update () {

  if(heroHealthNumber <= 0)
  {
    transform.Translate(Vector3.right);
    Destroy(this);
  
  }
  else
  {
   Debug.Log(heroHealthNumber);
  }

}


function OnCollisionEnter(collision : Collision)
{
   if(collision.collider.tag == "enemy")
   {
     heroHealthNumber -= 10;
   
   }
 

}