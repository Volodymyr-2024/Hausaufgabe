export namespace userManagement {
  export namespace Admin {
    export class AdminUser {
      constructor(
        public name: string,
        public email: string,
        public isSuperAdmin: boolean
      ) {}
      changeAdmin(isSuperAdmin: boolean): void {
        this.isSuperAdmin = isSuperAdmin;
        console.log(`Права администратора изменены ${this.isSuperAdmin}`);
      }
    }
  }
}
