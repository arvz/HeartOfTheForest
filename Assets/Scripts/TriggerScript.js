#pragma strict

private var isKeyDown : boolean;
private var colliding = new Array();

function Start () 
{
}

function Update () 
{
	isKeyDown = Input.GetKeyDown("space");
	if (isKeyDown && colliding.length > 0) {
		var collider : Collider = colliding.Pop();
		Destroy(collider.gameObject);
		RemoveColliding(collider);
		GameObject.Find("ForestController").GetComponent(ForestController).Grow();
	}
}

function OnTriggerEnter(other : Collider) 
{
	colliding.Push(other);
}

function OnTriggerExit(other : Collider) 
{
	// Destroy in 0.5 sec.
	// TODO: some animation?
	Destroy(other.gameObject, 0.5);
	RemoveColliding(other);
}

function RemoveColliding(c : Collider)
{
	for (var i = 0; i < colliding.length; ++i) {
		if (colliding[i] == c) {
			colliding.RemoveAt(i);
		}
	}
}
