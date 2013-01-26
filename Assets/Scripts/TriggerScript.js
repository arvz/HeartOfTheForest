#pragma strict

import System;
import System.IO;

private var isKeyDown : boolean;
private var colliding = new Array();

var recordedNotes = new Array();

function Start () 
{
}

function Update () 
{
	isKeyDown = Input.GetKeyDown("space");
	if (isKeyDown && colliding.length > 0) {
		var collider : Collider = colliding.Shift();
		Destroy(collider.gameObject);
		RemoveColliding(collider);
		GameObject.Find("ForestController").GetComponent(ForestController).Grow();
	} else if (isKeyDown) {
		GameObject.Find("ForestController").GetComponent(ForestController).Shrink();
	}

	// Record timings
	if (isKeyDown)
 	{
		recordedNotes.Push(Time.timeSinceLevelLoad);
	}

	if (Input.GetKeyDown("a")) {
		WriteRecordedNotes();
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
	Destroy(other.gameObject, 1);
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

function WriteRecordedNotes() 
{
	Debug.Log("Writing file");
	var sr = File.CreateText("recorded.txt");
	//sr.WriteLine("Level {0}", Application.loadedLevel);
	for (var i = 0; i < recordedNotes.length; ++i) {
		sr.WriteLine("{0}", recordedNotes[i]);
	}
	sr.Close();

}
