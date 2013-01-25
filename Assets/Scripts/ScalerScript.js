#pragma strict

var minScale : float;
var maxScale : float;
var scalingSpeed : float;
var downSpeed : float;

private var scalingVector : Vector3;
private var arrayIndex : int;

function Start () 
{
	arrayIndex = 0;
}

function Update () 
{
	scalingSpeed -= downSpeed;
	scalingVector = Vector3(scalingSpeed, scalingSpeed, scalingSpeed);
	
	transform.localScale += scalingVector;
	transform.localScale = Vector3(Mathf.Clamp(transform.localScale.x, minScale, maxScale), 
								   Mathf.Clamp(transform.localScale.y, minScale, maxScale), 
								   Mathf.Clamp(transform.localScale.z, minScale, maxScale));
	UpdateSprite();
	
}

//Updates the sprite texture according to its size
function UpdateSprite()
{
	arrayIndex = ((transform.localScale.x - minScale)/maxScale) * TreeArrays.summerTree1.length;
	
	transform.Find("Tree1_Plane").GetComponent(MeshRenderer).material.mainTexture = 
		TreeArrays.summerTree1[arrayIndex];
}