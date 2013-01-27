#pragma strict

import System;
import System.IO;

private var isKeyDown : boolean;
private var colliding = new Array();

var recordedNotes = new Array();
var explosion : GameObject;

private var particle : Transform;

function Update () 
{
	//Debugging cheat
	if (Input.GetKeyDown("return"))
		GameObject.Find("ForestController").GetComponent(ForestController).GrowCheat();

	isKeyDown = Input.GetKeyDown("space");
	if (isKeyDown && colliding.length > 0) 
	{
		var collider : Collider = colliding.Shift();
		
		particle = collider.transform.Find("Particle System");
		particle.parent = null;
		particle.GetComponent(ParticleSystem).enableEmission = false;
		Destroy(particle.gameObject, 4);
		
		Instantiate(explosion, collider.transform.position, Quaternion.identity); 
		Destroy(collider.gameObject);
		
		RemoveColliding(collider);
		GameObject.Find("ForestController").GetComponent(ForestController).Grow();
		

	} 
	else if (isKeyDown) 
	{
		GameObject.Find("ForestController").GetComponent(ForestController).Shrink();
	}

	// Record timings
	if (isKeyDown)
 	{
		recordedNotes.Push(Time.timeSinceLevelLoad);
	}

	if (Input.GetKeyDown("a")) {
		WriteRecordedNotes();
	} else if (Input.GetKeyDown("0")) {
		Application.LoadLevel(0);
	} else if (Input.GetKeyDown("1")) {
		Application.LoadLevel(1);
	} else if (Input.GetKeyDown("2")) {
		Application.LoadLevel(2);
	} else if (Input.GetKeyDown("3")) {
		Application.LoadLevel(3);
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
	
	Destroy(other.gameObject, 3.2);
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
