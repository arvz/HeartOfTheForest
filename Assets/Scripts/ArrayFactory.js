#pragma strict

static var summerTree1 : Texture[];
static var summerTree2 : Texture[];
static var summerTree3 : Texture[];
static var summerTree4 : Texture[];
static var summerBush1 : Texture[];
static var summerBush2 : Texture[];
static var summerBackTree1 : Texture[];
static var summerBackTree2 : Texture[];
static var summerBackTree3 : Texture[];
static var summerVine1 : Texture[];
static var summerVine2 : Texture[];

static var autumnTree1 : Texture[];
static var autumnTree2 : Texture[];
static var autumnTree3 : Texture[];
static var autumnTree4 : Texture[];
static var autumnBush1 : Texture[];
static var autumnBush2 : Texture[];
static var autumnBackTree1 : Texture[];
static var autumnBackTree2 : Texture[];
static var autumnBackTree3 : Texture[];
static var autumnVine1 : Texture[];
static var autumnVine2 : Texture[];

static var winterTree1 : Texture[];
static var winterTree2 : Texture[];
static var winterTree3 : Texture[];
static var winterTree4 : Texture[];
static var winterBush1 : Texture[];
static var winterBush2 : Texture[];
static var winterBackTree1 : Texture[];
static var winterBackTree2 : Texture[];
static var winterBackTree3 : Texture[];
static var winterVine1 : Texture[];
static var winterVine2 : Texture[];

static var springTree1 : Texture[];
static var springTree2 : Texture[];
static var springTree3 : Texture[];
static var springTree4 : Texture[];
static var springBush1 : Texture[];
static var springBush2 : Texture[];
static var springBackTree1 : Texture[];
static var springBackTree2 : Texture[];
static var springBackTree3 : Texture[];
static var springVine1 : Texture[];
static var springVine2 : Texture[];

function Awake()
{
	if (Application.loadedLevelName == "Summer")
		LoadSummer();
	else if (Application.loadedLevelName == "Autumn")
		LoadAutumn();
	else if (Application.loadedLevelName == "Winter")
		LoadWinter();
	else if (Application.loadedLevelName == "Spring")
		LoadSpring();
}

function LoadSummer()
{
	summerTree1 = new Texture[18];
	summerTree2 = new Texture[18];
	summerTree3 = new Texture[18];
	summerTree4 = new Texture[18];
	summerBush1 = new Texture[7];
	summerBush2 = new Texture[6];
	summerBackTree1 = new Texture[8];
	summerBackTree2 = new Texture[8];
	summerBackTree3 = new Texture[8];
	summerVine1 = new Texture[15];
	summerVine2 = new Texture[15];
	
	LoadArray(summerTree1, "Summer", "Tree", 1);
	LoadArray(summerTree2, "Summer", "Tree", 2);
	LoadArray(summerTree3, "Summer", "Tree", 3);
	LoadArray(summerTree4, "Summer", "Tree", 4);
	LoadArray(summerBush1, "Summer", "Bush", 1);
	LoadArray(summerBush2, "Summer", "Bush", 2);
	LoadArray(summerBackTree1, "Summer", "BackTree", 1);
	LoadArray(summerBackTree2, "Summer", "BackTree", 2);
	LoadArray(summerBackTree3, "Summer", "BackTree", 3);
	LoadArray(summerVine1, "Summer", "Vine", 1);
	LoadArray(summerVine2, "Summer", "Vine", 2);
}

function LoadAutumn()
{
	autumnTree1 = new Texture[18];
	autumnTree2 = new Texture[18];
	autumnTree3 = new Texture[18];
	autumnTree4 = new Texture[18];
	autumnBush1 = new Texture[7];
	autumnBush2 = new Texture[6];
	autumnBackTree1 = new Texture[8];
	autumnBackTree2 = new Texture[8];
	autumnBackTree3 = new Texture[8];
	autumnVine1 = new Texture[15];
	autumnVine2 = new Texture[15];
	
	LoadArray(autumnTree1, "Autumn", "Tree", 1);
	LoadArray(autumnTree2, "Autumn", "Tree", 2);
	LoadArray(autumnTree3, "Autumn", "Tree", 3);
	LoadArray(autumnTree4, "Autumn", "Tree", 4);
	LoadArray(autumnBush1, "Autumn", "Bush", 1);
	LoadArray(autumnBush2, "Autumn", "Bush", 2);
	LoadArray(autumnBackTree1, "Autumn", "BackTree", 1);
	LoadArray(autumnBackTree2, "Autumn", "BackTree", 2);
	LoadArray(autumnBackTree3, "Autumn", "BackTree", 3);
	LoadArray(autumnVine1, "Autumn", "Vine", 1);
	LoadArray(autumnVine2, "Autumn", "Vine", 2);
}

function LoadWinter()
{
	winterTree1 = new Texture[18];
	winterTree2 = new Texture[18];
	winterTree3 = new Texture[18];
	winterTree4 = new Texture[18];
	winterBush1 = new Texture[7];
	winterBush2 = new Texture[6];
	winterBackTree1 = new Texture[8];
	winterBackTree2 = new Texture[8];
	winterBackTree3 = new Texture[8];
	winterVine1 = new Texture[15];
	winterVine2 = new Texture[15];
	
	LoadArray(winterTree1, "Winter", "Tree", 1);
	LoadArray(winterTree2, "Winter", "Tree", 2);
	LoadArray(winterTree3, "Winter", "Tree", 3);
	LoadArray(winterTree4, "Winter", "Tree", 4);
	LoadArray(winterBush1, "Winter", "Bush", 1);
	LoadArray(winterBush2, "Winter", "Bush", 2);
	LoadArray(winterBackTree1, "Winter", "BackTree", 1);
	LoadArray(winterBackTree2, "Winter", "BackTree", 2);
	LoadArray(winterBackTree3, "Winter", "BackTree", 3);
	LoadArray(winterVine1, "Winter", "Vine", 1);
	LoadArray(winterVine2, "Winter", "Vine", 2);
}

function LoadSpring()
{
	springTree1 = new Texture[18];
	springTree2 = new Texture[18];
	springTree3 = new Texture[18];
	springTree4 = new Texture[18];
	springBush1 = new Texture[7];
	springBush2 = new Texture[6];
	springBackTree1 = new Texture[8];
	springBackTree2 = new Texture[8];
	springBackTree3 = new Texture[8];
	springVine1 = new Texture[15];
	springVine2 = new Texture[15];
	
	LoadArray(springTree1, "Spring", "Tree", 1);
	LoadArray(springTree2, "Spring", "Tree", 2);
	LoadArray(springTree3, "Spring", "Tree", 3);
	LoadArray(springTree4, "Spring", "Tree", 4);
	LoadArray(springBush1, "Spring", "Bush", 1);
	LoadArray(springBush2, "Spring", "Bush", 2);
	LoadArray(springBackTree1, "Spring", "BackTree", 1);
	LoadArray(springBackTree2, "Spring", "BackTree", 2);
	LoadArray(springBackTree3, "Spring", "BackTree", 3);
	LoadArray(springVine1, "Spring", "Vine", 1);
	LoadArray(springVine2, "Spring", "Vine", 2);
}


function LoadArray(array : Texture[], season : String, type : String, number : int)
{
	for (var i = 1; i <= array.length; i++)
	{
		if (i < 10)
			array[i-1] = Resources.Load("Sprites/"+season+"/"+type+number+"/"+type+number+"0"+i) as Texture;
		else
			array[i-1] = Resources.Load("Sprites/"+season+"/"+type+number+"/"+type+number+i) as Texture; 
	}
}
