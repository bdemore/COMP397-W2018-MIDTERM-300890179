module objects {
  export class Island extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("island");
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start(): void {
      this._dy = 5;
      this.Reset();
    }

    // updates the game object every frame
    public Update(): void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset(): void {
      if (managers.Game.currentScene == config.Scene.PLAY) {
      this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
      this.y = -this.height;
    }
  }

    // move the object to some new location
    public Move(): void {
      if (managers.Game.currentScene == config.Scene.PLAY) {
        this.y += this._dy;
      }
      if (managers.Game.currentScene == config.Scene.LEVEL2) {
        this.x -= this._dx;
      }
    }

    // check to see if some boundary has been passed
    public CheckBounds(): void {
      // check lower bounds
      if (managers.Game.currentScene == config.Scene.PLAY) {
        if (this.y >= 480 + this.height) {
          this.Reset();
        }
      }
      if (managers.Game.currentScene == config.Scene.LEVEL2) {
        if (this.x >= 640 + this.width) {
          this.Reset();
        }
      }
    }
  }
}
