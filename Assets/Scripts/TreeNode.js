#pragma strict

var minMinSize : float;
var maxMinSize : float;
var minMaxSize : float;
var maxMaxSize : float;

function Start () 
{
	GetComponent(ScalerScript).minScale = Random.Range(minMinSize, maxMinSize);
	GetComponent(ScalerScript).maxScale = Random.Range(minMaxSize, maxMaxSize);
}

function Update () 
{
	
}