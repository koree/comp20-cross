Corey Ross
2048-gamecenter

Everything seems to be working as of right now, no known bugs

Discussed assignment with Corey Mason, Ahmed Aly, and Zach McGowan, thanks to TAs

~4 hours worked actually writing code & testing, ~2.5 hours getting understanding of what needed to be done (background info)
	~7 hours installation errors (seriously, because I'm on windows). Overall ~13.5 hours, instead of expected 6.5

In the game_manager.js the scores are stored in the "this" object, and are not saved after each game is cleared, unless it is a 
	best score, which then has local storage used. 

I had to add a reference to JQUERY in the <script src> section of the index.html file in order for JQUERY to actually work 
	elsewhere in 2048. After that, game_manager.js had to be edited, so that when the game was over it would post. 
	I did this after line 85 in the GameManager.prototype.actuate function, after line 91 where it checks if the game is over. 
	It then posts to my heroku app (or local app depending on the testing phase) with a given username and the elements associated 
	with the this object, like this.grid etc. 