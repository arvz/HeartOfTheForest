#pragma strict

function OnTriggerStay(other : Collider)
{
	if (Input.GetKeyDown("space"))
		GameObject.Find("Tree1").transform.localScale += Vector3(0.15,0.15,0);
}