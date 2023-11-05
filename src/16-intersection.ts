interface IEmployeeBasicInfo {
  id: number;
  name: string;
}

interface IEmployeeAddress {
  door: string;
  street: string; 
  zip: number;
}

type Employee = IEmployeeBasicInfo & IEmployeeAddress;

function getEmployeeFullDetails(empInfo: IEmployeeBasicInfo & IEmployeeAddress) {
  return empInfo;
}

