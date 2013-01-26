#pragma strict

var ballSpeed : float;
var beatsPerMinute : float;
var currentSeasonIndex : int = 0;

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
		if (Mathf.Abs(currentOffset - beats) > 0.1) {
			Debug.LogError("Bar is wrong length! " + currentOffset); 
		}
		return offsets;
	}
}

private var seasons : Array;

private var currentMeasureIndex : int;
private var currentMeasureStartTime : float;
private var nextBallIndex : float;

function Start () {
	Debug.Log("Starting in scene " + Application.loadedLevel);
	currentSeasonIndex = Application.loadedLevel;
	currentMeasureIndex = 0;
	nextBallIndex = 0;
	LoadSeasons();
}

function FixedUpdate () {
	var currentSeason : Array = seasons[currentSeasonIndex];
	var barDuration = (currentSeason[currentMeasureIndex] as Measure).beats / beatsPerMinute * 60;

	if (Time.time > currentMeasureStartTime + barDuration) {
		// Measure has finished, move to the next.
		currentMeasureIndex += 1;
		if (currentMeasureIndex >= currentSeason.length) {
			currentMeasureIndex = currentSeason.length - 4;
		}
		currentMeasureStartTime = Time.time;
		nextBallIndex = 0;
	}
	var currentMeasure : Measure = currentSeason[currentMeasureIndex] as Measure;

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

private function LoadSeasons() {
	// Spring: joy, life, energy, dotted rhythms.
	var spring = new Array();
	spring.Push(new Measure(4, Minims(2)));
	spring.Push(new Measure(4, Minims(2)));
	spring.Push(new Measure(4, Crotchets(4)));
	spring.Push(new Measure(4, Crotchets(4)));
	spring.Push(new Measure(4, Crotchets(2)
				.Concat(Quavers(2))
				.Concat(Crotchets(1))));
	spring.Push(new Measure(4, Quavers(2)
				.Concat(Crotchets(1))
				.Concat(Quavers(2))
				.Concat(Crotchets(1))));
	spring.Push(new Measure(4, Quavers(8)));
	spring.Push(new Measure(4, Quavers(1)
				.Concat(Crotchets(1))
				.Concat(Quavers(2))
				.Concat(Crotchets(1))
				.Concat(Quavers(1))));
	spring.Push(new Measure(4, Quavers(1)
				.Concat(Crotchets(1))
				.Concat(Crotchets(1))
				.Concat(Crotchets(1))
				.Concat(Quavers(1))));
	spring.Push(new Measure(4, Crotchets(1)
				.Concat(Quavers(1))
				.Concat(DottedCrotchets(1))
				.Concat(Crotchets(1))));
	spring.Push(new Measure(4, Quavers(2)
				.Concat(Quavers(1))
				.Concat(DottedCrotchets(1))
				.Concat(Crotchets(1))));
	spring.Push(new Measure(4, Quavers(1) // totoro
				.Concat(SemiQuavers(1))
				.Concat(Quavers(3))
				.Concat(Notes(1, 1.75))));
	spring.Push(new Measure(4, SemiQuavers(2)
				.Concat(Quavers(1))
				.Concat(Crotchets(1))
				.Concat(SemiQuavers(2))
				.Concat(Quavers(1))
				.Concat(Crotchets(1))));
	spring.Push(new Measure(4, Quavers(1)
				.Concat(SemiQuavers(1))
				.Concat(DottedQuavers(1))
				.Concat(SemiQuavers(1))
				.Concat(DottedQuavers(1))
				.Concat(SemiQuavers(1))
				.Concat(DottedQuavers(1))
				.Concat(SemiQuavers(2))));
	spring.Push(new Measure(4, Quavers(1)
				.Concat(Crotchets(1))
				.Concat(SemiQuavers(2))
				.Concat(Quavers(1))
				.Concat(SemiQuavers(2))
				.Concat(Quavers(2))));
	spring.Push(new Measure(4, Quavers(1)
				.Concat(SemiQuavers(1))
				.Concat(Quavers(1))
				.Concat(SemiQuavers(2))
				.Concat(Quavers(1))
				.Concat(SemiQuavers(1))
				.Concat(Quavers(3))));

	// Relaxed, triplets
	var summer = new Array();
	summer.Push(new Measure(4, Minims(2)));
	summer.Push(new Measure(4, Crotchets(4)));
	summer.Push(new Measure(4, Crotchets(2)
				.Concat(CrotchetTriplets(1))));
	summer.Push(new Measure(4, Quavers(2)
				.Concat(QuaverTriplets(2))
				.Concat(Crotchets(1))));

	seasons = new Array();
	seasons.Push(spring);
	seasons.Push(summer);
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

private function DottedCrotchets(n : int) {
	return Notes(n, 1.5);
}

private function LongShortQuavers(n : int) {
	var pair = new Array();
	pair.Push(0.75);
	pair.Push(0.25);
	return Repeat(pair, n);
}

private function SemiQuavers(n : int) {
	return Notes(n, 0.25);
}

private function DottedQuavers(n : int) {
	return Notes(n, 0.75);
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

private function Repeat(a : Array, n : int) {
	var result = new Array();
	for (var i = 0; i < n; ++i) {
		result = result.Concat(a);
	}
	return result;
}
