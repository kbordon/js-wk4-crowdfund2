export class Venture {
  public supportersCurrent = 0;
  public fundsCurrent = 0;
  constructor (public title: string, public creator: string, public description: string, public supportersGoal: number, public fundsGoal: number, public fundsPlans: string, public ventureType: string){}
}
