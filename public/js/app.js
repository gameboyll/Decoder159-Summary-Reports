const today = new Date()

axios.get(`https://payment.decoder159.com/payment/transaction/list?status=pending&user_id=user-decoder@decoder159.com&from=${formatDate(today)}T00:00:00.000Z&to=${formatDate(today)}T23:59:59.000Z`).then(function (response) {
    const todayTotal = response.data
    const todayTotalAmount = todayTotal.reduce( ( sum , cur ) => sum + cur.amount , 0)
    const todayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("reports").insertAdjacentHTML('afterend',`<h1>วันนี้</h1><br>${today.toLocaleString('th-TH', todayOptions)}<br /><h3>จำนวนเบอร์ที่ขายได้: ${todayTotal.length} เบอร์<br />เป็นเงินจำนวน: ${todayTotalAmount.toLocaleString()} บาท</h3>`)
});

const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1);
axios.get(`https://payment.decoder159.com/payment/transaction/list?status=pending&user_id=user-decoder@decoder159.com&from=${formatDate(yesterday)}T00:00:00.000Z&to=${formatDate(yesterday)}T23:59:59.000Z`).then(function (response) {
    const yesterdayTotal = response.data
    const yesterdayTotalAmount = yesterdayTotal.reduce( ( sum , cur ) => sum + cur.amount , 0)
    const yesterdayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("reports2").insertAdjacentHTML('afterend',`<hr><h1>เมื่อวาน</h1><br>${yesterday.toLocaleString('th-TH', yesterdayOptions)}<br /><h3>จำนวนเบอร์ที่ขายได้: ${yesterdayTotal.length} เบอร์<br />เป็นเงินจำนวน: ${yesterdayTotalAmount.toLocaleString()} บาท</h3>`)
});

const firstDayThisMonth = formatDate(new Date(today.getFullYear(), today.getMonth(), 1))
const lastDayThisMonth = formatDate(new Date(today.getFullYear(), today.getMonth() + 1, 0))
axios.get(`https://payment.decoder159.com/payment/transaction/list?status=pending&user_id=user-decoder@decoder159.com&from=${firstDayThisMonth}T00:00:00.000Z&to=${lastDayThisMonth}T23:59:59.000Z`).then(function (response) {
    const thisMonthTotal = response.data
    const thisMonthTotalAmount = thisMonthTotal.reduce( ( sum , cur ) => sum + cur.amount , 0)
    const thisMonthOptions = { year: 'numeric', month: 'long'};
    document.getElementById("reports3").insertAdjacentHTML('afterend',`<hr><h1>เดือนนี้</h1><br>เดือน ${today.toLocaleString('th-TH', thisMonthOptions)}<br /><h3>จำนวนเบอร์ที่ขายได้: ${thisMonthTotal.length} เบอร์<br />เป็นเงินจำนวน: ${thisMonthTotalAmount.toLocaleString()} บาท</h3>`)
});


const lastMonth = new Date()
lastMonth.setMonth(lastMonth.getMonth() - 1);
const firstDayLastMonth = formatDate(new Date(lastMonth.getFullYear(), lastMonth.getMonth(), 1))
const lastDayLastMonth = formatDate(new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0))
axios.get(`https://payment.decoder159.com/payment/transaction/list?status=withdrawn&user_id=user-decoder@decoder159.com&from=${firstDayLastMonth}T00:00:00.000Z&to=${lastDayLastMonth}T23:59:59.000Z`).then(function (response) {
    const lastMonthTotal = response.data
    const lastMonthTotalAmount = lastMonthTotal.reduce( ( sum , cur ) => sum + cur.amount , 0)
    const lastMonthOptions = { year: 'numeric', month: 'long'};
    document.getElementById("reports4").insertAdjacentHTML('afterend',`<hr><h1>เดือนที่แล้ว</h1><br>เดือน ${lastMonth.toLocaleString('th-TH', lastMonthOptions)}<br /><h3>จำนวนเบอร์ที่ขายได้: ${lastMonthTotal.length} เบอร์<br />เป็นเงินจำนวน: ${lastMonthTotalAmount.toLocaleString()} บาท</h3>`)
});

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 