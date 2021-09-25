class circle {
  //constructor
  radiusC: number;
  colorC: string;

  constructor(radius: number = 1.0, color: string = "red") {
    this.radiusC = radius;
    this.colorC = color;
  }

  getRadius(): number {
    return this.radiusC;
  }

  setRadius(ra1): number {
    return (this.radiusC = ra1);
  }
  getColor(): string {
    return this.colorC;
  }
  setColor(co1): string {
    return (this.colorC = co1);
  }
  tostring(): string {
    return `Circle[radius = ` + this.radiusC + `, color = ` + this.colorC + `]`;
  }
  getArea(): number {
    return Math.PI * this.radiusC * this.radiusC;
  }
  getCircumference(): number {
    return 2 * Math.PI * this.radiusC;
  }
}
