


function Start()
{
var ref:GameObject = GameObject.Find("SpriteManager"); //reference to the SpriteManager gameObject, use the name you gave it in step 2.
var mySpriteManager:SpriteManager = ref.GetComponent("LinkedSpriteManager") as SpriteManager; //get the actual SpriteManager component

mySpriteManager.AddSprite(GameObject.Find("hero").gameObject,.11, .14,6,527,11,14,false);
}