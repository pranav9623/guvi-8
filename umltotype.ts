class circle {
  //constructor
  radius: number;
  color: string;

  constructor(radius: number = 1.0, color: string = "red") {
    this.radius = radius;
    this.color = color;
  }

    var getRadius = (function () {
      return this.radius;
    };

    var setRadius = function (ra1) {
      return (this.radius = ra1);
    };
    var getColor = function () {
      return this.color;
    };
    var setColor = function (co1) {
      return (this.color = co1);
    };
    var tostring = function () {
      return `Circle[radius = ` + this.radius + `, color = ` + this.color + `]`;
    };
    var getArea = function () {
      return Math.PI * this.radius * this.radius;
    };
    var getCircumference = function () {
      return 2 * Math.PI * this.radius;
    };
  }