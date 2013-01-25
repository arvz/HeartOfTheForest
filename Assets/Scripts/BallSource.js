#pragma strict

var ballSpeed : float;
var beatsPerMinute : float;

// A measure of rhythm: a collection of notes related
// to beats.
class Measure {
	var beats : int; // how many beats in the bar
	var notes : float[]; // offsets (in beats) of the notes

	function Measure(b : int, n : Array) {
		beats = b;
		notes = n;
	}
}

// Hardcoded bar for testing
private var bar = new Measure(4, [0.0, 1, 2.5, 3]);

private var currentMeasureStartTime : float;
private var nextBallIndex : float;

function Start () {
	nextBallIndex = 0;
}

function Update () {
	var barDuration = bar.beats / beatsPerMinute * 60;
	if (Time.time > currentMeasureStartTime + barDuration) {
		currentMeasureStartTime = Time.time;
		nextBallIndex = 0;
	}

	if (nextBallIndex < bar.notes.length) {
		var secondsPerBeat = 60 / beatsPerMinute;
		var nextBallTime = currentMeasureStartTime + bar.notes[nextBallIndex] * secondsPerBeat;
		if (Time.time > nextBallTime) {
			var b = GameObject.Find("Ball");
			var newBall = Instantiate(b);
			newBall.GetComponent(RotateBallAroundPivot).speed = ballSpeed;
			nextBallIndex += 1;
		}
	}
}

