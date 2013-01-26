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
	measures.Push(new Measure(4, Minims(2)));
	measures.Push(new Measure(4, Minims(2)));
	measures.Push(new Measure(4, Crotchets(4)));
	measures.Push(new Measure(4, Crotchets(4)));
	measures.Push(new Measure(4, Crotchets(2)
				.Concat(Quavers(2))
				.Concat(Crotchets(1))));
	measures.Push(new Measure(4, Quavers(2)
				.Concat(Crotchets(1))
				.Concat(Quavers(2))
				.Concat(Crotchets(1))));
	measures.Push(new Measure(4, Quavers(8)));
	measures.Push(new Measure(4, Quavers(1)
				.Concat(Crotchets(1))
				.Concat(Quavers(2))
				.Concat(Crotchets(1))
				.Concat(Quavers(1))));
	measures.Push(new Measure(4, Quavers(1)
				.Concat(Crotchets(1))
				.Concat(Crotchets(1))
				.Concat(Crotchets(1))
				.Concat(Quavers(1))));
	measures.Push(new Measure(4, SemiQuavers(2)
				.Concat(Quavers(1))
				.Concat(Crotchets(1))
				.Concat(SemiQuavers(2))
				.Concat(Quavers(1))
				.Concat(Crotchets(1))));
	measures.Push(new Measure(4, Crotchets(2)
				.Concat(CrotchetTriplets(1))));
	measures.Push(new Measure(4, Quavers(2)
				.Concat(QuaverTriplets(2))
				.Concat(Crotchets(1))));
}

function FixedUpdate () {
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
			if (nextBallIndex == 0) {
				newBall.renderer.material.color = Color.red;
			}
			nextBallIndex += 1;
		}
	}
}

private function Minims(n : int) {
	return Notes(n, 2);
}

private function Crotchets(n : int) {
	return Notes(n, 1);
}

private function Quavers(n : int) {
	return Notes(n, 0.5);
}

private function SemiQuavers(n : int) {
	return Notes(n, 0.25);
}

private function CrotchetTriplets(n : int) {
	return Notes(3 * n, 2.0 / 3);
}

private function QuaverTriplets(n : int) {
	return Notes(3 * n, 1.0 / 3);
}

private function Notes(n : int, d : float) {
  var notes = new Array(n);
	for (var i = 0; i < n; ++i) {
		notes[i] = d;
	}
	return notes;
}
