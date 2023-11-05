interface IEmployee {
  id: number | string;
  name: string;
  city: string;
  exp?: string; // optional
  isContractEmployee: boolean;
}

class ContractEmployee implements IEmployee {
  id = 0;
  name = "";
  city = "";
  isContractEmployee = true;
}

class PermanentEmployee implements IEmployee {
  id = 0;
  name = "";
  city = "";
  isContractEmployee = false;
}

const myEmployee1: ContractEmployee = new ContractEmployee();
