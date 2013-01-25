#pragma strict

var maxSpeed : float;


function OnTriggerStay(other : Collider)
{

	if (Input.GetKeyDown("space"))
	{
		if (GameObject.Find("Tree1").GetComponent(ScalerScript).scalingSpeed < (0.88 * 
		GameObject.Find("Tree1").GetComponent(ScalerScript).scalingSpeed += 0.005;
		
		Destroy(other.gameObject);
	}
}