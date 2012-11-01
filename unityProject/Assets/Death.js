#pragma strict

function Start () {

}

function Update () {

if(GetComponent(heroHealth).deathGUI)
{
  renderer.enabled = true;


}

}

function OnGUI()
{

  if(GetComponent(heroHealth).deathGUI)
  {
   if(GUI.Button(Rect(Screen.width / 2 - 100, Screen.height / 2 - 30, 250, 50), "Press To Retry"))
   {
     Application.LoadLevel(0);
   }
  
  }


}