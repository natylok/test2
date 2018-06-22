import * as moment from 'moment';
const FORMAT_TEMPLATE = 'MM/DD/YYYY', CURRENT_DATE_TEMPLATE = 'DD-MM-YYYY';
class DateService{
    static formatDate(date){
        return moment(date,CURRENT_DATE_TEMPLATE).format(FORMAT_TEMPLATE);
    }
}
export default DateService;