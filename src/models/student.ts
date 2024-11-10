export class Student {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public phone: string,
    public address: string,
    public email: string,
    public active: boolean,
    public leavingDate: string
  ) {}
}
