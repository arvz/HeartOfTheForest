using UnityEngine;
using System.Collections;

public class KeepRatio : MonoBehaviour
{

	private GUITexture myGUITexture;

	void Awake ()
	{
		myGUITexture = this.gameObject.GetComponent ("GUITexture") as GUITexture;
	}

// Use this for initialization
	void Start ()
	{
		// Position the billboard in the center, 
		// but respect the picture aspect ratio
		int textureHeight = guiTexture.texture.height;
		int textureWidth = guiTexture.texture.width;
		
//		Debug.Log("textureHeight: " + textureHeight);
//		Debug.Log ("textureWidth: " + textureWidth);
		
		int screenHeight = Screen.height;
		int screenWidth = Screen.width;
		
//		Debug.Log("screenHeight: " + screenHeight);
//		Debug.Log("screenWidth: " + screenWidth);
		
		float screenAspectRatio = (screenWidth / screenHeight);
		float textureAspectRatio = ((float)textureWidth / (float)textureHeight);
		
//		Debug.Log("screenAspectRatio: " + screenAspectRatio);
//		Debug.Log("textureAspectRatio: " + textureAspectRatio);
		
		int scaledHeight;
		int scaledWidth;
		
		if (textureAspectRatio <= screenAspectRatio)
		{
			// The scaled size is based on the height
			scaledHeight = screenHeight;
			scaledWidth = (int)(screenHeight * textureAspectRatio);
		}
		else
		{
			// The scaled size is based on the width
			scaledWidth = screenWidth;
			scaledHeight = (int)(scaledWidth / textureAspectRatio);
		}
		
		
		myGUITexture.pixelInset = new Rect (0, 0, scaledWidth, scaledHeight);
	}
	
}

