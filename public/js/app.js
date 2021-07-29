const today = new Date()
const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1);
const yesterday2 = new Date()
yesterday2.setDate(yesterday2.getDate() - 2);

//Daily
const todayInfoQuery = `https://payment.decoder159.com/payment/transaction/list?status=pending&user_id=user-info@decoder159.com&from=${formatDate(yesterday)}T17:00:00.000Z&to=${formatDate(today)}T16:59:59.000Z`
axios.get(todayInfoQuery).then(function (response) {
    // axios.get(`https://payment.decoder159.com/payment/transaction/list?status=pending&user_id=user-decoder@decoder159.com&from=${formatDate(today)}T00:00:00.000Z&to=${formatDate(today)}T23:59:59.000Z`).then(function (response) {
    const todayTotal = response.data
    const todayTotalAmount = todayTotal.reduce( ( sum , cur ) => sum + cur.amount , 0)
    const todayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("reports").insertAdjacentHTML('afterend',`<hr><h1>วันนี้ Info</h1><br>${today.toLocaleString('th-TH', todayOptions)}<br /><h3>จำนวนเบอร์ที่ขายได้: ${todayTotal.length} เบอร์<br />เป็นเงินจำนวน: ${todayTotalAmount.toLocaleString()} บาท</h3>`)
});

const todayDecoderQuery = `https://payment.decoder159.com/payment/transaction/list?status=pending&user_id=user-decoder@decoder159.com&from=${formatDate(yesterday)}T17:00:00.000Z&to=${formatDate(today)}T16:59:59.000Z`
axios.get(todayDecoderQuery).then(function (response) {
    // axios.get(`https://payment.decoder159.com/payment/transaction/list?status=pending&user_id=user-decoder@decoder159.com&from=${formatDate(today)}T00:00:00.000Z&to=${formatDate(today)}T23:59:59.000Z`).then(function (response) {
    const todayTotal = response.data
    const todayTotalAmount = todayTotal.reduce( ( sum , cur ) => sum + cur.amount , 0)
    const todayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("reports").insertAdjacentHTML('afterend',`<hr><h1>วันนี้ Decoder</h1><br>${today.toLocaleString('th-TH', todayOptions)}<br /><h3>จำนวนเบอร์ที่ขายได้: ${todayTotal.length} เบอร์<br />เป็นเงินจำนวน: ${todayTotalAmount.toLocaleString()} บาท</h3>`)
});

const decoder = `https://payment.decoder159.com/payment/transaction/list?status=pending&user_id=user-decoder@decoder159.com&from=${formatDate(yesterday2)}T17:00:00.000Z&to=${formatDate(yesterday)}T16:59:59.000Z`
console.log(decoder);
axios.get(decoder).then(function (response) {
    const yesterdayTotal = response.data
    console.log(yesterdayTotal);
    const yesterdayTotalAmount = yesterdayTotal.reduce( ( sum , cur ) => sum + cur.amount , 0)
    const yesterdayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("reports2").insertAdjacentHTML('afterend',`<hr><h1>เมื่อวาน Decoder</h1><br>${yesterday.toLocaleString('th-TH', yesterdayOptions)}<br /><h3>จำนวนเบอร์ที่ขายได้: ${yesterdayTotal.length} เบอร์<br />เป็นเงินจำนวน: ${yesterdayTotalAmount.toLocaleString()} บาท</h3>`)
});
const info = `https://payment.decoder159.com/payment/transaction/list?status=pending&user_id=user-info@decoder159.com&from=${formatDate(yesterday2)}T17:00:00.000Z&to=${formatDate(yesterday)}T16:59:59.000Z`
axios.get(info).then(function (response) {
    const yesterdayTotal = response.data
    console.log(yesterdayTotal);
    const yesterdayTotalAmount = yesterdayTotal.reduce( ( sum , cur ) => sum + cur.amount , 0)
    const yesterdayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("reports2").insertAdjacentHTML('afterend',`<hr><h1>เมื่อวาน Info</h1><br>${yesterday.toLocaleString('th-TH', yesterdayOptions)}<br /><h3>จำนวนเบอร์ที่ขายได้: ${yesterdayTotal.length} เบอร์<br />เป็นเงินจำนวน: ${yesterdayTotalAmount.toLocaleString()} บาท</h3>`)
});


//Monthly
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
 