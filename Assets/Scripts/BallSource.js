#pragma strict

import System;
import System.IO;

var ballSpeed : float; // degress / sec
var currentSeasonIndex : int = 0;

var ballPrefab : GameObject;
var numBalls : int;

// Array of timestamps of the balls to peak
private var timestamps : Array;
// Index in timestamps of the next ball to spawn
private var nextBallIndex : float;
// Time for a ball to peak after spawning
private var timeForBallToPeak : float;

function Start ()
{
//	Debug.Log("Starting in scene " + Application.loadedLevel);
	currentSeasonIndex = Application.loadedLevel;
	nextBallIndex = 0;
	timeForBallToPeak = 1.0 / ballSpeed * 90;
	LoadTimestamps();
	numBalls = timestamps.length;
}

function FixedUpdate () 
{
	SourceBallsFromTimestamps();
}

function LoadTimestamps () 
{
	var filename = "level" + currentSeasonIndex + ".txt";
	timestamps = new Array();
	if (File.Exists(filename)) {
		var sr = File.OpenText(filename);
		var line = sr.ReadLine();
		while (line != null) {
			timestamps.Push(float.Parse(line));
			line = sr.ReadLine();
		}
	} else {
		Debug.LogError("Can't find " + filename);
	}
}


private function SourceBallsFromTimestamps() 
{
	if (nextBallIndex < timestamps.length) {
		var nextBallTimestamp : float = timestamps[nextBallIndex];
		nextBallTimestamp	-= timeForBallToPeak;
		var now : float = Time.timeSinceLevelLoad;
		if (now >= nextBallTimestamp) {
			SpawnBall();
			nextBallIndex += 1;
		}
	} else if (currentSeasonIndex < 3) {
		var lastBallTime : float = timestamps[nextBallIndex - 1];
		if (Time.timeSinceLevelLoad - lastBallTime > 5) {
			Application.LoadLevel(currentSeasonIndex + 1);
		}
	} else {
		// Game over
	}
}

private function SpawnBall() 
{
	var b = GameObject.Find("Ball");
	var newBall = Instantiate(ballPrefab);
	newBall.GetComponent(RotateBallAroundPivot).pivot = GameObject.Find("BallPivot").transform;
	newBall.GetComponent(RotateBallAroundPivot).speed = ballSpeed;
	return newBall;
}


