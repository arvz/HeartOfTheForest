#pragma strict

//private var forestController;

function Start () 
{
	//forestController = GetComponent(ForestController);
}

function OnTriggerStay(other : Collider)
{
	if (Input.GetKeyDown("space")) 
	{
		// TODO: trigger some hit animation?
		Destroy(other.gameObject);
		GameObject.Find("ForestController").GetComponent(ForestController).Grow();
	}
}

function OnTriggerExit(other : Collider) 
{
	// Destroy in 0.5 sec.
	// TODO: some animation?
	Destroy(other.gameObject, 0.5);
}
