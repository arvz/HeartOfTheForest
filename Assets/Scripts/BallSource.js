#pragma strict

var ballSpeed : float;
var beatsPerMinute : float;

var ballPrefab : GameObject;

// A measure of rhythm: a collection of notes related
// to beats.
class Measure {
	var beats : int; // how many beats in the bar
	var notes : float[]; // durations (in beats) of the notes
	var offsets : float[]; // offsets of notes

	function Measure(b : int, n : Array) {
		beats = b;
		notes = n;
		offsets = Offsets();
	}

	private function Offsets() : float[] {
		var offsets = new float[notes.length];
		var currentOffset : float = 0.0;
		for (var i = 0; i < notes.length; ++i) {
			offsets[i] = currentOffset;
			currentOffset += notes[i];
		}
		Debug.Log("Notes: " + notes.length + ", off " + currentOffset);
		if (currentOffset > beats) {
			Debug.LogWarning("Bar is too long! " + currentOffset); 
		}
		return offsets;
	}
}

// Hardcoded measures for testing
//private var bar = new Measure(4, Crotchets(4));
private var measures : Array;

private var currentMeasureIndex : int;
private var currentMeasureStartTime : float;
private var nextBallIndex : float;

function Start () {
	currentMeasureIndex = 0;
	nextBallIndex = 0;

	measures = new Array();
	measures.Push(new Measure(4, Crotchets(4)));
	measures.Push(new Measure(4, Crotchets(4)));
	measures.Push(new Measure(4, Quavers(8)));
	Debug.Log("Measures " + measures);
}

function Update () {
	var barDuration = (measures[currentMeasureIndex] as Measure).beats / beatsPerMinute * 60;

	if (Time.time > currentMeasureStartTime + barDuration) {
		// Measure has finished, move to the next.
		currentMeasureIndex = (currentMeasureIndex + 1) % measures.length;
		currentMeasureStartTime = Time.time;
		nextBallIndex = 0;
	}
	var currentMeasure : Measure = measures[currentMeasureIndex] as Measure;

	if (nextBallIndex < currentMeasure.offsets.length) {
		var secondsPerBeat = 60 / beatsPerMinute;
		var nextBallTime = currentMeasureStartTime + currentMeasure.offsets[nextBallIndex] * secondsPerBeat;
		if (Time.time > nextBallTime) {
			var b = GameObject.Find("Ball");
			var newBall = Instantiate(ballPrefab);
			newBall.GetComponent(RotateBallAroundPivot).pivot = GameObject.Find("BallPivot").transform;
			newBall.GetComponent(RotateBallAroundPivot).speed = ballSpeed;
			nextBallIndex += 1;
		}
	}
}

private function Crotchets(n : int) {
  var notes = new float[n];
	for (var i = 0; i < n; ++i) {
		notes[i] = 1;
	}
	return notes;
}

private function Quavers(n : int) {
  var notes = new float[n];
	for (var i = 0; i < n; ++i) {
		notes[i] = 0.5;
	}
	return notes;
}
