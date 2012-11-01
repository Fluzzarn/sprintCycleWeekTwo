#pragma strict

var attackTime = Time.time;



function Start () {

}

function Update () {


processInput();


}



function processInput(){


    if(Input.GetButton("f"))
    {
    
      attackTime = Time.time;
      attack();
    
    }


}

function attack(){


 var direction = Vector3(0,-1,0);

 transform.Translate(direction * Time.deltaTime);
 
 
 if(Time.time - attackTime >= .5)
 {
   direction = -direction;
   attackTime = Time.time;
 }



}