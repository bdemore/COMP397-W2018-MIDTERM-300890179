module objects {
  export class Cloud extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("cloud");
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this.Reset();
    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset():void {
      if (managers.Game.currentScene == config.Scene.PLAY) {
      this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
      this.y = -this.height;
      this._dx = Math.floor((Math.random() * 4) - 2);
      this._dy = Math.floor((Math.random() * 5) + 5);
    }
  }

    // move the object to some new location
    public Move():void {
      if (managers.Game.currentScene == config.Scene.PLAY) {
        this.y += this._dy;
        this.x += this._dx;
      }
      if (managers.Game.currentScene == config.Scene.LEVEL2) {
        this.y -= this._dy;
        this.x -= this._dx;
      }
    }

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // check lower bounds
      if (managers.Game.currentScene == config.Scene.PLAY) {
      if(this.y >= 480 + this.height) {
        this.Reset();
      }
    }
    if (managers.Game.currentScene == config.Scene.LEVEL2) {
      if(this.x >= 640 + this.width) {
        this.Reset();
      }
    }
    }
  }
}
