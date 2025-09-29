
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(num: number) {
    const remainder = num % 10;
    let result = '';
    if (remainder === 1) {
      result = num + 'st';
    } else if (remainder === 2) {
      result = num + 'nd';
    } else if (remainder === 3) {
      result = num + 'rd';
    } else {
      result = num + 'th';
    }

    if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) {
      result = num + 'th';
    }
    return result;
  }
}

@Pipe({
  name: 'RomanPipe',
})
export class RomanPipe implements PipeTransform {
  transform(num2: number) {}
}

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(date: Date) {
    console.log(date)
    if (!date) {
      return '';
    }
    const inputDate: Date = new Date(date);
    const today: Date = new Date();
    const age = today.getFullYear() - inputDate.getFullYear();
    return age >0 ? age + 'years old' :""
  }
}


// 4.⁠ ⁠declare an array of employee objects. display them in a table.
//    create a custom pipe 'Salutation' that will add 'mr. / miss.' before the employee name.

@Pipe({
  name: 'salutation',
})
export class SalutationPipe implements PipeTransform {
  transform(gender:any) {
    console.log(gender)
    return gender === "Male" ? "Mr." : gender === "Female" ? "Mrs" :""

  }
}


@Pipe({
  name: 'searchEmployee',
})
export class Search implements PipeTransform {
  transform(employees : any[],SearchEmployee : String) {

    SearchEmployee = SearchEmployee.toLowerCase();

    console.log(SearchEmployee)
    return employees.filter(emp=>emp.name.toLowerCase().includes(SearchEmployee))


  }
}



