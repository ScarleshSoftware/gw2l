const moment = require('moment');

const dst_delta = moment().isDST() ? 1 : 0;
export default dst_delta;