axios.get('https://payment.decoder159.com/payment/transaction/list?status=pending&user_id=user-decoder@decoder159.com&from=2021-07-13T00%3A00%3A00.000Z&to=2021-07-13T00%3A00%3A00.000Z').then(function (response) {
    console.log(response.data)
    const total = response.data
    const totalAmount = total.reduce( ( sum , cur ) => sum + cur.amount , 0)
    document.getElementById("text").innerHTML = `<h2>จำนวนเบอร์ที่ขายได้: ${total.length} เบอร์\nเป็นเงินจำนวน: ${totalAmount.toLocaleString()} บาท</h2>`;

});
