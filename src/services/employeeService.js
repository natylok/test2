import _ from 'lodash';
import * as moment from 'moment';
import DateService from './dateService';
const DESC = 'desc', SALES_HOUR = 'salesHours'
class EmployeeService{
    getTopEmployeeSellers(hotelInvites){
        let employeesData = {}
        hotelInvites.forEach(inviteDetails => {
            if(this.employeeExistInOrder(inviteDetails)){
                if(!employeesData[inviteDetails.employee.id]){
                    employeesData[inviteDetails.employee.id] = this.getDataForEmployee(inviteDetails);
                }
                this.addSalesHourToEmployee(inviteDetails,employeesData[inviteDetails.employee.id]);
            }
        });
        return this.getTopSellersArr(employeesData);
    }
    employeeExistInOrder(inviteData){
        return !!inviteData.employee;
    }
    getDataForEmployee(inviteData){
        return Object.assign({},inviteData.employee, {[SALES_HOUR]: 0});
    }
    addSalesHourToEmployee(inviteDetails,employee){
        let convertedStartDate = DateService.formatDate(inviteDetails.checkInDate);
        let convertedEndDate = DateService.formatDate(inviteDetails.checkOutDate);
        const startDate = moment(new Date(convertedStartDate)),
              endDate = moment(new Date(convertedEndDate));
        const datesDiffDuration = moment.duration(endDate.diff(startDate));
        employee[SALES_HOUR] += datesDiffDuration.asHours();
    }
    getTopSellersArr(employees){
        let arrEmployees = [];
        for (let key in employees){
            arrEmployees.push(employees[key]);
        }
        return _.orderBy(arrEmployees,[SALES_HOUR],[DESC]).slice(0,3);
    }
}
const employeeService = new EmployeeService();
export default employeeService;