type Distance = number;
type Point = [Distance, Distance];
type Points<N extends number, Acc extends Point[] = []> = Acc["length"] extends N ? Acc : Points<N, [...Acc, Point]>;

type Radii = [number, number];
type Flag = 0 | 1;
type ArcParams = [Radii, number, Flag, Flag, Point];

interface PathElement {
  command: string;
  params?: Distance[] | Point[] | Point[][] | ArcParams[];
}

export class Path {
  path: PathElement[] = [];

  private addElement({ command, params }: PathElement) {
    const push = () => this.path.push({ command, params });

    if (command === "Z" || command === "z") push();
    if (!params) return this;
    if (params.length === 0) return this;

    push();

    return this;
  }

  M = (...points: Point[]) => this.addElement({ command: "M", params: points });
  m = (...points: Point[]) => this.addElement({ command: "m", params: points });
  L = (...points: Point[]) => this.addElement({ command: "L", params: points });
  l = (...points: Point[]) => this.addElement({ command: "l", params: points });
  H = (...xs: Distance[]) => this.addElement({ command: "H", params: xs });
  h = (...xs: Distance[]) => this.addElement({ command: "h", params: xs });
  V = (...ys: Distance[]) => this.addElement({ command: "V", params: ys });
  v = (...ys: Distance[]) => this.addElement({ command: "v", params: ys });
  C = (...points: Points<3>[]) => this.addElement({ command: "C", params: points });
  c = (...points: Points<3>[]) => this.addElement({ command: "c", params: points });
  S = (...points: Points<2>[]) => this.addElement({ command: "S", params: points });
  s = (...points: Points<2>[]) => this.addElement({ command: "s", params: points });
  Q = (...points: Points<2>[]) => this.addElement({ command: "Q", params: points });
  q = (...points: Points<2>[]) => this.addElement({ command: "q", params: points });
  T = (...points: Point[]) => this.addElement({ command: "T", params: points });
  t = (...points: Point[]) => this.addElement({ command: "t", params: points });
  A = (...arcParams: ArcParams[]) => this.addElement({ command: "A", params: arcParams });
  a = (...arcParams: ArcParams[]) => this.addElement({ command: "a", params: arcParams });
  Z = () => this.addElement({ command: "Z" });
  z = () => this.addElement({ command: "z" });

  toString = () => this.path.map(({ command, params }) => (params ? `${command} ${params.flat(2).join(" ")}` : command)).join(" ");
}
