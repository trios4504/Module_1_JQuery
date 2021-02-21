$("<p></p>").attr("id", "Gram").text("My Gram").appendTo("#MainContainerDiv");
$("<button></button>").attr("id", "LoginButton").text("Log In").appendTo("#Gram");
$("<button></button>").attr("id", "SignupButton").text("Sign Up").appendTo("#LoginButton");
$("<span></span>").attr("id", "Image1").text("Image 1").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Image2").text("Image 2").appendTo("#Image1");
$("<span></span>").attr("id", "Image3").text("Image 3").appendTo("#Image2");
$("<span></span>").attr("id", "Image4").text("Image 4").appendTo("#Image3");
$("<span></span>").attr("id", "Image5").text("Image 5").appendTo("#Image4");
$("<br/>").appendTo("#Image4")
$("<span></span>").attr("id", "About").text("About").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "Blog").text("Blog").appendTo("#About");
$("<span></span>").attr("id", "Jobs").text("Jobs").appendTo("#Blog");
$("<span></span>").attr("id", "Help").text("Help").appendTo("#Jobs");
$("<br/>").appendTo("#Jobs")
$("<span></span>").attr("id", "English").text("English").appendTo("#MainContainerDiv");
$("<span></span>").attr("id", "2021").text("2021").appendTo("#English");
$("<span></span>").attr("id", "MyGram").text("MyGram").appendTo("#2021");