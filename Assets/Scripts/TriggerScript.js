#pragma strict

function OnTriggerStay(other : Collider)
{
	if (Input.GetKeyDown("space"))
		GameObject.Find("Tree1").GetComponent(ScalerScript).scalingSpeed += 0.005;
}